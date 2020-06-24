const initialState = {
    videos:[],
    loading:false,
    error: false
}


export default function search(state = initialState, action){
    switch (action.type) {
        case 'INIT_SEARCH_VIDEO':
            return {
                ...state,
                videos: [],
                loading:true,
                error:false
            }
        case 'SUCCESS_SEARCH_VIDEO':
            return {
                ...state,
                videos:action.videos,
                loading:false,
                error:false
            }
        case 'ERROR_SEARCH_VIDEO':
            return {
                ...state,
                videos:[],
                loading:false,
                error:true
            }       
        default:
            return state;
    }
}