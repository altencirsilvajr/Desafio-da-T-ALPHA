import { useContextGlobal } from "@/Components/Context";
import { logout } from "@/utils/authenticator";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { IoIosLogIn, IoMdMoon } from "react-icons/io";

export function Header() {

   const {isDarkMode, setIsDarkMode } = useContextGlobal();
   
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <HStack 
           p={"1rem"}   
           borderBottom={"1px"} 
           borderColor={"gray.200"} 
           bg={isDarkMode ? "black" : "white"} 
           justify={"space-between"} 
           display={"flex"}
       >
           <Text 
               fontFamily="inherit" 
               fontSize={"x-large"} 
               color={isDarkMode ? "white" : "black"}>
               DESAFIO T-Alpha
           </Text>
           <HStack justifyContent={"flex-end"}>
               <Button
                   display={router.pathname === '/' ? 'flex' : 'none'}
                   _hover={{ bg: "red.800" }}
                   bg={"red.500"}
                   color={"white"}
                   onClick={handleLogout}
               >
                   <IoIosLogIn />
               </Button>

               <Button
                   display={router.pathname === '/' ? 'flex' : 'none'}
                   _hover={{ bg: "blue.100" }}
                   bg={isDarkMode ? "white" : "black"}
                   color={isDarkMode ? "black" : "white"}
                   onClick={() => setIsDarkMode(!isDarkMode)}
               >
                   <IoMdMoon/>
               </Button>
           </HStack>
       </HStack>
    )
}