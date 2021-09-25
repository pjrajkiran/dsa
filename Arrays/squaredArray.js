// Given an array [-4, -1, 0, 2, 4] -> [0, 1, 4, 16, 16] elements in output array are squared

const squaredArray = (nums) => {
  if(nums.length === 0) return [];

  let left = 0;
  let right = nums.length - 1;

  for(let i = nums.length - 1; i >= 0; i--) {
    let leftVal = Math.abs(nums[left]);
    let rightVal = Math.abs(nums[right]);
    let temp = null;

    if(leftVal > rightVal) {
      temp = leftVal;
      left++;
    } else {
      temp = rightVal;
      right--;
    }

    nums[i] = temp * temp;
  }

  return nums;
}

squaredArray([-4, -1, 0, 2, 4]);
