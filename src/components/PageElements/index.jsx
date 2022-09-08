import React,{ useContext } from 'react'
import { BaseDataContext ,deleteProduct} from '../../Data/getData'
import PopUp from '../PopUp'
import './style.css'

import { BsFillPencilFill } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';


function Product() {
  const context = useContext(BaseDataContext)
  return (
    <div className = 'productsWrapper'>
        {context.state.useData && context.state.useData.map((value,index) => {
            return(
                <div key = {index} className = 'product-wrapper'>
                    <img src={value.image} alt="" className = 'image'/>
                    <div className ='text-wrapper'>
                       <h3>{value.title}</h3>
                        <p>{value.description}</p> 
                        <h4>{value.price} $</h4>
                    </div>
                    <div>
                        <button onClick = {() => {
                        deleteProduct(value.id, context.dispatch)
                    }} className = 'buttonStyle'><MdDelete className = 'iconStyle'/></button>
                    <button onClick = {() => {
                        <PopUp/>
                    }} className = 'buttonStyle'><BsFillPencilFill className = 'iconStyle'/></button> 
                    </div>
                </div>
            )  
        })} 
    </div>
  )
}

export default Product
