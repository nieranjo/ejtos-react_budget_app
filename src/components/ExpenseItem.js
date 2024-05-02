import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = () => {
        dispatch({
            type: 'MODIFY_EXPENSE',
            payload: { id: props.id, cost: props.cost + 10 }
        });
    };

    const decreaseAllocation = () => {
        dispatch({
            type: 'MODIFY_EXPENSE',
            payload: { id: props.id, cost: props.cost - 10 }
        });
    };

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button onClick={increaseAllocation} className="increase"><h1>+</h1></button></td>
            <td><button onClick={decreaseAllocation} className="decrease"><h1>-</h1></button></td>
            <td><TiDelete size='1.5em' onClick={handleDeleteExpense} /></td>
        </tr>
    );
};

export default ExpenseItem;
