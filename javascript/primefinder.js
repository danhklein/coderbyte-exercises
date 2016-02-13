//Function returns true if Number is a prime.

function PrimeTime(num) {
  for (var i=2; i<num; i++){
      if (num%i ===0) {
        return "false";
      }
  }
  return num > 1
}


