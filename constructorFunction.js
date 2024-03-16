//constructor function 

//so constructor function is like a blueprint for a object, for example you have made constructor/model for a car, basically you have made a car now you can make 
//many cars out of it or many objects out of it, only thing is that you take parameter from object, likwe what color, which tyres, what interior the object will have 
//so this is how constructor functions work
//here we have made constructor fun of Person, with details as name age etc, then below we are making objects 


function person(Pname,Page,Pgender){
    this.name=Pname;
    this.age=Page;
    this.gender=Pgender;
    this.greet= function(){
        return console.log("heloooo "+ this.name);
    };
}
//creating objects of the constructor function

const person1= new person('urmi',20,'female');
const person2= new person('dhiraj',11,'Male');

console.log(person1.greet());
console.log(person2.gender);


//***********************************************************************************************************************************

//Arrow function
// arrow function allows us to write functions in short ways
// fun=()=>{

//   }

myname=(name)=>{
    console.log("hello my name is "+ name);
}
myname("urmiii");