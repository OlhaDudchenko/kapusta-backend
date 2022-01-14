const { } = require('services/transactions')

class TransactionController {
  constructor() {
    this.addExpenses = this.addExpenses.bind(this)
    this.addIncome = this.addIncome.bind(this)
    this.deleteTransaction = this.deleteTransaction.bind(this)
    this.oneMonthExpenses = this.oneMonthExpenses.bind(this)
    this.oneMonthIncome = this.oneMonthIncome.bind(this)
    this.oneMonthBudgetInfo = this.oneMonthBudgetInfo.bind(this)
   
  }

  async addExpenses(req, res, next) {
   
  }

  async addIncome(req, res, next) {
    
  }

  async deleteTransaction(req, res, next) {
  
  }

  async oneMonthExpenses(req, res, next) {
  
  }

  async oneMonthIncome(req, res, next) {

  }

  async oneMonthBudgetInfo(req, res, next) {
  
  }

}

module.exports = new TransactionController()