import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='navbar'>
                <h2 className='header-part'><img src="favicon.ico" alt="" /> Fit Body, Fit Mind</h2>
                <p>Select todays Exercise</p>
            </nav>
        </div>
    );
};

export default Header;