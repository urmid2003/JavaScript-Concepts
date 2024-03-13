//Example of higher order function
// a function which takes a function as argument or returns a function is called higher order function
// here we have a function as salary which is passed as a argument in setTimeout function which is a default function, it takes two arguments,
// its means wait for 300 milliseconds then perform the function
function Salary(num){
      return num*0.7
}
setTimeout(function()
   {var result=Salary(1000);
    console.log("salary after tax is :"+result)
   }
   , 300);