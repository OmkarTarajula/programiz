let a = 12
let b = 18
let arr_a = []
let arr_b = []
let common = []
for(let i=0;i<a;i++)
{
    if(a%i==0)
    {
    arr_a.push(i)
    }
   
}
 console.log("factors of",a,"are :",arr_a);
for(let i=0;i<b;i++)
{
    if(b%i==0)
    {
    arr_b.push(i)
    }
    
}
console.log("factors of",b,"are :",arr_b);
for (let i = 0;i<arr_a.length;i++)
{
    if(arr_b.includes(arr_a[i]))
    {
        common.push(arr_a[i]);
        
    }
}
 console.log(common);
let hcf = Math.max(...common)
console.log(hcf , " is the hcf of",a,"and",b);