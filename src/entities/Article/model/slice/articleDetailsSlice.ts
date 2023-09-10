import { createSlice } from '@reduxjs/toolkit';

import { fetchArticleById } from 'entities/Article/model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
    isLoading: false,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchArticleById.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
        }).addCase(fetchArticleById.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(fetchArticleById.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});

export const {
    actions: articleDetailsActions,
    reducer: articleDetailsReducer,
} = articleDetailsSlice;
