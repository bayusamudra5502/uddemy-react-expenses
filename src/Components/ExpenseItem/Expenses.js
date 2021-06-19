import React from "react";
import ExpenseItem from "./ExpenseItem";
import PropTypes from "prop-types";
import "./Expenses.css";

class Expenses extends React.Component {
    render() {
        const data = this.props.expensesData;
        const expensesMap = data.map(data => <ExpenseItem key={data.id} {...data} />)

        return (
            <div className="expenses">
                {expensesMap}
            </div>
        )
    }
}

Expenses.propTypes = {
    expensesData: PropTypes.arrayOf(PropTypes.exact({
        date: PropTypes.instanceOf(Date),
        title: PropTypes.string,
        amount: PropTypes.number
    }))
}

// {expenses.map(data => <ExpenseItem key={data.id} {...data} />)}
export default Expenses;
