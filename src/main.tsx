import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App.tsx";

import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "./graphql/lib/apolloClient.ts";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
