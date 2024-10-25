import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { catalogItems } from './Catalog'; // Импортируем catalogItems

function BraceletDetails() {
    const { id } = useParams(); // Получаем ID из URL
    const [bracelet, setBracelet] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Ищем браслет по ID в массиве catalogItems
        const foundBracelet = catalogItems.find(item => item.id === parseInt(id));
        if (foundBracelet) {
            setBracelet(foundBracelet);
        }
        setLoading(false);
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!bracelet) {
        return <div>Bracelet not found</div>;
    }

    return (
        <div className="bracelet-details">
            <img src={bracelet.imageUrl} alt={bracelet.name} />
            <h1>{bracelet.name}</h1>
            <p>Price: ${bracelet.price}</p>
            <div>Rating: {bracelet.rating}</div>
            <button className="btn btn-buy">Buy Now</button>
        </div>
    );
}

export default BraceletDetails;
