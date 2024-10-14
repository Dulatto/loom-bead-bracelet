import React from 'react'
import '../styles/cart.css'

function Cart() {
    return (
        <div className="container">

            <div className="section">
                <h1>Order Your Bracelet</h1>
                <div className="order-section">
                    <div className="bracelet-preview">
                        <h2>Confirm Your Design</h2>
                        <p><strong>Size:</strong> Medium</p>
                        <p><strong>Colors:</strong> Red, Blue, White</p>
                        <p><strong>Materials:</strong> Nylon, Glass Beads</p>
                        {/* <img src="bracelet-design.jpg" alt="Bracelet Preview" style="width: 100%; border-radius: 10px;" /> */}
                    </div>
                    <div className="order-details">
                        <h2>Delivery Details</h2>
                        <input type="text" placeholder="Your Name" required />
                        <input type="text" placeholder="Address" required />
                        <input type="text" placeholder="Phone Number" required />
                        <textarea placeholder="Additional notes" rows="4"></textarea>
                        <div className="action-buttons">
                            <button className="confirm-btn">Place Order</button>
                            <button className="modify-btn">Modify Design</button>
                        </div>
                        <p className="price"><strong>Total Price:</strong> $49.99</p>
                    </div>
                </div>
            </div></div>

    )
}

export default Cart