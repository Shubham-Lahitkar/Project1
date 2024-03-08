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

const CastTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedCast, setSelectedCast] = useState([]);
  const [editCastId, setEditCastId] = useState(null);
  const [editedCastName, setEditedCastName] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newCastName, setNewCastName] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/caste`)
      .then((response) => {
        setCast(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Cast data:", error);
        setLoading(false);
      });
  }, []);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (castId, castName) => {
    setEditCastId(castId);
    setEditedCastName(castName);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    const selectedCastIds = selectedCast.map((cast) => cast.castes_id);
    console.log({ castes_id: selectedCastIds, status: 0 })
    const deleteUrl = `${URL}/caste/update-status`;
    axios
      .patch(
        deleteUrl,
        { castes_id: selectedCastIds, status: 0 },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data.data)
        setCast(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Cast:", error);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedCast(selectAll ? [] : [...cast]);
  };
  const [selectAll, setSelectAll] = useState(false);

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  const handleAddCast = () => {
    const addUrl = `${URL}/caste`;

    axios
      .post(
        addUrl,
        { name: newCastName },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setCast(response.data.data);
        setIsNewModalOpen(false);
        setNewCastName("");
      })
      .catch((error) => {
        console.error("Error adding new cast:", error);
      });
  };

  const handleSave = () => {
    const url = `${URL}/caste/${editCastId}`;
    axios
      .put(
        url,
        { name: editedCastName, id: editCastId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setCast(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating cast:", error);
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
                  disabled={selectedCast.length === 0}
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
            <Th>Cast ID</Th>
            <Th>Cast Name</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {cast.map((castItem, index) => (
            <Tr key={index}>
              <Td
                minWidth="50px"
                height="75px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Checkbox
                  isChecked={selectedCast.some(
                    (p) => p.castes_id === castItem.castes_id
                  )}
                  onChange={() => {
                    setSelectedCast((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.castes_id === castItem.castes_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                            (p) => p.castes_id !== castItem.castes_id
                          )
                        : [...prevSelection, castItem];
                    });
                  }}
                />
              </Td>
              <Td>{castItem.castes_id}</Td>
              <Td>{castItem.name}</Td>
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(castItem.castes_id, castItem.name)
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
          <ModalHeader>Edit Cast</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Cast Name</FormLabel>
              <Input
                type="text"
                value={editedCastName}
                onChange={(e) => setEditedCastName(e.target.value)}
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
              Are you sure you want to delete the selected Casts?
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
          <ModalHeader>Add New Cast</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Cast Name</FormLabel>
              <Input
                type="text"
                value={newCastName}
                onChange={(e) => setNewCastName(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddCast}>
              Add
            </Button>
            <Button onClick={toggleNewModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default CastTable;
