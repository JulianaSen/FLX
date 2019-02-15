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
    getCardOptions: getCardOptions,
    putCredits: putCredits,
    takeCredits: takeCredits,
    setTransactionLimit: setTransactionLimit,
    transferCredits: transferCredits  
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

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(2);

card1.putCredits(500);
card1.setTransactionLimit(800);
card1.transferCredits(300, card2);

card2.takeCredits(50);

console.log(card1.getCardOptions());
console.log(card2.getCardOptions()); 