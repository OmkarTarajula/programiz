let a = 12
let arr = []

for (let i=1;i<=a;i++)
{
    if(a%i==0)
    {
        arr.push(i)
    
    }
}

console.log("Factors of ",a,"are : ",arr)
