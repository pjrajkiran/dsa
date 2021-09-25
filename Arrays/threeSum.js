/*
 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
 such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

case 1:
 Input: nums = [-1,0,1,2,-1,-4]
 Output: [[-1,-1,2],[-1,0,1]]

case 2:
  Input: nums = []
  Output: []

case 3:
  Input: nums = [0]
  Output: []

Constraints:
  0 <= nums.length <= 3000
  -105 <= nums[i] <= 105

*/

const threeSum = (arr) => {
  let result = [];

  if(arr.length < 3) {
    console.log('output: ' + JSON.stringify(result));
    return result;
  }

  arr.sort((a, b) => a - b);

  for(let i = 0; i < arr.length - 2; i++) {
    if(arr[i] > 0) return result;
    if(i>0 && arr[i] == arr[i-1]) continue;

    let left = i + 1;
    let right = arr.length-1;

    while(left < right) {
      let temp = arr[i] + arr[left] + arr[right];

      if(temp === 0) {
        result.push([arr[i], arr[left], arr[right]]);

        while(left < right && arr[left] === arr[left+1])
          left++;

        while(left < right && arr[right] === arr[right-1])
          right--;

        left++;
        right--;
      } else if(temp > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  console.log('output: ' + JSON.stringify(result));

  return result;
}

threeSum([-1,0,1,2,-1,-4]);

threeSum([]);

threeSum([0]);
