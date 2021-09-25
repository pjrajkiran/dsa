/*
case 1:
  Input: nums = [1,1,2]
  Output: 2, nums = [1,2,_]

case 2:
  Input: nums = [0,0,1,1,1,2,2,3,3,4]
  Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
*/

const removeDuplicates = arr => {

  if(arr.length === 0 || arr.length === 1) return arr;

  let i = 0;
  let j = i + 1;

  while(j < arr.length) {
      if(arr[i] != arr[j]) {
        i++;
        arr[i] = arr[j];
      }
      j++;
  }

  console.log('output: ' + JSON.stringify(arr));
  return arr;
}

removeDuplicates([0,0,1,1,1,2,2,3,3,4]);
removeDuplicates([1,2,3,4]);
