/*
case 1:
  Input: s = "lee(t(c)o)de)"
  Output: "lee(t(c)o)de"
  Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

case 2:
  Input: s = "a)b(c)d"
  Output: "ab(c)d"
*/

const minRemoveToMakeValidParenthesis = (s) => {
  if(s.length === 0) return s;
  else if(s.length === 1 && (s[0] === '(' || s[0] === ')')) return "";

  let stack = [];

  for(let i = 0; i < s.length; i++) {
    let char = s[i];
    if(char === "(") stack.push([i, char]);
    else if(char === ")") {
      if(stack.length) {
        let [,topElement] = stack[stack.length - 1];

        if(topElement === "(") stack.pop();
        else stack.push([i, char]);
      } else stack.push([i, char]);
    }
  }

  let j = 0;
  if(stack.length) {
    while(j < stack.length) {
      let [index, char] = stack[j];
      if(j < 1) s = s.slice(0, index) + s.slice(index + 1);
      else s = s.slice(0, index - j) + s.slice(index - j + 1);

      j++;
    }
  }

  return s;
}

minRemoveToMakeValidParenthesis('');
