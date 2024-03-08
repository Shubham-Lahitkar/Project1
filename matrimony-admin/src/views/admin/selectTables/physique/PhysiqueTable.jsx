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

const PhysiqueTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedPhysique, setSelectedPhysique] = useState([]);
  const [editPhysiqueId, setEditPhysiqueId] = useState(null);
  const [editedPhysiqueName, setEditedPhysiqueName] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [physique, setPhysique] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newPhysiqueName, setNewPhysiqueName] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/physiques`)
      .then((response) => {
        setPhysique(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Physique data:", error);
        setLoading(false);
      });
  }, []);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (physiqueId, physiqueName) => {
    setEditPhysiqueId(physiqueId);
    setEditedPhysiqueName(physiqueName);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    const selectedPhysiqueIds = selectedPhysique.map(
      (physique) => physique.physiques_id
    );
    const deleteUrl = `${URL}/physiques/update-status`;
    axios
      .patch(
        deleteUrl,
        { physiques_id: selectedPhysiqueIds, status: 0 },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setPhysique(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Physiques:", error);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedPhysique(selectAll ? [] : [...physique]);
  };
  const [selectAll, setSelectAll] = useState(false);

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  const handleAddPhysique = () => {
    const addUrl = `${URL}/physiques`;

    axios
      .post(
        addUrl,
        { name: newPhysiqueName },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setPhysique(response.data.data);
        setIsNewModalOpen(false);
        setNewPhysiqueName("");
      })
      .catch((error) => {
        console.error("Error adding new physique:", error);
      });
  };

  const handleSave = () => {
    const url = `${URL}/physiques/${editPhysiqueId}`;
    axios
      .put(
        url,
        { name: editedPhysiqueName, id: editPhysiqueId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setPhysique(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating physique:", error);
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
                  disabled={selectedPhysique.length === 0}
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
            <Th>Physique ID</Th>
            <Th>Physique Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {physique.map((physiqueItem, index) => (
            <Tr key={index}>
              <Td
                minWidth="50px"
                height="75px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Checkbox
                  isChecked={selectedPhysique.some(
                    (p) => p.physiques_id === physiqueItem.physiques_id
                  )}
                  onChange={() => {
                    setSelectedPhysique((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.physiques_id === physiqueItem.physiques_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                            (p) => p.physiques_id !== physiqueItem.physiques_id
                          )
                        : [...prevSelection, physiqueItem];
                    });
                  }}
                />
              </Td>
              <Td>{physiqueItem.physiques_id}</Td>
              <Td>{physiqueItem.name}</Td>
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(physiqueItem.physiques_id, physiqueItem.name)
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
          <ModalHeader>Edit Physique</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Physique Name</FormLabel>
              <Input
                type="text"
                value={editedPhysiqueName}
                onChange={(e) => setEditedPhysiqueName(e.target.value)}
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
              Are you sure you want to delete the selected Physiques?
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
          <ModalHeader>Add New Physique</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Physique Name</FormLabel>
              <Input
                type="text"
                value={newPhysiqueName}
                onChange={(e) => setNewPhysiqueName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddPhysique}>
              Add
            </Button>
            <Button onClick={toggleNewModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default PhysiqueTable;
