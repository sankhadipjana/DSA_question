function triplet(arr, tg){
 
    for(i=0; i<=arr.length-1; i++){
         let left =i+1;
         let right = arr.length-1
        let main = tg - arr[i]
         while(left<right){
              let sum = arr[left]+arr[right]
             if(main >sum){
                 console.log([arr[i],arr[left],arr[right]])
                 right--
                 
             }
             else{
                 right--
             }
             
         }
    }
}


let arr = [1,2,3,4,5,6,7,8,9]
triplet(arr,10)