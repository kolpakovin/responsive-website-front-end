import React from 'react';
import './product.css'

const Product = props => {
    return (
        <div id="product">
            <div className="product-name">
                <h2>Product</h2>
            </div>
            <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consequuntur.</h5>
            <button>Read More</button>
        </div>
    )
}

export default Product;