import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const createHttpLink = (headers: any | null = null) => {
  const httpLink = new HttpLink({
    uri: "https://rickandmortyapi.com/graphql",
    headers,
  });
  return httpLink;
};

export const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: createHttpLink(),
  cache: new InMemoryCache({}),
  credentials: "include",
});
