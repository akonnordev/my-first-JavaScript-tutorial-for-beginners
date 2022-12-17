//alert("hello world");
//let gender = "boy";
//alert(gender);
//let gender;
//alert(gender);
//
//let gender;
//alert(boy);
// let javascriptIsAmazing = true;
// console.log(javascriptIsAmazing);
// console.log(typeof true)
// console.log(typeof javascriptIsAmazing)
// console.log(typeof 23.5)
//console.log(typeof cann)
//console.log(typeof null)
// javascriptIsAmazing = "YES!"
// console.log(javascriptIsAmazing);
// console.log(typeof javascriptIsAmazing);
// let numberOfYears = 2;
/*
 let country = "Ghana"
 let continent = " Africa"
 let population = 32000000
 console.log(country);
 console.log(continent);
 console.log(population);
 console.log(country+ " "+ "is an"+ " "+continent+ 
 " "+"continent of"+ " "+ population+ " "+"people")
 */
// 3 ways to declare a variable
/*let javascriptiSFun =true;
console.log(javascriptiSFun);
javascriptiSFun = "YES";
console.log(javascriptiSFun);
let pendingProject = false;
console.log(pendingProject);
pendingProject ="NO"
console.log(pendingProject);
let javascript;
const pyhton = 1;
/*let can be declared without assignin a vlaue but const can't be
dclared without assigning a value.
const birthYear = 1951;
//birthYear =1940;
//data value of const cannot be changed with const
*/
//let is block scoped, var is function
/*var javascript = "YES";
console.log(javascript);
javascript = true;
console.log(javascript);
*/
//lastName = "Cann";
//console.log(lastName);

//BASIC OPERATION
/*const benAge = 2052 - 1965;
console.log(benAge);
const owusuAge = 2052 -1981;
console.log(owusuAge)*/

// const now = 2052
// const benAge = now - 1965;
// console.log(benAge);
// const owusuAge = now -1981;
// console.log(owusuAge)

// console.log(benAge,owusuAge);
// console.log(benAge**2, owusuAge/10, 2**3);

// const firstName = "Akonnor";
// const lastName = "Owusu";
// console.log(firstName+ " "+ lastName);
// console.log(firstName+lastName)

// let x = 10+5;
// console.log(x);

// x+=10;
// console.log(x)

// x*=4
// console.log(x);

// x++;
// console.log(x);
// x++;
// console.log(x);
// x--;
// console.log(x);

// COMPARISON OPERATORS
// const now = 2052
// const benAge = now - 1965;
// console.log(benAge);
// const owusuAge = now -1981;
// console.log(owusuAge)
// console.log(benAge>owusuAge);
// console.log(benAge>=87);
// console.log(now-1965>now-1981);
// console.log((benAge+owusuAge)/2);
// console.log(now-1965+now-1981/2);
// console.log(now-1965+now-990.5);
/*
const marksFirstWeight = 78;
const marksFirstheight = 1.69;

const johnFirstWeight = 92;
const johnFirstheight = 1.95;

const marksSecondWeight = 95;
const marksSecondheight =1.88;

const johnSecondWeight = 85;
const johnSecondheight = 1.76;

let marksFirstBmi = marksFirstWeight/(marksFirstheight**2)
console.log(marksFirstBmi);

let marksSecondBmi = marksSecondWeight/(marksSecondheight**2)
console.log(marksSecondBmi);

let johnsFirstBmi = johnFirstWeight/(johnFirstheight**2);
console.log(johnsFirstBmi);
let johnSecondBmi = johnSecondWeight/(johnFirstheight**2);
console.log(johnSecondBmi);

console.log(marksFirstBmi>johnsFirstBmi);
console.log(marksSecondBmi<johnSecondBmi);
console.log(marksSecondBmi>johnSecondBmi);

console.log(marksFirstBmi>marksSecondBmi);
let markHigherBmi = (marksFirstBmi>marksSecondBmi);
console.log(markHigherBmi);

//let johnHigherBmi = (johnsFirstBmi+johnSecondBmi);
//console.log(johnHigherBmi);

//console.log(markHigherBmi>johnHigherBmi);
//console.log(marksFirstBmi,johnsFirstBmi,markHigherBmi);


//string and templates literals
const firstName = "Bernard";
const job = "Programmer";
const birthYear = 1991;
const year = 2052;
const bernard = "I'm "+firstName + ' ,a ' + (year-birthYear)+' years old ' +job+ ' ! ';
console.log(bernard);
const bernardNew = `I'm ${firstName}, a ${year-birthYear} years old ${job} !`
console.log(bernardNew);
console.log(`My favorite language is LCD And I'm proud`)
//console.log('string with \n\ multiple \n\ lines')
console.log(`string with
multiple
lines`);
*/

