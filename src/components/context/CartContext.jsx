import React from "react";

const CartContexto = React.createContext();

export const useCart = () => {
    return React.useContext(CartContexto);
}

export const ShoppingContext = ({ children }) => {
    const [cart, setCart] = React.useState([]);

    const AddCart = (item) => {
        if (!isInCart(item.id)) {
            setCart([...cart, item]);
        } else {
            cart.forEach((product, index) => {
                if (product.id === item.id) {
                    cart[index].amount = product.amount + item.amount;
                    setCart([...cart]);
                }
            });
        };
    };

    const isInCart = (id) => {
        const isEqual = cart.find((product) => product.id === id);
        return isEqual === undefined ? false : true;
    };

    const removeItemArr = (id) => {
        const quitProduct = cart.filter((product) => product.id !== id);
        setCart(quitProduct)
    };

    const CalculatePrice = () => {
        let total = 0;
        cart.forEach(({ amount, price }) => {
            total = total + amount * price;
        });
        return total;
    };

    const deleteCart = () => {
        setCart([]);
    }

    return (
        <CartContexto.Provider
            value={{
                cart,
                AddCart,
                removeItemArr,
                CalculatePrice,
                deleteCart
            }}>
            {children}
        </CartContexto.Provider>
    );
};







