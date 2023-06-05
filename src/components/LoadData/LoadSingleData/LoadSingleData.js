import React from 'react';
import './LoadSingleData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const LoadSingleData = (props) => {
    const { bike, addToCart } = props
    const { picture, name, price } = bike;
    // console.log(props.bike)
    return (
        <div className='single-product-container'>
            <div style={{ padding: '4px' }}>
                <img src={picture} alt="" />
            </div>
            <div className='bike-details'>
                <h3>Price : ${price}</h3>
                <h4>{name}</h4>

            </div>
            <button onClick={() => addToCart(bike)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default LoadSingleData;