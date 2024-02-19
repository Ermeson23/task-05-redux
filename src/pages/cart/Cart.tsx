import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import { addByUnity, clearCart, removeByUnity, removeItemCart } from "../../store/api/cartSlice";

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const handleAddByUnit = (productIsbn: string, quantity: number) => {
        dispatch(addByUnity({ productIsbn: productIsbn, quantity: quantity }));
    };

    const handleRemoveByUnity = (productIsbn: string, quantity: number) => {
        dispatch(removeByUnity({ productIsbn: productIsbn, quantity: quantity }));
    };

    const handleRemoveItem = (productIsbn: string) => {
        dispatch(removeItemCart(productIsbn));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <Header />
            <section className="container">
                <h2>Shopping Cart</h2>
                {(cartItems.length === 0) ? (
                    <p>Cart is empty.</p>
                ) : (
                    <div className="card-container">
                        {cartItems.map(item => (
                            <div className="card" key={item.product.isbn13}>
                                <img src={item.product.image} alt={item.product.title} />
                                <h5 className="card-title">{item.product.title}</h5>
                                <p>${parseFloat(item.product.price.slice(1)) * item.quantity}</p>
                                <p>Quantity: {item.quantity}</p>
                                <div className="custom-button">
                                    <button onClick={() => handleAddByUnit(item.product.isbn13, 1)} className="btn-success">Add a unity</button>
                                    <button onClick={() => (item.quantity > 1) ? handleRemoveByUnity(item.product.isbn13, 1) : handleRemoveItem(item.product.isbn13)} className="btn-primary">Remove a unit</button>
                                    <button onClick={() => handleRemoveItem(item.product.isbn13)} className="btn btn-warning">Remove from cart</button>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
            </section>
            <button onClick={handleClearCart} className="btn btn-danger clear-cart">Clear Cart</button>
            <Footer />
        </>
    )
}
