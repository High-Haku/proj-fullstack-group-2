const Transactions = require('../models/Transactions');

module.exports = {
  getAllTransactions: async (req, res) => {
    const transactions = await Transactions.find({}, "-__v");
    
    try {
      res.json(transactions);
    } catch (error) {
      console.log(error.message);
    }
  },

  getByIdTransaction: async (req, res) => {
    const id = req.params.id;
    const transaction = await Transactions.findById(id, "-__v");
    
    try {
      res.json(transaction);
    } catch (error) {
      console.log(error.message);
    }
  },

  addDataTransaction: async (req, res) => {
    const data = req.body;

    try {
      await Transactions.create(data);
      res.json({
        message: "Transaction Created",
        data: data
      });
    } catch (error) {
      console.log(error.message);
    }
  },

  updateDataTransaction: async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
      await Transactions.findByIdAndUpdate(id, data)
      res.json({
        message: "Transaction Updated",
        data: data
      })
    } catch (error) {
      console.log(error.message);
    }
  },

  deleteDataTransaction: async (req, res) => {
    const id = req.params.id;

    try {
      await Transactions.findByIdAndDelete(id);
      res.json({
        message: "Transaction Deleted"
      })
    } catch (error) {
      console.log(error.message);
    }
  }
}