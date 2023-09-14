import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";
import CaptionCarousel from "../Components/Carousel";
import RegistrationForm from "../Components/RegistrationForm";
import Cards from "../Components/Cards";
import ourServices from "../data/ourServices";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import FlexRow from "../_ui/flex/FlexRow";
import FlexColumn from "../_ui/flex/FlexColumn";
import Footer from "../Components/Footer";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <CaptionCarousel />

      <FlexRow hrAlign="space-between" paddingLeft="1.5rem">
        {ourServices.map((val, index) => (
          <Cards
            key={index}
            // imgsrc={val.imgsrc}
            index={val._id}
            title={val.title}
            description={val.description}
          />
        ))}
      </FlexRow>

      <Login />
      <Signup />
      <RegistrationForm />
      <Footer/>
    </>
  );
};

export default HomeScreen;
