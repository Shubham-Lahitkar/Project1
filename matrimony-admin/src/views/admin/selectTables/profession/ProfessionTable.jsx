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

const ProfessionTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProfession, setSelectedProfession] = useState([]);
  const [editProfessionId, setEditProfessionId] = useState(null);
  const [editedProfessionName, setEditedProfessionName] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [profession, setProfession] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newProfessionName, setNewProfessionName] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/professions`)
      .then((response) => {
        setProfession(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Profession data:", error);
        setLoading(false);
      });
  }, []);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (professionId, professionName) => {
    setEditProfessionId(professionId);
    setEditedProfessionName(professionName);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    const selectedProfessionIds = selectedProfession.map(
      (profession) => profession.professions_id
    );
    const deleteUrl = `${URL}/professions/update-status`;
    axios
      .patch(
        deleteUrl,
        { professions_id: selectedProfessionIds, status: 0 },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setProfession(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Professions:", error);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedProfession(selectAll ? [] : [...profession]);
  };
  const [selectAll, setSelectAll] = useState(false);

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  const handleAddProfession = () => {
    const addUrl = `${URL}/professions`;

    axios
      .post(
        addUrl,
        { name: newProfessionName },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setProfession(response.data.data);
        setIsNewModalOpen(false);
        setNewProfessionName("");
      })
      .catch((error) => {
        console.error("Error adding new profession:", error);
      });
  };

  const handleSave = () => {
    const url = `${URL}/professions/${editProfessionId}`;
    axios
      .put(
        url,
        { name: editedProfessionName, id: editProfessionId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setProfession(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating profession:", error);
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
                  disabled={selectedProfession.length === 0}
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
            <Th>Profession ID</Th>
            <Th>Profession Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {profession.map((professionItem, index) => (
            <Tr key={index}>
              <Td
                minWidth="50px"
                height="75px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Checkbox
                  isChecked={selectedProfession.some(
                    (p) => p.professions_id === professionItem.professions_id
                  )}
                  onChange={() => {
                    setSelectedProfession((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.professions_id === professionItem.professions_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                            (p) => p.professions_id !== professionItem.professions_id
                          )
                        : [...prevSelection, professionItem];
                    });
                  }}
                />
              </Td>
              <Td>{professionItem.professions_id}</Td>
              <Td>{professionItem.name}</Td>
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(professionItem.professions_id, professionItem.name)
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
          <ModalHeader>Edit Profession</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Profession Name</FormLabel>
              <Input
                type="text"
                value={editedProfessionName}
                onChange={(e) => setEditedProfessionName(e.target.value)}
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
              Are you sure you want to delete the selected Professions?
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
          <ModalHeader>Add New Profession</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Profession Name</FormLabel>
              <Input
                type="text"
                value={newProfessionName}
                onChange={(e) => setNewProfessionName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddProfession}>
              Add
            </Button>
            <Button onClick={toggleNewModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default ProfessionTable;
