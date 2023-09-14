import Navbar from "../Components/Navbar";
import { Box } from "@chakra-ui/react";
import CaptionCarousel from "../Components/Carousel";
import RegistrationForm from "../Components/RegistrationForm";
import ourServices from "../data/ourServices";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import FlexRow from "../_ui/flex/FlexRow";
import FlexColumn from "../_ui/flex/FlexColumn";
import Footer from "../Components/Footer";
import ServicesCards from "../Components/Cards/ServicesCards";
import ProfileCards from "../Components/Cards/ProfileCards";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <CaptionCarousel />

      <FlexRow hrAlign="space-between" paddingLeft="1.5rem">
        {ourServices.map((val, index) => (
          <ServicesCards
            key={index}
            // imgsrc={val.imgsrc}
            index={val._id}
            title={val.title}
            description={val.description}
          />
        ))}
      </FlexRow>
          <ProfileCards/>
      {/* <Login />
      <Signup />
      <RegistrationForm /> */}
      <Footer />
    </>
  );
};

export default HomeScreen;
