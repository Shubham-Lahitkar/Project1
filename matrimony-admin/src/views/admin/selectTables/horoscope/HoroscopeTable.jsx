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

const HoroscopeTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedHoroscope, setSelectedHoroscope] = useState([]);
  const [editHoroscopeId, setEditHoroscopeId] = useState(null);
  const [editedHoroscopesign, setEditedHoroscopesign] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [horoscope, setHoroscope] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [newHoroscopesign, setNewHoroscopesign] = useState("");
  const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios
      .get(`${URL}/horoscope/`)
      .then((response) => {
        setHoroscope(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching Horoscope data:", error);
        setLoading(false);
      });
  }, []);

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (horoscopeId, horoscopesign) => {
    setEditHoroscopeId(horoscopeId);
    setEditedHoroscopesign(horoscopesign);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    const selectedHoroscopeIds = selectedHoroscope.map(
      (horoscope) => horoscope.horoscopes_id
    );
    const deleteUrl = `${URL}/horoscope/update-status`;
    axios
      .patch(
        deleteUrl,
        { horoscopes_id: selectedHoroscopeIds, status: 0 },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setHoroscope(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Horoscopes:", error);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedHoroscope(selectAll ? [] : [...horoscope]);
  };
  const [selectAll, setSelectAll] = useState(false);

  const toggleNewModal = () => {
    setIsNewModalOpen(!isNewModalOpen);
  };

  const handleAddHoroscope = () => {
    const addUrl = `${URL}/horoscope/`;

    axios
      .post(
        addUrl,
        { sign: newHoroscopesign },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setHoroscope(response.data.data);
        setIsNewModalOpen(false);
        setNewHoroscopesign("");
      })
      .catch((error) => {
        console.error("Error adding new horoscope:", error);
      });
  };

  const handleSave = () => {
    const url = `${URL}/horoscope/${editHoroscopeId}`;
    axios
      .put(
        url,
        { sign: editedHoroscopesign, id: editHoroscopeId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
        setHoroscope(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating horoscope:", error);
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
                  disabled={selectedHoroscope.length === 0}
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
            <Th>Horoscope ID</Th>
            <Th>Horoscope sign</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {horoscope.map((horoscopeItem, index) => (
            <Tr key={index}>
              <Td
                minWidth="50px"
                height="75px"
                display="flex"
                alignItems="center"
                justifyContent="flex-end"
              >
                <Checkbox
                  isChecked={selectedHoroscope.some(
                    (p) => p.horoscopes_id === horoscopeItem.horoscopes_id
                  )}
                  onChange={() => {
                    setSelectedHoroscope((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.horoscopes_id === horoscopeItem.horoscopes_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                            (p) => p.horoscopes_id !== horoscopeItem.horoscopes_id
                          )
                        : [...prevSelection, horoscopeItem];
                    });
                  }}
                />
              </Td>
              <Td>{horoscopeItem.horoscopes_id}</Td>
              <Td>{horoscopeItem.sign}</Td>
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(horoscopeItem.horoscopes_id, horoscopeItem.sign)
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
          <ModalHeader>Edit Horoscope</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Horoscope sign</FormLabel>
              <Input
                type="text"
                value={editedHoroscopesign}
                onChange={(e) => setEditedHoroscopesign(e.target.value)}
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
              Are you sure you want to delete the selected Horoscopes?
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
          <ModalHeader>Add New Horoscope</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Horoscope sign</FormLabel>
              <Input
                type="text"
                value={newHoroscopesign}
                onChange={(e) => setNewHoroscopesign(e.target.value)}
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleAddHoroscope}>
              Add
            </Button>
            <Button onClick={toggleNewModal}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default HoroscopeTable;
