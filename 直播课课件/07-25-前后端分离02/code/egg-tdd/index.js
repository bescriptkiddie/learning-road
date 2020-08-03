module.exports = (num) => {
  if (isAliquot(num, 5) && isAliquot(num, 3)) {
    return "fizzBuzz";
  }

  if (isAliquot(num, 3)) {
    return "fizz";
  }
  if (isAliquot(num, 5)) {
    return "buzz";
  }

  return num;
};

function isAliquot(num, dividend) {
  return num % dividend === 0;
}
