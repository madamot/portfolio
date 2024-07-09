import { SearchPage } from '../../../generated/graphql'
import { Maybe } from 'graphql/jsutils/Maybe'

import Search from '../../organisms/Search/Search'

import './SearchDrawer.css'

interface SearchDrawerProps {
  isOpen: boolean
  setSearchDrawerState: (state: boolean) => void
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  results: Maybe<SearchPage[]>
  loading?: boolean
}

const SearchDrawer: React.FC<SearchDrawerProps> = ({
  isOpen,
  searchTerm,
  setSearchTerm,
  results,
  loading = false,
}) => {
  return (
    <div className={`search-panel ${isOpen && 'search-panel--open'}`}>
      <header className="search-panel__input-container">
        <Search
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          loading={loading}
          results={results}
        />
      </header>
    </div>
  )
}

export default SearchDrawer
