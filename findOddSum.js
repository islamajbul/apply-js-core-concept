function getSumOfAnArray(numbers){
    
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        console.log(index,element,sum);
    }
    return sum;
}
const myNumbers = [12,15,19,25,65,88,46];
getSumOfAnArray(myNumbers);