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
  TagCloseButton,
} from "@chakra-ui/react";
import TagNative from "../../_ui/tag/TagNative";
import FlexColumn from "../../_ui/flex/FlexColumn";
import { style } from "../../styles/StyledConstants";

type Props = {
  index?: string;
  title: string;
  description: string;
  onClick?: any;
  buttonText?: string;
  bgGrid?: string;
  height?: string;
  headingFontSize?: string;
  descriptionFontSize?: string;
  tags?: any;
};

export default function ServicesCards({
  bgGrid,
  index,
  title,
  description,
  tags,
  headingFontSize,
  descriptionFontSize,
  onClick,
  buttonText,
  height,
}: Props) {
  return (
    <Center py={6}>
      <Box
        maxW={"20rem"}
        w={"full"}
        height="40rem"
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        overflow={"hidden"}
        marginRight="0.5rem"
        marginLeft="0.5rem"
        transition={"transform 0.2s ease-in-out"}
        _hover={{
          transform: "scale(1.02)",
          boxShadow: "xl",
          cursor: "pointer",
        }}
        display="flex"
        flexDirection="column" // Set the card's content as a column
        justifyContent="space-between" // Align items to the start and end
      >
        <Stack>
          <Text
            color={"green.500"}
            textTransform={"uppercase"}
            fontWeight={800}
            fontSize={"lg"}
            letterSpacing={1.1}
          >
            {index}
          </Text>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
            marginTop="1rem"
            height="5rem"
          >
            {title}
          </Heading>
          <Box height="10rem">
            <Text color={"gray.500"} marginTop="1rem">
              {description}
            </Text>
          </Box>
        </Stack>

        <FlexColumn hrAlign="flex-start" vrAlign="space-between">
          {tags.map((tag: any, index: any) => (
            <span key={index}>
              <TagNative
                marginTop={style.margin.xxs}
                icon={{
                  align: "left",
                }}
                size="md"
                value={tag}
                lineHeight="1.5rem"
              />
            </span>
          ))}
        </FlexColumn>
      </Box>
    </Center>
  );
}
