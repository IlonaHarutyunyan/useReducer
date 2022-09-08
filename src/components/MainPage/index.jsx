import React, { useContext, useEffect } from 'react'
import Product from '../PageElements'
import {baseData} from './../../Data/getData'
import {BaseDataContext,BaseDataContextProvider,dispatch} from './../../Data/getData'


function MainPage() {
    const context = useContext(BaseDataContext)
    useEffect(() =>{
        baseData(context.dispatch)
    },[])

  return (
    <div>
      <Product/>
    </div>
  )
}

export default MainPage
