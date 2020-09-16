
// NOTE: you are accountable for your styling, so make sure your styling is good.
//ANOTHER NOTE:leave comments about your intent or pseudo-code describing your plan.
// Available Resources : 
//MDN documentation and W3school Only!

// Use the following helper functions in your solution

function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

function reduce(array, f, acc) {
  if (acc === undefined) {
    acc = array[0];
    array = array.slice(1);
  }
  each(array, function(element, i) {
    acc = f(acc, element, i);
  });
  return acc;
}


//=============================================================================
/*                              Q1                                           */
//=============================================================================
//write a function that takes a string as an input and returns an array
//containing the length of each word in that string.
//solve it using one of the helpers functions(reduce,each,map,filter)
//wordLengths("hello its me") // [5,3,2]

function wordLengths(str){
    // TODO: your code here 
  var string1 = str.split(" ");
  var array1 = [];
  for (var i = 0; i < string1.length; i++) {
    array1[i] = string1[i].length;
  }
  return array1;
 
}


//=============================================================================
/*                                  Q2                                    */
//=============================================================================
// Using reduce, write a function countOccurrences that accepts two parameters: a string, 
// and a character (e.g. "a"), and returns number of times that character occured:
// countOccurrences("hello", "l"); // 2
// countOccurrences("hello, world!", "l"); // 3

function countOccurrences(string, character) {
    // TODO: your code here
     string1 = string.split("");
  return reduce(
    string,
    function (c, ch) {
      if (ch === character) {
        c += 1;
      }
      return c;
    },0 );
}
 
}


//=============================================================================
/*                                  Q3                                    */
//=============================================================================
//write a function that takes a string as an input and returns an array
//with only the words of length that are longer than 3.
//solve it using one of the helpers functions(reduce,each,map,filter)


function wordsLongerThanThree(str) {
    // TODO: your code here 
   var array1 = str.split(" ");
   return filter(array1, function (word, i) {
   return word.length > 3;
  });
}


//=============================================================================
/*                                  Q4                                        */
//=============================================================================
//Using recursion, write a function called repeatString that takes two parameters: a string str, 
//which is the string to be repeated, and count, a number 
//representing how many times the string str should be repeated.
//repeatString('dog', 0); // => '' 
//repeatString('dog', 1); // => 'dog' 
//repeatString('dog', 2); // => 'dog' + 'dog' => 'dogdog' 
//repeatString('dog', 3); // => 'dog' + 'dog' + 'dog' => 'dogdogdog'

function repeatString(str, count) { 
 // TODO: your code here 
  if (count < 0) return "";
  if (count === 1) return str;
  else return str + repeatString(str, count - 1);
} 
 

//=============================================================================
/*                                  Q5                                       */
//=============================================================================
//Depending on data modeling concept that you have learned:
//Write a factory function favoriteFood which accepts two parameters a name and favoriteFood.
//Write a function sayFavoriteFood which takes an object with a name and favoriteFood property. 
//The function will return a string stating the person’s name and favorite food.
//var person = favoriteFood("Kyle", "bananas");
//sayFavoriteFood(person); ==> "Kyle's favorite food is bananas"

function favoriteFood(name, favoriteFood) {
  // TODO: your code here
  return {
    n: name,
    fFood: favoriteFood,
  };
}

function sayFavoriteFood(object){
  // TODO: your code here
  return object.n + "'s favorite food is " + object.fFood;
}


//=============================================================================
/*                                  Q6                                      */
//=============================================================================
//lets create a Circle class using OOP concept,
 // we need to create the circles (lets create only one for now), 
 //the invocation should take the radius of the circle. 
  // var circle1 = Circle(70);

  //Create a function increaseRadius that multiplies circle radius by n value.
  //Create a function circleArea to compute the area of the circle.
  //Create a function  circlePerimeter to compute the perimeter of the circle.
  //Create two circles  from Circle function and save them in one array called circles!
  //Write function displayCircles that take circles array as an input and 
  //the output should display all the circle's information(Radius, Area, and Perimeter of a circle).

  //  Write your code here

  function Circle(r) {
  var circle = {};
  circle.radius = r;
  circle.increaseRadius = increaseRadius;
  circle.circleArea = circleArea;
  circle.circlePerimeter = circlePerimeter;

  return circle;
}
function increaseRadius(k) {
  this.radius = this.radius + k;
}
function circleArea() {
  return this.radius * this.radius * 3.14;
}
function circlePerimeter() {
  return 2 * 3.14 * this.radius;
}
var circle1 = Circle(20);
var circle2 = Circle(10);
var circles = [circle1, circle2];
function displayCircles(circles) {
  // console.log(circules[0]);
  for (var i = 0; i < circles.length; i++) {
    console.log(
      "Radius is " +
        circles[i].radius +
        "\nArea : " +
        circles[i].circlePerimeter() +
        "\nPerimeter : " +
        circles[i].circlePerimeter()
    );
  }
}
  

//=============================================================================
/*                                  Q7                                       */
//=============================================================================
//lets make an multiplier function using closures.
//The  multiplier  function takes a single parameter,
//and returns an anonymous function that takes a single parameter
//and returns the product  x of y.
// var multiplier1 = multiplier(2);
// multiplier1(3); ==> 6

function multiplier(x) {
  // TODO: your code here 
    var x = x;
  function multiply(a) {
    return x * a;
  }
  return multiply;
}


//=============================================================================
/*                                  Q8                                       */
//=============================================================================

//Write a function indexesOnly which takes an array,
//and replaces each element with their corresponding index values.
//indexesOnly(["a", "b", "c", 10, true]) ==>  [0,1,2,3,4]
//Note: Your function should not create a new array, 
//but replace the values of the original input array.
//ANOTHER NOTE : solve this question using while loop. 

function indexesOnly (array) {
  // TODO: your code here 
  for (var i = 0; i < array.length; i++) {
    array[i] = i;
  }
  return array;
}
//=============================================================================
/*                                  Q9                                       */
//=============================================================================
/*
Write a function displayBusTimes which takes in an object and a string. 
The object is the collection of bus time schedules, 
and the string will be the bus line the user's interested in. See below:
*/
var cityZBusSchedules = {
  bus12Schedule: [9, 18, 27, 36],
  bus15Schedule: [11, 22, 33, 44],
  bus22Schedule: [15, 30, 45]
};

//Your function should output a string with the times the user is interested in.

//Calling your function should result in something like:
displayBusTimes(cityZBusSchedules, "bus15Schedule"); //"The bus will arrive in the next [11,22,33,44] minutes."

//Of course, depending on the input value, it should output correct values..
displayBusTimes(cityZBusSchedules, "bus22Schedule"); //"The bus will arrive in the next [15,30,45] minutes."

function displayBusTimes(busScheduleObj, busLine) {
	// TODO: your code here
   return (
    "The bus will arrive in the next [" + busScheduleObj[busLine] + "] minutes."
   );
}

//=============================================================================
/*                                  Q10                                      */
//=============================================================================
//Short Answer Questions
//In your own words, no more than 3 sentences, answer the following:

//Q1:When accessing object properties, what is the difference between dot notation and bracket notation?

//Q2 :What does the typeof operator do?
  // let we know what the variables datatype is 

//Q3 :How do we add a property to an object?
// name of object . newproperty = ; 
// like person.age=21;












