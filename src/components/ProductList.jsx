import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";

function ProductList() {
  const dispatch = useDispatch();

  const plants = [
    {
      category: "Indoor Plants",
      items: [
        {
          id: 1,
          name: "Snake Plant",
          price: 10,
          image: "https://via.placeholder.com/150"
        },
        {
          id: 2,
          name: "Aloe Vera",
          price: 8,
          image: "https://via.placeholder.com/150"
        },
        {
          id: 3,
          name: "Peace Lily",
          price: 12,
          image: "https://via.placeholder.com/150"
        }
      ]
    },
    {
      category: "Outdoor Plants",
      items: [
        {
          id: 4,
          name: "Rose",
          price: 15,
          image: "https://via.placeholder.com/150"
        },
        {
          id: 5,
          name: "Jasmine",
          price: 9,
          image: "https://via.placeholder.com/150"
        },
        {
          id: 6,
          name: "Hibiscus",
          price: 7,
          image: "https://via.placeholder.com/150"
        }
      ]
    }
  ];

  const handleAdd = (plant) => {
    dispatch(addItem({ ...plant, quantity: 1 }));
  };

  return (
    <div>
      <h1>Plants List</h1>

      {plants.map((group) => (
        <div key={group.category}>
          <h2>{group.category}</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            {group.items.map((plant) => (
              <div key={plant.id} style={{ border: "1px solid black", padding: "10px" }}>
                
                <img src={plant.image} alt={plant.name} width="150" />

                <h3>{plant.name}</h3>
                <p>Price: ${plant.price}</p>

                <button onClick={() => handleAdd(plant)}>
                  Add to Cart
                </button>

              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;