console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  let answer = 'hello, ' + name;
  return answer;
}
// Remember to call the function to test
console.log('in helloName function:', helloName('Kelsey'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber ) {
  console.log('in addNumbers function:', firstNumber, secondNumber);
  let answer = firstNumber + secondNumber;
  return answer;
}
console.log('in addNumbers function:', addNumbers(1, 3));

// 4. Function to multiply three numbers & return the result
function multiplyThree( num1, num2, num3 ){
  console.log('in multiplyThree function:', num1, num2, num3);
  let answer = num1 * num2 * num3;
  return answer;
}

console.log('in multiplyThree function:', multiplyThree(1, 3, 6));

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  console.log('in the isPositive function, this is the number I am checking:', number);
  if ( number > 0 ){
    return true;
  }else{
    return false;
  }  
}

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome

//Dane -- I included the separate console log statment above in the function instead of in this section. Not sure if that's right.

console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let evenNumbers = [2, 4, 6, 8, 10, 12];

let emptyArray = [];

function getLast( array ) {
  for(let i=0; i<array.length; i++){
    let items = array.length;
    console.log('We are in getLast array function:', array);
    if(i === items - 1){
      return array[i];
    } //end of last item conditional
  }//end of looping through the array
} // end of getLast function

console.log('The last item in the evenNumbers array is:', getLast(evenNumbers));
console.log('The last item in the emptyArray is', getLast(emptyArray));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

let otherArray = [7, 9, 12, 4];

function find( value, array ){
  let i =0;
  let match = false;
  console.log('in the find function. Checking to see if this number ( ' + value + ' ) is inside this array: ' + array);
  while(i < array.length){
    console.log('In the while loop:', array[i]);
    if(value === array[i]){
      console.log('There is a match!');
      match = true;
    }
    i++;
  }
  if (match === true){
    return true;
  } else {
    return false;
  }
} //end of find function

console.log(find( 2, otherArray));
console.log(find( 9, otherArray));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  let i = 0;
  let letterMatch = false;
  let newStringArray = string.split('');
  console.log('This is your string, broken into letters:', newStringArray);

  while (i < newStringArray.length){
    if (letter === newStringArray[0]){
      letterMatch = true;
    } else {
      letterMatch = false;
    }
    i++;
  }//end of loop

  if(letterMatch === true){
    console.log("yes, " + letter + " is the first letter of the string.");
    return true;
  } else {
    console.log("no, " + letter + " is not the first letter of the string.");
    return false;
  }

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array

let someArray = [1, 3, 5, 6];

function sumAll( array ) {
  i = 0;
  let sum = 0
  console.log('in the summAll function', array);
  while( i<array.length){
    sum += array[i];
    i++;
  }//end of loop
  return sum;
}//end of sumAll function

console.log('Here is the sum to the array:', sumAll(someArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
