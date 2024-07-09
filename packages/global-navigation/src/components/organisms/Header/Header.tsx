import { useState } from 'react'
import { useQuery } from '@apollo/client'

import Logo from '../../atoms/Logo'
import SearchDrawer from '../../molecules/SearchDrawer'

import { SEARCH_PAGES } from '../../../graphql/queries'

import './Header.css'

const Header: React.FC = () => {
  const [searchDrawerState, setSearchDrawerState] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')

  const { data, loading } = useQuery(SEARCH_PAGES, {
    variables: {
      q: searchTerm.toLowerCase(),
    },
    skip: searchTerm.length < 3,
    onError(error) {
      console.log(error)
    },
  })

  const searchDrawerHandler = () => {
    setSearchDrawerState(prevState => !prevState)
  }

  return (
    <>
      <div className="global-header">
        <header className="global-header-container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Logo />
            <button onClick={searchDrawerHandler}>&#128269;</button>
          </div>
        </header>
      </div>
      <SearchDrawer
        isOpen={searchDrawerState}
        setSearchDrawerState={setSearchDrawerState}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        results={data?.page?.search}
        loading={loading}
      />
    </>
  )
}

export default Header
