import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api-eu-west-2.hygraph.com/v2/cl6cr4a6r1foi01uk1k3ncc00/master",
    cache: new InMemoryCache()
})