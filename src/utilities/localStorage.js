//saving data into localStorage
const addTodb = (id) => {
    let shoppingCart = checkCart();
    //set quantity if thye product is already in the cart
    let quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity
    }
    else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(shoppingCart))
}
const checkCart = () => {
    let shoppingCart;
    const checkCart = localStorage.getItem('cart');
    if (checkCart) {
        shoppingCart = JSON.parse(checkCart);
    }
    else {
        shoppingCart = {};
    }
    return shoppingCart;
}
function removeItemid(item) {
    // Step 1: Remove the item from localStorage
    const cartData = JSON.parse(localStorage.getItem("cart"));
    const updatedCartData = cartData.map((cartItem) => console.log(cartItem));
    console.log(updatedCartData)
    localStorage.setItem("cart", JSON.stringify(updatedCartData));

    // Step 2: Update the cart displayed on the UI
    const cartUI = document.getElementById("cart"); // Assuming the cart is displayed in an element with the ID "cart"
    const updatedCartUI = cartUI.filter((cartItem) => cartItem !== item);
    cartUI.innerHTML = ""; // Clear the existing cart UI

    updatedCartUI.forEach((cartItem) => {
        // Render each cart item on the UI
        const cartItemElement = document.createElement("div");
        cartItemElement.textContent = cartItem;
        cartUI.appendChild(cartItemElement);
    });
}

export { addTodb, checkCart, removeItemid }