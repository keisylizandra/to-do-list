import React, { useState } from "react";
import './ModalBox.css';


export default function ModalBox({ inputValue, setInputValue, handleConfirm, handleClose }) {

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleConfirm();
        }
    };
    
    return (
        <div className="modal-overlay">
            <div className="modal-box">
                <h3 className="modal-title">Add your item</h3>
                <input 
                    className="modal-input"
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onKeyDown={handleKeyDown}
                    placeholder="Enter items separated by commas"
                />
                <div className="modal-buttons">
                    <button 
                    className="modal-button"
                    onClick={handleClose}>Cancel</button>
                    <button 
                    className="modal-button"
                    onClick={handleConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
}