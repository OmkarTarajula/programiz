let a = 4
let b = 5
let arr_a = []
let arr_b = []
let common = []
for(let i=1;i<=10;i++)
{
    arr_a.push(a*i);
}
console.log( "Multiples of ",a,"are : ",arr_a);
for(let i=1;i<=10;i++)
{
    arr_b.push(b*i)
}
console.log( "Multiples of ", b, "are : ",arr_b);
for(let i = 0 ; i<arr_a.length;i++)
{
    if(arr_b . includes(arr_a[i]))
    {
        common.push(arr_a[i])
    }
}
console.log( "common Multiples are ",common)
let LCM= Math.min(...common)
console.log(LCM,"is the LCM of ",a,"and",b)