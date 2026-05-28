import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

function ProductList() {

  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const plants = [
    {
      id: 1,
      name: "Aloe Vera",
      price: 10,
      category: "Medicinal",
      image:
        "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
    },

    {
      id: 2,
      name: "Snake Plant",
      price: 20,
      category: "Indoor",
      image:
        "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735",
    },

    {
      id: 3,
      name: "Spider Plant",
      price: 15,
      category: "Indoor",
      image:
  "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg",
    },

    {
      id: 4,
      name: "Rose Plant",
      price: 25,
      category: "Flowering",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946",
    },

    {
      id: 5,
      name: "Tulsi",
      price: 12,
      category: "Medicinal",
      image:
        "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    },

    {
      id: 6,
      name: "Peace Lily",
      price: 30,
      category: "Flowering",
      image:
        "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
    },
  ];

  return (
    <>
      <Header />

      <div className="products">
        {plants.map((plant) => {

          const added = cartItems.find(
            (item) => item.id === plant.id
          );

          return (
            <div key={plant.id} className="card">

              <img
                src={plant.image}
                alt={plant.name}
              />

              <h3>{plant.name}</h3>

              <p>Price: ${plant.price}</p>

              <p>Category: {plant.category}</p>

              <button
                disabled={added}
                onClick={() =>
                  dispatch(addToCart(plant))
                }
              >
                {added ? "Added" : "Add to Cart"}
              </button>

            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;
