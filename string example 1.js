// let array = ['hello', 'world', 'by', 'js'];
// let capitalizedArray = array.map(word =>
//     word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
// let text = capitalizedArray.join('+');
// console.log(text); // Output: Hello World By Js
// split
// const sentence = "The quick brown fox jumps over the lazy dog";
// const words = sentence.split(" "); // Splitting at spaces

// console.log(words);
// let str = "hello world how are you";
// // Hello World How are You
// let string = str.map(word => {
//     word.charAt(0).toUpperCase() + word.slice(1).tolowerCase()
//     string.join(' ');
// });
// console.log(string);
// The map() method can't be used directly on a string.
// You should first split the string into an array of words,
// apply the  transformation to each word, and then join the words
//  back together. In your transformation code, you're trying to
//use methods like charAt(), toUpperCase(), and toLowerCase().
// However, these methods should be chained correctly to ensure
//proper capitalization and lowercasing. You're attempting to use
// the join() method inside the map() function. However, the join()
// method is meant to be used on arrays, not on individual words.
// You're attempting to use the join() method inside the map()
//function. However, the join() method is meant to be used on
//arrays, not on individual words.i
let str = "hello world how are you";
// // Hello World How are You
let arryString = str.split(" ");
let string = arryString.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()

});
let arryToString = string.join(' ')
console.log('string =' ,arryToString);

console.log('arry = ', string)

// let str = "hello world how are you";
// let arryString = str.split(" ");
// let transformedWords = arryString.map(word => {
//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
// });

// console.log(transformedWords.join(' '));