import { useContext, useEffect, useState } from "react";
import { Grid, GridItem, Box, Image, ButtonGroup, Button } from '@chakra-ui/react';
import AuthContext from '../../context/auth/authContext';

const ListPhotos = () => {
  const authContext = useContext(AuthContext);
  const { photos, obtenerPhotos } = authContext;

  const [page, setPage] = useState(1);

  const handleNext = () => {
    setPage(page + 1);
    obtenerPhotos(page);
  }

  const handlePrevious = () => {
    setPage(page - 1);
    obtenerPhotos(page);
  }

  useEffect(() => {
    obtenerPhotos(page);
    // eslint-disable-next-line
  }, [page]);


  return (
    <>
      <Grid templateColumns='repeat(5, 1fr)' gap={6}>
        {photos.map((photo) => (
          <GridItem key={photo.id}>
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
              <Image src={photo.url} alt={photo.url} />
              <Box p='6'>
                <Box
                  mt='1'
                  fontWeight='semibold'
                  as='h4'
                  lineHeight='tight'
                  noOfLines={1}
                >
                  {photo.title}
                </Box>
              </Box>
            </Box>
          </GridItem>
        ))}
      </Grid>

      <ButtonGroup spacing='6'>
        <Button colorScheme='blue' onClick={() => handlePrevious()}>prev</Button>
        <Button colorScheme='green' onClick={() => handleNext()}>next</Button>
      </ButtonGroup>
    </>
  )
}

export default ListPhotos;