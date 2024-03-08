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

const ProfileCreatedForTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProfileCreatedFor, setSelectedProfileCreatedFor] = useState([]);
  const [editProfileCreatedForId, setEditProfileCreatedForId] = useState(null);
  const [editedProfileCreatedForName, setEditedProfileCreatedForName] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [profileCreatedFor, setProfileCreatedFor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newProfileCreatedForName, setNewProfileCreatedForName] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/prefix`)
      .then((response) => {
        setProfileCreatedFor(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Profile Created for data:", error);
        setLoading(false);
      });
  }, []);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (profileCreatedForId, profileCreatedForName) => {
    setEditProfileCreatedForId(profileCreatedForId);
    setEditedProfileCreatedForName(profileCreatedForName);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    const selectedProfileCreatedForIds = selectedProfileCreatedFor.map(
      (profile) => profile.profile_created_for_id
    );
    const deleteUrl = `${URL}/prefix/update-status`;
    axios
      .patch(
        deleteUrl,
        { profile_created_for_ids: selectedProfileCreatedForIds, status: 0 },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setProfileCreatedFor(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Profile Created for:", error);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedProfileCreatedFor(selectAll ? [] : [...profileCreatedFor]);
  };
  const [selectAll, setSelectAll] = useState(false);

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  const handleAddProfileCreatedFor = () => {
    const addUrl = `${URL}/prefix`;

    axios
      .post(
        addUrl,
        { name: newProfileCreatedForName },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setProfileCreatedFor(response.data.data);
        setIsNewModalOpen(false);
        setNewProfileCreatedForName("");
      })
      .catch((error) => {
        console.error("Error adding new profile created for:", error);
      });
  };

  const handleSave = () => {
    const url = `${URL}/prefix/${editProfileCreatedForId}`;
    axios
      .put(
        url,
        { name: editedProfileCreatedForName, id: editProfileCreatedForId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setProfileCreatedFor(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating profile created for:", error);
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
                  disabled={selectedProfileCreatedFor.length === 0}
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
            <Th>Profile Created For ID</Th>
            <Th>Profile Created For Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {profileCreatedFor.map((profileCreatedForItem, index) => (
            <Tr key={index}>
              <Td
                minWidth="50px"
                height="75px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Checkbox
                  isChecked={selectedProfileCreatedFor.some(
                    (p) => p.profile_created_for_id === profileCreatedForItem.profile_created_for_id
                  )}
                  onChange={() => {
                    setSelectedProfileCreatedFor((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.profile_created_for_id === profileCreatedForItem.profile_created_for_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                            (p) => p.profile_created_for_id !== profileCreatedForItem.profile_created_for_id
                          )
                        : [...prevSelection, profileCreatedForItem];
                    });
                  }}
                />
              </Td>
              <Td>{profileCreatedForItem.profile_created_for_id}</Td>
              <Td>{profileCreatedForItem.name}</Td>
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(profileCreatedForItem.profile_created_for_id, profileCreatedForItem.name)
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
          <ModalHeader>Edit Profile Created For</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Profile Created For Name</FormLabel>
              <Input
                type="text"
                value={editedProfileCreatedForName}
                onChange={(e) => setEditedProfileCreatedForName(e.target.value)}
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
              Are you sure you want to delete the selected Profile Created For entries?
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
          <ModalHeader>Add New Profile Created For</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Profile Created For Name</FormLabel>
              <Input
                type="text"
                value={newProfileCreatedForName}
                onChange={(e) => setNewProfileCreatedForName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddProfileCreatedFor}>
              Add
            </Button>
            <Button onClick={toggleNewModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default ProfileCreatedForTable;
