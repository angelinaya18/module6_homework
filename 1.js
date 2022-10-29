function getCountPropsNumber(arr){
    let countOdd=0, countEven=0, countZero=0;
  
    arr.forEach(function(item,index,array){
        if(typeof(item)==='number' && !isNaN(item)){
        if(item===0){
            countZero++;
        }else{
            if(item%2===0) countEven++;
            else countOdd++;
        }
        } 
    });
  
    console.log("Количество четных чисел:",countEven);
    console.log("Количество нечетных чисел:",countOdd);
    console.log("Количество нулевых чисел:",countZero); 
}
  
let arr=[1,3,'a',0,null,NaN,undefined,2,6,7];
getCountPropsNumber(arr);