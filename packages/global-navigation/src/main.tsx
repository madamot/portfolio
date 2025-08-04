import React from 'react'
import ReactDOM from 'react-dom/client'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

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

ReactDOM.createRoot(document.getElementById('global-navigation')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Header />
    </ApolloProvider>
  </React.StrictMode>
)

ReactDOM.createRoot(document.getElementById('global-footer')!).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
)
