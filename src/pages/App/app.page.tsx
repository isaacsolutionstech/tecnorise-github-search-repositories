import React from "react";
import { ApolloProvider } from "@apollo/client";
import { Provider as ReduxProvider } from "react-redux";


import { Client } from "@/config";
import { reduxStore } from "@/redux";
import { GlobalStyle } from "@/styles";

const App: React.FC<React.PropsWithChildren> = ({ children }) => (
  <ReduxProvider store={reduxStore}>
    <GlobalStyle />
    <ApolloProvider client={Client}>{children}</ApolloProvider>
  </ReduxProvider>
);

export default App;
