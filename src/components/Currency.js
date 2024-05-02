import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className="currency">
            <p className="start">Currency (</p>
            <select value={currency} onChange={handleCurrencyChange} className="currencyChange">
                <option value="$">$ Dollar</option>
                <option value="£">£ Pound</option>
                <option value="€">€ Euro</option>
                <option value="₹">₹ Rupee</option>
            </select>
            <p className="end">)</p>
        </div>
    );
};

export default Currency;
