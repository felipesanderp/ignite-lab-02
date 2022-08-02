import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl6c6zgv80p6v01ud7pyx0x82/master',
  cache: new InMemoryCache()
})