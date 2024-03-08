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

const BloodgroupTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedBloodgroup, setSelectedBloodgroup] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editedProductName, setEditedProductName] = useState("");
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [Bloodgroup, setBloodgroup] = useState([]);
  const [loading, setLoading] = useState(true);
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

  // const onRowEditComplete = () => {
  //   // Handle row edit completion
  //   console.log("Row edited", selectedBloodgroup);
  //   onClose();
  // };

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  const openEditModal = (productId, productName) => {
    setEditProductId(productId);
    setEditedProductName(productName);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    setDeleteConfirmationOpen(true);
  };

  const handleDeleteConfirmation = () => {
    // Assuming selectedBloodgroup contain unique identifiers (e.g., product IDs)
    const selectedProductIds = selectedBloodgroup.map(
      (product) => product.blood_groups_id
    );
    console.log(selectedProductIds);
    const Deleteurl = `${URL}/blood-groups/update-status`;
    axios
      .patch(
        Deleteurl,
        { blood_groups_ids : selectedProductIds , status : 0},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
      
        console.log(Bloodgroup)
        console.log(response.data.data);

        setBloodgroup(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error deleting selected Bloodgroup:", error);
      });
    setDeleteConfirmationOpen(false);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedBloodgroup(selectAll ? [] : [...Bloodgroup]);
  };
  const [selectAll, setSelectAll] = useState(false);

  // const [editedProductName, setEditedProductName] = useState("");

  const handleSave = () => {
    // Assuming you have a server endpoint to handle product updates
    const url = `${URL}/blood-groups/${editProductId}`;
    console.log(Cookies.get("authToken"));
    axios
      .put(
        url,
        { group : editedProductName, id: editProductId },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("authToken")}`,
          },
        }
      )
      .then((response) => {
      
        console.log(Bloodgroup)
        console.log(response.data.data);

        setBloodgroup(response.data.data);
        onModalClose();
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  return (
    <VStack spacing={4}>
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
          {Bloodgroup.map((product, index) => (
            <Tr key={index}>
              <Td minWidth="50px" display="flex" justifyContent="flex-end">
                <Checkbox
                  isChecked={selectedBloodgroup.some(
                    (p) => p.blood_groups_id === product.blood_groups_id
                  )}
                  onChange={() => {
                    setSelectedBloodgroup((prevSelection) => {
                      const isSelected = prevSelection.some(
                        (p) => p.blood_groups_id === product.blood_groups_id
                      );
                      return isSelected
                        ? prevSelection.filter(
                            (p) => p.blood_groups_id !== product.blood_groups_id
                          )
                        : [...prevSelection, product];
                    });
                  }}
                />
              </Td>
              <Td>{product.blood_groups_id}</Td>
              <Td>{product.group}</Td>
              {/* <Td>{product.category}</Td> */}
              <Td>
                <Button
                  onClick={() =>
                    openEditModal(product.blood_groups_id, product.group)
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
                value={editedProductName}
                onChange={(e) => setEditedProductName(e.target.value)}
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
    </VStack>
  );
};

export default BloodgroupTable;
