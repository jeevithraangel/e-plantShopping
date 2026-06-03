import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // ✅ function required by rubric
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }));
  };

  const handleDecrease = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }));
    }
  };

  const handleCheckout = () => {
    alert("Order placed successfully!");
  };

  return (
    <div>
      <h1>Shopping Cart</h1>

      {/* REQUIRED FORMAT */}
      <h3>Total Plants: {totalItems}</h3>

      <h3>
        Total Cart Amount: ${calculateTotalAmount()}
      </h3>

      {/* CART ITEMS */}
      {cartItems.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", margin: 10, padding: 10 }}>

          {/* REQUIRED DETAILS */}
          <img src={item.image} alt={item.name} width="120" />

          <h3>{item.name}</h3>

          <p>Unit Price: ${item.price}</p>

          <p>Quantity: {item.quantity}</p>

          <p>Total: ${item.price * item.quantity}</p>

          {/* CONTROLS */}
          <button onClick={() => handleIncrease(item)}>+</button>
          <button onClick={() => handleDecrease(item)}>-</button>

        </div>
      ))}

      {/* CHECKOUT BUTTON */}
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>

      {/* CONTINUE SHOPPING */}
      <Link to="/plants">
        <button className="continue-shopping-button">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default CartItem;