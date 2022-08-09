import { Container, Stack, Box, Avatar, Heading } from '@chakra-ui/react';

const View = () => {
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
                  <Avatar name='DevMartinese' />
                </Stack>

                <Stack alignItems='center' padding={'10px'}>
                  <Heading as='h6' size='sm'>
                    WELCOME Gonzalo
                  </Heading>
                </Stack>
              </Stack>
            </Stack>
          </Container>
        </Box>
      </Stack>
    </>
  );
}

export default View;