import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import HomeScreen from "./Pages/HomeScreen";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import RegistrationForm from "./Components/RegistrationForm";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  </ChakraProvider>
);