"use client";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useState } from "react";
import Select from "react-select";
import { FormErrorMessage, Select as GSelect, Text } from "@chakra-ui/react";

import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  //   Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Stack,
  Checkbox,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import FlexRow from "../_ui/flex/FlexRow";
import FlexColumn from "../_ui/flex/FlexColumn";
import { style } from "../styles/StyledConstants";
import { useForm } from "react-hook-form";

const Form1 = () => {
  const [show, setShow] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const {
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    register,
  } = useForm();
  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        mb="2%"
        marginBottom={style.margin.md}
      >
        Service Provider Registration
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="Last name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="email" fontWeight={"normal"}>
          Email address
        </FormLabel>
        <Input id="email" type="email" />
        <FormHelperText>We&apos;ll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="password" fontWeight={"normal"} mt="2%">
          Password
        </FormLabel>
        <InputGroup>
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password")}
          />
          <InputRightElement h={"full"}>
            <Button
              variant={"ghost"}
              onClick={() => setShowPassword((showPassword) => !showPassword)}
            >
              {showPassword ? <ViewIcon /> : <ViewOffIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  return (
    <>
      <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
        Provider Details
      </Heading>
      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          City
        </FormLabel>
        <Input
          type="text"
          name="city"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          mt="2%"
        >
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  const options = [
    { value: "Criminal", label: "Criminal" },
    { value: "Family Issues", label: "Family Issues" },
    { value: "Property Disputes", label: "Property Disputes" },
    { value: "Corporate", label: "Corporate" },
    { value: "Child Custody", label: "Child Custody" },
    { value: "Blackmailing", label: "Blackmailing" },
  ];
  const [selectedOptions, setSelectedOptions] = useState<
    { value: string; label: string }[]
  >([]);

  const handleChange = (selectedItems: any) => {
    setSelectedOptions(selectedItems);
  };

  return (
    <>
      <Heading
        w="100%"
        textAlign={"center"}
        fontWeight="normal"
        marginBottom={style.margin.md}
      >
        Provider Details
      </Heading>
      <FlexRow hrAlign="space-between">
        <FlexColumn width="40%">
          <FormControl>
            <FormLabel
              htmlFor="country"
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: "gray.50",
              }}
            >
              Service Category
            </FormLabel>
            <GSelect
              id="country"
              name="country"
              autoComplete="country"
              placeholder="Select option"
              focusBorderColor="brand.400"
              shadow="sm"
              size="sm"
              w="full"
              rounded="md"
            >
              <option>Lawyer</option>
              <option>Arbitrators/Mediators</option>
              <option>Document Writers</option>
            </GSelect>
          </FormControl>
        </FlexColumn>
        <FlexColumn width="40%">
          <FormControl isRequired>
            <FormLabel htmlFor="first-name" fontWeight={"normal"}>
              Experience
            </FormLabel>
            <Input id="first-name" placeholder="Experience in years" />
          </FormControl>
        </FlexColumn>
      </FlexRow>

      <FormControl>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
          marginTop="1rem"
        >
          Specialization
        </FormLabel>

        <Select
          options={options}
          isMulti
          value={selectedOptions}
          onChange={handleChange}
        />
        <Text
          fontSize={style.font.p}
          marginBottom={style.margin.md}
          marginTop={style.margin.xxxs}
        >
          Selected Options:
          {selectedOptions.map((option) => option.label).join(", ")}
        </Text>
      </FormControl>

      <FormControl id="email" mt={1}>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: "gray.50",
          }}
        >
          About
        </FormLabel>
        <Textarea
          placeholder="Brief description for your profile. URLs are hyperlinked."
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
          marginBottom={style.margin.lg}
        />
      </FormControl>

      <FlexRow hrAlign="space-between">
        <FlexColumn width="40%" hrAlign="flex-start">
          <FormControl isRequired>
            <FormLabel>Photo</FormLabel>
            <Input type="file" accept="*" />
          </FormControl>
        </FlexColumn>
        <FlexColumn width="40%" hrAlign="flex-start">
          <FormControl isRequired>
            <FormLabel htmlFor="bar-council-id">
              Bar Council Registration ID/ Other ID
            </FormLabel>
            <Input id="first-name" placeholder="Experience in years" />
          </FormControl>
        </FlexColumn>
      </FlexRow>

      <br />
      <FlexRow hrAlign="space-between" vrAlign="center">
        <FlexColumn width="40%">
          <FormControl isRequired>
            <FormLabel>Bar Council Certificate/ Other Document</FormLabel>
            <Input type="file" accept="*" />
          </FormControl>
        </FlexColumn>
        <FlexColumn width="40%">
          <FormControl isRequired>
            <FormLabel>Aadhar Card</FormLabel>
            <Input type="file" accept="*" />
          </FormControl>
        </FlexColumn>
      </FlexRow>
    </>
  );
};

export default function MultiStepRegistration() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated
        ></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                // variant="solid"
                w="7rem"
                mr="5%"
                _hover={{
                  bg: "#171a53",
                }}
                background={
                  "linear-gradient(100.07deg, #2A85FF 0.39%, #2448C7 73.45%)"
                }
              >
                <Text color="white">Back</Text>
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline"
              >
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
