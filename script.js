class BankAccount {
    constructor(accountHolder) {
      this.accountHolder = accountHolder;
      this.balance = 0;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.log("The deposit amount must be greater than 0");
        return;
      }
      this.balance += amount;
      console.log(`${amount} UAH added to the account`);
      this.logBalance();
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        console.log("The withdrawal amount must be greater than 0");
        return;
      }
      if (amount > this.balance) {
        console.log("Insufficient funds for withdrawal");
        return;
      }
      this.balance -= amount;
      console.log(`${amount} UAH was withdrawn from the account`);
      this.logBalance();
    }
  
    getBalance() {
      return this.balance;
    }
  
    logBalance() {
      console.log(`Current balance: ${this.balance} UAH`);
    }
  }
  
  const account = new BankAccount("Sasha");
  
  account.deposit(1100);
  account.withdraw(100);
  account.withdraw(4000);
  account.deposit(-131313100);
  account.withdraw(0);