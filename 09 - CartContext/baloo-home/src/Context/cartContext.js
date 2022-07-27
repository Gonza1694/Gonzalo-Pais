import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const isInCart = (productId) => {
        const exist = cart.find(_product => _product.id === productId);
        return exist;
    }

    const totalproducts = cart.map(product => product.quantity).reduce((prev, curr) => prev + curr, 0);
    const totalPrice = cart.map(product => product.price * product.quantity).reduce((prev, curr) => prev + curr, 0);

    const addProduct = (product) => {
        const exist = isInCart(product.id);
        if (!exist) {
            setCart([...cart, product]);
        } else {
            const index = cart.findIndex(_product => _product.id === product.id);
            const _cart = cart.slice();
            _cart[index].quantity = _cart[index].quantity + product.quantity;
            setCart(_cart);
            alert("El producto ya se encuentra en el carrito de compras");
        }
    }

    const deleteProduct = (id) => {
        const _products = cart.filter(el => el.id !== id);
        setCart(_products);
    };

    const clearAll = () => {
        setCart([]);
    }

    const data = {
        cart,
        addProduct,
        isInCart,
        totalproducts,
        totalPrice,
        deleteProduct,
        clearAll
    }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export { CartProvider };
export default CartContext;
