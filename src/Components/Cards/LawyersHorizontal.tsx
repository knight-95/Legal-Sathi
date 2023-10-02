import {
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import FlexColumn from "../../_ui/flex/FlexColumn";
import FlexRow from "../../_ui/flex/FlexRow";
import { FcVideoCall } from "react-icons/fc";
import { FiPhoneCall } from "react-icons/fi";
import { AiFillStar, AiOutlineMessage } from "react-icons/ai";
import { GoBriefcase } from "react-icons/go";
import { GrLocation } from "react-icons/gr";

const LawyersHorizontal = () => {
  return (
    <>
      <Box boxShadow="2xl" rounded="lg" p={5} m={5}>
        <FlexRow>
          <FlexColumn width="60%">
            <FlexRow hrAlign="flex-start">
              <Image
                src="https://media.gettyimages.com/id/480820237/photo/portrait-of-young-female-lawyer-standing-with-arms-crossed-isolated-over-black-background.jpg?s=612x612&w=gi&k=20&c=zvM3x4gUQA9NdL8VuO6Gih3ypdbgT7TIovq6BA-QYcE="
                height="6rem"
                width="6rem"
              />
              <Box>
                <Text>Name</Text>
                <Text>Available</Text>
                {/* {categories.map((category, index) => (
                  <Tag margin="0.2rem" key={index}>
                    {category}
                  </Tag>
                ))} */}
                <Tag margin="0.2rem">Cyber Crime</Tag>
                <Tag margin="0.2rem">Criminal</Tag>
              </Box>
            </FlexRow>
          </FlexColumn>
          <FlexColumn width="40%">
            <Box marginTop="2rem">
              <Flex alignItems="center">
                <GrLocation />
                <Text marginLeft="0.5rem">location</Text>
              </Flex>
              <Flex alignItems="center">
                <GoBriefcase />
                <Text marginLeft="0.5rem">experience Years of Experience</Text>
              </Flex>

              <Flex alignItems="center">
                <AiOutlineMessage />

                <Text marginLeft="0.5rem">languages.join(", ")</Text>
              </Flex>
            </Box>
          </FlexColumn>
        </FlexRow>
        <Divider width="80%" />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero
          voluptatibus fugit suscipit quibusdam incidunt quis modi saepe,
          delectus fugiat dolorem velit placeat impedit quod explicabo deserunt
          nisi facere ad repudiandae voluptas. Reprehenderit labore quibusdam
          earum! Eligendi ad minus dicta at reiciendis debitis in aperiam,
          necessitatibus eius ea? Voluptate, mollitia!
        </Text>
        <FlexRow>
          <FlexRow width="50%" hrAlign="flex-start">
            <Text>20,000/-</Text>
            <Text>rating</Text>
          </FlexRow>
          <FlexRow width="50%" hrAlign="flex-end">
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
          </FlexRow>
        </FlexRow>
      </Box>
    </>
  );
};

export default LawyersHorizontal;
