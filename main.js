/*1-Write a JavaScript program to calculate the sum of 2 number */
/*
var number1  =+prompt("Please enter your num1");
var number2  =+prompt("Please enter your num2");
result=number1+number2;
document.writeln("result="+result);
*/

/**2- Write a JavaScript program to check number if even or odd */
 /*
var number  =+prompt("Please enter your num");

if (number % 2== 0 ) {
    document.writeln("num is even");
}else 
{ document.writeln("num is odd");

}*/ 

/**3- Write a JavaScript program that takes a month and returns the number of days in that month. */

/* var mon=prompt("Please enter your month to know number of days (jan - feb - mar - april - may - jun - jul - aug - oct - nov - Des)");
// if (mon=="jan"||mon=="mar"||mon=="may"||mon=="jul"||mon=="aug"||mon=="Oct"||mon=="Des")
// {
//     document.writeln("numbers of  days at "+ mon  + "  is 31 day");
// }
// else if(mon=="april "||mon=="june"||mon=="sep"||mon=="nov"){
//     document.writeln("numbers of  days at  "+ mon + " is 30 day");
// }
// else {
//     document.writeln("numbers of  days at  "+ mon + " is 28 day");
// }
/* * 4- Write a JavaScript program to find max number between 2 number*/

// var number1  =+prompt("Please enter your num1");
// var number2  =+prompt("Please enter your num2");

// if (number1 > number2) {
//     document.writeln("num1 is max"+ number1);
// }
// else if (number1 < number2) {
//     document.writeln("num2 is max"+ number2);
// }else {
//     document.writeln(" numbers are equels"+number1 + "    " +number2);
// }

/*5- Write  a JavaScript program to check if character vowel or constant*/

// var ch  =prompt("enter character");
// if(ch == 'a' || ch == 'A' || ch == 'e' || ch =='E' || ch == 'i' || ch == 'I' || ch =='o' || ch == 'O' || ch =='u' || ch == 'U'){
//     document.writeln(ch + "   character vowel");
// }
// else {
//     document.writeln(ch + "   character constant");
// }

/*6- total - average - perestent */


var grade1 = + prompt("Enter  1 grade")
var grade2 = + prompt("Enter  2 grade")
var grade3 = + prompt("Enter  3 grade")
var grade4 = + prompt("Enter  4 grade")
var grade5 = + prompt("Enter  5 grade")
var grade6 = + prompt("Enter  6 grade")
var total =grade1+grade2+grade3+grade4+grade5+grade6  ;

document.writeln(  "Total grade is = "+total+"<br>");

var avarage=total/6;
document.writeln(  "avarage grade is = "+avarage+"<br>");

var perestage=avarage*100
document.writeln(  "perestage grade is = "+avarage+"%"+"<br>");

