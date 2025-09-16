import React, { useState } from 'react';
import { pllAlgorithms, categories } from './data/pllAlgorithms';
import AlgorithmCard from './components/AlgorithmCard';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAlgorithms = selectedCategory === 'All'
    ? pllAlgorithms
    : pllAlgorithms.filter(alg => alg.category === selectedCategory);

  const currentAlgorithm = filteredAlgorithms[currentIndex] || pllAlgorithms[0];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredAlgorithms.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredAlgorithms.length - 1 : prev - 1
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };


  return (
    <div className="App">
      <div className="top-bar">
        <div className="category-selector">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <main className="main-content">
        <AlgorithmCard algorithm={currentAlgorithm} />
      </main>

      <div className="bottom-bar">
        <div className="nav-controls">
          <button className="nav-btn" onClick={handlePrevious}>
            ← Previous
          </button>
          <span className="counter">
            {currentIndex + 1} / {filteredAlgorithms.length}
          </span>
          <button className="nav-btn" onClick={handleNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
