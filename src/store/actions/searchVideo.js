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

export const searchVideoSuccess = (videos) => {
    return{
        type: 'SUCCESS_SEARCH_VIDEO',
        videos,
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
        youtubeSearch(API_KEY, {q:word})
        .then((data) => dispatch(searchVideoSuccess(data.items)))
        .catch( () => dispatch(searchVideoError()) )
    }
}