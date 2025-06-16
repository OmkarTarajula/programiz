//   let arr = []
//  for(let i=2;i<=50;i++)
//  {
 
//        let count =0
    
//     for(let j=1;j<=i;j++)
//     {
      
//     if(i%j==0)
//     {
//         count++;
//     }
//     }
//  if(count<=2)
//  {
//     arr.push(i)
   
//  }
// }
// console.log(arr);

 

// using is prime 

for(let i=2;i<=50;i++)
 {
 
     let isPrime = true
    
    for(let j=2;j<i;j++)
    {
      
    if(i%j==0)
    {
       isPrime=false
       break;
    }
    }
 if(isPrime)
 {
   console.log(i);
 }

}

