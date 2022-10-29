function getSumFunction(num1){
  return function getSum(num2){
    return num1+num2;
  };
}

const getSum=getSumFunction(4);

console.log(getSum(5));