//Control Structure
/*const age = 14;
const isOldEnough = age>=18;
if(age>=18){
console.log("Akonnor can start driving license")   
}
//white spacing


const yearsLeft = 18-age;
if(isOldEnough){
    console.log("Akonnor can start driving license")   
    } else{
        console.log(`Akonnor is too young.Wait another ${yearsLeft} years`)
    }



if(marksFirstBmi>johnsFirstBmi){
    console.log(`Mark's ${marksFirstBmi} is higher than John's ${johnsFirstBmi}!`)
} else{
    console.log(`Johns ${johnsFirstBmi} is higher than Marks ${marksFirstBmi}`)
};

if(marksSecondBmi<johnSecondBmi){
    console.log(`Mark's ${marksSecondBmi} is higherr than John's ${johnSecondBmi}!`)
} else{
    console.log(`Johns ${johnSecondBmi} is lesser than Marks ${marksSecondBmi}`)
};

*/
// let is block scope, meaning you cannot declare let twice in a curlly braces
/*const  birthYear = 1991;
let century;
if(birthYear<=2000){
   century =20;
}else{
    century =21;
}
console.log(century);
*/

//Type Conversion and Type Coercion
/*
Type conversion is when we manually convert a value from one type to another. Intention to convert
Type coercion is when javascript automatically converts values for us.
*/

/*const inputYear = "1991";
console.log(inputYear+18);
console.log(Number(inputYear)+18);
console.log(inputYear);
console.log(Number("Ben"));
console.log(typeof NaN);
// -Number -String -Boolean

console.log(String(23));
console.log(String(23),23);
console.log('I am' + "23" + "yearsold")
console.log('I am'+ " "+String(23) + 'yearsold')
console.log("23"+"10"+3);
console.log("23"*"2")
console.log("23"/"2")
let n = "1"+ 1
n=n-1
console.log(n);
console.log(2+3+4+"5");
console.log("10"-"4"-"3"-2+"5");

DON'T RELY ON TYPE COERCION
Convert manually when you need to
If you don't know what your are doing
Don't use Type Coercion
*/
/*
let statement = `My name is Akonnor 
Owusu. I come from the Ashanti 
Region 
of Ghana
.`;
console.log(statement);

const now = 2022;
const birthYear = 1930;
const age = now - birthYear;
if (age < 18){
    console.log("The person is a child")
} else {
    console.log("The person is a adult")
};
*/

/*
TRUTHY AND FALSY VALUES

A falsy value is a value that is not false but will be turned to false
when converted or coerced into boolean.

In Javascript, there is only 5 falsy values;
1. 0
2. " "(empty string)
3. null
4. undefined
5. NaN
Any number not 0 and any string not empty is a truthy value

console.log(Boolean(0));
console.log(Boolean("Cann"));
console.log(Boolean(null));
console.log(Boolean(""));
console.log(Boolean(undefined));

when does Javascript convert to boolean for us
1.


const money = "";
if(money){
    console.log("Dont spent it all")
}else{
    console.log("You should get a job")
};
EQUALITY OPERATORS

const age = 18;
if(age===18) console.log("You just became an Adult");
"18" ===18
console.log(18);
For a clean code don't use ==

console.log(favourite);
console.log(typeof favourite);
*/
//const favourite = Number(prompt ("What's your favourite number?"))
//const favourite = prompt ("What's your favourite number?");
/*console.log(favourite);
console.log(typeof favourite);
if (favourite===23){
    console.log("23 is a very cool number")
};
*/
/*
if (favourite ===23){
    console.log("23 is a very amazing number")
} else if(favourite ===7){
    console.log("7 is also a number");
} else{
    console.log("Number is not 23 0r 7")
};

if (favourite !==23) console.log("why not 23");
//!= loosely not equals
//!== strictly not equals

BOOLEAN logic
Boolean logic is a branch of computer science which uses true 
and false values.
In order to achieve that it uses several logical operators to 
combine true & false values

AND, OR & NOT OPERATORS

This runs through  all programming languages
Eg. A. Akonnor has a drivers's license
B. Akonnor has a good vision

A AND B

"Akonnor has a driver's license AND good vision"

For AND, True when all are true. Always take AND as 
multiplication
      A
    AND TRUE FALSE
 B TRUE TRUE FALSE
   FALSE FALSE FASLE  

OR is addition

NOT is the inverse
 This runs through all programming languages

 true
 true


let firstGymnasticTeam = "Dolphins";
let secondGymnasticsTeam = "Koalas";
let dolphinsFirstScoreInData1 = 96;
let dolpjinsSecondScoreInData1 = 108;
let dolphinsThirdScoreInData1 = 89;
let KoalasFirstScoreInData1 = 88;
let KoalasSecondScoreInData1 =91;
let KoalasThirdScoreInData1 = 110;

const dolphinAverageScore =((dolphinsFirstScoreInData1+dolpjinsSecondScoreInData1+dolphinsThirdScoreInData1)/3);
console.log(dolphinAverageScore);
const koalasAverageScore = ((KoalasFirstScoreInData1+KoalasSecondScoreInData1+KoalasThirdScoreInData1)/3);
console.log(koalasAverageScore);

if(dolphinAverageScore>koalasAverageScore){
    console.log(`Dolphin is the winner with ${dolphinAverageScore} 
    average scores verses Koalas ${koalasAverageScore} average score`) 
} else if (koalasAverageScore>dolphinAverageScore){
    console.log(`Koala is the winner with ${koalasAverageScore} average scores verses Dolphin
    ${dolphinAverageScore} average score`)
} else{
    console.log("Both team have same average therefore no team wins")
};
*/
/*let dolphinsFirstScoreInBonusData1 = 97;
let dolphinsSecondScoreInBonusData1 =112;
let dolphinsThirdScoreInBonusData1 = 101;
let KoalasFirstScoreInBonusData1 = 109;
let KoalasSecondScoreInBonusData1 = 95;
let KoalasThirdScoreInBonusData1 = 123;
let minimumScore = 100
const dolphinAverageBonusScore1 =((dolphinsFirstScoreInBonusData1+dolphinsSecondScoreInBonusData1+dolphinsThirdScoreInBonusData1)/3);
console.log(dolphinAverageBonusScore1);
const koalasAverageBonusScore1 =((KoalasFirstScoreInBonusData1+KoalasSecondScoreInBonusData1+KoalasThirdScoreInBonusData1)/3);
console.log(koalasAverageBonusScore1);
if(dolphinAverageBonusScore1)

It is better to write 100 understandable and readable codes than 10 unreadable and un-understandable code.
*/

