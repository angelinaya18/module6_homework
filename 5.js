const getPow=(x,n)=>{
    let res=1;
    
    for(let i=0;i<n;i++){
      res*=x;
    }
    
    return res;
  }
  
  console.log(getPow(2,10));