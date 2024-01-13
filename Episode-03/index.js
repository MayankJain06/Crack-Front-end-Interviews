let multiply=function(x,y) {
    console.log(x*y) ;
}
multiply(2,3);

let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree = multiply.bind(this);
multiplyByThree(4,3);
