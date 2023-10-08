import React from 'react'
import {
  Box,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,

} from '@chakra-ui/react'
import {MobileNav} from "./MobileNav.tsx";
import {SidebarContent} from "./SidebarContent.tsx";


export function Sidebar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4"/>
    </Box>
  )
}