/* SWITCH STATEMENT
Swicth is preferred if you have a lot of consitions
*/
//const day = "thurday";
/*
const day = prompt()
switch(day){
    case "monday":
    case "Monday":
    alert("Come for Classes");
    alert("workout");
    //console.log("Come for Classes");
    //console.log("workout");
    break;
    case "tuesday":
    alert("Go to Accra");
    //console.log("Go to Accra")
    break;
    case "wednesday":
    case "thursday":
    alert("Go to Circle");
    //console.log("Go to Circle");
    break;
    case "friday":
    alert("Go to Church");
    //console.log("Go to Church");
    break;
    case "saturday":
    case "sunday":
    alert("Enjoy the weekend");
    //console.log("Enjoy the weekend");
    break;
    default:
    alert("Not a valid day");
    //console.log("Not a valid day");
}

const day=prompt("Input in a day");
if(day==="monday" || "Monday"){
    alert("Come for classes")
} else if(day === "tuesday"){
    alert("Go to Accra")
}else if(day === "Wednesday"){
    alert("Go to Circle")
}else if(day === "thursday"){
    alert("Go to Circle")
}else if(day === "friday"){
    alert("Go to Church")
}else if(day === "saturday"){
    alert("Enjoy the Weekend")
}else if(day === "sunday"){
    alert("Enjoy the weekend")
}else{
    console.log("Not a valid day")
}
*/
/*
STATEMENT AND EXPRESSIONS
Expression is a piece of code that produces a value
Statements do not produce values on themselves
Statements are like sentences and expressions are like words
that made up the sentence
if (23 >10){
    const str ="23 is bigger";
}
const me = "Cann"
console.log(`I'm ${2042 -1999} years old ${me}`);
Statement don't make sense where javaScript expects expression.
*/

/*
CONDITIONAL TERNARY OPERATORS
*/
//const age = 23;
//age>=18? console.log("I like to drink water"): console.log("I like to drink wine");
//const drink = age>=18?"wine":"water";console.log(drink);
/*
let drink2;
if(age>=18){
    drink2 ="wine"
}else{
    drink2 ="water"
}*/
//console.log(drink2);
//console.log(`I like to drink ${age>=18?"wine":"water"}`);

/*let nameofBoy = "Kwame";
let age = 14;
console.log(`${nameofBoy}is ${age<2?"coming":"not coming"}`);

let bill1= 275;
let bill2 =40;
let bill3= 430;
//const drink = age>=18?"wine":"water";console.log(drink);
*/
/*let tipOfBill1 = 0.15*275
console.log(tipOfBill1);
let tipofBill2 = 0.20*40
console.log(tipofBill2)
let tipofBill3 =0.20*430
console.log(tipofBill3)
let tip = tipOfBill1+tipofBill2+tipofBill3
console.log(tip);
 */
/*
if(bill1>=50&&bill1<=300){
    console.log(`${bill1*0.15}`)
}else{
    console.log(`${bill1*0.20}`)
}
if(bill2>=50&&bill2<=300){
    console.log(`${bill2*0.15}`)
}else{
    console.log(`${bill2*0.20}`)
}
if(bill1>=50&&bill3<=300){
    console.log(`${bill3*0.15}`)
}else{
    console.log(`${bill3*0.20}`)
}
*/
//const tip = bill1>=50&&bill1<=300?bill1*0.15:bill1*0.20;console.log(`The bill was ${bill1},the tip was ${tip},and the total value ${tip+bill1}`);
//const tip = bill2>=50&&bill2<=300?bill2*0.15:bill2*0.20;console.log(`The bill was ${bill2},the tip was ${tip},and the total value ${tip+bill2}`);
//const tip = bill3>=50&&bill3<=300?bill3*0.15:bill3*0.20;console.log(`The bill was ${bill3},the tip was ${tip},and the total value ${tip+bill3}`);

