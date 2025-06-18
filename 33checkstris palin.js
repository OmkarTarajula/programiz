var str = "mommy"
var newstr= str.split("").reverse().join("")
if(str ==  newstr)
{
    console.log(str,"is a palindrome");
}
else{
    console.log(str,"is not palindrome")
}