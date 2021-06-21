import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI";
import PropTypes from "prop-types";
import "./Expenses.css";

class Expenses extends React.Component {
    render() {
        const data = this.props.expensesData;
        const expensesMap = data.map(data => <ExpenseItem key={data.id} {...data} />)

        return (
            <Card className="expenses">
                {expensesMap}
            </Card>
        )
    }
}

Expenses.propTypes = {
    expensesData: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string,
        date: PropTypes.instanceOf(Date),
        title: PropTypes.string,
        amount: PropTypes.number
    }))
}

export default Expenses;
