import React, { useState } from "react";
import { autoPhrases } from '../../api/fetchCities';
import { FaPen } from "react-icons/fa";
import './DynamicList.css';
import ModalBox from '../ModalBox/ModalBox';

export default function DynamicList() {
    const [items, setItems] = useState(autoPhrases);
    const [inputValue, setInputValue] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleAddItem = () => {
        if (inputValue.trim() !== "") {
            const newItems = inputValue.split(',').map(item => item.trim());
            setItems([...items, ...newItems]);
            setInputValue("");
            setShowModal(false);
        }
    };

    return (
        <div className="box">
            <ul className="travel-list">
                {items.map((item, index) => (
                    <li key={index} className="travel-item">{item}</li>
                ))}
            </ul>

            <button className="button-box" onClick={() => setShowModal(true)}>
                <FaPen /> Add Item
            </button>

            {showModal && (
                <ModalBox 
                    inputValue={inputValue} 
                    setInputValue={setInputValue} 
                    handleConfirm={handleAddItem} 
                    handleClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
}
