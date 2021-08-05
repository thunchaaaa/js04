"use strict";
function calDiscount(price, rate) {
    var discount = price * rate;
    return discount;
}
function calDiscountWithDefaultParam(price, rate) {
    if (rate === void 0) { rate = 0.5; }
    var discount = price * rate;
    return discount;
}
console.log(calDiscount(1000, 0.5));
