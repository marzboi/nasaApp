import { useEffect, useState } from "react";
import { useMarketplace } from "../../hooks/use.marketplace";
import { ProjectCard } from "../project-card/project-card";
import { ListItem, List, Box } from "@chakra-ui/react";
import styles from "./list.module.scss";

export function ProjectsList() {
  const { handleLoad, projects } = useMarketplace();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    handleLoad();

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleLoad]);

  return (
    <List className={styles.list}>
      <Box
        display="grid"
        gridTemplateColumns={isMobile ? "1fr" : "repeat(3, 1fr)"}
        gap="1rem"
        marginBottom="2rem"
      >
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
