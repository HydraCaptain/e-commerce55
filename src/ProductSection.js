import React, { useState } from 'react';
import './ProductSection.css'; // Import CSS file for styling

function ProductSection({ title }) {
  // Sample product data for each product type
  const products = {
    featured: [
      {
        name: 'Product 1',
        image: '/assets/black_friday_web_banner_02.jpg',
        description: 'Description of Product 1',
        price: 10.99,
      },
      {
        name: 'Product 1',
        image: '/assets/black_friday_web_banner_02.jpg',
        description: 'Description of Product 1',
        price: 10.99,
      },
      {
        name: 'Product 1',
        image: '/assets/black_friday_web_banner_02.jpg',
        description: 'Description of Product 1',
        price: 10.99,
      },
      {
        name: 'Product 1',
        image: '/assets/black_friday_web_banner_02.jpg',
        description: 'Description of Product 1',
        price: 10.99,
      },
      {
        name: 'Product 1',
        image: '/assets/black_friday_web_banner_02.jpg',
        description: 'Description of Product 1',
        price: 10.99,
      },
      // Add more featured products as needed
    ],
    new: [
      {
        name: 'New Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of New Product 1',
        price: 15.99,
      },
      {
        name: 'New Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of New Product 1',
        price: 15.99,
      },
      {
        name: 'New Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of New Product 1',
        price: 15.99,
      },
      {
        name: 'New Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of New Product 1',
        price: 15.99,
      },
      {
        name: 'New Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of New Product 1',
        price: 15.99,
      },

      // Add more new products as needed
    ],
    sale: [
      {
        name: 'Sale Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of Sale Product 1',
        price: 8.99,
      },
      {
        name: 'Sale Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of Sale Product 1',
        price: 8.99,
      },
      {
        name: 'Sale Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of Sale Product 1',
        price: 8.99,
      },
      {
        name: 'Sale Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of Sale Product 1',
        price: 8.99,
      },
      {
        name: 'Sale Product 1',
        image: '/assets/Fashion-Web-Banner-14.jpg',
        description: 'Description of Sale Product 1',
        price: 8.99,
      },
      // Add more sale products as needed
    ],
  };

  const [scrollX, setScrollX] = useState(0);

  const handlePrevClick = () => {
    const scrollValue = scrollX + 250;
    setScrollX(scrollValue > 0 ? 0 : scrollValue);
  };

  const handleNextClick = () => {
    const scrollValue = scrollX - 250;
    setScrollX(scrollValue < -250 * (products[title.toLowerCase()].length - 4) ? -250 * (products[title.toLowerCase()].length - 4) : scrollValue);
  };

  return (
    <div className="product-section">
      <h2>{title}</h2>
      <div className="product-list-container">
        <div className="product-list" style={{ transform: `translateX(${scrollX}px)` }}>
          {products[title.toLowerCase()].map((product, index) => (
            <div key={index} className="product">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="price">
                <span>${product.price}</span>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
