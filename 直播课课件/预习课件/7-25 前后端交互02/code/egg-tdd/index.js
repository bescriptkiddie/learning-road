const isAliquot = (number, dividend) => {
  return number % dividend === 0;
};

module.exports = (number) => {
  if (isAliquot(number, 3) && isAliquot(number, 5)) {
    return "fizzBuzz";
  }

  if (isAliquot(number, 5)) {
    return "buzz";
  }
  if (isAliquot(number, 3)) {
    return "fizz";
  }

  return number;
};

// ()=>{
//     if(number % 3 === 0){
//         ddd
//     }

//     if(number % 5 === 0){
//         ddd
//     }

//     if(number % 5 === 0){
//         ddd
//     }
// }
