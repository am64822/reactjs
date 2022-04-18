import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../store/articles/actions';
import { selectArticles, selectArticlesError, selectArticlesStatus } from '../../store/articles/selectors';
import { FETCH_STATUSES } from '../../utils/constants';
import './Articles.css';

export const Articles = () => {
    const dispatch = useDispatch();
    const articles = useSelector(selectArticles);
    const error = useSelector(selectArticlesError);
    const status = useSelector(selectArticlesStatus);
    
    //const [articles, setArticles] = useState([]);
    //const [error, setError] = useState(null);
    //const [loadingStatus, setLoadingStatus] = useState(0); // 0 - initial (or done), 1 - loading, 2 - error   

    const sendRequest = () => {
        dispatch(getArticles());
    }
    
    useEffect(() => {
        sendRequest();
    }, []);

    return (
        <>
            <div className='interimHeader'>Articles
                <button onClick={sendRequest} className='buttonGet'>Get</button>
            </div>
            {(status === FETCH_STATUSES.REQUEST) && <div className='interimHeader loading'>Loading</div>}
            {(status === FETCH_STATUSES.FAILURE) && <div className='interimHeader error'>{error}</div>}
            {(status === FETCH_STATUSES.SUCCESS) &&
            <ul>

                {articles.map((article, index) => (
                    <li key={index}>{article.title}</li>
                ))}
            </ul>}
        </>
    );
}