import { Box, Flex, useColorMode } from "@chakra-ui/react";
import { Sidebar } from "../../layout/sidebar/sidebar.tsx";
import { Navbar } from "../../layout/navbar/navbar.tsx";
import { ProjectsList } from "../../marketplace/components/list/list";

export function App() {
  const { colorMode } = useColorMode();
  return (
    <Box className="flex flex-col h-full min-h-screen overflow-y-hidden" bg={colorMode === "dark" ? "slate.800" : "white"}>
      <Navbar />
      <Flex className="flex flex-row flex-1">
        <Box className="w-full">
          <ProjectsList />
        </Box>
        <Sidebar />
      </Flex>
    </Box>
  );
}