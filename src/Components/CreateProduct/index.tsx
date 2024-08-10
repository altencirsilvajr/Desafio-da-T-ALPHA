import { createProduct } from '@/utils/products';
import { Box, Button, Flex, Input, Text, Textarea } from '@chakra-ui/react';
import { useState } from 'react';

export function CreateProduct() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emptyFields = !name || !description || !price || !stock;
    
    try {
      if (emptyFields) {
        alert(`Preencha os campos restantes`);
      } else {
        await createProduct({ name, description, price, stock });
        window.location.reload();
      };
    } catch (error) {
      console.error('Erro ao criar produto:', error);
    }
  };

  return (
    <Box display={"flex"} justifyContent={"center"} w={"100%"}>
      <form onSubmit={handleSubmit}>
        <Flex flexDir={"column"} align={"center"} w={"100%"} p={4} justify={"center"} gap={4}>
          <Box gap={4} display={"flex"} w={"100%"}>
            <Box w={"100%"}>
              <Text>Nome</Text>
              <Input
                mb={4}
                type="text"
                placeholder="Exemplo: Junior"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Box>
            <Box w={"100%"}>
              <Text>Descrição</Text>
              <Textarea
                placeholder="Descreva seu produto"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                resize={"none"}
              />
            </Box>
          </Box>

          <Box gap={4} display={"flex"} w={"100%"}>

            <Box w={"100%"}>
              <Text>Preço</Text>
              <Input
                mb={4}
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value))}
              />
            </Box>

            <Box w={"100%"}>
              <Text>Quantidade</Text>
              <Input
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(parseInt(e.target.value))}
              />
            </Box>
          </Box>
          <Box w={"100%"}>
            <Button
              w={"100%"}
              bg={"black"}
              color={"white"}
              onClick={handleSubmit}
            >
              Criar
            </Button>
          </Box>
        </Flex>

      </form>
    </Box>
  );
}
