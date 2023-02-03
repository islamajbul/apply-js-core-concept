// const myInches = 12;
// const myFeet = myInches/12;
// console.log(myFeet);

// const dadaInches = 144;
// const dadaFeet = dadaInches/12;
// console.log('dada feet', dadaFeet);

// const dadiInches = 72;
// const dadiFeet = dadiInches/12;
// console.log('dadi feet', dadiFeet);

function inchToFeet(inches){
    const feet = inches/12;
    return feet;
}

const dadaInches = 120;
const dadaFeet = inchToFeet(dadaInches);
console.log(dadaFeet);

const nanaInches = 144;
const nanaFeet = inchToFeet(nanaInches);
console.log(nanaFeet);


