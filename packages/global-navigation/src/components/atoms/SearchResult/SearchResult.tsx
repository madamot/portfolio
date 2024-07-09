import { SearchPage } from '../../../generated/graphql'

import './SearchResult.css'

interface SearchResultProps {
  page: SearchPage
}

const SearchResult: React.FC<SearchResultProps> = ({ page }) => {
  const pathname = new URL(page.url).pathname
  const urlParts = pathname.substring(1, pathname.length - 1).split('/')

  urlParts.pop()

  console.log('urlParts', urlParts)

  return (
    <a href={page?.url} className="search-result">
      <div className="search-result_container">
        <div>
          {page.url.includes('recipes') && <>&#127860;</>}
          {page?.name}
        </div>
        <div className="search-result_location">
          <ol>
            {urlParts.map(part => (
              <li>{part}</li>
            ))}
          </ol>
        </div>
      </div>
    </a>
  )
}

export default SearchResult
