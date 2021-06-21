import React from 'react';
import PropTypes from 'prop-types'
import './ExpensesFilter.css';

const ExpensesFilter = ({ onYearChange, selectedYear }) => {
  const changeHandler = (e) => {
    onYearChange(e.target.value)
  }

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={selectedYear} onChange={changeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019' defaultValue>2019</option>
        </select>
      </div>
    </div>
  );
};

ExpensesFilter.propTypes = {
  onYearChange: PropTypes.func,
  selectedYear: PropTypes.string
}

export default ExpensesFilter;
