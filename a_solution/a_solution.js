var coffeeShop = {
    money: 100,
    beans: 40,
    drinks: {
      latte: {beansNeeded: 10, price: 10},
      americano: {beansNeeded: 5, price: 8},
      doubleShot: {beansNeeded: 15, price: 12},
      frenchPress: {beansNeeded: 12, price: 11},
    },
    makeDrink: function(drinkType) {
      if (this.beans < this.drinks[drinkType].beansNeeded) {
        return alert("Sorry, we're all out of beans");
      };
      return this.beans -= this.drinks[drinkType].beansNeeded;
    },
    buyBeans: function(beans) {
      const cost = beans * 1;
      if (cost > this.money) {
        return alert(`Sorry ${beans} costs $${cost}. You only have ${this.money}`);
      }
      this.money -= cost;
      this.beans += beans;
      return alert(`You now have ${this.beans} beans`);
    },
    buyDrink: function(drinkType) {
      if (!this.drinks.hasOwnProperty(drinkType)) {
        return alert(`Sorry, we don't make ${drinkType}`);
      };
      this.makeDrink(drinkType);
      this.money += this.drinks[drinkType].price;
      alert(`The cost of your drink was ${this.drinks[drinkType].price} dollars.
      There are ${this.beans} beans remaining.
      You have ${this.money} dollars in your account.`)
    }
  };
  
  coffeeShop.buyDrink('latte');
  coffeeShop.buyDrink('americano');
  coffeeShop.buyDrink('pourOver');
  coffeeShop.buyDrink('doubleShot');
  coffeeShop.buyBeans(100);
  coffeeShop.buyDrink('frenchPress');