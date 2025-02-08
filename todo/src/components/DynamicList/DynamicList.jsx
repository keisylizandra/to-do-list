import React, { useState } from "react";
import { autoPhrases } from '../../api/fetchCities';

import './DynamicList.css'

export default function DynamicList() {
    const [items, setItems] = useState(autoPhrases);
    const [inputValue, setInputValue] = useState("");

    const handleKeyDown = (e) => {
        if (e.key == 'Enter' && inputValue.trim() !== "") {
            setItems([...items, inputValue]);
            setInputValue("")
        }
    }
    
    return(
        <div className="box">

            <ul className="travel-list">
                {items.map((item, index) => (
                    <li key={index} className="travel-item">{item}</li>
                ))}
            </ul>

            <input 
            className="input-box"
            type="text"
            placeholder="Add a new item..."
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            />
            
        </div>
    )  
}