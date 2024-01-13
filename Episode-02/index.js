let name1={
    firstName: "Mayank",
    lastName: "Jain",
}

let printFullName= function (hometown, state){
    console.log(this.firstName+ " " + this.lastName+ " from "+ hometown+ "," +state);
} 

// bind method : The bind method will return copy of the method 

let myName=printFullName.bind(name1, "Hyderabad");
console.log(myName); // this will return copy of the method 
myName( "Telangana");

// Creating our own bind method

Function.prototype.mybind= function(...arguments) {
    // this will point to printFullName
    let obj= this;
    console.log(arguments);
    params=arguments.slice(1);
    // the params which we receive are in the form of arrays hence we are using apply method below since it takes array of arguments as params
    return function(...args2) {
    obj.apply(arguments[0], [...params, ...args2]);
 
    }
}

let myName2=printFullName.mybind(name1, "Hyderabad");
console.log(myName); // this will return copy of the method 
myName2("Telangana");
