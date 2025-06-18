// // how to print array an string using for loop

// var str = "hello"
// for(let i=0;i<str.length;i++)
// {
//     console.log(str[i]);
// }

// var array =[10,20,30,40,50]
// for(let i=0;i<array.length;i++)
// {
//     console.log(array[i])
// }
function fib(num)
{
    if(num<2)
    {
        return num
    }
    else{
        return fib(num-1)+fib(num-2)
    }
}
for(let i=0;i<=8;i++)
{
    console.log(fib(i));
}