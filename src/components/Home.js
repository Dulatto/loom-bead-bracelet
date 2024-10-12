import React from 'react';
import '../styles/home.css';

function Home() {
    return (
        <div className="container">

            <h1 className="text-center">Welcome to the Loom Bead Bracelet Designer</h1>
            <div className='text-center mb-2'>
                <button className="btn btn-sm btn-primary">Start Designing</button>
            </div>
        </div>
    );
}

export default Home;
