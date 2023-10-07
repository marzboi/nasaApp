import { createSlice } from "@reduxjs/toolkit";

export type CharacterState = {
  hello: string;
};

const initialState: CharacterState = {
  hello: "world",
};

const nasaSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
});

export default nasaSlice.reducer;
