import React, { useState } from 'react';
import '../styles/braceletDesigner.css';

function BraceletDesigner() {
    const [design, setDesign] = useState([]);

    return (
        <main className="bracelet-designer">
            <h1>Create Your Bracelet</h1>
            {/* Add bracelet design tool components here */}
            <button className="cta-button">Order Now</button>
        </main>
    );
}

export default BraceletDesigner;
