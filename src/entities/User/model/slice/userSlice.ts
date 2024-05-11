import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User, UserSchema } from '../types/user';

import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';
import { setFeatureFlags } from '@/shared/features';
import { JsonSettings } from '../types/jsonSettings';
import { saveJsonSettings } from '../services/saveJsonSettings/saveJsonSettings';

const initialState: UserSchema = {
    _inited: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData(state, action: PayloadAction<User>) {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
        },
        initAuthData(state) {
            const user = localStorage.getItem(USER_LOCALSTORAGE_KEY);
            if (user) {
                const jsonUser = JSON.parse(user) as User;
                state.authData = jsonUser;
                setFeatureFlags(jsonUser.features);
            }

            state._inited = true;
        },
        logout(state) {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCALSTORAGE_KEY);
        },
    },
    extraReducers(builder) {
        builder.addCase(
            saveJsonSettings.fulfilled,
            (state, { payload }: PayloadAction<JsonSettings>) => {
                if (state.authData) state.authData.jsonSettings = payload;
            },
        );
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
