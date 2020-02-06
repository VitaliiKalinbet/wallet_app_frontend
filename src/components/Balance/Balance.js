// import React from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  getBalance,
  getFinanceData,
} from '../../redux/finance/financeSelectors';

import styles from './Balance.module.css';

class Balance extends Component {
  static propTypes = {
    balance: PropTypes.number.isRequired,
    qwerty: PropTypes.arrayOf().isRequired,
  };

  state = {};

  render() {
    const windowWidth = document.documentElement.clientWidth;
    const { balance, qwerty } = this.props;
    const expenses = qwerty
      .filter(q => q.type === 'expense')
      .reduce((acc, value) => {
        return acc + value.amount;
      }, 0);
    const income = qwerty
      .filter(q => q.type === 'income')
      .reduce((acc, value) => {
        return acc + value.amount;
      }, 0);
    return (
      <>
        <h5 className={styles.title}>Balance {windowWidth >= 768 && ':'}</h5>{' '}
        <p className={styles.amount}>
          {Number(balance - expenses + income)} UAH
        </p>
      </>
    );
  }
}

// const Balance = ({ balance }) => {
//   const windowWidth = document.documentElement.clientWidth;
//   return (
//     <>
//       <h5 className={styles.title}>Balance {windowWidth >= 768 && ':'}</h5>{' '}
//       <p className={styles.amount}>{balance} UAH</p>
//     </>
//   );
// };

const mapStateToProps = state => ({
  balance: getBalance(state),
  qwerty: getFinanceData(state),
});

// Balance.propTypes = {
//   balance: PropTypes.number.isRequired,
// };

export default connect(mapStateToProps)(Balance);
