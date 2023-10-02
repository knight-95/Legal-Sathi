"use client";

import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import Loader from "../../_ui/loader/Loader";
import FlexRow from "../../_ui/flex/FlexRow";
import LawyerList from "../LawyerList";
import { useState } from "react";

type Props = {
  index?: string;
  specializations?: string;
  description?: string;
  buttonText?: string;
  bgGrid?: string;
  imgUrl?: string;
  headingFontSize?: string;
  descriptionFontSize?: string;
  onClick?: (specialization: string) => void;
};

export default function ExpertAreaCard({
  bgGrid,
  index,
  specializations,
  description,
  headingFontSize,
  descriptionFontSize,
  onClick,
  buttonText,
  imgUrl,
}: Props) {
  const [firstRender, setFirstRender] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [filteredLawyers, setFilteredLawyers] = useState([]);

  const handleConsultNowClick = async (_event: React.MouseEvent<HTMLButtonElement>) => {
    try {
      // Make an API request to fetch lawyers by specialization
      console.log("i am here  ")
      const url = `http://localhost:5000/api/v1/lawyers/${specializations}`;
      const response = await fetch(url);
      
      if (response.ok) {
        const data = await response.json();
        // Handle the data (e.g., display a list of lawyers)
        setFilteredLawyers(data.lawyers);
        console.log(data.lawyers);
      } else {
        // Handle the error
        console.error('Failed to fetch lawyers');
      }
    } catch (error) {
      console.error('API request error:', error);
    }
  };
  return (
    <>
    <Center py={6}>
      <Box
        // maxW={'270px'}
        // w={'15%'}
        mx={"2rem"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image h={"120px"} w={"full"} src={imgUrl} objectFit="cover" alt="expertAreaCard" />

        <Box p={6} _hover={{ cursor: "pointer" }}>
          <Stack spacing={0} align={"center"} mb={5}>
            <Text fontSize="1rem" fontWeight="bold">
              {specializations}
            </Text>
          </Stack>

          <Button
            w={"full"}
            bg={useColorModeValue("#4c50e0", "#4c50e0")}
            color={"white"}
            rounded={"xl"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            onClick={handleConsultNowClick}
          >
            <Text>Consult Now </Text>
          </Button>
        </Box>
      </Box>
    </Center>
    {/* {loading ? (
      <Loader size="3rem" />
    ) : (
      <FlexRow marginTop="1rem">
        <LawyerList
          firstRender={firstRender}
          filteredLawyers={filteredLawyers}
        />
      </FlexRow>
    )} */}
  </>
  );
}
