import { addCommentForArticle } from './addCommentForArticle';
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Comment } from '@/entities/Comment';

const comment:Comment = {
    id: '1',
    text: 'test comment',
    user: {
        id: '1',
        username: 'admin',
    },
};
describe('addCommentForArticle', () => {
    /* test('success', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);

        thunk.api.post.mockReturnValue(Promise.resolve({ comment }));

        const result = await thunk.callThunk(comment.text);

        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(comment);
    }); */
    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(addCommentForArticle);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
