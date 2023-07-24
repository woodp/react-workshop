import { createSlice } from "@reduxjs/toolkit";

export const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: [],
  },
  reducers: {
    addImage: (state, {payload}) => {
      state.images.push(payload)
    },
    resetImages: (state) => {
      state.images = []
    },
  }
})

export const { addImage, resetImages } = imagesSlice.actions;