///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

let summedPrice = cart
.map((el) => el.price)
.reduce((total, purchasePrice) => total + purchasePrice, 0) 

console.log(summedPrice)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let totalAfterTaxAndCoupon = cartTotal + cartTotal * tax - couponValue
    console.log(totalAfterTaxAndCoupon)
}

calcFinalPrice(summedPrice, 2, 0.04)




//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    //I would think about how I can let customer know about the order they placed and all the relevant info about the order. Here are my customer properties ad the data types in the following format:

    property (data type) - explanation why

    //assuming this is delivery only
    name (string) - I can personalize the checkout message for each client
    phone (string) - capture client's phone
    email (string) - capture client's email
    address (string) - Client's address
    what was ordered and how much of each item was ordered (objecy) - what was ordered and number of each items client ordered
    discount (number) - number representing customer discount (if any)
    order total (number) - total number for the order
    client already paid (boolean) - client prepaid online? True or False
    
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let jennysOrder = {
    name: "Jenny",
    phone: "718-250-0000",
    email: "order@order.com",
    address: "123 Main St, New York, NY 10532",
    orderDetails: {
        "Kung Pao Chicken": 2,
        "Coca-Cola": 2,
        "Duck Sauce": 2,
    },
    discount: 0.05,
    orderTotal: 20,
    paid: true
}
