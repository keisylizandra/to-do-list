import React from "react";
import BookingBox from "../BookingBox/BookingBox";

import './NextTravelBox.css'
import DynamicList from "../DynamicList/DynamicList";

export default function NextTravelBox() {
    
    return(
        <div className="big-box">
            <BookingBox
            title='Where to next?'
            type='text'
            placeholder='Stay inspired, and add your travel bucket list here.'
            />
            <DynamicList />
        </div>
        
    )
}