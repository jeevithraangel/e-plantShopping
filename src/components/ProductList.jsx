function ProductList() {
  const plants = [
    {
      category: "Indoor Plants",
      items: [
        { id: 1, name: "Snake Plant", price: 10 },
        { id: 2, name: "Aloe Vera", price: 8 },
        { id: 3, name: "Peace Lily", price: 12 }
      ]
    },
    {
      category: "Outdoor Plants",
      items: [
        { id: 4, name: "Rose Plant", price: 15 },
        { id: 5, name: "Jasmine", price: 9 },
        { id: 6, name: "Hibiscus", price: 7 }
      ]
    }
  ];

  return (
    <div>
      <h1>Plants List</h1>

      {plants.map((group) => (
        <div key={group.category}>
          <h2>{group.category}</h2>

          <div className="plant-grid">
            {group.items.map((plant) => (
              <div key={plant.id}>
                <h3>{plant.name}</h3>
                <p>${plant.price}</p>

                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;