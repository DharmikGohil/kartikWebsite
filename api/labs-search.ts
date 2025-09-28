import { NextApiRequest, NextApiResponse } from 'next'
import { readFileSync } from 'fs'
import { join } from 'path'

interface Lab {
  id: number
  labName: string
  address: string
  city: string
  state: string
  "Certificate No": string
  Discipline: string
  "Date of Issue": string
  "Date of Expiry": string
  "Contact Person": string
  "Contact number": string
  "Email ID": string
}

interface SearchParams {
  query?: string
  state?: string
  city?: string
  disciplines?: string[]
  certificateStatus?: 'active' | 'expired' | 'all'
  page?: number
  limit?: number
  sortBy?: 'name' | 'date' | 'relevance'
}

interface SearchResponse {
  labs: Lab[]
  totalCount: number
  currentPage: number
  totalPages: number
  filters: {
    states: string[]
    cities: string[]
    disciplines: string[]
  }
}

// Helper function to normalize discipline names
function normalizeDiscipline(discipline: string): string[] {
  return discipline
    .replace(/\n/g, ' ')
    .split(/[,&]/)
    .map(d => d.trim())
    .filter(d => d.length > 0)
    .map(d => {
      // Clean up common variations
      if (d.toLowerCase().includes('chemical')) return 'Chemical'
      if (d.toLowerCase().includes('mechanical')) return 'Mechanical'
      if (d.toLowerCase().includes('biological')) return 'Biological'
      if (d.toLowerCase().includes('electrical')) return 'Electrical'
      if (d.toLowerCase().includes('electronics')) return 'Electronics'
      if (d.toLowerCase().includes('non-destructive') || d.toLowerCase().includes('ndt')) return 'Non-Destructive Testing'
      if (d.toLowerCase().includes('forensic')) return 'Forensic'
      if (d.toLowerCase().includes('photometry')) return 'Photometry'
      if (d.toLowerCase().includes('radiolog')) return 'Radiology'
      if (d.toLowerCase().includes('software') || d.toLowerCase().includes('it')) return 'Software & IT'
      return d
    })
}

// Helper function to check if certificate is active
function isCertificateActive(expiryDate: string): boolean {
  try {
    const [day, month, year] = expiryDate.split('-').map(Number)
    const expiry = new Date(year, month - 1, day)
    return expiry > new Date()
  } catch {
    return false
  }
}

// Helper function to perform fuzzy search
function fuzzyMatch(text: string, query: string): boolean {
  const textLower = text.toLowerCase()
  const queryLower = query.toLowerCase()
  
  // Direct substring match
  if (textLower.includes(queryLower)) return true
  
  // Word boundary matches
  const words = queryLower.split(' ')
  return words.every(word => textLower.includes(word))
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SearchResponse | { error: string }>
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Parse query parameters
    const {
      query = '',
      state,
      city,
      disciplines,
      certificateStatus = 'all',
      page = 1,
      limit = 20,
      sortBy = 'name'
    } = req.query as Partial<SearchParams> & { [key: string]: string | string[] }

    // Load lab data
    const labsPath = join(process.cwd(), 'public', 'nabl_labs_extracted_corrected.json')
    const labsData: Lab[] = JSON.parse(readFileSync(labsPath, 'utf8'))

    // Get all unique values for filters
    const allStates = [...new Set(labsData.map(lab => lab.state.replace(/\n/g, ' ').trim()))].sort()
    const allCities = [...new Set(labsData.map(lab => lab.city.replace(/\n/g, ' ').trim()))].sort()
    const allDisciplines = [...new Set(
      labsData.flatMap(lab => normalizeDiscipline(lab.Discipline))
    )].sort()

    // Filter labs based on search criteria
    let filteredLabs = labsData.filter(lab => {
      // Text search across multiple fields
      if (query) {
        const searchFields = [
          lab.labName,
          lab.address,
          lab.city,
          lab.state,
          lab["Contact Person"],
          lab["Email ID"]
        ].join(' ')
        
        if (!fuzzyMatch(searchFields, query as string)) {
          return false
        }
      }

      // State filter
      if (state && lab.state.replace(/\n/g, ' ').trim() !== state) {
        return false
      }

      // City filter
      if (city && lab.city.replace(/\n/g, ' ').trim() !== city) {
        return false
      }

      // Discipline filter
      if (disciplines && Array.isArray(disciplines) && disciplines.length > 0) {
        const labDisciplines = normalizeDiscipline(lab.Discipline)
        if (!disciplines.some(d => labDisciplines.includes(d))) {
          return false
        }
      }

      // Certificate status filter
      if (certificateStatus === 'active' && !isCertificateActive(lab["Date of Expiry"])) {
        return false
      }
      if (certificateStatus === 'expired' && isCertificateActive(lab["Date of Expiry"])) {
        return false
      }

      return true
    })

    // Sort results
    filteredLabs.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          // Sort by issue date (newest first)
          try {
            const dateA = new Date(a["Date of Issue"].split('-').reverse().join('-'))
            const dateB = new Date(b["Date of Issue"].split('-').reverse().join('-'))
            return dateB.getTime() - dateA.getTime()
          } catch {
            return 0
          }
        case 'relevance':
          // If there's a query, sort by relevance (exact matches first)
          if (query) {
            const queryLower = (query as string).toLowerCase()
            const scoreA = a.labName.toLowerCase().includes(queryLower) ? 1 : 0
            const scoreB = b.labName.toLowerCase().includes(queryLower) ? 1 : 0
            if (scoreA !== scoreB) return scoreB - scoreA
          }
          // Fall through to name sort
        case 'name':
        default:
          return a.labName.localeCompare(b.labName)
      }
    })

    // Pagination
    const pageNum = Math.max(1, Number(page))
    const limitNum = Math.min(100, Math.max(1, Number(limit))) // Max 100 per page
    const totalCount = filteredLabs.length
    const totalPages = Math.ceil(totalCount / limitNum)
    const startIndex = (pageNum - 1) * limitNum
    const paginatedLabs = filteredLabs.slice(startIndex, startIndex + limitNum)

    // Clean up the response data
    const cleanedLabs = paginatedLabs.map(lab => ({
      ...lab,
      state: lab.state.replace(/\n/g, ' ').trim(),
      city: lab.city.replace(/\n/g, ' ').trim(),
      address: lab.address.replace(/\n/g, ' ').trim(),
      labName: lab.labName.replace(/\n/g, ' ').trim(),
      "Contact Person": lab["Contact Person"].replace(/\n/g, ' ').trim(),
      "Email ID": lab["Email ID"].replace(/\n/g, ' ').trim(),
      Discipline: lab.Discipline.replace(/\n/g, ' ').trim(),
      isActive: isCertificateActive(lab["Date of Expiry"])
    }))

    const response: SearchResponse = {
      labs: cleanedLabs,
      totalCount,
      currentPage: pageNum,
      totalPages,
      filters: {
        states: allStates,
        cities: allCities,
        disciplines: allDisciplines
      }
    }

    // Set cache headers for better performance
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=86400')
    res.status(200).json(response)

  } catch (error) {
    console.error('Labs search error:', error)
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    })
  }
}
