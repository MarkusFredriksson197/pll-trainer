import React from 'react';
import './CubeVisualization.css';

interface CubeVisualizationProps {
  pattern: string[][];
}

const CubeVisualization: React.FC<CubeVisualizationProps> = ({ pattern }) => {
  const getColorClass = (color: string) => {
    switch (color.toLowerCase()) {
      case 'r': return 'red';
      case 'g': return 'green';
      case 'b': return 'blue';
      case 'o': return 'orange';
      case 'y': return 'yellow';
      case 'w': return 'white';
      default: return 'yellow';
    }
  };

  return (
    <div className="cube-visualization">
      <div className="cube-face">
        {pattern.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`cube-sticker ${getColorClass(cell)}`}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default CubeVisualization;