import React, { useState } from "react";
import PropTypes from 'prop-types'
import "./ExpenseForm.css";

const ExpenseForm = ({ onSubmitData }) => {
    const [inputData, setInputData] = useState({
        title: "",
        amount: 0,
        date: "",
    });

    const changeHandler = (event) => {
        const labelName = event.target.name;
        let value = event.target.value;

        setInputData((prevState) => {
            if(labelName === "date") value = new Date(value);
            else if(labelName === "amount") value = parseFloat(value);

            setInputData({
                ...prevState,
                [labelName]: value
            })
        });
    };

    const submitFormHandler = (event) => {
        onSubmitData(inputData)
        event.preventDefault();
        event.target.reset();
    }

    return (
        <form onSubmit={submitFormHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        id="title"
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        name="amount"
                        id="amount"
                        min="0.01"
                        step="0.01"
                        onChange={changeHandler}
                        required
                    />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input
                        type="date"
                        name="date"
                        id="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={changeHandler}
                        required
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

ExpenseForm.propTypes = {
    onSubmitData: PropTypes.func
}

export default ExpenseForm;
