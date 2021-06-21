import React, { Component } from "react";
import PropTypes from "prop-types";
import "./ExpenseForm.css";

class ExpenseForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            amount: 0,
            date: ""
        };

        this.__changeHandler = this.__changeHandler.bind(this)
        this.__submitFormHandler = this.__submitFormHandler.bind(this)
    }

    __changeHandler(event) {
        const labelName = event.target.name;
        let value = event.target.value;

        if (labelName === "date") value = new Date(value);
        else if (labelName === "amount") value = parseFloat(value);

        this.setState({
            [labelName]: value
        });
    }

    __submitFormHandler(event) {
        this.props.onSubmitData(this.state);
        event.preventDefault();
        event.target.reset();
    }

    render() {
        return (
            <form onSubmit={this.__submitFormHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            onChange={this.__changeHandler}
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
                            onChange={this.__changeHandler}
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
                            onChange={this.__changeHandler}
                            required
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        );
    }
}

ExpenseForm.propTypes = {
    onSubmitData: PropTypes.func,
};

export default ExpenseForm;