// hello world
console.log("hello world")

function pro(a){
    pro = " hello world"
    return pro
}
 console.log(pro());

// add two numbers
var a=10
var b= 20
var c= a+b
console.log(c);

function add(a,b)
{
    console.log(a+b)
}
add(10,30)

// swap two numbers

let a1= 10
let a2= 20
console.log(a1,a2) 
let temp = a1
a1 = a2 
a2 =  temp
console.log(a1,a2)

// convert km to mile 
let km = 5
 let mile = km * 0.62
 console.log(mile)

 //  convert into C to f
 let cel= 32
  let f = (cel * 1.8 )+32
  console.log(f)

  //square root
  let num= 4
  let result = Math.sqrt(num)
 console.log(result)

 // area triangle
 let base = 3
   let height = 5
let area = (base * height)/2
console.log(area);

// random number 
let ran = Math.random()*10

// check positive , negative, or zero 
let x= 4
if(x>0)
{
    console.log(x,"is a positive number");
}
 else if(x<0)
 {
    console.log(x, " is a negative number");
 }
 else{
    console.log(x," x is zero")
 }

 //even or odd
  let z = 5
  if( z%2 == 0)
  {
    console,log(z,"is even ");
  }else{
    console.log(z,"is odd");
    
  }

  //largest number among 3 
  let numb1 = 6
  let numb2 = 63
  let numb3 = 22
  if(numb1>numb2 && numb1>numb3)
  {
    console.log(numb1," is largest")
  }
   else if(numb2>numb1 && numb2>numb3)
  {
    console.log(numb2," is largest")
  }
  else
  {
    console.log(numb3,"is largest")
  }

  //prime number
  let prime = 5
  let count = 0
  for(let i = 1;i<prime;i++)
  {
    if(prime%i ==0)
    {
        count++
    }
  }
  if (count<=2)
  {
    console.log(prime,"is prime")
  }
  else{
    console.log(prime,"is not prime");
  }

  // factorial
  let numb = 5
  let fact = 1
  for(let i = 1;i<=numb;i++)
  {
    fact*=i
  }
  console.log(fact)

  // multiplication table
   let nu = 5
   for (let i=1;i<=10;i++)
   {
     let result = nu * i
     console.log(nu,"x",i,"=",result)
   }


   //amstrong number
   let s = 153
   let tempe = s

   let sum = 0
   while(tempe>0)
    {
        let rem = tempe % 10
        console.log(rem)
        sum += rem*rem*rem
        console.log(sum)
        tempe = Math.floor(tempe/10)
        console.log(temp)
    } 
    if(  s == sum)
    {
        console.log(s,"is an amstrong number")
    }
    else
    {
        console.log(s," is not amstrong number")
    }

    // simple calvculator
     let a11 = 10
     let b11 = 20
     let operator = "+"
     if( operator == "+")
     {
        console.log(a+b)
     }
       else if( operator == "-")
     {
        console.log(a-b)
     }
       else if( operator == "*")
     {
        console.log(a*b)
     }

       else if( operator == "/")
     {
        console.log(a/b)
     }
       else if( operator == "%")
     {
        console.log(a%b)
     }
     
     //sum of first 10 natural numbers
     let n = 20
     let summ =0
     for(let i=1;i<= n;i++)
     {
        summ += i
     }
     console.log(summ)

     // same last digit
      let num111 = "201"
      let num222 = "401"
      let num1dig = num111.split("")

      let num2dig = num222.split("")
      if(num1dig[2] == num2dig[2])
      {
        console.log(num111,"and",num222,"have same last digit")
      }
