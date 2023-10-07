import { useEffect } from "react";
import { useMarketplace } from "../../hooks/use.marketplace";
import { ProjectCard } from "../project-card/project-card";

export function List() {
  const { handleLoad, projects } = useMarketplace();

  useEffect(() => {
    handleLoad();
  }, [handleLoad]);

  return (
    <>
      <ul>
        {projects.map((item) => (
          <ProjectCard key={item.id} item={item}></ProjectCard>
        ))}
      </ul>
    </>
  );
}
