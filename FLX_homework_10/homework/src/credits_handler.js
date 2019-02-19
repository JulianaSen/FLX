function userCard(index) {
  let object = {
    key: index,
    balance: 100,
    transactionLimit: 100,
    historyLogs: []
  };
 
  function getCardOptions() {
    return object;
  }
  
  function putCredits(amount) {
    object.balance += amount;
    information('Received credits', amount, new Date().toLocaleString('en-GB'));
  }
    
  function takeCredits(amount) {
    if(object.transactionLimit > amount && object.balance > amount) {
      object.balance -= amount;
    } else {
        console.error('Transaction limit or remaining balance are less than credits you want to take');
    }
    information('Withdrawal credits', amount, new Date().toLocaleString('en-GB'));
  }
    
  function setTransactionLimit(amount) {
    object.transactionLimit = amount;
    information('Transaction limit change', amount, new Date().toLocaleString('en-GB'));
  }
    
  function transferCredits(amount, card) {
    let tax = 0.005;
    let transfer = amount + amount * tax;
    if(object.transactionLimit > transfer && object.balance > transfer) {
      this.takeCredits(transfer);
      card.putCredits(amount);
    } else {
        console.error('Transaction limit or remaining balance are less than credits you want to take');
    }
  }
    
  function information(operationType, amount, operationTime) {
    object.historyLogs.push({
      operationType: operationType,
      credits: amount,
      operationTime: operationTime
    });
  }
  
  return {
    getCardOptions,
    putCredits,
    takeCredits,
    setTransactionLimit,
    transferCredits  
  }
}

class UserAccount {
  constructor(name) {
    this.name = name;
    this.cards = [];
    this.maxNumberOfCards = 3;
  }
    
  addCard() {
    if(this.cards.length < this.maxNumberOfCards) {
      this.cards.push(userCard(this.cards.length + 1));
    } else {
        console.error('You already have 3 cards');
    }
  }

  getCardByKey(key) {
    return this.cards[key - 1];
  }
}

let user = new UserAccount('Bob');
user.addCard();
user.addCard();

let key1 = 1;
let key2 = 2;
let putAmount = 500;
let limit = 800;
let transfer = 300;
let takeAmount = 50;

let card1 = user.getCardByKey(key1);
let card2 = user.getCardByKey(key2);

card1.putCredits(putAmount);
card1.setTransactionLimit(limit);
card1.transferCredits(transfer, card2);

card2.takeCredits(takeAmount);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions()); 