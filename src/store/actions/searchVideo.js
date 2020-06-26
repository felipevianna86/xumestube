import youtubeSearch from 'youtube-api-v3-search'
import YTAPI from '../../api'

const API_KEY = YTAPI;

export const initSearchVideo = () => {
    return{
        type: 'INIT_SEARCH_VIDEO',
        loading: true,
        error:false
    }
}

export const searchVideoSuccess = (data) => {
    return{
        type: 'SUCCESS_SEARCH_VIDEO',
        videos:data.items,
        nextPage:data.nextPageToken,
        pageInfo:data.pageInfo,
        prevPage:data.prevPageToken,
        loading: false,
        error: false
    }
}

export const searchVideoError = () => {
    return{
        type: 'ERROR_SEARCH_VIDEO',
        loading: false,
        error: true
    }
}

export const searchVideo = (word) => {
    return dispatch => {
        dispatch(initSearchVideo())
        youtubeSearch(API_KEY, {q:word, maxResults:4})
        .then((data) => dispatch(searchVideoSuccess(data)))
        .catch( () => dispatch(searchVideoError()) )
    }
}

export const getNext = (page) => {
    return dispatch => {
        dispatch(initSearchVideo())
        youtubeSearch(API_KEY, {maxResults:4, pageToken:page})
        .then((data) => dispatch(searchVideoSuccess(data)))
        .catch( () => dispatch(searchVideoError()) )
    }
}

export const getPrev = (page) => {
    return dispatch => {
        dispatch(initSearchVideo())
        youtubeSearch(API_KEY, {maxResults:4, pageToken:page})
        .then((data) => dispatch(searchVideoSuccess(data)))
        .catch( () => dispatch(searchVideoError()) )
    }
}