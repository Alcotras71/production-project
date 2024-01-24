import { StoryFn } from '@storybook/react';
import { ReducersMapObject } from '@reduxjs/toolkit';

import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginReducer } from '@/features/AuthByUsername';
import { articleDetailsReducer } from '@/entities/Article';
import { addCommentFormReducer } from '@/features/AddCommentForm';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage';
import { profileReducer } from '@/features/EditableProfileCard';
import { articlesPageReducer } from '@/pages/ArticlesPage';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,
    articlesPage: articlesPageReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>,
) => (Story: StoryFn) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
