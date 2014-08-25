$(document).ready(function() {
  for (var i = 1; i <= 100; i++)
  {
    var text = $("<p>" + getText(i) + "</p>");
    $("body").append(text);
  }
});

function getText(theNumber) {
  if (isDivisible(theNumber, 3) && isDivisible(theNumber, 5))
  {
    return "fizz buzz";
  }

  if (isDivisible(theNumber, 3))
  {
    return "fizz";
  }

  if (isDivisible(theNumber, 5))
  {
    return "buzz";
  }

  return theNumber;
}

function isDivisible(theNumber, divisor) {
  return theNumber % divisor === 0;
}