export class BankAccount {
  Balance;
  Open;
  constructor() {
    this.Balance = 0;
    this.Open = false;
  }

  open() {
    if(this.Open) throw new ValueError();
    this.Open = true;
  }

  close() {
    if(!this.Open) throw new ValueError();
    this.Balance = 0;
    this.Open = false;
  }

  deposit(amount) {
    if(amount < 0 || !this.Open) throw new ValueError();
    this.Balance += amount;
  }

  withdraw(amount) {
    if(!this.Open || this.Balance < amount || amount < 0) throw new ValueError();
    this.Balance -= amount;
  }

  get balance() {
    if(!this.Open) throw new ValueError();
    return this.Balance;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}