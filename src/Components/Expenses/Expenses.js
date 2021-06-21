import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI";
import PropTypes from "prop-types";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

class Expenses extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: "2021",
    };

    this.__changeYearHandler = this.__changeYearHandler.bind(this);
  }

  __changeYearHandler(year) {
    this.setState({ year });
  }

  render() {
    console.log(this.state.year);

    const data = this.props.expensesData;
    const expensesMap = data.map((data) => (
      <ExpenseItem key={data.id} {...data} />
    ));

    return (
      <div>
        <Card className="expenses">
            <ExpensesFilter selectedYear={this.state.year} onYearChange={this.__changeYearHandler} />
            {expensesMap}
        </Card>
      </div>
    );
  }
}

Expenses.propTypes = {
  expensesData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      date: PropTypes.instanceOf(Date),
      title: PropTypes.string,
      amount: PropTypes.number,
    })
  ),
};

export default Expenses;
