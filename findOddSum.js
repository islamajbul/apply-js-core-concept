 function getSumOfAnArray(numbers){
    
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        sum = sum + element;
        // console.log(index,element,sum);
    }
    return sum;
} 

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }        
    }
    return oddNumbers;
    
}
const myNumbers = [12,15,19,25,65,88,46];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = getSumOfAnArray(oddNumbers);
console.log('odd number sum', oddNumbersSum);
