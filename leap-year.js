function isLeapYear (year){
    const normalRemainder = year % 4;
    const hundredRemainder = year % 100;
    // if(remainder === 0){
    //     // console.log('This year is Leap-year',year);
    //     return true;
    // }
    // else{
    //     // console.log('This year is not a Leap-year',year);
    //     return false;
    // }

    if((normalRemainder === 0) && (hundredRemainder != 0)){
        // console.log('This year is Leap-year',year);
        return true;
    }
    return false;
}

const isMyYearLeapYear = isLeapYear(1900);
console.log('This is leap-year',isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1920);
console.log('This is a leap-year',isHerYearLeapYear);

