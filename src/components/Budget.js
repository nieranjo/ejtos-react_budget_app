import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(0);

    const handleBudgetChange = (event) => {
        let value = parseInt(event.target.value);
        
        if (!isNaN(value)) {
            setNewBudget(value);
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
    };

    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value,
        });
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            />
            <div className="currency">
                <label htmlFor="currencySelect">Currency:</label>
                <select value={currency} onChange={handleCurrencyChange} className="currencyChange">
                    <option value="$">$ Dollar</option>
                    <option value="£">£ Pound</option>
                    <option value="€">€ Euro</option>
                    <option value="₹">₹ Rupee</option>
                </select>
            </div>
        </div>
    );
};

export default Budget;


