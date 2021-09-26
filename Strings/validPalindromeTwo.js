const validPalindrome = (str) => {

  let i = 0;
  let j = str.length - 1;

  while(i < j) {
    if(str[i] != str[j]) {
      return (isValidPalindrome(str, i+1, j) || isValidPalindrome(str, i, j-1));
    }
    i++;
    j--;
  }

  return true;
}

const isValidPalindrome = (str, i, j) => {
    while(i < j) {
      if(str[i] != str[j]) {
        return false;
      }
      i++;
      j--;
    }

    return true;
}

//validPalindrome('((abac)))');
console.log(validPalindrome('abac'));
