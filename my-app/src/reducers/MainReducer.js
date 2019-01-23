import {GET_DATA_SUCCESS} from "../actions/Type";
const initialState = {
    mainData: ""
}
export default function(state = initialState, action){
    const {type, data} = action;
    switch(type){
        case GET_DATA_SUCCESS:
            return {...state, mainData: data};
        default:
            return state;
    }
}