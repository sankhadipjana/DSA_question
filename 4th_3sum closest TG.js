function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closest = Infinity

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                return sum;
            }
        }
    }

    return closest; // ✅ moved from console.log to return
}

let arr = [1, 3, 4, 5, 63, 4, 5];
console.log(threeSumClosest(arr, 10)); // 11