import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import React from "react";
import {
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  Button,
  Flex,
  Select,
  Text,
  InputRightElement,
  InputGroup,
} from "@chakra-ui/react";

export default function RegistrationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();
  // const history = useHistory();
  // const navigate = useNavigate();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  function onSubmit(values) {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 3000);
    });
    // history.push("/my-new-page");
    // navigate('/home');
  }

  return (
    <>
      <Flex>
        <Text
          fontSize="3rem"
          fontWeight="bold"
          justifyContent="center"
          alignItem="center"
        >
          {" "}
          Create a New Account{" "}
        </Text>
      </Flex>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="first-name">First name</FormLabel>
            <Input
              id="first-name"
              placeholder="first name"
              {...register("first-name", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              width="50%"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="last-name">Last name</FormLabel>
            <Input
              id="last-name"
              placeholder="last name"
              {...register("last-name", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              width="50%"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="abc@gmail.com"
              {...register("email", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              width="50%"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <InputGroup size="md" width="50%">
              <Input
                id="password"
                placeholder="Enter Password"
                type={show ? "text" : "password"}
                {...register("password", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <InputRightElement marginRight="1rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="city">City</FormLabel>
            <Input
              id="city"
              placeholder="City"
              {...register("city", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              width="50%"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="state">State</FormLabel>
            <Input
              id="state"
              placeholder="State"
              {...register("state", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              width="50%"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="bar-council-Id">Bar Council ID</FormLabel>
            <Input
              id="bar-council-Id"
              placeholder="Bar Council ID"
              {...register("bar-council-Id", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 10" },
              })}
              width="40%"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="Id">ID No.</FormLabel>
            <Input
              id="Id"
              placeholder="ID No."
              {...register("Id", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              width="30%"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="year">Year</FormLabel>
            <Input
              id="year"
              placeholder="YYYY"
              {...register("year", {
                required: "This is required",
                minLength: { value: 4, message: "Minimum length should be 4" },
              })}
              width="30%"
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
        </Flex>

        <Flex>
          <FormControl isInvalid={errors.name} isRequired>
            <FormLabel htmlFor="gender">Gender</FormLabel>
            <Select placeholder="Select option" width="25%">
              <option value="option1">Male</option>
              <option value="option2">Female</option>
              <option value="option3">Other</option>
            </Select>
          </FormControl>
          <FormControl isInvalid={!!errors.file_} isRequired>
            <FormLabel>Bar Council Certificate or ID Card</FormLabel>
            <Input type="file" accept="*" width="50%" paddingTop="0.25rem" />
          </FormControl>
        </Flex>

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </form>
    </>
  );
}
