import { useState } from 'react';
import { useRouter } from 'next/router';
import { login } from '@/utils/authenticator';
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Input, Link, Text } from '@chakra-ui/react';

export function Login() {
  const [taxNumber, setTaxNumber] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(taxNumber, password);
      router.push('/');
    } catch (error) {
      console.error('Erro no login:', error);
      alert("Esta conta não está cadastrada, cadastre-se")
    };
  };

  return (
    <Flex justify={"center"} mt={"10rem"}>
      <Card justify={"center"} display={"flex"} w={"35%"}>
        <CardHeader>
          <Heading fontSize={"2xl"} textAlign="center">Entrar</Heading>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardBody>
            <Text>CPF/CNPJ</Text>
            <Input
              mb={4}
              type="text"
              placeholder="CPF ou CNPJ"
              value={taxNumber}
              onChange={(e) => setTaxNumber(e.target.value)}
            />
            <Text>Senha</Text>
            <Input
              type="password"
              placeholder="Digite sua senha para logar"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Text mt={4}>
              Não tem uma conta? <Link color={"blue.600"} fontWeight={"bold"} href="/register">Cadastre-se</Link>
            </Text>
          </CardBody>

          <CardFooter w={"100%"}>
            <Button
              w={"100%"}
              bg={"black"}
              color={"white"}
              type="submit"
            >
              Logar
            </Button>
          </CardFooter>
        </form>
      </Card>
    </Flex>
  );
}
