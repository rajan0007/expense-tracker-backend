const Expense = require("../models/Expense");

exports.getExpenses = async (req, res) => {
  try {
    const { id } = req.query;
    if (id) {
      const expense = await Expense.findOne({ _id: id, userId: req.user.id });
      if (!expense) {
        return res.status(404).json({ message: "Expense not found" });
      }
      return res.json(expense);
    }
    const expenses = await Expense.find({ userId: req.user.id }).sort({
      date: -1,
    });
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch expenses" });
  }
};

exports.addExpense = async (req, res) => {
  const { amount, category, date, description } = req.body;
  try {
    const expense = await Expense.create({
      userId: req.user.id,
      amount,
      category,
      date,
      description,
    });
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ message: "Failed to add expense" });
  }
};

exports.deleteExpense = async (req, res) => {
  const { id } = req.params;
  try {
    await Expense.findOneAndDelete({ _id: id, userId: req.user.id });
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete expense" });
  }
};

exports.updateExpense = async (req, res) => {
  const expenseId = req.params.id;
  try {
    const updatedExpense = await Expense.findByIdAndUpdate(
      expenseId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedExpense);
  } catch (error) {
    res.status(500).json({ message: "Failed to update expense" });
  }
};
