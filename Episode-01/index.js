let name1={
    firstName: "Mayank",
    lastName: "Jain",
    //  printName: function (){
    //     console.log(this.firstName+ " " + this.lastName);
    // }
}

// name1.printFullName();
let printFullName= function (hometown, state){
    console.log(this.firstName+ " " + this.lastName+ " from "+ hometown+ "," +state);
} 

printFullName.call(name1, "Hyderabad", "Telangana");

let name2={
    firstName: "Mudith",
    lastName: "Jain",
}

//name1.printName.call(name2);
// Function Borrowing
printFullName.call(name2, "Hyderabad", "Telangana");  // Here we pass arguments separately


// apply method : The only difference between call and apply methods is the way how we pass the arguments

printFullName.apply(name2, ["Hyderabad", "Telangana"]); ///Here we pass arguments as array List

// bind method : The bind method will return copy of the method 

let myName=printFullName.bind(name2, "Hyderabad", "Telangana");
console.log(myName); // this will return copy of the method 
myName();
