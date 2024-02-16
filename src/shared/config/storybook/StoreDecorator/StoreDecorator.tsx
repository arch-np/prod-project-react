import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
// eslint-disable-next-line pp-checker/public-api-imports
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line pp-checker/public-api-imports
import { articleDetailsReducer } from '@/entities/Article/model/slices/articleDetailsSlice';
// eslint-disable-next-line pp-checker/public-api-imports
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line pp-checker/public-api-imports
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
// eslint-disable-next-line pp-checker/public-api-imports
import { profileReducer } from '@/features/editableProfileCard/model/slice/profileSlice';

const defaultAsyncReducers:ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer,

};

export const storeDecorator = (
    state:DeepPartial<StateSchema>,
    asyncReducers?:ReducersList,
) => (Story:StoryFn) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }} >
        <Story/>
    </StoreProvider>
);
