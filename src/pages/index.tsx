import { useContextGlobal } from "@/Components/Context";
import { Loader } from "@/Components/Loader";
import { ProductList } from "@/Components/ProductsList";
import { getToken, logout } from "@/utils/authenticator";
import { CreateProductModal } from "@/utils/modals/createProduct";
import { getProducts } from "@/utils/products";
import { Box, Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { IoIosAdd } from "react-icons/io";


export default function Home() {
  const { productData, setProductData, isDarkMode } = useContextGlobal();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = getToken();
        if (!token) {
          router.push('/login');
          return;
        }
        const productsData = await getProducts();
        setProductData(productsData);
      } catch (error: any) {
        if (error.response?.status === 401) {
          logout();
          router.push('/login');
        } else {
          console.error('Erro ao carregar produtos:', error.response?.data || error.message);
        }
      }
    };
    fetchProducts();
  }, [router]);

  return (
    <Flex direction={"column"} minH="100vh" bgColor={isDarkMode ? "black" : "white"}>
      <Flex borderBottom={"1px solid"} borderColor={"gray.200"} bg={isDarkMode ? "black" : "white"} justify={"space-between"} w={"100%"} padding={"1rem"}>
        <Text
          fontSize={"2xl"}
          fontWeight={"600"}
          color={isDarkMode ? "white" : "black"}
        >
          Criar produtos:
        </Text>
        <Button 
          bg={"green.500"}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          gap={2}
          _hover={{ bg: "green.600" }}
          onClick={onOpen}
        >
          <IoIosAdd size={"1.5rem"} />
        </Button>
        {isOpen && <CreateProductModal isOpen={isOpen} onClose={onClose} />}
      </Flex>
      <Box w={"100%"} h={"100%"} flexDir={"column"} bg={isDarkMode ? "black" : "white"} display={"flex"} justifyContent={"center"} p={4}>
        {productData?.length > 0 ? (
          <ProductList />
        ) : (
          <Loader />
        )}
      </Box>

    </Flex>
  );
}
