import { Box, Link, Text } from '@chakra-ui/react';


export function Sidebar() {

  return (
    <Box
      width="250px"
      height="100vh"
      top="0"
      left="0"
      display="flex"
      flexDirection="column"
      p="4"
    >
      <Text fontSize="xl" fontWeight="bold" mb="4">
        My Sidebar
      </Text>
      <Box>
        <Text fontSize="lg" fontWeight="bold" mb="2">
          My Projects
        </Text>
        <Link href="#">Project 1</Link>
        <Link href="#">Project 2</Link>
        <Link href="#">Project 3</Link>
      </Box>
      <Box mt="4">
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Last Project Seen
        </Text>
        <Link href="#">Last Project</Link>
      </Box>
      <Box mt="4">
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Partners
        </Text>
        <Link href="#">Partner 1</Link>
        <Link href="#">Partner 2</Link>
        <Link href="#">Partner 3</Link>
      </Box>
    </Box>
  );
};
