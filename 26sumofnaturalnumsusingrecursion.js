 function natural(nums)
 {
    if(nums>0)
    {
        return nums+natural(nums-1)
    }
    else{
        return nums
    }
 }
 console.log(natural(15))

  