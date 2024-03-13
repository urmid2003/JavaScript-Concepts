let Name={
    firstName:"urmi" ,
    lastName: "dangi" ,
    printFullName: function(hometown, State){
        console.log(this.firstName+" "+this.lastName+ " from "+ hometown+" "+State);
    }
}
Name.printFullName("Dadri","Haryana");

let Name2={
    firstName: "manisha" ,
    lastName: "dangi"
}
// call() function borrowing
Name.printFullName.call(Name2,"dheradun","uttrakhand")

// apply()
Name.printFullName.apply(Name2,["pyannur","kerala"]);

// bind()
let printBindfun = Name.printFullName.bind(Name2,"mumbai","maharastra");
console.log(printBindfun);
printBindfun();