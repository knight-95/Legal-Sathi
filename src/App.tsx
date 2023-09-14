import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import HomeScreen from "./Pages/HomeScreen";

export const App = () => (
  <ChakraProvider theme={theme}>
    <HomeScreen/>
  </ChakraProvider>
);
