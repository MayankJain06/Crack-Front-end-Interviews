let name1={
    firstName: "Mayank",
    lastName: "Jain",
}

let printFullName= function (hometown, state){
    console.log(this.firstName+ " " + this.lastName+ " from "+ hometown+ "," +state);
} 

// bind method : The bind method will return copy of the method 

let myName=printFullName.bind(name1, "Hyderabad", "Telangana");
console.log(myName); // this will return copy of the method 
myName();

// Creating our own bind method

Function.prototype.mybind= function(...arguments){
    let obj= this;
    return function(){


    }
}