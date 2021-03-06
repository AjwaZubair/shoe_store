import React from 'react';
import { useParams } from 'react-router-dom';
import Shoes from './../shoes';
import Product from './Product'
//import { makeStyles } from '@material-ui/core/styles';



function ProductItem() {
    
   

    const { slug } = useParams();
    console.log(slug)
    const shoe = Shoes.shoes[slug];
    console.log(shoe)
    if (!shoe) {
        return (<h2>Product Not Found!</h2>
        )
    }
    const { name, img } = shoe
    return (
        <div>
            <h1>Product Item</h1>
            <div classname="link">
            
                <h4>{name}</h4>
                <img src={img} height={500} alt="shoes" />
            </div> 
           <Product className="productContainer" />
        </div>
       
    );
}

export default ProductItem;