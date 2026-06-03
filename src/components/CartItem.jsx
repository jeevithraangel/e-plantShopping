import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/cartSlice";
import { Link } from "react-router-dom";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
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

      <h3>Total Items: {totalItems}</h3>
      <h3>Total Cost: ${totalCost}</h3>

      {cartItems.map((item) => (
        <div key={item.id} style={{ border: "1px solid gray", margin: 10 }}>
          
          <img src={item.image} alt={item.name} width="100" />

          <h3>{item.name}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => handleIncrease(item)}>+</button>
          <button onClick={() => handleDecrease(item)}>-</button>

        </div>
      ))}

      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>

      <Link to="/plants">
        <button className="continue-shopping-button">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default CartItem;