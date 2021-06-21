import React from 'react';
import ExpenseForm from './ExpenseFormClass';
import PropTypes from 'prop-types'
import "./NewExpense.css";

const NewExpense = ({ onAddData }) => {
    const submitDataHandler = (data) => {
        const id = `id_${new Date().getTime()}`;
        onAddData({id, ...data});
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSubmitData={ submitDataHandler }/>
        </div>
    )
}

NewExpense.propTypes = {
    onAddData: PropTypes.func
}

export default NewExpense;