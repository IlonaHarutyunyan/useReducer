import React, { useContext, useReducer } from 'react'
import axios from'axios'
import {baseDataURL} from './../API/index'

export const BaseDataContext = React.createContext()

export const baseData = (dispatch) => {
    dispatch({type:'LOADING_DATA'})
    axios.get(baseDataURL)
    .then((res) => {
        dispatch({
            type: "DOWNLOAD_DATA",
            payload: res.data,
        });
    })
}
const asdf = {
    useData:[]
}

function reducer (state, action){
    switch(action.type){
        case 'LOADING_DATA' :
            return{
                ...state,
                useData: []
            };
        case 'DOWNLOAD_DATA':
            return{
                ...state,
                useData: action.payload
            };
        case 'DELETE_PRODUCT':
            return{
                ...state,
                useData: [
                    ...state.useData.filter((product) => product.id !== action.id),
                ]
            };   
        default:
            return { ...state };
    }
}
export const deleteProduct = (id,dispatch) =>{
    dispatch ({type:'DELETE_PRODUCT',id:id})
}
export const BaseDataContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,asdf)
    return(
        <BaseDataContext.Provider value = {{state,dispatch}}>
            {children}
        </BaseDataContext.Provider>
    )
}
