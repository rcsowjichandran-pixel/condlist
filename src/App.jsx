import React from "react";

function App() {
  const products = [
    { name: "Laptop", available: true },
    { name: "Mobile", available: false },
    { name: "Headphones", available: true }
  ];

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            {product.available ? (
              <button>Buy Now</button>
            ) : (
              <span>Out of Stock</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
