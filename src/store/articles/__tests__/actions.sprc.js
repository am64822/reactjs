import { getArticles, getArticlesRequest, getArticlesSuccess } from "../actions";

describe('getArticles', () => {
    it('dispatches getArticlesRequest', () => {
        const mockDispatch = jest.fn();
        getArticles()(mockDispatch);

        expect(mockDispatch).toHaveBeenCalledWith(getArticlesRequest()); 
    });

    it('dispatches getArticlesSuccess with fetch result', async () => {
        const data = [{name: 'text'}];
        fetch.mockResponse(JSON.stringify(data));
        const mockDispatch = jest.fn();

        await getArticles()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess(data)); 
    });

    /*it('dispatches getArticlesSuccess with fetch result', async () => {
        const data = [{name: 'text'}];
        fetch.mockResponse(JSON.stringify(data));
        const mockDispatch = jest.fn();

        await getArticles()(mockDispatch);
        expect(mockDispatch).toHaveBeenLastCalledWith(getArticlesSuccess([])); 
    });*/

});