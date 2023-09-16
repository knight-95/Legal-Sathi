import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, theme } from "@chakra-ui/react";
import HomeScreen from "./Pages/HomeScreen";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import RegistrationForm from "./Pages/RegistrationForm";
import Signup from "./Pages/Signup";
import Footer from "./Components/Footer";
import Leaderboard from "./Components/Leaderboard";
import MarqueeSection from "./Components/MarqueeSection";
import ProfileCards from "./Components/Cards/ProfileCards";
import ServicesCards from "./Components/Cards/ServicesCards";


export const App = () => (
  <ChakraProvider theme={theme}>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
      {/* <MarqueeSection speed={30} /> */}
      <Footer />
      {/* <ProfileCards /> */}
      {/* <ServicesCards/> */}
    </Router>
  </ChakraProvider>
);
