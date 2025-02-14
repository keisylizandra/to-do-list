import React, { useState } from "react";
import { autoPhrases } from '../../api/fetchCities';
import { FaPen } from "react-icons/fa";

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

            <button className="button-box">
                <FaPen />
                Add Item
            </button>
            
        </div>
    )  
}