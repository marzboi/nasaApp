import { useDispatch } from "react-redux";
import { useAppSelector } from "../../core/store/hook";
import { AppDispatch } from "../../core/store/store";
import { Project } from "../models/data";
import { ApiRepository } from "../../core/services/api.repository";
import { useCallback, useMemo } from "react";
import { projectsAsync } from "../redux/marketplace.slice";

export function useMarketplace() {
  const { projects } = useAppSelector((state) => state.marketplace);

  const dispatch: AppDispatch = useDispatch();

  const repo: ApiRepository<Project> = useMemo(
    () => new ApiRepository<Project>("http://localhost:3000/projects/"),
    []
  );

  const handleLoad = useCallback(async () => {
    dispatch(projectsAsync(repo));
  }, [repo, dispatch]);

  return {
    projects,
    handleLoad,
  };
}
