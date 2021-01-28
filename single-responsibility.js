
/*
S - Single Resposibility Principle
Module (could be just source file or component) should be responsible only to one actor (action).
*/

const bankAccountData = {
    balance: 1200,
    currency: 'PLN',
    owner: 'John Smith'
};

// This class also respect Open-Close principle.
// It is open for extension eg. add new fee calculator while witdraw 
// (just modify the WithDrawProcessor) but closed for modification - we do not need 
// modify the 'withdraw' to do that.
class BankProcessorFacade {

    constructor(accountData) {

        this.accountData = accountData;

        this.currencyChanger = new CurrencyChanger();
        this.withdrawProcessor = new WidthdrawProcessor()
        this.ownerPrinter = new OwnerPrinter();
    }

    changeCurrency(currentCurrency, newCurrency) {
        this.currencyChanger.changeCurrency(currentCurrency, newCurrency);
    }

    withdraw(amount) {
        this.withdrawProcessor.withdraw(amount);
    }

    printAccountDetails() {
        this.ownerPrinter.getAccountOwnerData(this.accountData);
    }
}

// Above facade class is responsible only for collect concrete actions 
// but implementation details are hidden in the smaller components.
// Each of the component has single job to do. 

class CurrencyChanger {
    changeCurrency(currentCurrency, newCurrency) {
        // logic for process change bank account currency eg. to EUR
        console.log(`Changing currency from ${currentCurrency} to ${newCurrency} `);
    }
}

class WidthdrawProcessor {
    withdraw(amount) {
        // logic for withdraw amount of total balance
        console.log(`Withdrawing ${amount}`);
    }
}

class OwnerPrinter {
    getAccountOwnerData(account) {
        // logic for printing bank account owner data
        console.log(`Owner of this account is ${account.owner}`);
    }
}




