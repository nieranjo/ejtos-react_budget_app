import React, { createContext, useReducer } from 'react';

export const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            // Handle adding a new expense
            return {
                ...state,
                expenses: [...state.expenses, action.payload]
            };
        case 'DELETE_EXPENSE':
            // Handle deleting an expense
            return {
                ...state,
                expenses: state.expenses.filter(expense => expense.id !== action.payload)
            };
        case 'MODIFY_EXPENSE':
            // Handle modifying an expense
            return {
                ...state,
                expenses: state.expenses.map(expense =>
                    expense.id === action.payload.id ? { ...expense, cost: action.payload.cost } : expense
                )
            };
        case 'SET_BUDGET':
            // Handle setting a new budget
            return {
                ...state,
                budget: action.payload
            };
        case 'CHG_CURRENCY':
            // Handle changing the currency
            return {
                ...state,
                currency: action.payload
            };
        default:
            return state;
    }
};

const initialState = {
    budget: 2000,
    expenses: [
        { id: "Marketing", name: 'Marketing', cost: 50 },
        { id: "Finance", name: 'Finance', cost: 300 },
        { id: "Sales", name: 'Sales', cost: 70 },
        { id: "Human Resource", name: 'Human Resource', cost: 40 },
        { id: "IT", name: 'IT', cost: 500 },
    ],
    currency: '£'
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    let remaining = 0;
    if (state.expenses) {
        const totalExpenses = state.expenses.reduce((total, item) => {
            return total + item.cost;
        }, 0);
        remaining = state.budget - totalExpenses;
    }
    return (
        <AppContext.Provider value={{
            expenses: state.expenses,
            budget: state.budget,
            remaining: remaining,
            dispatch,
            currency: state.currency
        }}>
            {props.children}
        </AppContext.Provider>
    );
};
