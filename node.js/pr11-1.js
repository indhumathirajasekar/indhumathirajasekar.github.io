const leftover = require("./pr11-1-module.js");
let paycheck = 2500;
let bills = 2499;
let bankbalance = leftover.getBalance (paycheck, bills);
console.log(`my bank account has $${bankbalance} left!`);

