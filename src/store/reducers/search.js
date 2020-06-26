const initialState = {
    videos:[],
    pageInfo:{},
    nextPage:"",
    prevPage:"",
    loading:false,
    error: false
}


export default function search(state = initialState, action){
    switch (action.type) {
        case 'INIT_SEARCH_VIDEO':
            return {
                ...state,
                videos: [],
                pageInfo:{},
                nextPage:"",
                prevPage:"",
                loading:true,
                error:false
            }
        case 'SUCCESS_SEARCH_VIDEO':
            return {
                ...state,
                videos:action.videos,
                pageInfo:action.pageInfo,
                nextPage:action.nextPage,
                prevPage:action.prevPage,
                loading:false,
                error:false
            }
        case 'ERROR_SEARCH_VIDEO':
            return {
                ...state,
                videos:[],
                pageInfo:{},
                nextPage:"",
                prevPage:"",
                loading:false,
                error:true
            }       
        default:
            return state;
    }
}