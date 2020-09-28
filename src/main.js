import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { setContext } from "apollo-link-context";
import { createHttpLink } from "apollo-link-http";
import { createApp } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import App from "./App.vue";

// HELP: figure out a way to make this async which you can do in react
const authLink = setContext((_, { headers }) => {
  //   const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      //   authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const httpLink = createHttpLink({
  uri: `https://graphql.anilist.co/`,
});

const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

createApp(App)
  .provide(DefaultApolloClient, apolloClient)
  .mount("#app");
