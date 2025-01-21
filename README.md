# Coffee Shop Exercise  

Use the following code to complete this exercise. Your task is to implement the `makeDrink` function and enhance the coffee shop's operations.  

## Instructions  

### Part 1: `makeDrink` Function  
Complete the `makeDrink` function to fulfill the following requirements:  
1. **Check for valid drinks**:  
   - Only make a drink if it exists in the `drinkRequirements` object.  
   - If the drink is not valid, alert:  
     ```text
     Sorry, we don't make DRINKNAME.
     ```  

2. **Update bean inventory**:  
   - If the drink is valid, reduce the amount of beans by the number of beans required for that drink.  

3. **Handle insufficient beans**:  
   - If there are not enough beans to make the drink, alert:  
     ```text
     Sorry, we're all out of beans!
     ```  

---

### Extensions  

#### Extension 1: No Nested Conditionals  
Refactor the `makeDrink` function to avoid using any nested conditionals (no `if` statements inside another `if` statement).  

#### Extension 2: Buying More Beans  
Add a `money` property to the coffee shop and a `buyBeans` method to purchase more beans by spending money.  

#### Extension 3: Profitable Business  
Update the drinks to include `price` and `beanRequirement`, and create a `buyDrink` method that earns money and prepares the drink.  

---

Happy coding! ☕  