export interface Lab {
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

export interface SearchParams {
  query?: string
  state?: string
  city?: string
  disciplines?: string[]
  page?: number
  limit?: number
  sortBy?: 'name' | 'date' | 'relevance'
}

export interface SearchResponse {
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

export interface FilterOptions {
  states: string[]
  cities: string[]
  disciplines: string[]
}

export type SortOption = 'name' | 'date' | 'relevance'