/*
let student1 = "Emmanuel Tetteh";
const now = 2022;
let dobOfStudent1 = 1987;
const ageofStudent1 = now -dobOfStudent1;
let placeOfResidentOfStudent1 = "Madina";
let homeTownOfStudent1 = "Somanya";

const student = prompt("Type a student name");
switch(student){
    case "Emmanuel Tetteh":
    case "Tetteh":
    alert(`${student1}
    DOB - ${dobOfStudent1}
    Place of Residence - ${placeOfResidentOfStudent1}
    HomeTown - ${homeTownOfStudent1}
    Age - ${ageofStudent1}`);
    default:
    alert("Not a Valid Student Name");
    //console.log("Not a valid day");
}
*/
/*
const age = 9;
if(age<=12){
    console.log("Kid")
}else if(age<=17){
    console.log("Adolescent")
}else{
    console.log("Adult")
}



const nameofStudent = prompt("Type in Yourname");
const yOB = Number(prompt("Enter your year of birth"));
const placeOfResidence = prompt("Type your place of residence")
const homeTown = prompt("Type in your homeTown");
const currentAge = 2022 -yOB

console.log(`Name of Student - ${nameofStudent}
Year of Birth - ${yOB}
Place of Residence - ${placeOfResidence}
HomeTown - ${homeTown}
Age - ${currentAge}`);

*/
/*
BACKWARD COMPATIBILITY

JAVASCRIPT RELEASES

DECEMBER 1995 - Brendan Eich Develops Mocha in 10 days
1996 - Mocha changed to livescript
Livescript changed to javascript
Microsoft copied JS into Internet Exployer and called it JScript

1997 - Because of the copying by Microdoft, Javascript was submitted to ECMA,
an external organisation to standardized Javascript.

Js in Standard Version is ECMASCRIPT
Js in practice is Javascript

2009 - ECMAScript 5 (ES 5) was introduced with lots of features
2015 - ES6 - biggest update Ever as at June 2015. From this version javascript decided to relase yearly
updates which were minor additional features

2016-2098 -~- Release of ES7/ES8/ES9)
ES6 - 2015
ES7 - 2016

Javascript does not break the web

If a code is written in ES6, it will still run ES8 or ES9.

ACTIVATING STRICT MODE
"use strict";
Strict mode is a special mode we can activate in Javascript code that
makes it easier for us to write secure JS Code.

Strict mode helps developers avoid accident erros.
It also forbids us from doing certain things and create visible erros in certain situation
Certain errors will not be visible without strict mode

"use strict";
age =3;
console.log(age);
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriverLicense = true;
console.log(hasDriversLicense, hasDriverLicense);
let hasDriversLicense = false;
const passTest = true;
if(passTest) hasDriversLicense = true;
console.log(hasDriversLicense, hasDriversLicense);

2. Strict introduces you to a short list of future reserved words for future features

"use strict";

const interface = "Audio";
const private =525;
const if = 5;
*/
/*
FUNCTIONS
Functions are the fundamental building blocks of a real world Javascript apps. 
They are one of the most essential part of Javascript. 
A function is a piece of code that can be used over and over again in our code.
Function is a littel bit like a variable but for whole chunks of code.
Variable holds values but a function can hold one or more complete lines of code.

The processs of making a function work is called invoking, calling or running
the function.

A function can recieve data and return data can also process the received data




function logger(){
    console.log("My name is Akonnor")
};
logger();
logger();
logger();
*/

/*function (){
    console.log('I am 100 years')
};();

When a parameter hasn't been declared, once you provide an 
argument, it will not used.
Not all functions need to return something
Not all functions need to accept parameters/arguments
Functions help us avoid repetition

*/
/*
function fruitProcessor(apples,oranges){
    //console.log(apples,oranges);
    const cann = `Juice with ${apples} mango and ${oranges} pawpaw`;
    return cann;
}

fruitProcessor("ama","kofi");
//const applejuice = fruitProcessor("ama","kofi");
const appleOrangeJuice =fruitProcessor(2,4);
console.log(appleOrangeJuice);
//console.log(fruitProcessor(5,3));
*/

/*function driver (car, license){
    const driving = `The driver has ${car} and ${license}`
    return driving;
}

driver(1, 3);
const drivingInAccra = driver(2, 3);
console.log(drivingInAccra);
*/
/*
FUNCTION EXPRESSION VS FUNCTION DECLARATION
In Javascript there are different ways to implement functions and each works in a slightly 
different way.


FUNCTION DECLARATION

*/

/*
function calcAge1 (birthYear){
const age =2042 - birthYear
return age;
    //return 2042 -birthYear;
}
calcAge1(1991);
const age1 = calcAge1(1991);
console.log(age1);

//Function Expression



const calcAge2 = function(birthYear){
     return 2042 -birthYear
}
const age2 = calcAge2(1991);
console.log(age1, age2);
*/

