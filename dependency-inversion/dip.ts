class Store {
  user: string;
  paymentWrapper: PaymenWrapper;
  constructor(user: string) {
    this.user = user;
    this.paymentWrapper = new PaymenWrapper();
  }

  cardPay() {
    this.paymentWrapper.pay(this.user, 1000);
  }
}

class PaymenWrapper {
  paymentProvider = new Stripe();
  pay(user: string, amount: number) {
    this.paymentProvider.creditCardPay(user, amount);
  }
}

class Stripe {
  creditCardPay(user: string, amount: number) {
    console.log(`Payment made by ${user} of Rs. ${amount}`);
  }
}

class Paypal {
  debitCardPay(user: string, amount: number) {
    console.log(`Payment made by ${user} of Rs. ${amount}`);
  }
}

const user = new Store("John");
user.cardPay();
