import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { GITHUB_API_KEY, GITHUB_API_URL } from "./constants.config";

export const Client = new ApolloClient({
  link: new HttpLink({
    uri: GITHUB_API_URL,
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  }),
  cache: new InMemoryCache(),
});
