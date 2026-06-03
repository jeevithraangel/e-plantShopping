import { Link } from "react-router-dom";

function CartItem({ cartItems }) {
  const totalPlants = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalCost = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    alert("Order placed successfully!");
  };

  return (
    <div>

      <h1>Shopping Cart</h1>

      <h3>Total Plants: {totalPlants}</h3>
      <h3>Total Cost: ${totalCost}</h3>

      {/* Cart items UI here */}

      {/* Checkout Button (IMPORTANT FIX) */}
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>

      {/* Continue Shopping Button (FIXED NAVIGATION) */}
      <Link to="/plants">
        <button className="continue-shopping-button">
          Continue Shopping
        </button>
      </Link>

    </div>
  );
}

export default CartItem;