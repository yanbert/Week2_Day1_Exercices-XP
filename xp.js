 /*Exercice 1 : Your Favorite Food*/
 let prefere = "rice";
 let taro = "diner";
 console.log("I EAT " + " " + prefere + " " + "every" + " " + taro);



 /* Exercise 2 : Series PART I */

 const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
 var myWatchedSeriesLength = myWatchedSeries.length;
 var myWatchedSeriesSentence = myWatchedSeries[0] + "," + myWatchedSeries[1] + "," + myWatchedSeries[2];

 console.log("i looked" + " " + myWatchedSeriesLength + " " + "and I remembered the following sentence" + " " +
     myWatchedSeriesSentence)

 /* Exercise 2 : PART II  */
 var index = myWatchedSeries.indexOf("the big bang theory")
 myWatchedSeries.splice(index, 1, "friends")


 /* Exercise 2 : ajout */

 myWatchedSeries.splice(2, 0, "myfamille")
 myWatchedSeries.splice(0, 0, "faut pas fache")
     /* Exercise 2 : supprimer */
 myWatchedSeries.splice(0, 1)
     /* Exercise 2 : CONSOLE.LOG 3è ELENMT */
 console.log(myWatchedSeries[1][2])
     /* Exercise 2 : CONSOLE.LOG les modif */
 console.log(myWatchedSeries);

 /* Exercise 3 :  */
 var tp = 30;
 var convert = ((tp / 5) * 9) + 32
 console.log(tp + " °C " + " is " + convert + " ° F  ")

 /* Exercise 4 : Guess The Answers #1  */
 let c;
 let a = 34;
 let b = 21;

 console.log(a + b) //first expression
     // Prediction:  It will output 55, because 34 and 21 are numbers
     // Actual:55

 a = 2;

 console.log(a + b) //second expression
     // Prediction:It will output 23, because 21 and 2 are numbers
     // Actual:23
 console.log(3 + 4 + '5');
 // Prediction:It will output 75, because 3and 4 are numbers and are "5" is string
 // Actual:75

 /* Exercise 5 : Guess The Answers #2 */
 typeof(15)
 // Prediction:numeric
 // Actual:numeric

 typeof(5.5)
 // Prediction:numeric
 // Actual:numeric float 

 typeof(NaN)
 // Prediction:0
 // Actual:None a Number

 typeof("hello")
 // Prediction: hello
 // Actual:string 

 typeof(true)
 // Prediction:true
 // Actual:booléen

 typeof(1 != 2)
 // Prediction:true
 // Actual:booléen

 "hamburger" + "s"
 // Prediction:string 
 // Actual:hamburgers

 "hamburgers" - "s"
 // Prediction:- not exist for concatenation
 // Actual:error

 "1" + "3"
 // Prediction:string
 // Actual:13

 "1" - "3"
 // Prediction:"- "not exist for concatenation
 // Actual:error

 "johnny" + 5
 // Prediction:string and value
 // Actual:johnny5

     "johnny" - 5
     // Prediction:"- "not exist for concatenation
     // Actual:

 99 * "hello"
     // Prediction:number and string
     // Actual:99hello

 1 != 1
     // Prediction:false
     // Actual:booleen

 1 == "1"
     // Prediction:number and string
     // Actual:11

 1 === "1"
     // Prediction:number and string
     // Actual:false

 /* EXERCICE 6 : Guess The Answers #3*/
 5 + "34"
     // Prediction:5 is number and "34" is string
     // Actual:534

 5 - "4"
     // Prediction: "-" can't concatenate string and number
     // Actual:error

 10 % 5
     // Prediction:modulo 10 per 5 (10/5)
     // Actual:2

 5 % 10
     // Prediction:modulo 5 per 10 (5/10)
     // Actual:0

     "Java" + "Script"
     // Prediction:"Java" is string  and "Script" is also string
     // Actual:JavaScript

 " " + " "
 // Prediction:space because we are two spaces 
 // Actual:space (____________)

 " " + 0
 // Prediction:string and number
 // Actual:0

 true + true
     // Prediction: true is booleen
     // Actual:Booleen 

 true + false
     // Prediction:false and true are booleen 
     // Actual:false 

 false + true
     // Prediction:false and true are booleen 
     // Actual:false

 false - true
     // Prediction:" -" is not the ideal operator
     // Actual:error

     !true
     // Prediction:booleen 
     // Actual:true

 3 - 4
     // Prediction:3 and 4 are numbers 
     // Actual:-1

     "Bob" - "bill"
     // Prediction:"-" can't concatenate two string 
     // Actual:error