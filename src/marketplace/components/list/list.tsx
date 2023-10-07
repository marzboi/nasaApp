import { useEffect } from "react";
import { useMarketplace } from "../../hooks/use.marketplace";
import { ProjectCard } from "../project-card/project-card";
import { Flex, ListItem, List, Box } from "@chakra-ui/react";

export function ProjectsList() {
  const { handleLoad, projects } = useMarketplace();

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <List>
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="1rem" marginBottom="2rem">
        {projects.map((item) => (
          <ListItem
            key={item.id}
            className="container text-center"
            marginRight="auto"
            marginBottom="1rem"
          >
            <ProjectCard item={item} />
          </ListItem>
        ))}
      </Box>
    </List>
  );
}