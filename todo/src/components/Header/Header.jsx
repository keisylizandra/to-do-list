//import React from 'react';
import './Header.css';
import { PiCompassRoseThin } from "react-icons/pi";

function Header() {
    return(
        <header className="header">
            <div className="container">
            <PiCompassRoseThin className='icon' />
                <label className='label'>
                    TRAVEL CHECKLIST
                </label>
            </div>
        </header>
    )
}

export default Header