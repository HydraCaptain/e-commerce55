import React from 'react';
import './App.css';
import Nav from './Nav';
import ImageSlider from './ImageSlider';
import ProductSection from './ProductSection';

function App() {
  return (
    <div className="App">
      <Nav />
      <ImageSlider />
      <ProductSection title="Featured" />
      <ProductSection title="New" />
      <ProductSection title="Sale" />
    </div>
  );
}

export default App;
