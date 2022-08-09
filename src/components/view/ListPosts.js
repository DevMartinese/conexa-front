import { useContext, useEffect } from "react";
import { Grid, GridItem, Box, Stack, Text, Container } from '@chakra-ui/react';
import AuthContext from '../../context/auth/authContext';

const ListPosts = () => {
  const authContext = useContext(AuthContext);
  const { posts, obtenerPosts } = authContext;

  useEffect(() => {
    obtenerPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <Grid templateColumns='repeat(5, 1fr)' gap={6}>
      {posts.map(post => (
        <GridItem key={post.id} w='100%'>
          <Box 
            p={4}
            display={{ md: "flex" }}
            maxWidth="32rem"
            maxHeight="32rem"
            borderWidth={1}
            margin={2}
          >
            <Stack
              align={{ base: "center", md: "stretch" }}
              textAlign={{ base: "center", md: "left" }}
              mt={{ base: 4, md: 0 }}
              ml={{ md: 6 }}
            >
              <Text
                fontWeight="bold"
                textTransform="uppercase"
                fontSize="lg"
                letterSpacing="wide"
                color="teal.600"
              >
                {post.title}
              </Text>

              <Text my={2} color="gray.500">
                {post.title}
              </Text>
            </Stack>
          </Box>
        </GridItem>
      ))}
    </Grid>
  );
}

export default ListPosts;