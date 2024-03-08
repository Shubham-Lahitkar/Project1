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

const ComplexionTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedComplexion, setSelectedComplexion] = useState([]);
  const [editComplexionId, setEditComplexionId] = useState(null);
  const [editedComplexionName, setEditedComplexionName] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [complexion, setComplexion] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newComplexionName, setNewComplexionName] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/complexions`)
      .then((response) => {
        setComplexion(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Complexion data:", error);
        setLoading(false);
      });
  }, []);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (complexionId, complexionName) => {
    setEditComplexionId(complexionId);
    setEditedComplexionName(complexionName);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    const selectedComplexionIds = selectedComplexion.map(
      (complexion) => complexion.complexions_id
    );
    const deleteUrl = `${URL}/complexions/update-status`;
    axios
      .patch(
        deleteUrl,
        { complexions_id: selectedComplexionIds, status: 0 },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setComplexion(response.data.data);
        console.log(response.data.data)
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Complexion:", error);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedComplexion(selectAll ? [] : [...complexion]);
  };
  const [selectAll, setSelectAll] = useState(false);

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  const handleAddComplexion = () => {
    const addUrl = `${URL}/complexions`;

    axios
      .post(
        addUrl,
        { name: newComplexionName },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setComplexion(response.data.data);
        setIsNewModalOpen(false);
        setNewComplexionName("");
      })
      .catch((error) => {
        console.error("Error adding new complexion:", error);
      });
  };

  const handleSave = () => {
    const url = `${URL}/complexions/${editComplexionId}`;
    axios
      .put(
        url,
        { name: editedComplexionName, id: editComplexionId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setComplexion(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating complexion:", error);
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
                  disabled={selectedComplexion.length === 0}
                  ml={-14}
                >
                  <DeleteIcon />
                </Button>
                <Checkbox
                  isChecked={selectAll}
                  onChange={handleSelectAll}
                />
              </Flex>
            </Th>
            <Th>Complexion ID</Th>
            <Th>Complexion Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {complexion.map((complexionItem, index) => (
            <Tr key={index}>
              <Td
                minWidth="50px"
                height="75px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Checkbox
                  isChecked={selectedComplexion.some(
                    (p) => p.complexions_id === complexionItem.complexions_id
                  )}
                  onChange={() => {
                    setSelectedComplexion((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.complexions_id === complexionItem.complexions_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                            (p) => p.complexions_id !== complexionItem.complexions_id
                          )
                        : [...prevSelection, complexionItem];
                    });
                  }}
                />
              </Td>
              <Td>{complexionItem.complexions_id}</Td>
              <Td>{complexionItem.name}</Td>
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(complexionItem.complexions_id, complexionItem.name)
                  }
                >
                  Edit
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Complexion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Complexion Name</FormLabel>
              <Input
                type="text"
                value={editedComplexionName}
                onChange={(e) => setEditedComplexionName(e.target.value)}
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
              Are you sure you want to delete the selected Complexions?
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

      <Modal isOpen={isNewModalOpen} onClose={toggleNewModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Complexion</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Complexion Name</FormLabel>
              <Input
                type="text"
                value={newComplexionName}
                onChange={(e) => setNewComplexionName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddComplexion}>
              Add
            </Button>
            <Button onClick={toggleNewModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default ComplexionTable;
