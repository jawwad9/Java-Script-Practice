

// const shop = [
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
//     "Hello",
// ] ;
// // console.log(shop); 
// const ol = document.querySelector('ol');
//  function renderShop () { 
//     ol.innerHTML = ""
// for (let i = 0; i < shop.length; i++) {
//     console.log(shop [i], i); 
//     ol.innerHTML += `<li>${shop [i]} </li>`
// } 

//  }




// === IF ELSE STATEMENTS ===


// === IF ELSE STATEMENTS Q 1 ===

// 1. Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.
 
var number = +prompt('Write Your Number Here!')

if (number % 3 === 0){
    console.log('Number is divion by 3.');
}else {
    console.log("Number is not divion by 3");
}

// === IF ELSE STATEMENTS Q 2 ===

// 2. Write a program that checks whether the given input is an even
// number or an odd number.

// var evenOdd = +prompt('Write Number Here!')

// if (evenOdd % 2 == 0){
//     console.log('this is even Number')
// }else {
//     console.log('this is odd number');
// }


// === IF ELSE STATEMENTS Q 3 ===

// 3. Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".

// var age = +prompt('Write your age here!')

// if (age <=18 ){
//     console.log("too young");
// }else if (age > 18){
//     console.log("Old enough");
// }


// === IF ELSE STATEMENTS Q 4 ===

// 4. Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.

// var userName = prompt('Please Enter your Name!')

// if (userName == "Haseeb"){
//     console.log("Hello, Haseeb! It's great to see you again!")
// }else {
//     console.log("Do nothing if the name entered is not 'Haseeb' ")
// }

// === IF ELSE STATEMENTS Q 5 ===

// 5. Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.

// var number = prompt('Write Number Here!')

// if (number % 3 == 0){
//     console.log('Number is divisible by 3');
// }else {
//     console.log('Number is  not divisible by 3');
// }


// === IF ELSE STATEMENTS Q 6 ===

// 6. Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)


// === IF ELSE STATEMENTS Q 10 ===


// 10. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give
// message “ Please enter your password”
// ii. Check if both passwords are same. If they are same,
// show message “Correct! The password you entered
// matches the original password”. Show “Incorrect
// password” otherwise.

// var password = prompt("Enter Your Password")

// if (password === "Haseeb"){
//     console.log("Correct! The password you entered matches the original password");
// }else {
//     console.log("Incorrect password");
// }


// === IF ELSE STATEMENTS Q 11 ===


// 11. Write a program that adds an else statement to the following
// script to display “You are not Fahad”
// var firstName = "Ali";
// if (firstName === "Fahad") {
//  document.write("Hello Fahad!");
// }

// var firstName = prompt("Write Your Name")

// if (firstName === "Fahad"){
//     console.log("Wellcome To my Website!")
// }else {
//     console.log("You are Not Fahad");
// }


// === IF ELSE STATEMENTS Q 11 ===


// This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  else
//  greeting = "Good evening";
//  } 


// var hour = +prompt("What is Time Now!")

// if (hour >= 18){
//     console.log("Good Morning");
// }else {
//     console.log("Good Evening");
// }


// === IF ELSE STATEMENTS Q 13 ===

// 13. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.


// var num1 = +prompt("Write First Number");
// var num2 = +prompt("Write Second Number");

// if (num1 > num2){
//     console.log("Num1 Is Large Number");
// }else if (num1 == num2 ){
//     console.log("Num1 and Num2 Is equal");
// }else {
//     console.log("Num2 is large number");
// }


// === IF ELSE STATEMENTS Q 14 ===


// 14. Write a program that takes input a number from user & state
// whether the number is positive, negative or zero


// var num = +prompt("Write Number Here!");

// if (num > 0){
//     console.log("Number is Positive");
// }else if (num < 0){
//     console.log("Number Is Negative");
// }else {reakfast
//     console.log("Number is Zero");
// }


// === IF ELSE STATEMENTS Q 15 ===


// 15. Ask the user what the current hour is. If the hour is between
// 6 and 9 a.m., tell the user, "B is served." If the hour is
// between 11 a.m. and 1 p.m., tell the user, "Time for lunch." If
// the hour is between 5 and 8 p.m., tell the user, "It's dinner
// time." For any other hours, tell the user, "Sorry, you'll have to
// wait, or go get a snack." (Hint: Store the hour in 24 hours clock
// format i.e. 14 for 2pm , 15 for 3pm)


// var user = +prompt("What is time Date")

// if (user >= 6 && 9 >= user){
//     console.log("breakFast is Served");
// }else if (user >= 11 && 1 <= user){
//     console.log("Time for lunch");
// }else {
//     console.log("Sorry, you'll have to wait, or go get a snack");
// }

// ==== NOT COMPLETE ===


// === IF ELSE STATEMENTS Q 16 ===


// 16. Write a program that stores value in a variable & tell whether
// the type of that variable is a "number", "string", "boolean" or
// “undefined”

