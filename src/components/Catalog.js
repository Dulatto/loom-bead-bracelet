import React, { useState } from 'react';
import '../styles/catalog.css';

// Sample data for catalog items (bracelets)
const catalogItems = [
    {
        id: 1,
        name: 'Sunset Bracelet',
        price: 25.99,
        colors: ['#FF5733', '#FF8D33', '#FFD700'],
        imageUrl: 'path/to/image1.jpg', // Replace with real image path
        rating: 4.5, // Rating out of 5
    },
    {
        id: 2,
        name: 'Ocean Wave Bracelet',
        price: 29.99,
        colors: ['#33A6FF', '#335EFF', '#33D1FF'],
        imageUrl: 'path/to/image2.jpg',
        rating: 4.0,
    },
    // Add more items here
];

function Catalog() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState(catalogItems);

    // Handle search input
    const handleSearchChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);

        // Filter catalog items based on the search query
        const filtered = catalogItems.filter((item) =>
            item.name.toLowerCase().includes(query)
        );
        setFilteredItems(filtered);
    };

    // Handle the purchase button click
    const handleBuy = (itemId) => {
        alert(`Item with ID ${itemId} added to cart!`);
    };

    return (
        <div className="catalog-container">
            <h2>Catalog</h2>

            {/* Search Bar */}
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search bracelets..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>

            {/* Catalog Items */}
            <div className="catalog-items">
                {filteredItems.map((item) => (
                    <div key={item.id} className="catalog-item">
                        <img src={item.imageUrl} alt={item.name} className="item-image" />
                        <h5>{item.name}</h5>
                        <p className="item-price">${item.price.toFixed(2)}</p>

                        {/* Rating */}
                        <div className="item-rating">
                            {'⭐'.repeat(Math.floor(item.rating))} {/* Display stars */}
                            {item.rating % 1 !== 0 ? '✩' : ''} {/* Half star */}
                        </div>

                        {/* Color Swatches */}
                        <div className="item-colors">
                            {item.colors.map((color, idx) => (
                                <div
                                    key={idx}
                                    className="color-swatch"
                                    style={{ backgroundColor: color }}
                                />
                            ))}
                        </div>

                        {/* Action Buttons */}
                        <button className="btn btn-primary">View Details</button>
                        <button
                            className="btn btn-buy"
                            onClick={() => handleBuy(item.id)}
                        >
                            Buy Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Catalog;
