import React, { Component } from "react";
import PropTypes from "prop-types";
import Card from "../UI";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

class ExpenseItem extends Component {
    render() {
        return (
            <Card className="expense-item">
                <ExpenseDate date={this.props.date} />
                <div className="expense-item__description">
                    <h2>{this.props.title}</h2>
                    <div className="expense-item__price">${this.props.amount}</div>
                </div>
            </Card>
        )
    }
}

ExpenseItem.propTypes = {
    date: PropTypes.instanceOf(Date),
    title: PropTypes.string,
    amount: PropTypes.number
}

export default ExpenseItem