import { useContext, useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import {
  Container,
  Stack,
  Box,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from '@chakra-ui/react';
import { ChevronDownIcon  } from '@chakra-ui/icons';
import { Route, Routes, Link } from "react-router-dom";
import ListPhotos from './ListPhotos';
import ListPosts from './ListPosts';

const View = () => {

  const authContext = useContext(AuthContext);
  const { usuarioAutenticado, usuario, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();

    //eslint-disable-next-line
  }, []);

  return (
    <>
      <Stack>
        <Box backgroundColor='#6B46C1' boxShadow='sm' paddingY={4}>
          <Container>
            <Stack>
              <Stack direction='row'>
                <Stack
                  maxWidth={600}
                  alignItems='center'
                  width='100%'
                  direction='row'
                  spacing={12}
                >
                  <Menu>
                  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Menu
                  </MenuButton>
                  <MenuList>
                    <MenuItem>
                      <Link to='/view/photos'>Photos</Link>
                    </MenuItem>
                    <MenuItem>
                      <Link to='/view/posts'>Posts</Link>
                    </MenuItem>
                    <MenuItem>
                      <Button onClick={() => cerrarSesion()}>Logout</Button>
                    </MenuItem>
                  </MenuList>
                </Menu>
                </Stack>

                <Stack alignItems='center' padding={'10px'}>
                  {usuario ? (<Heading as='h6' size='sm'> WELCOME {usuario.username} </Heading>) : <Heading as='h6' size='sm'> WELCOME To Conexa</Heading> }
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Stack>

      <Routes>
        <Route exact path="/" element={<ListPosts />} />
        <Route path="photos" element={<ListPhotos />} />
        <Route path="posts" element={<ListPosts />} />
      </Routes>
    </>
  );
}

export default View;