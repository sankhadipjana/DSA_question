var removeDuplicates = function(nums) {
    const len = nums.length
     let i= 1
     let j=0
     while(i<len){
         if(nums[j] == nums[i]){
             i++
         }else{
             nums[j+1] = nums[i]
             j++
             i++
         }
         
     }
     nums.length = j+1
     console.log(nums)
    
};
removeDuplicates([1,1,1,2,2,2,3,3])