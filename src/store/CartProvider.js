import CartContext from "./cart-context";
 
const CartProvider = (props) => {
    const addItemtoCartHandler = item => {};

    const removeItemFromCart = id => {};
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemtoCartHandler,
        removeItem: removeItemFromCart
    };
    return 
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
};

export default CartProvider;