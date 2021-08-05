"use strict";
function createSquare(config) {
    var newemp = { fname: "default first name", lname: "default lastname", code: 1111, age: 24, salary: 0, bonus: true };
    if (config.fname) {
        newemp.fname = config.fname;
    }
    if (config.lname) {
        newemp.lname = config.lname;
    }
    if (config.code) {
        newemp.code = config.code;
    }
    if (config.age) {
        newemp.age = config.age;
    }
    if (config.salary) {
        newemp.salary = config.salary;
    }
    if (config.bonus) {
        newemp.bonus = config.bonus;
    }
    if (config.bonus == true) {
        newemp.salary = newemp.salary * 1.25;
    }
    return newemp;
}
var myemp = createSquare({ fname: "sirawat", lname: "topanyaruang", code: 632110355, age: 24, salary: 10000, bonus: true });
console.log("myemp", myemp);
