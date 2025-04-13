import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { AuthOptions, createAuthLink } from 'aws-appsync-auth-link'

import Header from './components/organisms/Header'
import Footer from './components/organisms/Footer'

import appSyncConfig from './aws-exports'

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

const region = 'eu-west-1'

const auth: AuthOptions = {
  type: 'API_KEY',
  apiKey: appSyncConfig.aws_appsync_apiKey,
  // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
  // credentials: async () => credentials, // Required when you use IAM-based auth.
}
const link = ApolloLink.from([
  createAuthLink({ url: appSyncConfig.aws_appsync_graphqlEndpoint, region, auth }),
  createHttpLink({ uri: appSyncConfig.aws_appsync_graphqlEndpoint }),
])
const client = new ApolloClient({
  link,
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
