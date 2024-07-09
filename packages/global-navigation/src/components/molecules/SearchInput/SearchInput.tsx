import './SearchInput.css'

interface SearchInputProps {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  loading?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
  loading = false,
}) => {
  return (
    <div className="search-input">
      <input
        type="text"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        placeholder="Start searching for..."
        className="search-input_text"
      />
      {loading && <p>Loading</p>}
      {searchTerm && (
        <button onClick={() => setSearchTerm('')} className="search-input_clear">
          &times;
        </button>
      )}
    </div>
  )
}

export default SearchInput
