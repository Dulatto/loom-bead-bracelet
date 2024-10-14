import React from 'react'
import '../styles/userprofile.css'

function UserProfile() {
    return (
        <div className='container'>
            <div class="section">
                <h1>User Account</h1>
                <div class="tabs">
                    <div class="tab" onclick="showTab('orders')">Order History</div>
                    <div class="tab" onclick="showTab('saved')">Saved Patterns</div>
                    <div class="tab" onclick="showTab('profile')">Profile Settings</div>
                </div>
                <div class="tab-content" id="orders">
                    <h2>Order History</h2>
                    <p>Your past orders will be displayed here with their designs.</p>
                    {/* <!-- Add images of previous orders --> */}
                </div>
                <div class="tab-content" id="saved">
                    <h2>Saved Patterns</h2>
                    <p>Your saved patterns for future orders will be displayed here.</p>
                </div>
                <div class="tab-content" id="profile">
                    <h2>Profile Settings</h2>
                    <p>Update your personal information and delivery address.</p>
                    {/* <!-- Add profile form --> */}
                </div>
            </div></div>
    )
}

export default UserProfile