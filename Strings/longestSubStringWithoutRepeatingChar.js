/*
Given a string s, find the length of the longest substring without repeating characters.

case 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

case 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.
*/


const longestSubstring = str => {
  if(str.length === 0) return 0;
  else if(str.length === 1) return 1;

  let currentSubStr = '';
  let longestSubStr = '';

  //abcabcbb
  for(let i = 0; i < str.length; i++) {
    let index = currentSubStr.indexOf(str[i]);
    if(index < 0) {
      currentSubStr += str[i];
    } else {
      if(currentSubStr.length > longestSubStr.length) longestSubStr = currentSubStr;
      currentSubStr = currentSubStr.slice(index + 1) + str[i];
    }
  }

  if(currentSubStr.length > longestSubStr.length) longestSubStr = currentSubStr;

  console.log('output: ' + longestSubStr.length);

  return longestSubStr.length;
}

longestSubstring('abcabcbb');
