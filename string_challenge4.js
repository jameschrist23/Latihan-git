var word = 'wow JavaScript is so cool';
var exampleFirstWord = word.substring(0, 3);
var secondWord = word.substring(4, 14);
var thirdWord = word.substring(15, 17);
var fourthWord = word.substring(18, 20);
var fifthWord = word.substring(21, 25);

var exampleFirstWordlength = word.substring(0, 3).length;
var secondWordlength = word.substring(4, 14).length;
var thirdWordlength = word.substring(15, 17).length;
var fourthWordlength = word.substring(18, 20).length;
var fifthWordlength = word.substring(21, 25).length;

console.log('First Word: ' + exampleFirstWord +  ', with length: ' + exampleFirstWordlength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordlength);
console.log('Third Word: ' + thirdWord + ', with length: ' + thirdWordlength);
console.log('Fourth Word: ' + fourthWord + ', with length: ' + fourthWordlength);
console.log('Fifth Word: ' + fifthWord + ', with length: ' + fifthWordlength);