// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import { register } from '@/utils/authenticator';
// import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Input, Text } from '@chakra-ui/react';
// import { IoIosArrowBack } from "react-icons/io";


// export function RegisterComponent() {
//   const [name, setName] = useState('');
//   const [taxNumber, setTaxNumber] = useState('');
//   const [mail, setMail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const router = useRouter();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await register(name, taxNumber, mail, phone, password);
//       router.push('/login');
//     } catch (error) {
//       console.error('Erro no registro:', error);
//     }
//   };

//   return (
//     <Flex justify={"center"} mt={6}>
//       <Card justify={"center"} display={"flex"} w={"35%"}>
//         <CardHeader >
//           <IoIosArrowBack size={"2rem"} onClick={() => router.push('/login')}/>
//           <Heading fontSize={"2xl"}>Cadastro</Heading>
//         </CardHeader>
//         <form onSubmit={handleSubmit}>
//           <CardBody>
//             <Text>Nome</Text>
//             <Input
//               mb={4}
//               type="text"
//               placeholder="Exemplo: Abelardo"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <Text>CPF ou CNPJ</Text>
//             <Input
//               mb={4}
//               type="text"
//               placeholder="Exemplo: 999999999"
//               value={taxNumber}
//               onChange={(e) => setTaxNumber(e.target.value)}
//             />
//             <Text>E-mail</Text>
//             <Input
//               mb={4}
//               type="text"
//               placeholder="Exemplo: email@gmail.com"
//               value={mail}
//               onChange={(e) => setMail(e.target.value)}
//             />
//             <Text>Telefone</Text>
//             <Input
//               mb={4}
//               type="text"
//               placeholder="Exemplo: (21) 900000000"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <Text>Senha</Text>
//             <Input
//               mb={4}
//               type="password"
//               placeholder="Senha"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </CardBody>
//           <CardFooter>
//             <Button 
//               flex={1}
//               bg={"green.400"} 
//               color={"white"} 
//               _hover={{ bg: "green.500" }}
//               type="submit"
//             >
//               Enviar
//             </Button>
//           </CardFooter>
//         </form>
//       </Card>
//     </Flex>
//   );
// }


import { useState } from 'react';
import { useRouter } from 'next/router';
import { register } from '@/utils/authenticator';
import { Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { IoIosArrowBack } from "react-icons/io";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ícones para mostrar/ocultar senha

export function RegisterComponent() {
  const [name, setName] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await register(name, taxNumber, mail, phone, password);
      router.push('/login');
    } catch (error) {
      console.error('Erro no registro:', error);
    }
  };

  return (
    <Flex justify={"center"} mt={6}>
      <Card justify={"center"} display={"flex"} w={"35%"}>
        <CardHeader>
          <IoIosArrowBack size={"2rem"} onClick={() => router.push('/login')}/>
          <Heading fontSize={"2xl"}>Cadastro</Heading>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardBody>
            <Text>Nome</Text>
            <Input
              mb={4}
              type="text"
              placeholder="Exemplo: Abelardo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Text>CPF ou CNPJ</Text>
            <Input
              mb={4}
              type="text"
              placeholder="Exemplo: 999999999"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
            />
            <Text>E-mail</Text>
            <Input
              mb={4}
              type="text"
              placeholder="Exemplo: email@gmail.com"
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            <Text>Telefone</Text>
            <Input
              mb={4}
              type="text"
              placeholder="Exemplo: (21) 900000000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Text>Senha</Text>
            <InputGroup mb={4}>
              <Input
                type={showPassword ? "text" : "password"} // Alterna entre texto e senha
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <InputRightElement width="3rem">
                <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Ícone alternando */}
                </Button>
              </InputRightElement>
            </InputGroup>
          </CardBody>
          <CardFooter>
            <Button 
              flex={1}
              bg={"black"} 
              color={"white"} 
              type="submit"
            >
              Enviar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Flex>
  );
}
