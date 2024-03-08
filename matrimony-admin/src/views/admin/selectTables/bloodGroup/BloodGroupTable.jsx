import React, { useState, useEffect } from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Input,
  Select,
  Flex,
  VStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import Cookies from "js-cookie";
import APIToast from "components/popup/APIToast";

const BloodgroupTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBloodgroup, setSelectedBloodgroup] = useState([]);
  const [editCategoreId, setEditCategoreId] = useState(null);
  const [editedCategoreName, setEditedCategoreName] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [Bloodgroup, setBloodgroup] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newBloodgroupName, setNewBloodgroupName] = useState("");
  const obj = {
    status: null,
    header: '',
    message: ''
  }
  const [apiResponse, setApiResponse] = useState(obj);

  const URL = process.env.REACT_APP_API_URL;
  useEffect(() => {
    // Fetch data from the API
    axios
      .get(`${URL}/blood-groups`)
      .then((response) => {
        // Assuming the API response is in the expected format
        setBloodgroup(response.data.data);
        console.log(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Bloodgroup data:", error);
        setLoading(false);
      });
  }, []);

  // const handleApiResponse = (response) => {
  //   // Check if response is valid
  //   if (response && response.status && response.statusText && response.data && response.data.message) {
  //     // Create an object with response data
  //     let responseObject = {
  //       status: response.status,
  //       header: response.statusText,
  //       message: response.data.message
  //     };

  //     // Set the apiResponse state with the response data
  //     setApiResponse(responseObject);

  //     // Log the response object
  //     console.log(responseObject);
  //   } else {
  //     // Log an error if the response is invalid
  //     console.error('Invalid response format');
  //   }
  // };


  const handleApiResponse = (response) => {
    // Create the responseObject with response data
    const responseObject = {
      status: response.status,
      header: response.statusText,
      message: response.data.message
    };

    // Set the apiResponse state with the responseObject
    setApiResponse(apiResponse.status=response.status);
    setApiResponse(apiResponse.header=response.statusText);
    setApiResponse(apiResponse.message=response.data.message);

  };
  console.log("response From API", apiResponse)

  // const handleApiResponse = (status, statusText, message) => {
  //   // Call APIToast with appropriate data
  //   setApiResponse({
  //     statusCode: status, // Assuming 'status' is the status code of the response
  //     header : 'Header',
  //     message: message, // Assuming 'data' contains the response data
  //   });
  // };
  // const [apiResponse, setApiResponse] = useState(null);

  // const handleApiResponse = (response) => {
  //   setApiResponse(response);
  // };

  // const onRowEditComplete = () => {
  //   // Handle row edit completion
  //   console.log("Row edited", selectedBloodgroup);
  //   onClose();
  // };

  // const showToast = (statusCode, heading, message) => {
  //   const toastProps = {
  //     statusCode,
  //     heading,
  //     message
  //   };
  //   console.log(statusCode, heading, message)
  //   // Set the apiResponse state with the response data
  //   setApiResponse(toastProps);
  // };

  // const handleApiResponse = (response) => {
  //   // Assuming response structure contains status code, heading, and message
  //   // For example: { statusCode: 200, heading: "Success", message: "Operation successful!" }
  //   if (response) {
  //     const { statusCode, heading, message } = response;
  //     // Display toast message
  //     showToast(statusCode, heading, message);
  //   }
  // };

  // const handleApiError = (error) => {
  //   console.error("API Error:", error);
  //   // Display error toast message
  //   showToast(400, "Error", "An error occurred while processing your request.");
  // };

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (categoreId, categoreName) => {
    setEditCategoreId(categoreId);
    setEditedCategoreName(categoreName);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    // Assuming selectedBloodgroup contain unique identifiers (e.g., categore IDs)
    const selectedCategoreIds = selectedBloodgroup.map(
      (categore) => categore.blood_groups_id
    );
    console.log(selectedCategoreIds);
    const Deleteurl = `${URL}/blood-groups/update-status`;
    axios
      .patch(
        Deleteurl,
        { blood_groups_ids: selectedCategoreIds, status: 0 },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(Bloodgroup);
        console.log("response", response);
        // showToast(response.status , response.statusText ,  response.data.message)
        setBloodgroup(response.data.data);

        console.log({
          status: response.status,
          header: response.statusText,
          message: response.data.message
        });

        handleApiResponse(response);

        console.log("This is rxp" + apiResponse)
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Bloodgroup:", error);
        // handleApiError(error);
        // handleApiResponse(response);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedBloodgroup(selectAll ? [] : [...Bloodgroup]);
  };
  const [selectAll, setSelectAll] = useState(false);

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  // Function to handle submission of the new blood group
  const handleAddBloodgroup = () => {
    const addUrl = `${URL}/blood-groups`; // Change the URL accordingly

    axios
      .post(
        addUrl,
        { group: newBloodgroupName },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data); // Assuming the response contains the newly added blood group data
        // Add the new blood group to the existing blood group list
        setBloodgroup(response.data.data);
        // showToast(400, "Error", "An error occurred while processing your request.");

        setIsNewModalOpen(false);
        setNewBloodgroupName(""); // Reset the input field
      })
      .catch((error) => {
        console.error("Error adding new blood group:", error);
      });
  };

  // const [editedCategoreName, setEditedCategoreName] = useState("");

  const handleSave = () => {
    // Assuming you have a server endpoint to handle categore updates
    const url = `${URL}/blood-groups/${editCategoreId}`;
    console.log(Cookies.get("authToken"));
    axios
      .put(
        url,
        { group: editedCategoreName, id: editCategoreId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(Bloodgroup);
        console.log(response.data.data);

        setBloodgroup(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating categore:", error);
      });
  };

  return (
    <VStack spacing={4} margin={"80px"}>
      <Flex justifyContent="flex-end" w="100%">
        <Button onClick={toggleNewModal} bg="#FFF">
          Add
        </Button>
      </Flex>
      <Table variant="striped" bg="#FFF" mt="100px">
        <Thead>
          <Tr>
            <Th>
              <Flex justifyContent="flex-end">
                <Button
                  onClick={deleteSelectedRows}
                  disabled={selectedBloodgroup.length === 0}
                  ml={-14} // Add margin-left for spacing
                >
                  <DeleteIcon />
                </Button>
                <Checkbox
                  isChecked={selectAll}
                  onChange={handleSelectAll}
                // mr={1} // Add margin-right for spacing
                />
              </Flex>
            </Th>
            <Th>User ID</Th>
            <Th>Blood Group</Th>
            {/* <Th>Status</Th> */}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {Bloodgroup.map((categore, index) => (
            <Tr key={index}>
              <Td
                minWidth="50px"
                height="75px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Checkbox
                  isChecked={selectedBloodgroup.some(
                    (p) => p.blood_groups_id === categore.blood_groups_id
                  )}
                  onChange={() => {
                    setSelectedBloodgroup((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.blood_groups_id === categore.blood_groups_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                          (p) =>
                            p.blood_groups_id !== categore.blood_groups_id
                        )
                        : [...prevSelection, categore];
                    });
                  }}
                />
              </Td>
              <Td>{categore.blood_groups_id}</Td>
              <Td>{categore.group}</Td>
              {/* <Td>{categore.category}</Td> */}
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(categore.blood_groups_id, categore.group)
                  }
                >
                  Edit
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Blood Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl></FormControl>
            <FormControl>
              <FormLabel>Blood Group</FormLabel>
              <Input
                type="text"
                value={editedCategoreName}
                onChange={(e) => setEditedCategoreName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onModalClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      {/* Delete Confirmation Modal */}
      <AlertDialog
        isOpen={deleteConfirmationOpen}
        onClose={() => setDeleteConfirmationOpen(false)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Confirm Delete
            </AlertDialogHeader>

            <AlertDialogCloseButton />

            <AlertDialogBody>
              Are you sure you want to delete the selected Blood groups?
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button onClick={() => setDeleteConfirmationOpen(false)}>
                Cancel
              </Button>
              <Button
                colorScheme="red"
                onClick={handleDeleteConfirmation}
                ml={3}
              >
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/* Modal for adding new blood groups */}
      <Modal isOpen={isNewModalOpen} onClose={toggleNewModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Blood Group</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Blood Group Name</FormLabel>
              <Input
                type="text"
                value={newBloodgroupName}
                onChange={(e) => setNewBloodgroupName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddBloodgroup}>
              Add
            </Button>
            <Button onClick={toggleNewModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Call APIToast if apiResponse exists
            {apiResponse && (
        <APIToast
          statusCode={apiResponse.statusCode}
          heading={apiResponse.heading}
          message={apiResponse.message}
        />
      )} */}

      <div>
        {apiResponse && <APIToast {...apiResponse} />}
      </div>
    </VStack>
  );
};

export default BloodgroupTable;
