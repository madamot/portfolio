import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthOptions, createAuthLink } from 'aws-appsync-auth-link'
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'

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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
)
