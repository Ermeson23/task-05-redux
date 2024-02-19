import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import './Cart.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { addByUnity, clearCart, removeByUnity, removeItemCart } from "../../store/api/cartSlice";
import { CartItem } from "../../store/api/cartSlice";

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
            <main className="render">
            <section className="container">
                <h1>Shopping Cart</h1>
                {(cartItems.length === 0) ? (
                    <p>Cart is empty.</p>
                ) : (
                    <div className="card-container">
                        {cartItems.map((item: CartItem) => (
                            <div className="card" key={item.product.isbn13}>
                                <img src={item.product.image} alt={item.product.title} />
                                <div className="card-info">
                                <h2 className="card-title">{item.product.title}</h2>
                                <p>${parseFloat(item.product.price.slice(1)) * item.quantity}</p>
                                <p>Quantity: {item.quantity}</p>
                                <div className="custom-button">
                                    <div className="add-remove">
                                    <button  aria-label='add one copy of this item' onClick={() => handleAddByUnit(item.product.isbn13, 1)} className="btn-success">+</button>
                                    <button  aria-label='remove one copy of this item' onClick={() => (item.quantity > 1) ? handleRemoveByUnity(item.product.isbn13, 1) : handleRemoveItem(item.product.isbn13)} className="btn-primary">-</button>
                                    </div>
                                    <button  aria-label='remove this item entirely from cart' onClick={() => handleRemoveItem(item.product.isbn13)} className="btn btn-warning">Remove from cart</button>
                                </div>
                                </div>
                            </div>
                        ))}

                    </div>
                )}
                   <button  aria-label='remove all items from cart' onClick={handleClearCart} className="btn btn-danger clear-cart">Clear Cart</button>
            </section>
         
            </main>
            <Footer />
        </>
    )
}
