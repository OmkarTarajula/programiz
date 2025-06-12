let a = 153
let temp = a
let sum=0
while(temp>0)
{
    let rem = temp%10
    console.log(rem)
    sum += rem*rem*rem
    console.log(sum)
    temp=Math.floor(temp/10)
    console.log(temp)

}
if (sum == a)
{
    console.log(a,"is a amstrong number")
}
else 
{
    console.log(a," is not a amstrong number");
}