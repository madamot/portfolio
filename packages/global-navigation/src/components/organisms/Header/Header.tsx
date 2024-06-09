import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useState } from 'react'
import { useQuery } from '@apollo/client'

import Logo from '../../atoms/Logo'

import { SEARCH_PAGES } from '../../../graphql/queries'

import './Header.css'

const Header: React.FC = () => {
  const [pageSearchTerm, setPageSearchTerm] = useState<string>('')

  const { data, loading } = useQuery(SEARCH_PAGES, {
    variables: {
      q: pageSearchTerm.toLowerCase(),
    },
    skip: pageSearchTerm.length < 3,
    onError(error) {
      console.log(error)
    },
  })

  console.log('data', data)

  return (
    <div className="global-header">
      <header className="global-header-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Logo />
          <div
            style={{
              display: 'flex',
            }}
          >
            {loading && <p>Loading</p>}
            <input type="text" onChange={e => setPageSearchTerm(e.target.value)} />
          </div>
        </div>

        {data && (
          <div
            style={{
              width: '100%',
              color: 'black',
            }}
          >
            {data?.page?.search.map(
              (page: {
                url: string | undefined
                name:
                  | string
                  | number
                  | boolean
                  | ReactElement<unknown, string | JSXElementConstructor<unknown>>
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined
              }) => {
                return (
                  <a href={page?.url}>
                    <div
                      style={{
                        backgroundColor: 'white',

                        padding: '1em',
                        margin: '1em',
                      }}
                    >
                      {page?.name}
                    </div>
                  </a>
                )
              }
            )}
          </div>
        )}
      </header>
    </div>
  )
}

export default Header
