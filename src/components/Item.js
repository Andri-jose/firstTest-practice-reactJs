import React from 'react';
import './Item.css';
// import ItemDetailContainer from './Detail/ItemDetailContainer';
import { Link } from 'react-router-dom';


function Item({id,img,price,title}) {
    return (
        <article className='item mx-3 pt-2 mt-5' key={id}>
            {/* <p>{id}</p> */}
            <p><Link to={`/item/${id}`}>{title}</Link></p>  
            <img className='img' src={img} alt='description product'></img> 
            <p className='pt-2'>{price}</p>
            <button><Link to={`/item/${id}`}>Show Detail</Link></button>
            {/* <ItemDetailContainer /> */}
            
        </article>
      
    )
   
}
// img src={ require('./img/${i.image}')} />)}

export default Item;

