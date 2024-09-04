import { useEffect, useRef } from 'react'

import './SearchInput.css'

interface SearchInputProps {
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
  isOpen: boolean
  loading?: boolean
}

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
  isOpen,
  loading = false,
}) => {
  const inputElement = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen) {
      inputElement.current?.focus()
    }
  }, [isOpen])

  return (
    <div className="search-input">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <span>🔍</span>
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search adamhorne.co.uk"
          className="search-input_text"
          ref={inputElement}
        />
      </div>
      {searchTerm && (
        <button onClick={() => setSearchTerm('')} className="search-input_clear">
          ❌
        </button>
      )}
    </div>
  )
}

export default SearchInput
