// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
// TODO write your code here...
var upperCaseName = name.toUpperCase();
console.log(upperCaseName);

// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
var sentenceArray = sentence.split(" ");
var sentenceArrayLength = sentenceArray.length;
for (var i = 0; i < sentenceArrayLength; i++) {
  sentenceArray[i] =
    sentenceArray[i].charAt(0).toUpperCase() + sentenceArray[i].slice(1);
}
console.log(sentenceArray.join(" "));

// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
//TODO write your code here...
var amount = money.slice(1);
console.log(amount);