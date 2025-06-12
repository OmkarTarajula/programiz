for(let i = 1;i<=100;i++)
{
    let sum =0
    let temp= i
    while(temp>0)
    {
        
        let rem = temp%10
        sum += rem*rem*rem
        temp = Math.floor(temp/10)
    }
    if (sum == i)
    {
    console.log(sum);
    }
}