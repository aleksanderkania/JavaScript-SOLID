
/*
 Liskov Substition Principle
 Concrete components should be eaisly replaced by other. These components should respect
 the same specification. Speaking in programming language: conform to the same interface or 
 use the same API call construction.
*/

class Licence {
    calculateFee() {
        // Just abstraction
    }
}

class TaxiDriverLicence extends Licence {
    calculateFee() {
        console.log('Calculate fee as taxi driver company');
    }
}

class UberDrierLicence extends Licence {
    calculateFee() {
        console.log('Calculate fee as uber driver company');
    }
}

// https://dictionary.cambridge.org/pl/dictionary/english/sunday-driver
class SundayDriver extends Licence {
    calculateFee() {
        console.log('... I can not calculate fee  :-( I breaking the LSP :< ')
    }
}