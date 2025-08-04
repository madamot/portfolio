import { useQuery } from '@apollo/client'
import { SEARCH_PAGES } from '../../graphql/queries'

const All: React.FC = () => {
  const { data, loading } = useQuery(SEARCH_PAGES, {
    variables: {
      q: '', // Default search term can be set here
    },
    onError(error) {
      console.log(error)
    },
  })

  return (
    <div>
      <h1>All Recipes</h1>
      {loading ? <p>Loading...</p> : null}
      {data?.page?.search?.map(item => (
        <div key={item?.name}>{item?.name}</div>
      ))}
    </div>
  )
}

export default All
