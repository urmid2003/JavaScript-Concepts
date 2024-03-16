const obj1= {
    name:"urmi",
    getName: function(){
        return this.name;
    }
}
console.log(obj1)




//this was a method with which used to inherit the properties of one object using prototype in another object, so this is depricated now we will use another method
// const obj2={
//     roll: 35,
//     getRoll: function(){
//         return this.roll;
//     },
//     __proto__: obj1
// }

const obj2 = Object.create(obj1);
obj2.roll= 35;
obj2.getRoll=function(){
    return this.roll;
};

console.log(obj2);
//here we can see how we used getNmae function obj1 with help of obj2 as we created obj2 with create() method with argument as obj1 so we got the properties of obj1
//this is called object prototype
console.log(obj2.getName())