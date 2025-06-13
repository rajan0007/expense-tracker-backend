const express = require("express");
const router = express.Router();
const {
  getExpenses,
  addExpense,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.get("/", getExpenses);
router.post("/add", addExpense);
router.delete("/:id", deleteExpense);
router.put("/update/:id", updateExpense);

module.exports = router;
