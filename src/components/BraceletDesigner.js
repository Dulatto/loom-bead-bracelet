import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import '../styles/braceletDesigner.css';

const colors = ['#FF5733', '#FF8D33', '#FFBD33', // orange shades
    '#FFC300', '#FFD633', '#FFE933', // yellow shades
    '#DAF7A6', '#A6FF33', '#33FF57', // green shades
    '#33FFBD', '#33D1FF', '#33A6FF', // blue shades
    '#335EFF', '#5733FF', '#8D33FF', // violet shades
    '#FFFFFF', '#000000', // white and black
    '#B0B0B0', '#808080', '#40E0D0', // gray shades and turquoise
]; // Example palette

function BraceletDesigner() {
    const [selectedColor, setSelectedColor] = useState(null); // Current color selected by the user
    const [gridWidth, setGridWidth] = useState(4); // Width of the grid
    const [gridHeight, setGridHeight] = useState(10); // Height of the grid
    const [grid, setGrid] = useState(generateGrid(10, 10)); // Initialize grid

    // Helper function to generate a grid with the given width and height
    function generateGrid(width, height) {
        return Array(height)
            .fill(null)
            .map(() => Array(width).fill('#FFFFFF')); // Create a 2D array with default white cells
    }

    // Handle color selection
    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    // Handle cell click (change the cell color)
    const handleCellClick = (rowIndex, colIndex) => {
        if (selectedColor) {
            const newGrid = grid.map((row, rIdx) =>
                row.map((cell, cIdx) => {
                    if (rIdx === rowIndex && cIdx === colIndex) {
                        return selectedColor; // Change the color of the clicked cell
                    }
                    return cell;
                })
            );
            setGrid(newGrid); // Update the grid state with the new color
        }
    };

    // Update the grid whenever width or height changes
    useEffect(() => {
        setGrid(generateGrid(gridWidth, gridHeight));
    }, [gridWidth, gridHeight]);

    return (
        <div className="bracelet-designer-container row">
            {/* Controls Section */}
            <div className="col-md-3">
                <div className="controls">
                    <h3>Settings</h3>
                    <label>
                        Width:
                        <input
                            type="number"
                            value={gridWidth}
                            onChange={(e) => setGridWidth(Math.max(1, Number(e.target.value)))} // Update width
                        />
                    </label>
                    <label>
                        Height:
                        <input
                            type="number"
                            value={gridHeight}
                            onChange={(e) => setGridHeight(Math.max(1, Number(e.target.value)))} // Update height
                        />
                    </label>

                    <h3>Color Palette</h3>
                    <div className="palette">
                        {colors.map((color) => (
                            <div
                                key={color} // Use color as a unique key
                                className={`palette-color ${selectedColor === color ? 'selected' : ''}`}
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorSelect(color)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid Section */}
            <div className="grid-container col-md-9">
                <h3>Design Your Bracelet</h3>
                <Stage width={gridWidth * 25} height={gridHeight * 25}>
                    <Layer>
                        {grid.map((row, rowIndex) =>
                            row.map((color, colIndex) => (
                                <Rect
                                    key={`${rowIndex}-${colIndex}`}
                                    x={colIndex * 25}
                                    y={rowIndex * 25}
                                    width={25}
                                    height={25}
                                    fill={color}
                                    stroke="black"
                                    strokeWidth={1}
                                    onClick={() => handleCellClick(rowIndex, colIndex)} // Apply selected color to the clicked cell
                                />
                            ))
                        )}
                    </Layer>
                </Stage>
            </div>
        </div>
    );
}

export default BraceletDesigner;
