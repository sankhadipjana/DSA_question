function threeSum(array, tg) {
    let arlen = array.length - 2;
    for (let i = 0; i <= arlen; i++) {
        let left = i + 1;
        let right = array.length - 1;
        let sum = tg - array[i];

        while (left < right) {
            let add = array[left] + array[right];

            if (add == sum) {
                console.log([array[i], array[left], array[right]]);
                left++;
                right--;

                // Skip duplicates
                while (array[left] == array[left - 1]) {
                    left++;
                }
                while (array[right] == array[right + 1]) {
                    right--;
                }
            } else if (add < sum) {
                left++;   // Need larger sum → move left pointer right
            } else {
                right--;  // Need smaller sum → move right pointer left
            }
        }
    }
}

const arr = [1,2,3,4,5,6,6,7]

threeSum(arr, 11)