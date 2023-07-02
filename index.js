function isPalindrome(word) {
  // Write your algorithm here
  const testString = word.toLowerCase();
  const newTestString = testString.split('').reverse().join('');

  return testString === newTestString ? true : false;
}

/* 
  Add your pseudocode here

  Convert the string to lowercaps and store it in a variable (const testString)
  split the variable testString into characters
  add the splitted characters from last to first and store them in a newTestString variable
  compare the testString with newTestString using strict equality ===
  if the two strings are equal, return 'true', else 'false'

  for example Dad should return 'is a palindrome'
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
