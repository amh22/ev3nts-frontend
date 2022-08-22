import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/amh22/ev3nts',
  cache: new InMemoryCache(),
})

export default client
