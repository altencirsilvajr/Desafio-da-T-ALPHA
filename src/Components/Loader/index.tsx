import { Box, Text } from "@chakra-ui/react";
import { PulseLoader } from "react-spinners";
import { useContextGlobal } from "../Context";

export function Loader() {
    const { isDarkMode } = useContextGlobal();
    return (
        <Box
            display={"flex"}
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            w={"100%"}
            h={"100%"}
            bg={"transparent"}
            mt={10}
        >
            <Text
                fontSize="2rem"
                color={isDarkMode ? "white":"black"}
            >
                Sem produtos... Crie agora mesmo no botão acima
            </Text>
        </Box>
    )
}