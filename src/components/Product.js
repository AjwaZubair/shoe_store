import React from 'react';
import { Link } from 'react-router-dom';
import Shoes from './../shoes';

//import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import { makeStyles } from '@material-ui/core/styles';

// import ProductItem from './ProductItems'

const useStyles = makeStyles ();

function Product() {
    const classes = useStyles();

    return (
        <>
            <h1>Welcome to Product</h1>

            <div className="productContainer">
                
                {Object.entries(Shoes.shoes).map(([slug, {name, img}]) =>    (     
                    
                    
                    
                    <Link 
                            className= "link" to={`/Product/${slug}`}>
                                  
                                <h4>{name}</h4>
                                <img src={img} height={300} alt="shoe" />
                    </Link>
                  
                )
                )
                        
                
                            }
                            
            </div>
        </>
    );
    
}

export default Product;