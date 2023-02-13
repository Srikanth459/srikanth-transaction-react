import React, { useState } from 'react';

const Transactions = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, date: '01/01/2023', amount: 120 },
    { id: 2, date: '01/15/2023', amount: 80 },
    { id: 3, date: '02/01/2023', amount: 150 },
    { id: 4, date: '02/20/2023', amount: 60 },
    { id: 5, date: '03/05/2023', amount: 220 },
  ]);

  const calculatePoints = (amount) => {
    let points = 0;
    if (amount > 100) {
      points += 2 * (amount - 100);
    }
    if (amount > 50) {
      points += 1 * (amount - 50);
    }
    return points;
  };

  const calculateMonthlyPoints = (transactions) => {
    let monthlyPoints = [0, 0, 0];
    transactions.forEach((transaction) => {
      const date = new Date(transaction.date);
      const month = date.getMonth();
      monthlyPoints[month] += calculatePoints(transaction.amount);
    });
    return monthlyPoints;
  };

  const [monthlyPoints, setMonthlyPoints] = useState(
    calculateMonthlyPoints(transactions)
  );
  const [totalPoints, setTotalPoints] = useState(
    monthlyPoints.reduce((a, b) => a + b, 0)
  );

  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.date}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Monthly Points</h2>
      <p>January: {monthlyPoints[0]}</p>
      <p>February: {monthlyPoints[1]}</p>
      <p>March: {monthlyPoints[2]}</p>
      <h2>Total Points</h2>
      <p>{totalPoints}</p>
    </div>
  );
};

export default Transactions;
