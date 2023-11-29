import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from './addCommentFromSelectors';

describe('addCommentFromSelectors.test', () => {
    test('should return error', () => {
        const state:DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'error',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual('error');
    });

    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getAddCommentFormError(state as StateSchema)).toEqual(undefined);
    });

    test('should return form text', () => {
        const state:DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'text',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual('text');
    });
    test('should work with empty state', () => {
        const state:DeepPartial<StateSchema> = {};
        expect(getAddCommentFormText(state as StateSchema)).toEqual('');
    });
});
