import { Box, Text, Link, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

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
      <Menu>
        <Text fontSize="lg" fontWeight="bold" mb="2">
          My Projects
        </Text>
        <MenuButton as={Link} color="blue.500" cursor="pointer">
          Project Menu
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} href="#">
            Project 1
          </MenuItem>
          <MenuItem as={Link} href="#">
            Project 2
          </MenuItem>
          <MenuItem as={Link} href="#">
            Project 3
          </MenuItem>
        </MenuList>
      </Menu>

      <Box mt="4">
        <Text fontSize="lg" fontWeight="bold" mb="2">
          Last Project Seen
        </Text>
        <Link href="#">Last Project</Link>
      </Box>

      <Menu>
        <Text fontSize="lg" fontWeight="bold" mt="4" mb="2">
          Partners
        </Text>
        <MenuButton as={Link} color="blue.500" cursor="pointer">
          Partners Menu
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} href="#">
            Partner 1
          </MenuItem>
          <MenuItem as={Link} href="#">
            Partner 2
          </MenuItem>
          <MenuItem as={Link} href="#">
            Partner 3
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
