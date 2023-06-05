import React, { useEffect, useState } from 'react';
import './Loaddata.css'
import LoadSingleData from './LoadSingleData/LoadSingleData';
import Cart from '../Cart/Cart';
import { addTodb, checkCart } from '../../utilities/localStorage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

const LoadData = () => {
    const [bikes, setBikes] = useState([]);
    const [cart, setCart] = useState([]);
    const [randomSelector, setRandomSelector] = useState(null)
    const [showRandomProduct, setShowRandomProduct] = useState(false)
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    const addToCart = (bike) => {
        let newCart = []
        const existBike = cart.find(bikeExist => bikeExist.id === bike.id);
        if (!existBike) {
            bike.quantity = 1;
            newCart = [...cart, bike];
        }
        else {
            const restBikes = cart.filter(existBikes => existBikes.id !== bike.id);
            existBike.quantity = existBike.quantity + 1;
            newCart = [...restBikes, existBike];
        }
        setCart(newCart)
        addTodb(bike.id)
    }
    useEffect(() => {
        let storedCart = checkCart();
        let savedCart = [];
        for (let id in storedCart) {
            const bikeId = bikes.find(bike => bike.id === id)
            if (bikeId) {
                const newCartQuantity = storedCart[id];
                bikeId.quantity = newCartQuantity;
                savedCart.push(bikeId);
            }
        }
        setCart(savedCart)

    }, [bikes]);
    const chooser = () => {
        const cartInfo = [...cart]
        if (cartInfo.length > 0) {

            const random = Math.floor(Math.random() * cartInfo.length);
            const randomPro = cartInfo[random];
            // console.log(randomPro.id);
            setRandomSelector(randomPro);
            setShowRandomProduct(true)
        }
    }

    const clearCart = () => {
        localStorage.removeItem('cart');
        setCart([]);
        setRandomSelector([]);
        setShowRandomProduct(false)
    }
    return (
        <div className='products-container'>
            <div className='social-links-container'>
                <div className='social-links'>
                    <a href="/f">B</a>
                    <a href="/t">I</a>
                    <a href="/l">K</a>
                    <a href="/i">E</a>
                    <a href="/i">S</a>
                    <div style={{ fontSize: '30px' }}><FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon></div>
                    <a href="/i">V</a>
                    <a href="/i">A</a>
                    <a href="/i">L</a>
                    <a href="/i">L</a>
                    <a href="/i">E</a>
                    <a href="/i">Y</a>
                </div>
            </div>
            <div className='bikes-container'>
                {
                    bikes.map(bike => <LoadSingleData key={bike.id} bike={bike} addToCart={addToCart}></LoadSingleData>)
                }
            </div>
            <div className='cart-container'>
                <div className='cart-Div'>
                    <h1 style={{
                        textShadow: "2px 2px 6px red"
                    }}>Shopping cart</h1>
                    <div>
                        <Cart cart={cart}></Cart>
                        {
                            randomSelector && showRandomProduct ? (
                                <div>
                                    <h1>Randomly Choosed Bike</h1>
                                    <img style={{ width: '60px', height: '60px' }} src={randomSelector.picture} alt="" />
                                    <p>Price : ${randomSelector.price}</p>
                                </div>) : (<div></div>)
                        }
                        <button onClick={chooser}>Choose 1 For Me</button><br />
                        <button onClick={chooser}>Choose Again</button><br />
                        <button onClick={() => clearCart()}>Clear Cart</button><br />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default LoadData;



// import React, { useEffect, useState } from 'react';
// import './Loaddata.css';
// import LoadSingleData from './LoadSingleData/LoadSingleData';
// import Cart from '../Cart/Cart';
// import { addTodb, checkCart } from '../../utilities/localStorage';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';

// const LoadData = () => {
//     const [bikes, setBikes] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [showRandomProduct, setShowRandomProduct] = useState(false);
//     const [randomProduct, setRandomProduct] = useState(null);

//     useEffect(() => {
//         fetch('data.json')
//             .then(res => res.json())
//             .then(data => setBikes(data));
//     }, []);

//     useEffect(() => {
//         let storedCart = checkCart();
//         let savedCart = [];
//         for (let id in storedCart) {
//             const bikeId = bikes.find(bike => bike.id === id);
//             if (bikeId) {
//                 const newCartQuantity = storedCart[id];
//                 bikeId.quantity = newCartQuantity;
//                 savedCart.push(bikeId);
//             }
//         }
//         setCart(savedCart);
//     }, [bikes]);

//     const addToCart = (bike) => {
//         let newCart = [];
//         const existBike = cart.find(bikeExist => bikeExist.id === bike.id);
//         if (!existBike) {
//             bike.quantity = 1;
//             newCart = [...cart, bike];
//         } else {
//             const restBikes = cart.filter(existBikes => existBikes.id !== bike.id);
//             existBike.quantity = existBike.quantity + 1;
//             newCart = [...restBikes, existBike];
//         }
//         setCart(newCart);
//         addTodb(bike.id);
//     };

//     const chooser = () => {
//         if (cart.length > 0) {
//             const randomIndex = Math.floor(Math.random() * cart.length);
//             const randomPro = cart[randomIndex];
//             setRandomProduct(randomPro);
//             setShowRandomProduct(true);
//         }
//     };

//     const clearCart = () => {
//         localStorage.removeItem('cart');
//         setCart([]);
//     };

//     const chooseAgain = () => {
//         setShowRandomProduct(false);
//         setRandomProduct(null);
//     };

//     return (
//         <div className='products-container'>
//             <div className='social-links-container'>
//                 <div className='social-links'>
//                     <a href="/f">B</a>
//                     <a href="/t">I</a>
//                     <a href="/l">K</a>
//                     <a href="/i">E</a>
//                     <a href="/i">S</a>
//                     <div style={{ fontSize: '30px' }}>
//                         <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon>
//                     </div>
//                     <a href="/i">V</a>
//                     <a href="/i">A</a>
//                     <a href="/i">L</a>
//                     <a href="/i">L</a>
//                     <a href="/i">E</a>
//                     <a href="/i">Y</a>
//                 </div>
//             </div>
//             <div className='bikes-container'>
//                 {bikes.map(bike => (
//                     <LoadSingleData
//                         key={bike.id}
//                         bike={bike}
//                         addToCart={addToCart}
//                     ></LoadSingleData>
//                 ))}
//             </div>
//             <div className='cart-container'>
//                 <div className='cart-Div'>
//                     <h1>Shopping cart</h1>
//                     <div>
//                         <Cart cart={cart}></Cart>
                        // {showRandomProduct && randomProduct ? (
//                             <div>
//                                 <h2>Randomly Selected Product:</h2>
//                                 <p>{randomProduct.price}</p>
//                                 {/* Display other product information */}
//                             </div >
//                         ) : (
//     <div>
//         <button onClick={chooser}>Choose 1 For Me</button>
//     </div>
// )}
// { {showRandomProduct && (
//                             <div>
//                                 <button onClick={chooseAgain}>Choose Again</button>
//                             </div>
//                         )} }
// <button onClick={() => clearCart()}>Clear Cart</button>
//                     </div >
//                 </div >
//             </div >
//         </div >
//     );
// };

// export default LoadData;
