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

const FamilyStatusTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedFamilyStatus, setSelectedFamilyStatus] = useState([]);
  const [editFamilyStatusId, setEditFamilyStatusId] = useState(null);
  const [editedFamilyStatusName, setEditedFamilyStatusName] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [familyStatus, setFamilyStatus] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newFamilyStatusName, setNewFamilyStatusName] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/familystatus`)
      .then((response) => {
        setFamilyStatus(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Family Status data:", error);
        setLoading(false);
      });
  }, []);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (familyStatusId, familyStatusName) => {
    setEditFamilyStatusId(familyStatusId);
    setEditedFamilyStatusName(familyStatusName);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    const selectedFamilyStatusIds = selectedFamilyStatus.map(
      (familyStatus) => familyStatus.family_status_id
    );
    const deleteUrl = `${URL}/familystatus/update-status`;
    axios
      .patch(
        deleteUrl,
        { family_status_id: selectedFamilyStatusIds, status: 0 },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setFamilyStatus(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Family Status:", error);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedFamilyStatus(selectAll ? [] : [...familyStatus]);
  };
  const [selectAll, setSelectAll] = useState(false);

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  const handleAddFamilyStatus = () => {
    const addUrl = `${URL}/familystatus`;

    axios
      .post(
        addUrl,
        { name: newFamilyStatusName },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setFamilyStatus(response.data.data);
        setIsNewModalOpen(false);
        setNewFamilyStatusName("");
      })
      .catch((error) => {
        console.error("Error adding new family status:", error);
      });
  };

  const handleSave = () => {
    const url = `${URL}/familystatus/${editFamilyStatusId}`;
    axios
      .put(
        url,
        { name: editedFamilyStatusName, id: editFamilyStatusId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setFamilyStatus(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating family status:", error);
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
                  disabled={selectedFamilyStatus.length === 0}
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
            <Th>Family Status ID</Th>
            <Th>Family Status Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {familyStatus.map((familyStatusItem, index) => (
            <Tr key={index}>
              <Td
                minWidth="50px"
                height="75px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Checkbox
                  isChecked={selectedFamilyStatus.some(
                    (p) => p.family_status_id === familyStatusItem.family_status_id
                  )}
                  onChange={() => {
                    setSelectedFamilyStatus((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.family_status_id === familyStatusItem.family_status_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                            (p) => p.family_status_id !== familyStatusItem.family_status_id
                          )
                        : [...prevSelection, familyStatusItem];
                    });
                  }}
                />
              </Td>
              <Td>{familyStatusItem.family_status_id}</Td>
              <Td>{familyStatusItem.name}</Td>
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(familyStatusItem.family_status_id, familyStatusItem.name)
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
          <ModalHeader>Edit Family Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Family Status Name</FormLabel>
              <Input
                type="text"
                value={editedFamilyStatusName}
                onChange={(e) => setEditedFamilyStatusName(e.target.value)}
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
              Are you sure you want to delete the selected Family Statuses?
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
          <ModalHeader>Add New Family Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Family Status Name</FormLabel>
              <Input
                type="text"
                value={newFamilyStatusName}
                onChange={(e) => setNewFamilyStatusName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddFamilyStatus}>
              Add
            </Button>
            <Button onClick={toggleNewModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default FamilyStatusTable;
