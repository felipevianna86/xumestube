import {combineReducers} from 'redux'

import search from './search'
import playVideo from './playVideo'

const rootReducer = combineReducers({
    search, playVideo
})

export default rootReducer;