/*
ARROW FUNCTIONS

An arrow functions is also a type of function expression.
that is shorter and after to write.

const calcAge2 = function(birthYear){
    return 2042-birthYear
}
SAME AS 



We don't need curly braces and parentheses (one parameter)
return happens behind the scenes (one line of a function)




const calcAge3 = birthYear => 2042 - birthYear;
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = birthYear =>{
    const age = 2042 - birthYear
    const retirement = 65-age
    return retirement;
}

console.log(yearsUntilRetirement(1991));
*/
/*
const yearsUntillRetirement = (birthYear, firstName) =>{
    const age = 2037 - birthYear;
    const retirement = 65-age;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntillRetirement(1991,"Akonnor"));
console.log(yearsUntillRetirement(1980,"Ben"));
*/
// FUNCTION CALLING ANOTHER FUNCTION
/*
function fruitProcessor(apples,oranges){
    const juice = `Juice with ${apples} and ${oranges} oranges`;
    return juice;
}
console.log(fruitProcessor(5,3));
*/
/*
function cutFruitPieces(fruit){
    return fruit*4;
}

const fruitProcessor2 = function (apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces}
    pieces of orange`
    return juice;
    
}
console.log(fruitProcessor2(5,3));
console.log(fruitProcessor2(2,3));
*/
/*
const calcAge = function(birthYear){
    return 2037 - birthYear
}

const yearsUntillRetirement = (birthYear, firstName) =>{
    const age = calcAge(birthYear)
    const retirement = 65-age;
    
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
}
console.log(yearsUntillRetirement(1991,"Akonnor"));
console.log(yearsUntillRetirement(1980,"Ben"));
*/
/*
MORE ON FUNCTIONS

Return keyword immediately exits a function after execution, so any the return 
is ignored.

THREE TYPES OF FUNCTIONS

Function calcAge(birthYear){                     -> Function Declaration
    return 2042 - birthYear;                        Function that can be used before it's declared
}

const calcAge = function(birthYear){            -> Function Expression function value stored in a variable
    return 2042 - birthYear;
}

const calcAge = birthYear => 2042 - birthYear   -> Arrow Function
                                                   Great for a quick one-line function
                                                   Do not have *this*  keyword

ANATOMY OF FUNCTIONS
Function Name
Parameters: placeholders to escue input values like local variables of a function
Function Body : Block of code we want to reuse to process the function inout data
Return Statement used to output a value from the function and terminate execution
calling, running or invoking the function, using()
Arguemnt : Actual values of the function parameters to input data

There are three(3) ways of writing functions but they all work in a similar way: receive input data, 
transform data and then input data

console.log doesn't return a value. it simply prints a message to the console. It is 
an inbuilt function.
 */

/*
CODING CHALLENEGE
*/

/*
DATA 1
*/

//const avgDolphins = (44+23+71)/3;
//const avgKoalas = (65+54+49)/3;
/*
const calAverage=(score1,score2,score3)=>{
    return (score1+score2+score3)/3;
}

const dolphinsScore = calAverage(44,23,71)
const koalasScore = calAverage(65,54,49)
console.log(dolphinsScore);
console.log(koalasScore);

const calcAverageExpression = (dolphin,Koalas)=>{
    const allThreeScoresAverage = `Dolphins average score is ${dolphin} and koalas average score is ${Koalas}`;
    return allThreeScoresAverage;
}
const overAllAverages = calcAverageExpression(dolphinsScore,koalasScore);
console.log(overAllAverages);

function checkWinner(avgDolphins,avgKoalas){
    if(dolphinsScore>=2*koalasScore){
        console.log(`Dolphins wins (${dolphinsScore} vs ${koalasScore})`);
    }else if(koalasScore>=2*dolphinsScore){
        console.log(`Koalas wins (${koalasScore} vs ${dolphinsScore})`);
    }else{
        console.log("No one wins");
    }
}

checkWinner(dolphinsScore,koalasScore);
*/
/*
DATA 2
*/
/*
const calAverage1=(score1,score2,score3)=>{
    return (score1+score2+score3)/3;
}

const dolphinsScore1 = calAverage(85,54,41)
const koalasScore1 = calAverage(23,34,27)
console.log(dolphinsScore1);
console.log(koalasScore1);

const calcAverageExpression1 = (dolphin,Koalas)=>{
    const allThreeScoresAverage1 = `Dolphins average score is ${dolphin} and koalas average score is ${Koalas}`;
    return allThreeScoresAverage1;
}
const overAllAverages1 = calcAverageExpression1(dolphinsScore1,koalasScore1);
console.log(overAllAverages1);

function checkWinner1(avgDolphins,avgKoalas){
    if(dolphinsScore1>=2*koalasScore1){
        console.log(`Dolphins wins (${dolphinsScore1} vs ${koalasScore1})`);
    }else if(koalasScore1>=2*dolphinsScore1){
        console.log(`Koalas wins (${koalasScore1} vs ${dolphinsScore1})`);
    }else{
        console.log("No one wins");
    }
}

checkWinner1(dolphinsScore1,koalasScore1);
*/
/*
Church coding Challenge
*/
/*
const currentYear = 2022;

const memberName =prompt("Type your name");
const residence = prompt("Enter your place of residence");
const dOb = Number(prompt("Enter the year you were born"));
const dateOfmembership = Number(prompt("Enter the date you joined the church"));
const churchGroup = prompt("Enter your Church Group");
const groupLeader = prompt("Enter name of your Group Leader - Mr. Moses or Mr. Bernard");
switch(groupLeader){
    case "Moses":
    case  "moses":
    case   "Mr. Moses":
    case "Mr.moses":
    case "mr.moses":
    case "mr.Moses":   
    case "Mr. Moses Boamah":    
    alert("Mr. Moses Boamah is your group Leader");
    break;
    case "Bernard":
    case  "bernard":
    case   "Mr. Bernard":
    case "Mr.bernard":
    case "mr.bernard":
    case "mr.Bernard":    
    case "Mr. Bernard Gyan":    
    alert("Mr. Bernard Gyan is your group Leader");
    break;
    default:
    alert("Name not Valid group leader name");
}


function churchRecords(membersNames,Residences,dateofBirth, membershipDate, Group, Leader){
    const recordsPull = `Member Name - ${memberName}
    Residence - ${residence}
    Date of Birth - ${dOb}
    Date they joined the Church - ${dateOfmembership}
    Their Group Leader - ${groupLeader}`;
    return recordsPull;
}
churchRecords(memberName,residence,dOb,dateOfmembership,churchGroup,groupLeader);
const churchRecordsPull = churchRecords(memberName,residence,dOb,dateOfmembership,churchGroup,groupLeader);
console.log(churchRecordsPull);
alert(churchRecordsPull);

const age = dOb - currentYear;
const termAtChurch = dateOfmembership - currentYear;
function memberDuration(birthYear,durationAtChurch){
    const memberAgeRecord = `${memberName} is ${age} years old and been member of this church for ${termAtChurch} years`;
    return memberAgeRecord;
}
memberDuration(dOb,termAtChurch);
const ageAndDurationAtChurch = memberDuration(dOb,termAtChurch);
console.log(ageAndDurationAtChurch);
alert(ageAndDurationAtChurch);
*/
/*
ARRAYS (DATA STRUCTURES)

An array is like a big container into which we can keep variables and later refer them.

The two most important data structures are arrays and objects.
We can put expression in squre bracktes but not a statement

Arrays Holding Multiple Data Types

//const friend1 = "Anthonial";
//const friend2 = "Elsie";
//const friend3 = "Ben";
const friends = ["Anthonial", "Elsie","Ben"];
//console.log(friends);
const years = new Array(1991,1994,1968);
console.log(years);
console.log(years[2]);
friends[2] = "Jays";
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length-1]);
//friends = ["Ben","Benson"]; let will work
console.log(friends);
const firstName = "Akonnor";
//const akonnor = [firstName,"Owusu",2042-1991];
const akonnor = [firstName,"Owusu",2042-1993,"teacher",friends]
console.log(akonnor);
console.log(akonnor.length);

const years1 =[1990,1967,2004,2012,2023]

const calcAge = function(birthYear){
    return 2042 - birthYear;
}

const allAge =console.log([calcAge(years1[0]),calcAge(years1[1]),calcAge(years1[2]),calcAge(years1[years1.length-1])]);
// Adding Elements
//friends.push("Jay");
//console.log(friends);
const newLength = friends.push("Jay");
console.log(newLength);
const new2Length = friends.unshift("John");
console.log(friends);

//Removing Elements
friends.pop();
friends.pop();
console.log(friends);
const popped = friends.pop();

friends.shift();
console.log(friends);
console.log(friends.indexOf("Anthonial"));
console.log(friends.indexOf("Abigail"));

//ES6
console.log(friends.includes("Anthonial"));//True
console.log(friends.includes("Abigail"));//False
friends.push(23);
console.log(friends.includes("23"))//False
if(friends.includes("anthonial")){
    console.log("You have a friend called Antonial");
}else{
    console.log ("No friend");
}
*/
/*
Coding Challenge 

const calcTip = (bill)=>{
    return bill>=50&&bill<=300?bill*0.15:bill*0.20;
}
calcTip(100);
console.log(tipOfBill100);

const bills =[125,555,44];
const tips = [calcTip(bills[0]),calcTip(bills[1]),calcTip(bills[2])];
const total =[bills[0]+tips[0],bills[1]+tips[1],bills[2]+tips[2]];

console.log(bills,tips,total);
*/

