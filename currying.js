function Addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

//first method to add and pass values

let first= Addition(4);// in first variable function(b) is returned
let second= first(6);// in second variable function(c) is returned
let third= second(8);// in third variable a+b+c is returned, hence when we console log we get 18 as result
console.log(third);

//second method 
//this method is called currying in which we pass all the arguments together 

let whole= Addition(4)(6)(8);
console.log(whole);


//in real life code how can we use currying
userObj={
    name:"Ajay",
    age:28
}

function userInfo(obj){
    return function(userinfo){
        return obj[userinfo];
    }
} 

let res=userInfo(userObj);
console.log(res('age'))
console.log(res('name'))