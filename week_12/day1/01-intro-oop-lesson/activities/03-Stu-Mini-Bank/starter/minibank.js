function MiniBank(balance){
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = () => {
    return this.balance;
  };

  this.setBalance = (value) => {
    this.balance = value;
  };
  
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };
  
  this.updateStatement = (num) => {
    this.statement.push(num);
  };

  this.getStatement = () => {
    return this.statement;
  };

  this.printStatement = () => {
    this.statement.forEach((val) =>{
      console.log(val);
    });
  };

  this.deposit = (value) => {
    this.updateStatement(value);
    const current_balance = this.getBalance;
    this.setBalance(current_balance + value);
  };

  this.withdraw = (value) => {
    this.updateStatement(-Math.abs(value));
    const current_balance = this.getBalance();
    this.setBalance(current_balance - value);
  };

}

const hsbc = new MiniBank(20000);

hsbc.printBalance();
hsbc.deposit(1000);
hsbc.withdraw(5500);
hsbc.printStatement();
hsbc.printBalance();
