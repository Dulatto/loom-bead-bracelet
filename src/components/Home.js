import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import homeImage from '../assets/home (1).jpg';

function Home() {
    return (
        <div className="container">
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
            <div className='row mt-3'>
                <h4 className=''>Create Your Custom Bracelet in 3 Easy Steps</h4>
                <div className='col-3'></div>
                <div className='col-6 text-start mx-5'>

                    <h5><i className="bi bi-1-circle-fill"></i>: Choose Bracelet Size</h5>
                    <p>Select the desired length and width of your bracelet. Whether you want something delicate or bold, the choice is yours!</p>

                    <h5><i className="bi bi-2-circle-fill"></i>: Design Your Pattern</h5>
                    <p>Use our interactive grid to customize your bracelet. Select from a wide variety of bead colors and arrange them into your unique pattern.</p>

                    <h5><i className="bi bi-3-circle-fill"></i>: Place Your Order</h5>
                    <p>Once you're satisfied with your design, place your order. Our expert team will craft your bracelet and ship it to you!</p>
                </div>
                <div className='col-3'></div>
            </div>
        </div>
    );
}

export default Home;
