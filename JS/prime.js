function IsPrime(currNumber) {
  if (currNumber <= 1) return false;
  else if (currNumber == 2) return true;
  else if (currNumber % 2 == 0) return false;
  else {
    for (var i = 3; i < currNumber - 1; i++) {
      return currNumber % i == 0 ? false : true;
    }
    return false;
  }
}
function GetPrimeNumbers(enterednum) {
  try {
    var primeNumber = void 0;
    var currNumber = enterednum;
    do {
      if (IsPrime(currNumber)) console.log(" Prime Number " + currNumber);
      primeNumber.push(currNumber);
      currNumber++;
    } while (primeNumber.length < 10);
    return primeNumber;
  } catch (Exception) {
    console.log("Sorry error occured while getting the prime number.");
    console.log(Exception);
  }
}
GetPrimeNumbers(2);
