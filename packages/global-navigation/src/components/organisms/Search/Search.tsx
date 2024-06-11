import SearchInput from '../../molecules/SearchInput'
import SearchResults from '../../molecules/SearchResults'

import { SearchPage } from '../../../generated/graphql'
import { Maybe } from 'graphql/jsutils/Maybe'

import './Search.css'

interface SearchProps {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  results: Maybe<SearchPage[]>
  loading?: boolean
}

const Search: React.FC<SearchProps> = ({ searchTerm, setSearchTerm, loading = false, results }) => {
  return (
    <div className="search">
      <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} loading={loading} />
      <SearchResults results={results} />
    </div>
  )
}

export default Search