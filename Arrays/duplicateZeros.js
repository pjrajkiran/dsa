/*
case 1:
  Input: arr = [1,0,2,3,0,4,5,0]
  Output:      [1,0,0,2,3,0,0,4]
  Explanation: After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]

case 2:
  Input: arr = [1,2,3]
  Output: [1,2,3]
  Explanation: After calling your function, the input array is modified to: [1,2,3]

Constraints:
  1 <= arr.length <= 104
  0 <= arr[i] <= 9
*/

const duplicateZeros = (arr) => {
  let totalZeros = arr.reduce((acc, val) => {
    if(val === 0) {
      acc += 1;
    }
    return acc;
  }, 0);

  let right = arr.length - 1 + totalZeros;

  for(let i = arr.length - 1; i >= 0; i--) {
    if(right < arr.length) {
      arr[right] = arr[i];
    }
    right--;

    if(arr[i] === 0) {
      if(right < arr.length) {
        arr[right] = arr[i];
      }
      right--;
    }
  }

  console.log(arr);
  return arr;
}

duplicateZeros([1,0,2,3,0,4,5,0]);
