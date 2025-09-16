import React from 'react';
import { PLLAlgorithm } from '../data/pllAlgorithms';
import CubeVisualization from './CubeVisualization';
import './AlgorithmCard.css';

interface AlgorithmCardProps {
  algorithm: PLLAlgorithm;
}

const AlgorithmCard: React.FC<AlgorithmCardProps> = ({ algorithm }) => {
  const renderDifficultyDots = (difficulty: number) => {
    return Array.from({ length: 4 }, (_, index) => (
      <span
        key={index}
        className={`difficulty-dot ${index < difficulty ? 'filled' : 'empty'}`}
      >
        •
      </span>
    ));
  };

  const formatAlgorithm = (alg: string) => {
    // Split algorithm into moves for better readability
    return alg.replace(/\(/g, '( ').replace(/\)/g, ' )');
  };

  return (
    <div className="algorithm-card">
      <div className="card-header">
        <div className="algorithm-name">
          <h2>{algorithm.name}</h2>
          <span className="category-badge">{algorithm.category}</span>
        </div>
        <div className="algorithm-stats">
          <div className="probability">
            <span className="label">Probability:</span>
            <span className="value">{algorithm.probability}</span>
          </div>
          <div className="difficulty">
            <span className="label">Difficulty:</span>
            <div className="difficulty-dots">
              {renderDifficultyDots(algorithm.difficulty)}
            </div>
          </div>
        </div>
      </div>

      <CubeVisualization pattern={algorithm.pattern} />

      <div className="algorithm-section">
        <h3>Algorithm</h3>
        <div className="algorithm-text">
          {formatAlgorithm(algorithm.algorithm)}
        </div>
        {algorithm.auf && (
          <div className="auf">
            <span className="label">AUF:</span>
            <span className="value">{algorithm.auf}</span>
          </div>
        )}
      </div>

      <div className="recognition-section">
        <h3>Recognition</h3>
        <p>{algorithm.recognition}</p>
      </div>

      <div className="notes-section">
        <h3>Tips & Notes</h3>
        <p>{algorithm.notes}</p>
      </div>
    </div>
  );
};

export default AlgorithmCard;