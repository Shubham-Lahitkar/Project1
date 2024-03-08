/* eslint-disable */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Stack,
} from "@chakra-ui/react";
import DefaultAuth from "layouts/auth/Default";
import illustration from "assets/img/auth/auth.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import axios from "axios";
import Cookies from "js-cookie";
// import {  Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";

function SignIn() {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorAlert, setErrorAlert] = useState(null);
  const history = useHistory();
  const URL = process.env.REACT_APP_API_URL;

  const handleClick = () => setShow(!show);

  const handleSignIn = () => {
    // console.log(email + "//" + password);

    // Replace "your-api-endpoint" with your actual API endpoint
    axios
      .post(`${URL}/admin/login`, {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log("Response:", response.data.token);

        const accessToken = response.data.token; // Adjust this based on your actual response structure

        // Set the access token in a cookie
        Cookies.set("authToken", accessToken, { expires: 7 });

        // Redirect to the desired route
        history.push("/admin/default");

        // Log the value of the authToken cookie
        // console.log(Cookies.get("authToken")); // Use parentheses instead of square brackets
      })
      .catch((error) => {
        // console.error("Error:", error);
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.error("Response data:", error.response.data);
          // console.error("Response status:", error.response.status);
          // console.error("Response headers:", error.response.headers);

          // Log specific error messages
          if (
            error.response &&
            error.response.data &&
            error.response.data.error
          ) {
            const errorObject = error.response.data.error;

            // Log all error messages
            console.log("Error messages:", errorObject);

            if (typeof errorObject === "string") {
              const alertComponent = (
                <Alert key="stringError" status="error">
                  <AlertIcon />
                  <div>
                    <AlertTitle>Error:</AlertTitle>
                    <AlertDescription>{errorObject}</AlertDescription>
                  </div>
                </Alert>
              );

              // Set the error alerts to be rendered
              setErrorAlert([alertComponent]);
            } else {
              const alertComponents = Object.entries(errorObject).map(
                ([field, messages]) => (
                  <Alert key={field} status="error">
                    <AlertIcon />
                    {messages.map((message, index) => (
                      <div key={index}>
                        <AlertTitle>{field} Error:</AlertTitle>
                        <AlertDescription>{message}</AlertDescription>
                      </div>
                    ))}
                  </Alert>
                )
              );

              // Set the error alerts to be rendered
              setErrorAlert(alertComponents);
            }
          }
        } else if (error.request) {
          // The request was made but no response was received
          console.error("No response received:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Request setup error:", error.message);
        }
      });
  };

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign In
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your email and password to sign in!
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <FormControl>
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired={true}
              variant="auth"
              fontSize="sm"
              type="email"
              placeholder="Enter your Email ..."
              mb="24px"
              fontWeight="500"
              size="lg"
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Password<Text color={brandStars}>*</Text>
            </FormLabel>
            <InputGroup size="md">
              <Input
                isRequired={true}
                fontSize="sm"
                placeholder="Min. 8 characters"
                mb="24px"
                size="lg"
                type={show ? "text" : "password"}
                variant="auth"
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColor}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent="space-between" align="center" mb="24px">
              <NavLink to="/auth/forgot-password">
                <Text
                  color={textColorBrand}
                  fontSize="sm"
                  w="124px"
                  fontWeight="500"
                >
                  Forgot password?
                </Text>
              </NavLink>
            </Flex>
            <div>
              <Stack spacing={3}>{errorAlert}</Stack>
            </div>
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </FormControl>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

// const decodeAuthToken = (token) => {
//   try {
//     if (typeof token !== 'string') {
//       throw new Error('Token is not a string');
//     }

//     const base64Url = token.split(".")[1];
//     const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
//     const paddedBase64 = base64.padEnd(base64.length + (4 - base64.length % 4) % 4, '=');
//     const decoded = JSON.parse(atob(paddedBase64));
//     return decoded;
//   } catch (error) {
//     console.error(error);
//     return null; // Failed to decode token
//   }
// };

export default SignIn;
