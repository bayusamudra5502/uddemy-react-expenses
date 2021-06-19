import './ExpenseDate.css';
import React from 'react';
import PropTypes from 'prop-types';

class ExpenseDate extends React.Component {
    render(){
        const day = this.props.date.toLocaleDateString("en-US", {day: "2-digit"});
        const month = this.props.date.toLocaleDateString("en-US", { month : "long" });
        const year = this.props.date.getFullYear();

        return (
            <div className="expense-date">
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__day">{day}</div>
            </div>
        )
    }
}

ExpenseDate.propTypes = {
    date: PropTypes.instanceOf(Date)
}

export default ExpenseDate;