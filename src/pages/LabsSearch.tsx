import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  Filter,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Award,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  CheckCircle,
  Loader2,
  TestTube
} from 'lucide-react'
import { Lab, SearchParams, SearchResponse, SortOption } from '../types/lab'

const LabsSearch: React.FC = () => {
  const [searchParams, setSearchParams] = useState<SearchParams>({
    query: '',
    state: '',
    city: '',
    disciplines: [],
    page: 1,
    limit: 20,
    sortBy: 'name'
  })
  
  const [searchResponse, setSearchResponse] = useState<SearchResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  // Memoized search function
  const performSearch = useCallback(async (params: SearchParams) => {
    setIsLoading(true)
    try {
      const queryString = new URLSearchParams()
      
      if (params.query) queryString.append('query', params.query)
      if (params.state) queryString.append('state', params.state)
      if (params.city) queryString.append('city', params.city)
      if (params.disciplines && params.disciplines.length > 0) {
        params.disciplines.forEach(d => queryString.append('disciplines', d))
      }
      queryString.append('page', params.page?.toString() || '1')
      queryString.append('limit', params.limit?.toString() || '20')
      queryString.append('sortBy', params.sortBy || 'name')

      const response = await fetch(`http://localhost:3001/api/labs-search?${queryString.toString()}`)
      
      if (!response.ok) {
        throw new Error('Search failed')
      }

      const data: SearchResponse = await response.json()
      setSearchResponse(data)
    } catch (error) {
      console.error('Search error:', error)
      // Handle error state here
    } finally {
      setIsLoading(false)
    }
  }, [])

  // Debounced search function - using useMemo to prevent recreation
  const debouncedSearchFn = React.useMemo(() => {
    let timeoutId: number
    return (params: SearchParams) => {
      clearTimeout(timeoutId)
      timeoutId = window.setTimeout(() => performSearch(params), 300)
    }
  }, [performSearch])

  // Initial load - get filter options
  useEffect(() => {
    if (isInitialLoad) {
      performSearch({ ...searchParams, query: '' })
      setIsInitialLoad(false)
    }
  }, [isInitialLoad, performSearch])

  // Handle search parameter changes
  useEffect(() => {
    if (!isInitialLoad) {
      debouncedSearchFn(searchParams)
    }
  }, [searchParams, isInitialLoad, debouncedSearchFn])

  const updateSearchParams = (updates: Partial<SearchParams>) => {
    setSearchParams(prev => {
      const newParams = { 
        ...prev, 
        ...updates, 
        page: updates.page !== undefined ? updates.page : 1 
      }
      
      // If state is being updated, clear the city selection
      if (updates.state !== undefined) {
        newParams.city = ''
      }
      
      return newParams
    })
  }

  const toggleDiscipline = (discipline: string) => {
    const current = searchParams.disciplines || []
    const updated = current.includes(discipline)
      ? current.filter(d => d !== discipline)
      : [...current, discipline]
    updateSearchParams({ disciplines: updated })
  }

  const clearFilters = () => {
    updateSearchParams({
      query: '',
      state: '',
      city: '',
      disciplines: []
    })
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (searchParams.query) count++
    if (searchParams.state) count++
    if (searchParams.city) count++
    if (searchParams.disciplines && searchParams.disciplines.length > 0) count++
    return count
  }

  const renderLabCard = (lab: Lab) => (
    <motion.div
      key={lab.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 shadow-2xl hover:shadow-purple-500/20 card-hover"
    >
      <div className="flex justify-between items-start mb-6">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-3 leading-tight">
            {lab.labName}
          </h3>
          <div className="flex items-start text-gray-300 mb-3">
            <MapPin className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5 text-purple-400" />
            <span className="text-sm leading-relaxed">{lab.address}</span>
          </div>
          <div className="flex items-center text-gray-300 mb-3">
            <div className="bg-purple-500/20 px-3 py-1 rounded-full border border-purple-400/30">
              <span className="text-sm font-medium text-purple-300">{lab.city}, {lab.state}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center ml-6">
          <div className="flex items-center text-green-400 bg-green-500/20 px-4 py-2 rounded-full border border-green-400/30 backdrop-blur-sm">
            <CheckCircle className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold">NABL Certified</span>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="space-y-4">
          <div className="flex items-start">
            <Award className="h-5 w-5 mr-3 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wide">Certificate No:</span>
              <div className="font-semibold text-white mt-1">{lab["Certificate No"]}</div>
            </div>
          </div>
          <div>
            <span className="text-xs text-gray-400 uppercase tracking-wide">Discipline:</span>
            <div className="font-medium text-gray-200 mt-1 leading-relaxed">{lab.Discipline}</div>
          </div>
        </div>
        
        <div>
          <div className="flex items-start">
            <Calendar className="h-5 w-5 mr-3 text-purple-400 flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs text-gray-400 uppercase tracking-wide">Valid Until:</span>
              <div className="font-semibold text-white mt-1">{lab["Date of Expiry"]}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6">
        <div className="flex items-center justify-between">
          <div className="text-sm">
            <div className="font-semibold text-white text-base mb-3">{lab["Contact Person"]}</div>
            <div className="flex items-center mb-2">
              <Phone className="h-4 w-4 mr-2 text-purple-400" />
              <a 
                href={`tel:${lab["Contact number"]}`} 
                className="text-purple-300 hover:text-purple-100 transition-colors duration-200 font-medium"
              >
                {lab["Contact number"]}
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2 text-purple-400" />
              <a 
                href={`mailto:${lab["Email ID"]}`} 
                className="text-purple-300 hover:text-purple-100 transition-colors duration-200 font-medium"
              >
                {lab["Email ID"]}
              </a>
            </div>
          </div>
          <button className="flex items-center bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Details
          </button>
        </div>
      </div>
    </motion.div>
  )

  const renderPagination = () => {
    if (!searchResponse || searchResponse.totalPages <= 1) return null

    const { currentPage, totalPages } = searchResponse
    const pages = []
    
    // Show first page
    if (currentPage > 3) {
      pages.push(1)
      if (currentPage > 4) pages.push('...')
    }
    
    // Show pages around current
    for (let i = Math.max(1, currentPage - 2); i <= Math.min(totalPages, currentPage + 2); i++) {
      pages.push(i)
    }
    
    // Show last page
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) pages.push('...')
      pages.push(totalPages)
    }

    return (
      <div className="flex items-center justify-center space-x-3 mt-12">
        <button
          onClick={() => updateSearchParams({ page: Math.max(1, currentPage - 1) })}
          disabled={currentPage <= 1}
          className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 text-white shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && updateSearchParams({ page })}
            disabled={page === '...'}
            className={`px-4 py-3 rounded-xl font-semibold transition-all duration-300 ${
              page === currentPage
                ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                : page === '...'
                ? 'cursor-default text-gray-400'
                : 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/15 hover:border-purple-400/50 shadow-lg'
            }`}
          >
            {page}
          </button>
        ))}
        
        <button
          onClick={() => updateSearchParams({ page: Math.min(totalPages, currentPage + 1) })}
          disabled={currentPage >= totalPages}
          className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 text-white shadow-lg"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black py-20">
      <div className="container-max section-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold text-white mb-6 text-shadow"
          >
            Find <span className="text-gradient">NABL Certified Labs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300"
          >
            Search through thousands of accredited testing laboratories across India
          </motion.p>
        </div>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <div className="relative max-w-4xl mx-auto">
                <div className="flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg hover:bg-white/15 transition-all duration-300 focus-within:ring-2 focus-within:ring-purple-500 focus-within:border-purple-400">
                  <Search className="absolute left-6 text-purple-400 h-6 w-6" />
                  <input
                    type="text"
                    placeholder="Search labs by name, city, contact person..."
                    value={searchParams.query || ''}
                    onChange={(e) => updateSearchParams({ query: e.target.value })}
                    onKeyPress={(e) => e.key === 'Enter' && performSearch(searchParams)}
                    className="flex-1 pl-16 pr-4 py-6 text-lg bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  />
                  <button
                    onClick={() => performSearch(searchParams)}
                    className="mr-2 bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30 border border-purple-400/30"
                  >
                    Search
                  </button>
                </div>
              </div>
            </motion.div>

        {/* Filters and Sort */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-between gap-6 mb-12"
        >
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/15 hover:border-purple-400/50 transition-all duration-300 text-white font-medium shadow-lg"
            >
              <Filter className="h-5 w-5 mr-2 text-purple-400" />
              Filters
              {getActiveFiltersCount() > 0 && (
                <span className="ml-2 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs px-2 py-1 rounded-full border border-purple-400/30">
                  {getActiveFiltersCount()}
                </span>
              )}
              <ChevronDown className={`h-4 w-4 ml-2 transform transition-transform text-purple-400 ${showFilters ? 'rotate-180' : ''}`} />
            </button>
            
            {getActiveFiltersCount() > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center px-4 py-2 text-sm text-red-400 hover:bg-red-500/20 hover:border-red-400/50 border border-red-400/20 rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                <X className="h-4 w-4 mr-1" />
                Clear Filters
              </button>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <select
              value={searchParams.sortBy || 'name'}
              onChange={(e) => updateSearchParams({ sortBy: e.target.value as SortOption })}
              className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 text-white font-medium transition-all duration-300"
            >
              <option value="name" className="bg-gray-800 text-white">Sort by Name</option>
              <option value="date" className="bg-gray-800 text-white">Sort by Date</option>
              <option value="relevance" className="bg-gray-800 text-white">Sort by Relevance</option>
            </select>
            
            <select
              value={searchParams.limit || 20}
              onChange={(e) => updateSearchParams({ limit: Number(e.target.value) })}
              className="px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 text-white font-medium transition-all duration-300"
            >
              <option value={10} className="bg-gray-800 text-white">10 per page</option>
              <option value={20} className="bg-gray-800 text-white">20 per page</option>
              <option value={50} className="bg-gray-800 text-white">50 per page</option>
            </select>
          </div>
        </motion.div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8 mb-12 overflow-hidden"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* State Filter */}
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    <MapPin className="h-4 w-4 inline mr-2 text-purple-400" />
                    State
                    <span className="text-xs text-gray-400 ml-2">(Select to filter cities)</span>
                  </label>
                  <select
                    value={searchParams.state || ''}
                    onChange={(e) => updateSearchParams({ state: e.target.value })}
                    className="w-full px-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-400 text-white font-medium transition-all duration-300"
                  >
                    <option value="" className="bg-gray-800 text-white">All States</option>
                    {searchResponse?.filters.states.map(state => (
                      <option key={state} value={state} className="bg-gray-800 text-white">{state}</option>
                    ))}
                  </select>
                  {searchParams.state && (
                    <div className="flex items-center mt-2 text-xs text-green-400">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      <span>Cities filtered for {searchParams.state}</span>
                    </div>
                  )}
                </div>

                {/* City Filter */}
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    <MapPin className="h-4 w-4 inline mr-2 text-purple-400" />
                    City {searchParams.state && (
                      <span className="text-purple-300 text-xs ml-1">
                        (in {searchParams.state})
                      </span>
                    )}
                  </label>
                  <select
                    value={searchParams.city || ''}
                    onChange={(e) => updateSearchParams({ city: e.target.value })}
                    className={`w-full px-4 py-3 backdrop-blur-md rounded-xl focus:ring-2 focus:ring-purple-500 font-medium transition-all duration-300 ${
                      !searchParams.state && (searchResponse?.filters.cities?.length || 0) > 100
                        ? 'bg-white/5 border border-white/10 text-gray-400 cursor-not-allowed'
                        : 'bg-white/10 border border-white/20 focus:border-purple-400 text-white'
                    }`}
                    disabled={!searchParams.state && (searchResponse?.filters.cities?.length || 0) > 100}
                  >
                    <option value="" className="bg-gray-800 text-white">
                      {searchParams.state ? 'All Cities in ' + searchParams.state : 'All Cities'}
                    </option>
                    {searchResponse?.filters.cities?.map(city => (
                      <option key={city} value={city} className="bg-gray-800 text-white">{city}</option>
                    ))}
                  </select>
                      {!searchParams.state && (searchResponse?.filters.cities?.length || 0) > 100 && (
                    <p className="text-xs text-gray-400 mt-2">
                      💡 Select a state first to see cities
                    </p>
                  )}
                </div>

                {/* Disciplines */}
                <div>
                  <label className="block text-sm font-medium text-white mb-3">
                    <TestTube className="h-4 w-4 inline mr-2 text-purple-400" />
                    Disciplines
                  </label>
                  <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
                    {searchResponse?.filters.disciplines.slice(0, 10).map(discipline => (
                      <label key={discipline} className="flex items-center cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={(searchParams.disciplines || []).includes(discipline)}
                          onChange={() => toggleDiscipline(discipline)}
                          className="rounded border-white/30 bg-white/10 text-purple-600 focus:ring-purple-500 focus:ring-offset-0"
                        />
                        <span className="ml-3 text-sm text-gray-300 group-hover:text-white transition-colors">{discipline}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results Summary */}
        {searchResponse && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center justify-between mb-8 px-2"
          >
            <div className="text-gray-300 text-lg">
              Showing <span className="text-purple-400 font-semibold">{((searchResponse.currentPage - 1) * (searchParams.limit || 20)) + 1}-
              {Math.min(searchResponse.currentPage * (searchParams.limit || 20), searchResponse.totalCount)}</span> of{' '}
              <span className="font-semibold text-white">{searchResponse.totalCount}</span> labs
            </div>
            {isLoading && (
              <div className="flex items-center text-purple-400 bg-purple-500/20 px-4 py-2 rounded-xl backdrop-blur-sm border border-purple-400/20">
                <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                <span className="font-medium">Searching...</span>
              </div>
            )}
          </motion.div>
        )}

        {/* Results Grid */}
        <div className="space-y-6">
          {searchResponse?.labs.map(lab => renderLabCard(lab))}
        </div>

        {/* No Results */}
        {searchResponse && searchResponse.labs.length === 0 && !isLoading && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-8">🔬</div>
            <h3 className="text-3xl font-bold text-white mb-4">No labs found</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">Try adjusting your search criteria or filters to find more results</p>
            <button
              onClick={clearFilters}
              className="btn-accent inline-flex items-center"
            >
              <X className="h-5 w-5 mr-2" />
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* Pagination */}
        {renderPagination()}
      </div>
    </div>
  )
}

export default LabsSearch
