import './BookingBox.css'
import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const BookingBox = ({ title, type, options = [], value, onChange, placeholder }) => {
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)

    const handleSelectChange = (selectedOption) => {
        onChange(selectedOption);
    };

    return( 
        <div className='booking-box'>
        <span className='booking-title'>{title}</span>
        {type === "select" ? (

            <Select 
            className="booking-input"
            options={options}
            value={value}
            onChange={handleSelectChange}
            placeholder={placeholder}
            />

        ) : type === "date" ? (

            <div className='date-picker-container'>
                <DatePicker 
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                className="booking-input"
                />
                <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                className="booking-input"
                />
            </div>

        ) : (

            <input type="text" className="booking-input" placeholder={placeholder}/>

        )}  
        </div>
    );
};
BookingBox.propTypes = {
    title: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    options: PropTypes.array,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any
};

export default BookingBox