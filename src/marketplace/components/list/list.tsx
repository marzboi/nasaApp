import { useEffect } from "react";
import { useMarketplace } from "../../hooks/use.marketplace";
import { ProjectCard } from "../project-card/project-card";
import { Flex, ListItem, List } from "@chakra-ui/react";

export function ProjectsList() {
  const { handleLoad, projects } = useMarketplace();

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <List>
      <Flex flexWrap="wrap" marginBottom="2rem">
        {projects.map((item) => (
          <ListItem
            key={item.id}
            className="container text-center"
            marginRight="1rem"
            marginBottom="1rem"
          >
            <ProjectCard item={item} />
          </ListItem>
        ))}
      </Flex>
    </List>
  );
}