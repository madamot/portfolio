import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import App from './App.tsx'

import './index.css'

const cache = new InMemoryCache({
  typePolicies: {
    PageQueries: {
      merge: true,
    },
    SearchPage: {
      merge: true,
    },
  },
})

const hostname = window.location.hostname
const isStage = /^((stage)\.)adamhorne\.co.uk/.test(hostname)

const client = new ApolloClient({
  uri: `https://services.${isStage && 'stage.'}adamhorne.co.uk/graphql`,
  cache,
})

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
)
