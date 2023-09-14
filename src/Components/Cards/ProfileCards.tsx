"use client";
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Flex,
  Button,
  CardFooter,
  CardBody,
  Card,
  CardHeader,
  Tag,
  Divider,
} from "@chakra-ui/react";
import { FcVideoCall } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { GoBriefcase } from "react-icons/go";
import { GrLocation } from "react-icons/gr";
import FlexColumn from "../../_ui/flex/FlexColumn";
import FlexRow from "../../_ui/flex/FlexRow";
type Props = {
  index?: string;
  title?: string;
  description?: string;
  onClick?: any;
  buttonText?: string;
  bgGrid?: string;
  height?: string;
  headingFontSize?: string;
  descriptionFontSize?: string;
};

export default function ProfileCards({
  bgGrid,
  index,
  title,
  description,
  headingFontSize,
  descriptionFontSize,
  onClick,
  buttonText,
  height,
}: Props) {
  return (
    <Box
      marginLeft="1.5rem"
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={5}
      width="25rem"
    >
      <FlexRow>
        <Box width="15rem">
          <Box>
            <Heading size="sm">Arya Rajput</Heading>
            <Text color="green">Available</Text>
          </Box>

          <Box marginTop="2rem">
            <Flex alignItems="center">
              <GrLocation />
              <Text marginLeft="0.5rem">Indore, Madhya Pradesh</Text>
            </Flex>
            <Flex alignItems="center">
              <GoBriefcase />
              <Text marginLeft="0.5rem">7 Years of Experience</Text>
            </Flex>

            <Flex alignItems="center">
              <AiOutlineMessage />
              <Text marginLeft="0.5rem">English, Hindi</Text>
            </Flex>
          </Box>
        </Box>
        <FlexColumn width="10rem">Abc</FlexColumn>
      </FlexRow>

      <Box justifyContent="space-between" marginTop="2rem">
        <Text fontWeight="500" fontSize="1.2rem" marginBottom="2px">
          Practice areas and Skills:
        </Text>
        <Tag margin="0.2rem">Civil Matters</Tag>
        <Tag margin="0.2rem">Property & Real State</Tag>
        <Tag margin="0.2rem">Cyber Crime</Tag>
      </Box>
      <Center marginTop="0.5rem">
        <Divider orientation="horizontal" width="80%" />{" "}
      </Center>

      <Flex
        marginTop="1rem"
        marginRight="1rem"
        justifyContent="flex-end"
        paddingBottom="0.2rem"
      >
        <Stack spacing={3} direction="row">
          <Button colorScheme="blue" variant="outline">
            <FiPhoneCall />
            <Text marginLeft="0.5rem">Call Now</Text>
          </Button>
          <Button colorScheme="green" variant="outline">
            <FcVideoCall />
            <Text marginLeft="0.5rem">Video Call</Text>
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
