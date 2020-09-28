<template>
  <div v-if="loading">loading...</div>
  <code v-else>{{ result }}</code>
</template>

<script>
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

export default {
  name: "App",
  setup() {
    const { result, loading } = useQuery(gql`
      query AllPages {
        Page {
          users {
            name
            about
          }
        }
      }
    `);

    return { result, loading };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
