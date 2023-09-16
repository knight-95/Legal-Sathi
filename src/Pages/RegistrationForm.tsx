import React, { useState } from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Text,
  InputRightElement,
  InputGroup,
  Select,
  VStack,
  Spacer,
  Divider,
  Box,
  Center,
} from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import FlexRow from "../_ui/flex/FlexRow";
import FlexColumn from "../_ui/flex/FlexColumn";

type FormValues = {
  "first-name": string;
  "last-name": string;
  email: string;
  password: string;
  city: string;
  state: string;
  "bar-council-Id": string;
  Id: string;
  year: string;
  gender: string;
  "bar-council-file": File;
  "aadhar-card-required": File;
};

export default function RegistrationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  const onSubmit: SubmitHandler<FormValues> = (values) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
        reset();
      }, 3000);
    });
  };

  return (
    <Flex backgroundColor={'rgb(242,245,253)'} justifyContent='center' padding="4rem">
      <Box p={4} backgroundColor={'white'} width={'55%'} borderRadius="20px" >
        <Text fontSize="3rem" fontWeight="bold" align="center" marginBottom="1rem">
          Create a New Account
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FlexRow vrAlign="space-between" hrAlign="space-evenly">
            <FlexColumn width="30%" height="70vh" hrAlign="space-evenly" vrAlign="flex-start">
              <FormControl isRequired>
                <FormLabel htmlFor="first-name">First name</FormLabel>
                <Input
                  borderRadius="4px"
                  id="first-name"
                  placeholder="First Name"
                  {...register("first-name", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}

                  size="sm"
                />
                <FormErrorMessage>
                  {errors["first-name"] && errors["first-name"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="last-name">Last name</FormLabel>
                <Input
                  borderRadius="4px"
                  id="last-name"
                  placeholder="Last Name"
                  {...register("last-name", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}

                  size="sm"
                />
                <FormErrorMessage>
                  {errors["last-name"] && errors["last-name"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  borderRadius="4px"
                  id="email"
                  placeholder="abc@gmail.com"
                  {...register("email", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}

                  size="sm"
                />
                <FormErrorMessage>
                  {errors["email"] && errors["email"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="password">Password</FormLabel>
                <InputGroup size="sm">
                  <Input
                    borderRadius="4px"
                    id="password"
                    placeholder="Enter Password"
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                    size="sm"
                  />
                  <InputRightElement marginRight="1rem" height="full">
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormErrorMessage>
                  {errors["password"] && errors["password"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="city">City</FormLabel>
                <Input
                  borderRadius="4px"
                  id="city"
                  placeholder="City"
                  {...register("city", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}

                  size="sm"
                />
                <FormErrorMessage>
                  {errors["city"] && errors["city"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="state">State</FormLabel>
                <Input
                  borderRadius="4px"
                  id="state"
                  placeholder="State"
                  {...register("state", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}

                  size="sm"
                />
                <FormErrorMessage>
                  {errors["state"] && errors["state"].message}
                </FormErrorMessage>
              </FormControl>
            </FlexColumn>

            <FlexColumn width="30%" height="70vh" hrAlign="space-evenly" vrAlign="flex-start">
              <FormControl isRequired>
                <FormLabel htmlFor="bar-council-Id">Bar Council ID</FormLabel>
                <Input
                  borderRadius="4px"
                  id="bar-council-Id"
                  placeholder="Bar Council ID"
                  {...register("bar-council-Id", {
                    required: "This is required",
                    minLength: {
                      value: 10,
                      message: "Minimum length should be 10",
                    },
                  })}

                  size="sm"
                />
                <FormErrorMessage>
                  {errors["bar-council-Id"] && errors["bar-council-Id"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="Id">ID No.</FormLabel>
                <Input
                  borderRadius="4px"
                  id="Id"
                  placeholder="ID No."
                  {...register("Id", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}

                  size="sm"
                />
                <FormErrorMessage>
                  {errors["Id"] && errors["Id"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="year">Year</FormLabel>
                <Input
                  borderRadius="4px"
                  id="year"
                  placeholder="YYYY"
                  {...register("year", {
                    required: "This is required",
                    minLength: {
                      value: 4,
                      message: "Minimum length should be 4",
                    },
                  })}

                  size="sm"
                />
                <FormErrorMessage>
                  {errors["year"] && errors["year"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="gender">Gender</FormLabel>
                <Select
                  id="gender"
                  placeholder="Select option"
                  {...register("gender", {
                    required: "This is required",
                  })}

                  size="sm"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </Select>
                <FormErrorMessage>
                  {errors["gender"] && errors["gender"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired >
                <FormLabel>Bar Council Certificate</FormLabel>

                <Input borderRadius="4px" type="file" accept="*" paddingTop='0.25rem' />
                <FormErrorMessage>
                  {errors["bar-council-file"] &&
                    errors["bar-council-file"].message}
                </FormErrorMessage>
              </FormControl>
              <FormControl isRequired >
                <FormLabel>Aadhar Card</FormLabel>

                <Input borderRadius="4px" type="file" accept="*" paddingTop='0.25rem' />
                <FormErrorMessage>
                  {errors["aadhar-card-required"] &&
                    errors["aadhar-card-required"].message}
                </FormErrorMessage>
              </FormControl>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <Button
              mt="2rem"
              colorScheme="blue"
              isLoading={isSubmitting}
              type="submit"
              width="20%"
            >
              Submit
            </Button>
          </FlexRow>
        </form>
      </Box>
    </Flex>
  );
}