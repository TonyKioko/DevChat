import * as actionTypes from '../actions/types'
import {combineReducers} from 'redux'


const initalState = {
    currentUser:null,
    isLoading:false
}

const user_reducer = (state=initalState,action) => {
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                currentUser:action.payload.currentUser,
                isLoading:true
            }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    user:user_reducer
})

export default rootReducer;