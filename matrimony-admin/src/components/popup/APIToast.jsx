import React from "react";
import { useToast, Box, Text, Icon } from "@chakra-ui/react";
import { MdError, MdWarning, MdCheckCircle } from "react-icons/md";

const APIToast = ({ data }) => {
  const toast = useToast();
  console.log(data)
  const getToastProps = () => {
    let statusProps = {};
    let icon = null;

    switch (data.status) {
      case 200:
        statusProps = { status: "success", title: "Success" };
        icon = <Icon as={MdCheckCircle} boxSize={6} />;
        break;
      case 400:
        statusProps = { status: "error", title: "Error" };
        icon = <Icon as={MdError} boxSize={6} />;
        break;
      case 404:
        statusProps = { status: "warning", title: "Warning" };
        icon = <Icon as={MdWarning} boxSize={6} />;
        break;
      default:
        statusProps = { status: "info", title: "Information" };
        icon = <Icon as={MdError} boxSize={6} />;
        break;
    }

    return { ...statusProps, icon };
  };

  const showToast = () => {
    const { status, title, icon } = getToastProps();

    toast({
      position: "bottom-right",
      render: () => (
        <Box
          bg={status === "error" ? "red.500" : `${status}.500`}
          p={4}
          borderRadius={8}
          color="white"
        >
          <Box display="flex" alignItems="center">
            {icon}
            <Text ml={3} fontWeight="bold">
              {title}
            </Text>
          </Box>
          {data.message && <Text mt={2}>{data.message}</Text>}
        </Box>
      ),
    });
  };

  React.useEffect(() => {
    // Call showToast when the component mounts
    showToast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array ensures this effect runs only once

  // This component doesn't render anything, so return null
  return null;
};

export default APIToast;
