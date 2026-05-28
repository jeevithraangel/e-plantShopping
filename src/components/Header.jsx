import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Header() {

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  return (
    <nav>

      <h2>Paradise Nursery</h2>

      <div>

        <Link to="/">Home</Link>

        <Link to="/plants">Plants</Link>

        <Link to="/cart">
          Cart ({totalItems})
        </Link>

      </div>

    </nav>
  );
}

export default Header;