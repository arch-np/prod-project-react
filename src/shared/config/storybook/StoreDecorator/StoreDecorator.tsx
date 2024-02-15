import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '@/entities/Article/model/slices/articleDetailsSlice';
import { addCommentFormReducer } from '@/features/AddCommentForm/model/slices/addCommentFormSlice';
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/model/slices';
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
