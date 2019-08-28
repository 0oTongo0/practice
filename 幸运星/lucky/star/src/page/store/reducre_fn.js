import {
    INPUT_VALUE,
    ADD_VALUE,
    DEL_VALUE,
    GET_LIST
} from './reducre_name';
export const changValue = (value)=>(
    {
        type:INPUT_VALUE,
        value
    }
)

export const addValue = ()=>(
    {
        type:ADD_VALUE,
    }
)

export const deleteValue = (index) =>(
    { 
        type:DEL_VALUE,
        index
    }
)

export const getlist = (data) =>({
        type:GET_LIST,
        data
})