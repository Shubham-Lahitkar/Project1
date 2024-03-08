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

const MaritalStatusTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMaritalStatus, setSelectedMaritalStatus] = useState([]);
  const [editMaritalStatusId, setEditMaritalStatusId] = useState(null);
  const [editedMaritalStatusstatus_name, setEditedMaritalStatusstatus_name] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [maritalStatus, setMaritalStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newMaritalStatusstatus_name, setNewMaritalStatusstatus_name] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/maritalstatus`)
      .then((response) => {
        setMaritalStatus(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Marital Status data:", error);
        setLoading(false);
      });
  }, []);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (maritalStatusId, maritalStatusstatus_name) => {
    setEditMaritalStatusId(maritalStatusId);
    setEditedMaritalStatusstatus_name(maritalStatusstatus_name);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    const selectedMaritalStatusIds = selectedMaritalStatus.map(
      (maritalStatus) => maritalStatus.marital_statuses_id
    );
    const deleteUrl = `${URL}/maritalstatus/update-status`;
    axios
      .patch(
        deleteUrl,
        { marital_statuses_id: selectedMaritalStatusIds, status: 0 },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setMaritalStatus(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Marital Statuses:", error);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedMaritalStatus(selectAll ? [] : [...maritalStatus]);
  };
  const [selectAll, setSelectAll] = useState(false);

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  const handleAddMaritalStatus = () => {
    const addUrl = `${URL}/maritalstatus`;

    axios
      .post(
        addUrl,
        { status_name: newMaritalStatusstatus_name },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setMaritalStatus(response.data.data);
        setIsNewModalOpen(false);
        setNewMaritalStatusstatus_name("");
      })
      .catch((error) => {
        console.error("Error adding new marital status:", error);
      });
  };

  const handleSave = () => {
    const url = `${URL}/maritalstatus/${editMaritalStatusId}`;
    axios
      .put(
        url,
        { status_name: editedMaritalStatusstatus_name, id: editMaritalStatusId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setMaritalStatus(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating marital status:", error);
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
                  disabled={selectedMaritalStatus.length === 0}
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
            <Th>Marital Status ID</Th>
            <Th>Marital Status status_name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {maritalStatus.map((maritalStatusItem, index) => (
            <Tr key={index}>
              <Td
                minWidth="50px"
                height="75px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Checkbox
                  isChecked={selectedMaritalStatus.some(
                    (p) => p.marital_statuses_id === maritalStatusItem.marital_statuses_id
                  )}
                  onChange={() => {
                    setSelectedMaritalStatus((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.marital_statuses_id === maritalStatusItem.marital_statuses_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                            (p) => p.marital_statuses_id !== maritalStatusItem.marital_statuses_id
                          )
                        : [...prevSelection, maritalStatusItem];
                    });
                  }}
                />
              </Td>
              <Td>{maritalStatusItem.marital_statuses_id}</Td>
              <Td>{maritalStatusItem.status_name}</Td>
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(maritalStatusItem.marital_statuses_id, maritalStatusItem.status_name)
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
          <ModalHeader>Edit Marital Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Marital Status status_name</FormLabel>
              <Input
                type="text"
                value={editedMaritalStatusstatus_name}
                onChange={(e) => setEditedMaritalStatusstatus_name(e.target.value)}
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
              Are you sure you want to delete the selected Marital Statuses?
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
          <ModalHeader>Add New Marital Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Marital Status status_name</FormLabel>
              <Input
                type="text"
                value={newMaritalStatusstatus_name}
                onChange={(e) => setNewMaritalStatusstatus_name(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddMaritalStatus}>
              Add
            </Button>
            <Button onClick={toggleNewModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default MaritalStatusTable;
