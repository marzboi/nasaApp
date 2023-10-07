import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Project } from "../models/data";
import { ApiRepository } from "../../core/services/api.repository";

export type marketplaceState = {
  projects: Project[];
};

const initialState: marketplaceState = {
  projects: [],
};

export const projectsAsync = createAsyncThunk(
  "characters/load",
  async (repo: ApiRepository<Project>) => {
    return await repo.fetchAll();
  }
);

const nasaSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(projectsAsync.fulfilled, (state, action) => {
      state.projects = action.payload;
    });
  },
});

export default nasaSlice.reducer;
