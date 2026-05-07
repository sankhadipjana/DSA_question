function duch(prop){
    let low = 0;
    let mid = 0;
    let high = prop.length-1
    while(mid<=high){
        if(prop[mid] == 0){
            [prop[mid],prop[low]] = [prop[low],prop[mid]]
            mid++
            low++
        }
        else if(prop[mid] == 1){
            mid++
        }
        else{
            [prop[mid],prop[high]] = [prop[high],prop[mid]]
            high--

        }
    }
    return prop

}
let arr = [1,2,0,1,0,2,1]
const out = duch(arr)
console.log(out);