/*
OBJECTS (DATA STRUCTURE)

You can't reference an array by name but by an order.

An object defines key pair. The key is basically the variable name.

5 Keys with Values

Each key is also called property.

There are many ways of writting an object but curly braces is the simplest and prefered.
The curly braces format is called object literal syntax

The difference bewteen arrays and objects is that with objects the order to retrieve information
doesn't matter at all.

In arrays, the order to which we specify elements matters a lot because that's how we access
the elements.

- Use array for more ordered structured data
- Use objects for more unstructured data

DOT V BRACKET NOTATION

DOT NOTATION

The dot is an operator
Console.log(akonnor.lastName);


BRACKET NOTATION
console.log(akonnor[lastName];

The difference between the dot notation and the bracket notation is that the
bracket notation can contain expressions.


*/
/*
const akonnorArray = [ 
    "Akonnor",
    "Owusu",
    "2037-1991",
    "teacher",
    ["Anthonial","Abigail","Ben"]
];

const akonnor = {
    firstName:"Akonnor",
    lastName:"Owusu",
    age:2037-1991,
    job:"teacher",
    friends:["Antonial","Abigail","Ben"],
    benn:{
        car:"toyota",
        model:{
            brandYear:1992,
            made:"Aluminium",
            coat:"grey"
        },
        color:"white",
        year: 1991
    }
};
 
*/
//console.log(benn["car"]);
//console.log(akonnor["benn"]["model"]);
/*
console.log(akonnor);

console.log(akonnor.firstName);
console.log(akonnor.age);
console.log(akonnor.job);
console.log(akonnor.friends);
*/
//console.log(akonnor["lastName"]);
//console.log(akonnor.lastName);

