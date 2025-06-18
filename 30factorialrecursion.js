function factorial(num)
{
    if (num == 0)
    {
        return num
    }
    else{
        return factorial(num)*factorial(num-1)
    }
}
for (let i = 0;i<5;i++)
{
    console.log(factorial(i));
}