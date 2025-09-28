import { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { readFileSync } from 'fs'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      query = '',
      state,
      city,
      disciplines,
      page = 1,
      limit = 20,
      sortBy = 'name'
    } = req.query

    // Parse disciplines if it's a string (from URL params)
    let disciplinesArray: string[] = []
    if (disciplines) {
      disciplinesArray = Array.isArray(disciplines) ? disciplines as string[] : [disciplines as string]
    }

    // Load lab data
    const labsPath = path.join(process.cwd(), 'public', 'nabl_labs_extracted_corrected.json')
    const labsData = JSON.parse(readFileSync(labsPath, 'utf8'))

    // Helper function to normalize discipline names
    function normalizeDiscipline(discipline: string): string[] {
      return discipline
        .replace(/\n/g, ' ')
        .split(/[,&]/)
        .map(d => d.trim())
        .filter(d => d.length > 0)
        .map(d => {
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

    // Helper function to perform fuzzy search
    function fuzzyMatch(text: string, searchQuery: string): boolean {
      const textLower = text.toLowerCase()
      const queryLower = searchQuery.toLowerCase()
      
      if (textLower.includes(queryLower)) return true
      
      const words = queryLower.split(' ')
      return words.every(word => textLower.includes(word))
    }

    // Get all unique values for filters
    const allStates = [...new Set(labsData.map((lab: any) => lab.state.replace(/\n/g, ' ').trim()))].sort()
    
    // Filter cities based on selected state (if any)
    let availableCities: string[]
    if (state) {
      // Only show cities for the selected state
      availableCities = [...new Set(
        labsData
          .filter((lab: any) => lab.state.replace(/\n/g, ' ').trim() === state)
          .map((lab: any) => lab.city.replace(/\n/g, ' ').trim())
      )].sort()
    } else {
      // Show all cities if no state is selected
      availableCities = [...new Set(labsData.map((lab: any) => lab.city.replace(/\n/g, ' ').trim()))].sort()
    }
    
    const allDisciplines = [...new Set(
      labsData.flatMap((lab: any) => normalizeDiscipline(lab.Discipline))
    )].sort()

    // Filter labs based on search criteria
    let filteredLabs = labsData.filter((lab: any) => {
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
      if (disciplinesArray.length > 0) {
        const labDisciplines = normalizeDiscipline(lab.Discipline)
        if (!disciplinesArray.some(d => labDisciplines.includes(d))) {
          return false
        }
      }

      return true
    })

    // Sort results
    filteredLabs.sort((a: any, b: any) => {
      switch (sortBy) {
        case 'date':
          try {
            const dateA = new Date(a["Date of Issue"].split('-').reverse().join('-'))
            const dateB = new Date(b["Date of Issue"].split('-').reverse().join('-'))
            return dateB.getTime() - dateA.getTime()
          } catch {
            return 0
          }
        case 'relevance':
          if (query) {
            const queryLower = (query as string).toLowerCase()
            const scoreA = a.labName.toLowerCase().includes(queryLower) ? 1 : 0
            const scoreB = b.labName.toLowerCase().includes(queryLower) ? 1 : 0
            if (scoreA !== scoreB) return scoreB - scoreA
          }
        case 'name':
        default:
          return a.labName.localeCompare(b.labName)
      }
    })

    // Pagination
    const pageNum = Math.max(1, Number(page))
    const limitNum = Math.min(100, Math.max(1, Number(limit)))
    const totalCount = filteredLabs.length
    const totalPages = Math.ceil(totalCount / limitNum)
    const startIndex = (pageNum - 1) * limitNum
    const paginatedLabs = filteredLabs.slice(startIndex, startIndex + limitNum)

    // Clean up the response data
    const cleanedLabs = paginatedLabs.map((lab: any) => {
      const { isActive, ...cleanLab } = lab // Remove isActive field
      return {
        ...cleanLab,
        state: cleanLab.state.replace(/\n/g, ' ').trim(),
        city: cleanLab.city.replace(/\n/g, ' ').trim(),
        address: cleanLab.address.replace(/\n/g, ' ').trim(),
        labName: cleanLab.labName.replace(/\n/g, ' ').trim(),
        "Contact Person": cleanLab["Contact Person"].replace(/\n/g, ' ').trim(),
        "Email ID": cleanLab["Email ID"].replace(/\n/g, ' ').trim(),
        Discipline: cleanLab.Discipline.replace(/\n/g, ' ').trim()
      }
    })

    const response = {
      labs: cleanedLabs,
      totalCount,
      currentPage: pageNum,
      totalPages,
      filters: {
        states: allStates,
        cities: availableCities,
        disciplines: allDisciplines
      }
    }

    res.status(200).json(response)

  } catch (error) {
    console.error('Labs search error:', error)
    res.status(500).json({ 
      error: 'Internal server error. Please try again later.' 
    })
  }
}