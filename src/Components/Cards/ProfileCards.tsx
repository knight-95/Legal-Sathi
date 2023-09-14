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
    <Card maxW="md" marginLeft="1.5rem">
      <FlexRow>
        <FlexColumn>
          <CardHeader data-type="CardHeader">
            <Flex
              data-type="Flex"
              flex="1"
              gap="4"
              alignItems="center"
              flexWrap="wrap"
            >
              <Avatar
                data-type="Avatar"
                name="Segun Adebayo"
                src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficon%2Favatar_147142&psig=AOvVaw1tcurMCPH2PWoYhjVzNfqJ&ust=1694806465367000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCNiQ2p7sqoEDFQAAAAAdAAAAABAD"
              ></Avatar>
              <Box data-type="Box">
                <Heading data-type="Heading" size="sm">
                  Arya Rajput
                </Heading>
                <Text color="green">Available</Text>
              </Box>
            </Flex>
          </CardHeader>
          <Box padding="1.25rem">
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
        </FlexColumn>
        <FlexColumn></FlexColumn>
      </FlexRow>

      <Box justifyContent="space-between" padding="1.25rem">
        <Text fontWeight="500" fontSize="1.2rem" marginBottom="2px">
          Practice areas and Skills:
        </Text>
        <Tag marginRight="0.2rem">Civil Matters</Tag>
        <Tag marginRight="0.2rem">Property & Real State</Tag>
        <Tag marginRight="0.2rem">Cyber Crime</Tag>
      </Box>
      <Center>
        <Divider orientation="horizontal" width="80%" />{" "}
      </Center>

      <Flex
        marginTop="1rem"
        marginRight="1rem"
        justifyContent="flex-end"
        paddingBottom="2rem"
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
    </Card>
  );
}
