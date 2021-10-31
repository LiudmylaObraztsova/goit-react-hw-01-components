import React from "react";
import PropTypes from 'prop-types'

import Transaction from "./Transaction";
import styles from './Transaction.module.css'


export default function TransactionHistory({items}) {
    return (
       <table className={styles.TransactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
</table>
   ) 
}

TransactionHistory.propTypes = {
     items: PropTypes.arrayOf(
        PropTypes.shape(
            {id:PropTypes.string.isRequired,}
        )
    ).isRequired
}