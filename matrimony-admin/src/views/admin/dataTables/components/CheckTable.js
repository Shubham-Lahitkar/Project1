import React, { useState } from 'react';
import { DeleteIcon } from '@chakra-ui/icons';
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
} from '@chakra-ui/react';


const CheckTable = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [products, setProducts] = useState([
    {
      "id": 1,
      "code": "P001",
      "name": "Product 1",
      "category": "Electronics",
      "quantity": 10,
      "inventoryStatus": "In Stock",
      "price": 49.99
    },
    {
      "id": 2,
      "code": "P002",
      "name": "Product 2",
      "category": "Clothing",
      "quantity": 20,
      "inventoryStatus": "Out of Stock",
      "price": 29.99
    },
    {
      "id": 3,
      "code": "P003",
      "name": "Product 3",
      "category": "Home & Kitchen",
      "quantity": 15,
      "inventoryStatus": "In Stock",
      "price": 39.99
    }
  ]);

  const onRowEditComplete = () => {
    // Handle row edit completion
    console.log('Row edited', selectedProducts);
    onClose();
  };




  const { isOpen: isModalOpen, onOpen: onModalOpen, onClose: onModalClose } =
    useDisclosure();

  const openEditModal = (productId) => {
    setEditProductId(productId);
    onModalOpen();
  };

  const deleteSelectedRows = () => {
    // Assuming selectedProducts contain unique identifiers (e.g., product IDs)
    const selectedProductIds = selectedProducts.map(product => product.id);
    console.log(selectedProductIds)
    // axios.post('/api/deleteProducts', { selectedProductIds })
    //   .then(response => {
    //     // Assuming the server responds with the updated list of products
    //     setProducts(response.data);
    //     setSelectedProducts([]);
    //   })
    //   .catch(error => {
    //     console.error('Error deleting selected products:', error);
    //   });
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    setSelectedProducts(selectAll ? [] : products);
  };
  const [selectAll, setSelectAll] = useState(false);




  const [editedProductName, setEditedProductName] = useState('');

  const handleSave = () => {
    // Assuming you have a server endpoint to handle product updates
    const url = `/api/updateProduct/${editProductId}`;
    
    // axios.put(url, { name: editedProductName })
    //   .then(response => {
    //     // Assuming the server responds with the updated product
    //     const updatedProducts = products.map(product => {
    //       if (product.id === editProductId) {
    //         return response.data; // Use the response from the server
    //       }
    //       return product;
    //     });

    //     setProducts(updatedProducts);
    //     onModalClose();
    //   })
    //   .catch(error => {
    //     console.error('Error updating product:', error);
    //   });
  };


  return (
    <VStack spacing={4}>


      <Table variant="striped" bg="#FFF">
        <Thead>
          <Tr>
            <Th>
              <Flex alignItems="center">
                <Checkbox
                  isChecked={selectAll}
                  onChange={handleSelectAll}
                />
                <Button
                  onClick={deleteSelectedRows}
                  disabled={selectedProducts.length === 0}
                  ml={2} // Add margin-left for spacing
                >
                  {/* Your DeleteIcon goes here */}
                  <DeleteIcon />
                </Button>
              </Flex>
            </Th>
            <Th>Code</Th>
            <Th>Name</Th>
            <Th>Category</Th>
            <Th>Quantity</Th>

            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={index}>
              <Td>
                <Checkbox
                  isChecked={selectedProducts.includes(product)}
                  onChange={() => {
                    const newSelection = selectedProducts.includes(product)
                      ? selectedProducts.filter((p) => p !== product)
                      : [...selectedProducts, product];
                    setSelectedProducts(newSelection);
                  }}
                />
              </Td>
              <Td>{product.code}</Td>
              <Td>{product.name}</Td>
              <Td>{product.category}</Td>
              <Td>{product.quantity}</Td>

              <Td>
                <Button onClick={() => openEditModal(product.id)}>
                  Edit
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      {/* Submit Button */}
      <Button onClick={onRowEditComplete}>Submit Changes</Button>

      {/* Edit Modal */}
      <Modal isOpen={isModalOpen} onClose={onModalClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalCloseButton />
          {/* <ModalBody>
            <FormControl>
              <FormLabel>Code</FormLabel>
              <Input
                type="text"
                value={
                  editProductId !== null
                    ? products.find((p) => p.id === editProductId)?.code
                    : ''
                }
                readOnly
              />
            </FormControl>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                value={editedProductName}
                onChange={(e) => setEditedProductName(e.target.value)}
              />
            </FormControl>
          </ModalBody> */}
          {/* <ModalFooter>
            <Button colorScheme="blue" onClick={handleSave}>
              Save
            </Button>
            <Button onClick={onModalClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </VStack>
  );
};

export default CheckTable;
