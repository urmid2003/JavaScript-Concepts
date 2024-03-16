// closure and lexical scope
// closure concept- In simple terms, a closure allows an inner function to access variables and functions from its outer function.
// so as you can see we have a function About which takes Name as parameter
// then in this function we are returing another anonymus function(functions which do not have any name)
//this anonymus function takes c as the parameter
//main motive of this is to see whether anonymus function will have access to variables of About function, because
// in another programming languages when a function is called after that all the variables are destroyed, i mean their values are gone so we cant access them after calling the fun
// but here in closures we have the privlage of doing opposite
// these closures will be used a lot in REDUX

//Imagine you have a little box called a function. Inside this box, you can put some information,
//  like variables or even other functions. Now, when you close this box and give it to someone else (or even yourself), they can still use whatever is inside it, even if it's hidden from the outside world.
//  That's what we call a closure.






var About= function(Name){
    console.log("my name is:"+Name);

    //below one is a anonymous function
    var b="loves ";
    return function(c){
       return console.log(Name+b+c);
    }
}
var store= About("umriiii ");
console.log(store("fries"))


//Lexical Scope

// Think of lexical scope like the rules of a game. In this game, every function creates its own little bubble, 
// and inside that bubble, it can see and use things from the bigger bubble outside. But if you try to see something from inside a bubble outside of it, you'll get an error because you're breaking the rules of the game.
function init() {
    var firstName = "Urmi";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}

init();
//when we run this there's an error saying firstName is undefined
console.log(firstName);