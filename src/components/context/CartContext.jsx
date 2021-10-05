import React from "react";

const CartContext = React.createContext([]);
CartContext.displayName = "CartContext";

export const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);
    
    const addItem = (item) => {
        if (!isInCart(item.id)) {
            setCart([...cart, item]);
        } else {
            cart.forEach((product, index) => {
                if (product.id === item.id) {
                    cart[index].cantidad = product.cantidad + item.cantidad;
                    setCart([...cart])
                }
            });
        }
    };
    const isInCart = (id) => {
        const isIqual = cart.find((product) => product.id === id);
        return isIqual === undefined ? false : true;
    };
    const removeItem = (id) => {
        const deleteProduct = cart.filter((product) => product.id !== id);
        setCart(deleteProduct);
    };

    const finallyPrice = () => {
        let total = 0;
        cart.forEach(({ cantidad, price }) => {
            total = total + cantidad * price;
        });
        return total;
    };

    const clear = () => {
        setCart([]);
    };

    const getQuantity = () => {
        let quantity = 0;
        cart.forEach((product) => {
            quantity += (product.cantidad);
        });
        return quantity;
    }
    const value = {
        cart,
        addItem,
        removeItem,
        clear,
        isInCart,
        finallyPrice,
        getQuantity
    };
    return (
        <CartContext.Provider
            value={value}>
            {children}
        </CartContext.Provider>)
};
export const useCart = () => {
    const context = React.useContext(CartContext);
    if (!context) {
        throw new Error('')
    };
    return context;
};







