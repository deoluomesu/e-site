'use client';
import useCart from '../context/CartContext';

export default function CartPage() {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="container mx-auto py-10 px-4 text-black">
            <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty!</p>
            ) : (
                cart.map((item) => (
                    <div key={item._id} className="flex justify-between items-center border-b py-4">
                        <span>{item.name}</span>
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded"
                            onClick={() => removeFromCart(item._id)}
                        >
                            Remove
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}
