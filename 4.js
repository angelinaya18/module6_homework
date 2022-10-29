function showNumInterval(num1, num2){
    let current=num1;
    
    let intervalId=setInterval(function(){
      console.log(current);
      current++;
      
      if(current>num2){
        clearInterval(intervalId);
      }
    },1000);
  }
  
  showNumInterval(5, 15);