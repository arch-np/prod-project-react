import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import {
    fetchCommentsByArticleId,
} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
describe('fetchCommentsByArticleId.test', () => {
    test('error fetch', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
