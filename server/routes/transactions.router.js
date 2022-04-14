const express = require('express');
const transactions = express.Router();

const {getAllTransactions, getByIdTransaction, addDataTransaction, updateDataTransaction, deleteDataTransaction} = require('../controllers/transactions.controller');

transactions.get('/', getAllTransactions);
transactions.get('/:id', getByIdTransaction);
transactions.post('/', addDataTransaction);
transactions.put('/:id', updateDataTransaction);
transactions.delete('/:id', deleteDataTransaction);

module.exports = transactions;