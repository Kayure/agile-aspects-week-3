main();

function main() {
  const transactions = [{
      id: 't1',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '23.99',
    },
    {
      id: 't2',
      type: 'PAYMENT',
      status: 'OPEN',
      method: 'PAYPAL',
      amount: '100.43',
    },
    {
      id: 't3',
      type: 'REFUND',
      status: 'OPEN',
      method: 'CREDIT_CARD',
      amount: '10.99',
    },
    {
      id: 't4',
      type: 'PAYMENT',
      status: 'CLOSED',
      method: 'PLAN',
      amount: '15.99',
    },
  ];

  processTransactions(transactions);
}

function processTransactions(transactions) {
  if (transactions && transactions.length > 0) {
    transactions.forEach(processTransaction);
  } else {
    console.log('No transactions provided!');
  }
}

function processTransaction(transaction) {
  if (isValidTransaction(transaction)) {
    if (transaction.type === 'PAYMENT') {
      processPayment(transaction);
    } else if (transaction.type === 'REFUND') {
      processRefund(transaction);
    } else {
      console.log('Invalid transaction type!', transaction);
    }
  } else {
    console.log('Invalid transaction type!', transaction);
  }
}

function isValidTransaction(transaction) {
  return (
    transaction && ['PAYMENT', 'REFUND'].includes(transaction.type) &&
    transaction.status === 'OPEN' && ['CREDIT_CARD', 'PAYPAL', 'PLAN'].includes(transaction.method)
  );
}

function processPayment(transaction) {
  switch (transaction.method) {
    case 'CREDIT_CARD':
      processCreditCardPayment(transaction);
      break;
    case 'PAYPAL':
      processPayPalPayment(transaction);
      break;
    case 'PLAN':
      processPlanPayment(transaction);
      break;
  }
}

function processRefund(transaction) {
  switch (transaction.method) {
    case 'CREDIT_CARD':
      processCreditCardRefund(transaction);
      break;
    case 'PAYPAL':
      processPayPalRefund(transaction);
      break;
    case 'PLAN':
      processPlanRefund(transaction);
      break;
  }
}

function processCreditCardPayment(transaction) {
  console.log('Processing credit card payment for amount: ' + transaction.amount);
}

function processCreditCardRefund(transaction) {
  console.log('Processing credit card refund for amount: ' + transaction.amount);
}

function processPayPalPayment(transaction) {
  console.log('Processing PayPal payment for amount: ' + transaction.amount);
}

function processPayPalRefund(transaction) {
  console.log('Processing PayPal refund for amount: ' + transaction.amount);
}

function processPlanPayment(transaction) {
  console.log('Processing plan payment for amount: ' + transaction.amount);
}

function processPlanRefund(transaction) {
  console.log('Processing plan refund for amount: ' + transaction.amount);
}