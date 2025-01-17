import React from 'react'
import '../styles/userprofile.css'

function UserProfile() {
    return (
        <div className='container'>
            <div className="section">
                <h2>User Account</h2>
                <div className="tabs">
                    <div className="tab" onClick="showTab('orders')">Order History</div>
                    <div className="tab" onClick="showTab('saved')">Saved Patterns</div>
                    <div className="tab" onClick="showTab('profile')">Profile Settings</div>
                </div>
                <div className="tab-content" id="orders">
                    <h2>Order History</h2>
                    <p>Your past orders will be displayed here with their designs.</p>
                    {/* <!-- Add images of previous orders --> */}
                </div>
                <div className="tab-content" id="saved">
                    <h2>Saved Patterns</h2>
                    <p>Your saved patterns for future orders will be displayed here.</p>
                </div>
                <div className="tab-content" id="profile">
                    <h2>Profile Settings</h2>
                    <p>Update your personal information and delivery address.</p>
                    {/* <!-- Add profile form --> */}
                </div>
            </div></div>
    )
}

export default UserProfile