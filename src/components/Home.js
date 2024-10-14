import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import homeImage from '../assets/home (1).jpg';

function Home() {
    return (
        <div className="home-container">
            <img src={homeImage} alt="Contact" className="img-fluid home-image" />
            <div className="overlay-content">
                <h1>Create your dream bracelet with custom designs</h1>
                <div className='row'>
                    <div className='col-6'>
                        <Link to="/designer"><button className="btn btn-sm btn-primary">Create Your Bracelet</button></Link>

                    </div>
                    <div className='col-6 second-button-style'>
                        <Link to="/catalog"><button className="btn btn-sm btn-primary">Browse Designs</button></Link>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h3>Create Your Custom Bracelet in 3 Easy Steps</h3>
                    <p>Step 1: Choose Bracelet Size</p>
                    <p>Select the desired length and width of your bracelet. Whether you want something delicate or bold, the choice is yours!</p>

                    <p>Step 2: Design Your Pattern</p>
                    <p>Use our interactive grid to customize your bracelet. Select from a wide variety of bead colors and arrange them into your unique pattern.</p>

                    <p>Step 3: Place Your Order</p>
                    <p>Once you're satisfied with your design, place your order. Our expert team will craft your bracelet and ship it to you!</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
