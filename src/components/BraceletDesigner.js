import React, { useState, useEffect } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import '../styles/braceletDesigner.css';

// Color palette
const colors = ['#FF5733', '#FF8D33', '#FFBD33', '#FFC300', '#FFD633', '#FFE933', '#DAF7A6', '#A6FF33', '#33FF57', '#33FFBD', '#33D1FF', '#33A6FF', '#335EFF', '#5733FF', '#8D33FF', '#FFFFFF', '#000000', '#B0B0B0', '#808080', '#40E0D0', '#FFD700', '#C0C0C0'];

const beadsPerCmHorizontal = 5; // 5 beads per cm horizontally
const beadsPerCmVertical = 4; // 4 beads per cm vertically
const scaleFactor = 90; // 90px per cm for bead size scaling

function BraceletDesigner() {
    const [selectedColor, setSelectedColor] = useState(null); // Current color selected by the user
    const [gridWidth, setGridWidth] = useState(1); // Width of the grid in cm
    const [gridLength, setGridLength] = useState(6); // Length of the grid in cm
    const [grid, setGrid] = useState([]); // Grid state to store bead colors
    const [savedPatterns, setSavedPatterns] = useState([]); // State to store saved patterns

    // Helper function to generate a grid based on width and length in cm
    function generateGrid(widthCm, lengthCm) {
        const widthInBeads = widthCm * beadsPerCmHorizontal; // Number of beads horizontally
        const lengthInBeads = lengthCm * beadsPerCmVertical; // Number of beads vertically
        return Array(lengthInBeads).fill(null).map(() => Array(widthInBeads).fill('#FFFFFF')); // Create 2D array with default white cells
    }

    // Initialize grid when component loads
    useEffect(() => {
        setGrid(generateGrid(gridWidth, gridLength));
    }, [gridWidth, gridLength]);

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

    // Save the current pattern
    const handleSavePattern = () => {

        setSavedPatterns([...savedPatterns, grid]); // Add the current grid to the saved patterns state
        if (savedPatterns.length > 0) {
            console.log('Pattern saved successfully!', savedPatterns);
        } else {
            console.log('There is nothing to save');

        }

    };

    // Load a saved pattern
    const handleLoadPattern = (pattern) => {
        setGrid(pattern); // Load the selected pattern into the grid
    };

    // Bead dimensions
    const beadWidth = (1 / beadsPerCmHorizontal) * scaleFactor; // width of each bead (scaled)
    const beadHeight = (1 / beadsPerCmVertical) * scaleFactor; // height of each bead (scaled)

    return (
        <div className="container">
            <h2>Design Your Bracelet</h2>
            <div className="bracelet-designer-container row">
                {/* Controls Section */}
                <div className="col-md-3">
                    <div className="controls">
                        <h5>Settings</h5>
                        <label>
                            Width (cm):
                            <input
                                type="number"
                                value={gridWidth}
                                onChange={(e) => setGridWidth(Math.max(1, Number(e.target.value)))} // Update width in cm
                            />
                        </label>
                        <label>
                            Length (cm):
                            <input
                                type="number"
                                value={gridLength}
                                onChange={(e) => setGridLength(Math.max(1, Number(e.target.value)))} // Update length in cm
                            />
                        </label>

                        <h5>Color Palette</h5>
                        <div className="palette">
                            {colors.map((color) => (
                                <div
                                    key={color}
                                    className={`palette-color ${selectedColor === color ? 'selected' : ''}`}
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorSelect(color)}
                                />
                            ))}
                        </div>


                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid-container col-md-7">
                    <Stage width={gridWidth * scaleFactor} height={gridLength * scaleFactor}>
                        <Layer>
                            {grid.map((row, rowIndex) =>
                                row.map((color, colIndex) => (
                                    <Rect
                                        key={`${rowIndex}-${colIndex}`}
                                        x={colIndex * beadWidth}
                                        y={rowIndex * beadHeight}
                                        width={beadWidth}
                                        height={beadHeight}
                                        fill={color}
                                        stroke="black"
                                        strokeWidth={1}
                                        onClick={() => handleCellClick(rowIndex, colIndex)}
                                    />
                                ))
                            )}
                        </Layer>
                    </Stage>
                </div>

                <div className='col-md-2'>
                    {/* Buttons */}
                    <div className="actions">
                        <button className="btn btn-primary" onClick={handleSavePattern}>Save Pattern</button>
                        <button className="btn btn-secondary" onClick={() => alert('Resetting design...')}>Reset</button>
                    </div>

                    <h5>Saved Patterns</h5>
                    {/* Display saved patterns */}
                    <ul>
                        {savedPatterns.map((pattern, index) => (
                            <li key={index}>
                                <button onClick={() => handleLoadPattern(pattern)}>Load Pattern {index + 1}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BraceletDesigner;
