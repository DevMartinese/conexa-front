import { Button, FormLabel, FormControl, VStack, Box, Flex, Input, FormErrorMessage } from '@chakra-ui/react'
import React, { useContext, useEffect } from "react";
import { Navigate } from 'react-router-dom';
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const alertaContext = useContext(AlertContext);
  const { alerta, mostrarAlerta } = alertaContext;

  const authContext = useContext(AuthContext);
  const { autenticado, iniciarSesion, mensaje } = authContext;
  
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Ingresa un correo valido")
        .required("El email es obligatorio"),
      password: Yup.string()
        .min(6, "La contraseña debe tener al menos 6 caracteres")
        .required("La contraseña es obligatorio")
    }),
    onSubmit: (formData) => {
      iniciarSesion(formData);
    },
  });

  useEffect(() => {
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
     // eslint-disable-next-line
  }, [mensaje]);

  if (autenticado) {
    return <Navigate to="/view" />
  }

  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null }
    <Box bg="white" p={6} rounded="md">
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing={4} align="flex-start">
          <FormControl isInvalid={formik.errors.email}>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <Input
              id="email"
              name="email"
              type="email"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email}
            />
            <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={formik.errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              name="password"
              type="password"
              variant="filled"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
          </FormControl>
          <Button type="submit" colorScheme="purple" width="full">
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  </Flex>
  );
}

export default Login;