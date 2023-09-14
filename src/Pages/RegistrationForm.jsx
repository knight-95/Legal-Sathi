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
import { useForm } from "react-hook-form";
import FlexRow from "../_ui/flex/FlexRow";
import FlexColumn from "../_ui/flex/FlexColumn";

export default function RegistrationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
  }

  return (
    <VStack spacing={4} align="stretch" p={4}>
      <Text fontSize="3rem" fontWeight="bold" color="teal" align="center">
        Create a New Account
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FlexRow vrAlign="space-between" hrAlign="space-evenly">
          <FlexColumn width="30%" height="70vh" hrAlign="space-evenly">
            <FormControl isRequired>
              <FormLabel htmlFor="first-name">First name</FormLabel>
              <Input
                id="first-name"
                placeholder="First name"
                {...register("first-name", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                color="teal"
                size="sm"
              />
              <FormErrorMessage>
                {errors["first-name"] && errors["first-name"].message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="last-name">Last name</FormLabel>
              <Input
                id="last-name"
                placeholder="Last name"
                {...register("last-name", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                color="teal"
                size="sm"
              />
              <FormErrorMessage>
                {errors["last-name"] && errors["last-name"].message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="abc@gmail.com"
                {...register("email", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                color="teal"
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
                <InputRightElement marginRight="1rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {showPassword ? "Hide" : "Show"}
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
                id="city"
                placeholder="City"
                {...register("city", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                color="teal"
                size="sm"
              />
              <FormErrorMessage>
                {errors["city"] && errors["city"].message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="state">State</FormLabel>
              <Input
                id="state"
                placeholder="State"
                {...register("state", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                color="teal"
                size="sm"
              />
              <FormErrorMessage>
                {errors["state"] && errors["state"].message}
              </FormErrorMessage>
            </FormControl>
          </FlexColumn>

          <FlexColumn width="30%" height="70vh" hrAlign="space-evenly">
            <FormControl isRequired>
              <FormLabel htmlFor="bar-council-Id">Bar Council ID</FormLabel>
              <Input
                id="bar-council-Id"
                placeholder="Bar Council ID"
                {...register("bar-council-Id", {
                  required: "This is required",
                  minLength: {
                    value: 10,
                    message: "Minimum length should be 10",
                  },
                })}
                color="teal"
                size="sm"
              />
              <FormErrorMessage>
                {errors["bar-council-Id"] && errors["bar-council-Id"].message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="Id">ID No.</FormLabel>
              <Input
                id="Id"
                placeholder="ID No."
                {...register("Id", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                color="teal"
                size="sm"
              />
              <FormErrorMessage>
                {errors["Id"] && errors["Id"].message}
              </FormErrorMessage>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="year">Year</FormLabel>
              <Input
                id="year"
                placeholder="YYYY"
                {...register("year", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
                color="teal"
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
                color="teal"
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
            <FormControl isRequired>
              <FormLabel>Bar Council Certificate or ID Card</FormLabel>
              <Input type="file" accept="*" />
              <FormErrorMessage>
                {errors["bar-council-file"] &&
                  errors["bar-council-file"].message}
              </FormErrorMessage>
            </FormControl>
          </FlexColumn>
        </FlexRow>
        <FlexRow>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
            width="10%"
          >
            Submit
          </Button>
        </FlexRow>
      </form>
    </VStack>
  );
}