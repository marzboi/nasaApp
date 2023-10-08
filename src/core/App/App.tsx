import {
  Box,
  Flex,
  CSSReset,
  useColorModeValue,
  extendTheme,
  ThemeConfig,
  ChakraProvider,
} from "@chakra-ui/react";
import { Sidebar } from "../../layout/sidebar/sidebar.tsx";
import { Navbar } from "../../layout/navbar/navbar.tsx";
import { ProjectsList } from "../../marketplace/components/list/list";
export function App() {
  const config: ThemeConfig = {
    initialColorMode: "dark",
    useSystemColorMode: false,
  };

  const theme = extendTheme({
    config,
    colors: {
      card: {
        background: useColorModeValue("white", "gray.800"),
        headerBackground: useColorModeValue("gray.100", "gray.700"),
        bodyBackground: useColorModeValue("gray.200", "gray.700"),
      },
    },
    fonts: {
      body: "Arial, sans-serif",
      heading: "Helvetica, sans-serif",
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Box className="flex flex-col h-full min-h-screen overflow-y-hidden">
        <CSSReset />
        <Navbar />
        <Flex className="flex flex-row flex-1">
          <Box className="w-full">
            <ProjectsList />
          </Box>
          <Sidebar />
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
