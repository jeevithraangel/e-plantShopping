import Header from "./Header";

import {
  useDispatch,
  useSelector,
} from "react-redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeItem,
} from "../redux/CartSlice";

import { Link } from "react-router-dom";

function CartItem() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalPlants = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const totalCost = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <h2>
        Total Plants: {totalPlants}
      </h2>

      <h2>
        Total Cost: ${totalCost}
      </h2>

      {cartItems.map((item) => (

        <div key={item.id} className="cart-item">
         <img
         src={item.image}
         alt={item.name}
         width="200"
         />

          <h3>{item.name}</h3>

          <p>
            Unit Price: ${item.price}
          </p>

          <p>
            Total:
            ${item.price * item.quantity}
          </p>

          <button
            onClick={() =>
              dispatch(
                increaseQuantity(item.id)
              )
            }
          >
            +
          </button>

          <span>{item.quantity}</span>

          <button
            onClick={() =>
              dispatch(
                decreaseQuantity(item.id)
              )
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Delete
          </button>

        </div>
      ))}

      <button
        onClick={() =>
          alert("Coming Soon")
        }
      >
        Checkout
      </button>

      <Link to="/plants">

        <button>
          Continue Shopping
        </button>

      </Link>
    </>
  );
}

export default CartItem;