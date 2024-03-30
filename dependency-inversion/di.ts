class Store {
  user: string;
  strip: Stripe;
  constructor(user: string) {
    this.user = user;
    this.strip = new Stripe();
  }

  cardPay() {
    this.strip.creditCardPay(this.user, 1000);
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