//const nameKey ="Name";
//console.log(akonnor["lastName"]+ nameKey);
//console.log(akonnor["firstName"]+nameKey);
//console.log(akonnor."lastname"+nameKey); won't work
/*
const interestedIn = prompt("What do you want to know about Akonnor!,chooose between firstName, lastNam,age,job and friends ");
console.log(interestedIn);
//console.log(akonnor.interestedIn); //won't work
//console.log(akonnor.job);
console.log(akonnor[interestedIn]);//will work


if(akonnor[interestedIn]){
 console.log("answer given");
}else{
    console.log("its not there")
}
*/
/*
ADDING KEYS OR PROPERTIES TO OBJECTS


akonnor.location = "Heaven";
akonnor["facebook"] ="@akonnor"
console.log(akonnor);

console.log(akonnor["friends"].length);
console.log(akonnor["friends"][0]);

console.log(`${akonnor.firstName} has ${akonnor["friends"].length} friends and his 
best friend is ${akonnor["friends"][0]}`);
*/
/*
human = {
    firstName: "Ama",
    lastName: "Cann",
    DOB:[29,12,1996]
};

console.log(human["DOB"][2]);

OBJECT METHODS
Functions are values. This means we can create a key value pair which the 
value is a function. It means we can addfunctions to objects.

Any function attached to an object is called a method
*/

/*
const akonnor = {
    firstName:"Akonnor",
    lastName:"Owusu",
    birthYear:1991,
    job:"teacher",
    friends:["Antonial","Abigail","Ben"],
    hasDriversLicense: true,
    // calcAge:function(){
    //     console.log(this)
    //     return 2042-this.birthYear
    // },
    calcAge:function(){
        this.age = 2042-this.birthYear;
        return this.age    
    },
    benn:{
        car:"toyota",
        model:{
            brandYear:1992,
            made:"Aluminium",
            coat:"grey"
        },
        color:"white",
        year: 1991
    },
    driving:function(){
        return this.hasDriversLicense?"has a driver's license":"has no driver license";
    },
    getsummary:function(){
        return `${this.firstName} is a ${akonnor.calcAge()} old ${this.job}, and he ${akonnor.driving()}`;
    }
};
console.log(akonnor.calcAge());
console.log(akonnor.age);
console.log(akonnor);

//console.log(akonnor.driving());
console.log(akonnor.getsummary());



//const calcAge = function(birthYear){
//    return 2042 -birthYear
//};

//console.log(akonnor["friends"]);
//console.log(akonnor["calcAge"](1991));
//console.log(akonnor.calcAge());
//console.log(akonnor.age);
*/
/*
CODING CHALLENEGE

Write a method in akonnor object called get summary and this
method should return a string that summarizes the data about 
akonnor.

Eg. Akonnor is a 46 year old teacher,, and he has a or nor drivers licence.
*/
//const markWeight = 78;
//const marksHeight =1.69;
// const johnsWeight = 92;
// const johnsHeight = 1.95;

/*
const BMI = {
    fullName:"Mark",
    mass:78,
    height:1.69,
    calcBMI:function(){
     return `${this.mass/(this.height**2)}`
    }
};
BMI.calcBMI();
console.log(BMI.calcBMI());


const BMI2 = {
    fullname: "John",
    mass:92,
    height:1.95,
    calcBMI:function(){
        return `${this.mass/(this.height**2)}`
    }
};
BMI2.calcBMI();
console.log(BMI2.calcBMI());


if(`${BMI.calcBMI()}>${BMI2.calcBMI()}`){
 console.log(`${BMI.fullName}'s BMI ${BMI.calcBMI()} is higher than ${BMI2.fullname}'s
 BMI ${BMI2.calcBMI()}`)
}else{
 console.log(`${BMI2.fullname}'s BMI ${BMI2.calcBMI()} is higher than ${BMI.fullName}'s
 BMI ${BMI.calcBMI()}`)
}
*/
/*
let student1 ={
    firstName:"Toniyo",
    lastName:"YaW",
    street: "Accra"
}

function greet(person){
    console.log(`hi  ${person.firstName}`);
}
greet(student1);

greet({
    firstName: "Akonnor"
})


var greet = "Morning";
var greet = "Afternoon";

console.log(greet)
*/
/*
function greet(){
    console.log("hi");
}

greet.language = "english";
greet['All'] = "hellooooo";

//greet();
console.log(greet["language"]);
console.log(greet.All);



var anonymous1 = function (){
    console.log("Ama is a girl");
}
anonymous1();

console.log(this);
*/
/*
ITERATION

 Aside if else statement which is a control structure, another control structure is the loop.
  The fundamental part of
 every programming language that helps us automate repetitive task is the loop.

 For example: imagine going to the gym to lift weights 10 times. The lifting of weight is a 
 repetitive task which in programming could be solved with loop.

 console.log("lifting weights repetition1");
 console.log("lifting weights repetition2");
 console.log("lifting weights repetition3");
 console.log("lifting weights repetition4");
 console.log("lifting weights repetition5");
 console.log("lifting weights repetition6");
 console.log("lifting weights repetition7");
 console.log("lifting weights repetition8");
 console.log("lifting weights repetition9");
 console.log("lifting weights repetition10");

 Iteration: The for loop
 The loop has 3 parts
 The first part is the initial value of a counter. The counter is the value
 that will start. eg.1

 for(let rep = 1; rep <= 10;
const is not used because the variable will later be updated by the for loop.

The secound part is the logical consdition that is evaluated before 
each iteration of the loop.

if the condition is true, then the next loop iteretion will run else it will stop as
soon as the condition is false.

For loops keep running while a condition is true.
The third part is the increment

*/

