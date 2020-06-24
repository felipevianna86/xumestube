const initialState = {
    videos:{}
}

export default function playVideo(state = initialState, action){
    if(action.type === 'PLAY_VIDEO'){
        return {
            video:action.video
        }
    }else{
        return state
    }
}