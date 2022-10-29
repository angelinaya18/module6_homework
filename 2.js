function getSimpleNumber(num){
  if(num===1) return 'Число 1 имеет только один делитель - не относится ни к сложным, ни к простым';
  if(num>0 && num<=1000){
    for(let i=2;i<num;i++){
      if(num%i===0) return 'Число не является простым'
    }
    return 'Число является простым';
  }else{
    return 'Данные не верны';
  }
}

let num=1001;

console.log(getSimpleNumber(num));