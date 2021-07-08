import React from 'react';
import './homepage.styles.scss';
 
const HomePage = () => (
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1>Shoes</h1>
                    <span>Buy Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1>Shirts</h1>
                    <span>Buy Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1>Pants</h1>
                    <span>Buy Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1>T-shirts</h1>
                    <span>Buy Now</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1>Jeans</h1>
                    <span>Buy Now</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;