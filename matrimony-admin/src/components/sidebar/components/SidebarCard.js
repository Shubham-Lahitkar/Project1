import {
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import logoWhite from "assets/img/layout/logoWhite.png";
import React from "react";

const YourComponent = () => {
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Flex
      justify='center'
      direction='column'
      align='center'
      bg={bgColor}
      borderRadius='30px'
      position='relative'
    >
      {/* Add your content here */}
    </Flex>
  );
};

export default YourComponent;
