function checkEven(number){
    const reminder = number % 2;
    if(reminder === 0){
        // console.log('number is even');
        return true;
    }
    else{
        // console.log('number is odd')
        return false;
    }
}
const myNumberIsEven = checkEven(45);
console.log(myNumberIsEven);
const herNumberIsEven = checkEven(120);
console.log(herNumberIsEven);