// for(let rep = 1; rep <= 50; rep++){
//     //console.log("Lifting weights repetition1");
//     console.log(`Lifting weights repetition ${rep}`);
// }

// for(let entryPoint =1; entryPoint<=47;entryPoint++){
//     console.log(`Go around building to find an entry point ${entryPoint}`);
// }
/*
LOOPING ARRAYS, BREAK, CONTINUE
*/
// const akonnor = [
//     "Akonnor",
//     "Owusu",
//     2042-1993,
//     "teacher",
//     ["Anthonial", "Elsie","Ben"]
// ]

// for (let i = 0; i < akonnor.length; i++){
//     console.log(akonnor[i],typeof akonnor[i]);
// }

// const types = [];
// for (let i =0;i<akonnor.length;i++){
//     //console.log(akonnor[i],typeof akonnor[i]);
//     //types[i] =akonnor[i]// first format to put something into array
//     types.push(akonnor[i]);
// }

// console.log(types);

// const years = [1991,2007,1969,2020];
// const ages =[];
// for (let i=0;i< years.length;i++){
//  //ages.push(2037 - years[i])
//  //console.log(years[i]);
//  ages[i] = 2037 - years[i]
// }
// console.log(ages);

/*
Continue is used to exist the current iteration of the loop and continue to the
next one or skip to the next one.
Break is used to completely terminate the whole loop

CONTINUE

*/
// console.log(".......ONLY STRINGS....");
// for (let i=0; i<akonnor.length;i++){
//     if(typeof akonnor[i] !=="string") continue;
//   console.log(akonnor[i], typeof akonnor[i]);
// }

// console.log(".......BREAK WITH NUMBER....");
// for (let i=0; i<akonnor.length;i++){
//     if(typeof akonnor[i] ==="number") break;
//     console.log(akonnor[i], typeof akonnor[i]);
// }

//LOOPING BACKWARDS

/*
Previously we started from 0 to 4
Now we start from 4 to 0
*/
// for (let i=akonnor.length-1;i>=0; i--){
//     console.log(akonnor[i]);
// }

/*
LOOP in LOOPS

*/
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`....Starting exercise ....${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}:Lifting weight repetition ${rep}`);
  }
}

/*
WHILE LOOP

let rep = 1;
while (rep<=10){
    console.log(`WHILE: Lifting weights repetition ${rep}`)
    rep++
}
*/
/*
LOOPING RANDOM NUMBERS (UNKNOWN END)
*/
//let dice = Math.random()*6;
// let dice = Math.trunc(Math.random()*6) +1;
// console.log(dice);

/* CODING CHALLENGE */
/*
const calcTip = (bill)=>{
    return bill>=50&&bill<=300?bill*0.15:bill*0.20;
}
const bills =[22,295,176,440,37,105,10,1100,86,52];
const tips =[];
const totals = [];

for (let i=0;i<bills.length;i++){
    const tip = calcTip(bills[i])
    console.log(tip)
    tips.push(tip)
    totals.push(tip+bills[i])
    //console.log(totals)
}
console.log(bills,tips,totals)

const calAverage = (arr)=>{
    let sum = 0
    for (let i =0; i<arr.length;i++){
        sum = sum +arr[i]
        

    }
    return sum/arr.length
}
console.log(calAverage(tips));
console.log(calAverage(totals));
*/
/*
CODING CHALLENGE 5

A company has 24 employees and wants a program to automatically calculate
their SSNIT Contribution.

Note: 12 employees have same salaries
      6 employess have same salaries but different from 12
      6 last employees have same salaries different from the previous 6 and 12 employees
      provide your own salaries for the 24 employees. use 13.65% as SSNIT percentage calculation
*/

const payofFirst12 = 2800;
const allPay = [];

for (let a = 0; a <= 11; a++) {
  allPay.push(payofFirst12);
  console.log(allPay[a]);
}

const snnit = 0.1365;
const snnitContribution = [];
for (let i = 0; i <= allPay.length - 1; i++) {
  snnitContribution.push(Math.trunc(snnit * allPay[i]));
}
console.log(snnitContribution);
console.log("..................first 6..........................");
const payofFirst6 = 200;
const allPayfirst6 = [];

for (let a = 0; a <= 5; a++) {
  allPayfirst6.push(payofFirst6);
  console.log(allPayfirst6[a]);
}

const snnitContribution2 = [];
for (let a = 0; a < allPayfirst6.length; a++) {
  snnitContribution2.push(Math.trunc(allPayfirst6[a] * snnit));
}
console.log(snnitContribution2);
console.log("...............last 6 .............................");
const payofSecond6 = 8000;
const allPaySecond6 = [];

for (let c = 0; c <= 5; c++) {
  allPaySecond6.push(payofSecond6);
  console.log(allPaySecond6[c]);
}

const snnitContribution3 = [];
for (let c = 0; c < allPaySecond6.length; c++) {
  snnitContribution3.push(Math.trunc(allPaySecond6[c] * snnit));
}
console.log(snnitContribution3);
