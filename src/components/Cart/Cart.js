import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { removeItemid } from '../../utilities/localStorage';

const Cart = (props) => {
    const { cart } = props;

    return (
        <div id='cart-product'>
            <div style={{
                textShadow: "2px 2px 6px red"
            }} className='cart-info-header'>
                <h3>Bike</h3>
                <h3>price</h3>
                <h3>Quantity</h3>
            </div>

            {
                cart.map(item =>
                    <table className='table' key={item.id}>
                        <tbody>
                            <tr id='cartInfo' className='table-row'>
                                <td><img src={item.picture} alt="" /></td>
                                <td>${parseFloat(item.price * item.quantity).toFixed(2)}</td>
                                <td>{item.quantity}</td>
                                <td>
                                    <button onClick={() => removeItemid(item)}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                )
            }

        </div >
    );
};
export default Cart;