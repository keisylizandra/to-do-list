import { useEffect, useState } from 'react';
//import DatePicker from 'react-datepicker';
import { fetchStates, fetchCity } from '../../api/fetchCities';
import BookingBox from '../BookingBox/BookingBox';

import './Booking.css'
 
export default function Booking() {

    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    useEffect(() => {
        const loadStates = async () => {
            const stateList = await fetchStates();
            setStates(stateList);
        }
        loadStates();
    }, [])

    useEffect(() => {
        const loadCities = async () => {
            if (selectedState) {
                const cityList = await fetchCity();
                setCities(cityList)
            } else {
                setCities([])
                setSelectedCity(null)
            }
        }
        loadCities();
    }, [selectedState])

    return(
        <div className="travel-selector">
            <div className="selector-row">
                <BookingBox 
                title="Destination State" 
                type="select" 
                options={states} 
                value={selectedState}
                onChange={setSelectedState}
                placeholder='Which state are you going?'/>
            </div>
            <div className="selector-row">
                <BookingBox
                title='Destination City'
                type='select'
                options={cities}
                value={selectedCity}
                onChange={setSelectedCity}
                placeholder='Which city are you going?'
                />
            </div>
        </div>
    )
}