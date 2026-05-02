// in  sorted array

function TwoSum(sort, value){
    
    left = 0
    right = sort.length-1
    while(left<right){
        let sum = sort[left]+ sort[right]
        if(value==sum){
        return [left + 1, right + 1];
         }
         else if(sum<value){
            left++
        } 
        else{
            right--;
        }

    }

}

 let output= TwoSum([1,2,3,4,5,6,6],7)
 console.log(output);
 