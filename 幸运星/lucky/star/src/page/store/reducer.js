import {
    INPUT_VALUE,
    ADD_VALUE,
    DEL_VALUE,
    GET_LIST
} from './reducre_name'

const defaultState = {
    inputValue : "",
    list:[
        "大佬早上好",
        "大佬中午好",
        "大佬晚上好"
    ]
}

export default (state = defaultState, action) =>{
    
    switch(action.type){
        case INPUT_VALUE :
        return {...state, inputValue:action.value}

        case ADD_VALUE :
        let netState = JSON.parse(JSON.stringify(state));
        if(!netState.inputValue) return netState;
        netState.list.push(netState.inputValue);
        netState.inputValue = "";
        return netState

        case DEL_VALUE :
        let netState2 = JSON.parse(JSON.stringify(state));
        netState2.list.splice(action.index,1);
        return netState2

        case GET_LIST :
        return {...state,list:action.data.list}
        default : return state
    }
}