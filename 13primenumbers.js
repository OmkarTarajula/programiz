let prime = 32
 let count =0
 for(let i=2;i<prime;i++)
 {
    if(prime%i==0)
    {
        count++
    }
 }
 if(count<=2)
 {
    console.log(prime," is a prime number");
 }
 else{
    console.log(prime,"is not a prime");
 }