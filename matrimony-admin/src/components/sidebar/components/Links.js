/* eslint-disable */
import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Box,
  Flex,
  HStack,
  Text,
  Collapse,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

export function SidebarLinks(props) {
  const location = useLocation();
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("secondaryGray.600", "secondaryGray.600");
  const activeIcon = useColorModeValue("brand.500", "white");
  const textColor = useColorModeValue("secondaryGray.500", "white");
  const brandColor = useColorModeValue("brand.500", "brand.400");

  const { routes } = props;

  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };

  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };


  const createLink = (item, index) => {
    const isDropdown = item.items && item.items.length > 0;
    const isActive = activeRoute(item.path.toLowerCase());

    if (!isDropdown && (!item.layout || (item.layout && item.layout !== "/admin"))) {
      return null;
    }
    return (
      <React.Fragment key={index}>
        {isDropdown ? (
          <>
            {/* <NavLink key={index} to={item.layout + item.path}> */}
              <Box
                spacing={isActive ? "22px" : "26px"}
                py="5px"
                ps="10px"
              >
                <Flex
                  // align="center"
                  cursor="pointer"
                  onClick={() => toggleDropdown(index)}
                  w="100%"
                  alignItems="center"
                  // justifyContent="center"
                >
                  <Box
                    color={isActive ? activeIcon : textColor}
                    me="18px"
                  >
                    {item.icon}
                  </Box>
                  <Text
                    fontSize="md"
                    color={activeColor}
                    fontWeight="bold"
                    // mx="auto"
                    // ps={{ sm: "10px", xl: "16px" }}
                    pt="18px"
                    pb="12px"
                  >
                    {item.name}
                  </Text>
                  <Icon
                    as={ChevronDownIcon}
                    color={activeColor}
                    boxSize={6}
                    ml={2}
                  />
                </Flex>



              </Box>
            {/* </NavLink> */}
            <Collapse in={openDropdown === index} animateOpacity>
              <Box ps="4" pt="2" pb="2" bgColor="#FFF">
                {item.items.map((subItem, subIndex) => (
                  <NavLink key={subIndex} to={subItem.layout + subItem.path}>
                    <Box py="3">
                      <HStack
                        spacing="22px"
                        alignItems="center"
                        cursor="pointer"
                      >
                        <Box
                          color={activeRoute(subItem.path.toLowerCase()) ? activeIcon : textColor}
                          me="18px"
                        >
                          {subItem.icon}
                        </Box>
                        <Text
                          me="auto"
                          color={activeRoute(subItem.path.toLowerCase()) ? activeColor : textColor}
                          fontWeight={activeRoute(subItem.path.toLowerCase()) ? "bold" : "normal"}
                        >
                          {subItem.name}
                        </Text>
                      </HStack>
                    </Box>
                  </NavLink>
                ))}
              </Box>
            </Collapse>
          </>
        ) : (
          <NavLink key={index} to={item.layout + item.path}>
            <Box>
              <HStack
                spacing={isActive ? "22px" : "26px"}
                py="5px"
                ps="10px"
              >
                <Flex
                  w="100%"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    color={isActive ? activeIcon : textColor}
                    me="18px"
                  >
                    {item.icon}
                  </Box>
                  <Text
                    me="auto"
                    color={isActive ? activeColor : textColor}
                    fontWeight={isActive ? "bold" : "normal"}
                  >
                    {item.name}
                  </Text>
                </Flex>
                <Box
                  h="36px"
                  w="4px"
                  bg={isActive ? brandColor : "transparent"}
                  borderRadius="5px"
                />
              </HStack>
            </Box>
          </NavLink>
        )}
      </React.Fragment>
    );
  };

  return routes.map((item, index) => createLink(item, index));
}

export default SidebarLinks;
