// Write a function that takes in a string and returns it when reversed
// let food = “eating”
function string(food){
  food.reverse()
  console.log(food)
}
let food ="eating"


// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// target=23
function binary(num,target){
   left=0
    right=num.length -1
    while(left<=right){
      let middle=math.floor((left+right)/2)
      if (num[middle]===target){
        return middle
      }
      else if(num[middle]<target){
       left = middle +1
    }
    else{
        right=middle -1
    }
}
return null
}
let num = [2,8,0,23,5,45,76]
let target=23
console.log(binary(num,target))

// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”

// Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
// “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.


// Write a function that takes in an array of numbers and returns an array that has all
// elements multiplied by 4.
// let numArray = [12,87,45,75,23,64,73]
function array(numArray){
    numArray.forEach(numArray=>{
      newArr=numArray*4
      console.log(newArr)  
    })
    }
    let numArray=[12,87,45,75,23,64,73]
    array(numArray)


// 6. Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function array(nums){
for(let i=0; i<nums.length; i++){
     console.log(nums[i])
}
}
let nums = ["10","24","45","56","67"]
array(nums)
