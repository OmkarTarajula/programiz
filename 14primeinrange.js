  let arr = []
 for(let i=2;i<=50;i++)
 {
 
       let count =0
    
    for(let j=1;j<=i;j++)
    {
      
    if(i%j==0)
    {
        count++;
    }
    }
 if(count<=2)
 {
    arr.push(i)
   
 }
}
console.log(arr);

 