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
    <List className="d-flex flex-row">
      {projects.map((item) => (
        <ListItem key={item.id} className="container text-center">
          <ProjectCard item={item} />
        </ListItem>
      ))}
    </List>
  );
}
