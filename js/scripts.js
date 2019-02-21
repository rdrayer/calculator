var calc = function(number1, number2, operator) {
  if (operator === "add") {
    return number1 + number2;
  } else if (operator === "subtract") {
    return number1 - number2;
  } else if (operator === "multiply") {
    return number1 * number2;
  } else {
    return number1 / number2;
  }
}

$(document).ready(function() {
  $("form#calculator").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var operator = $("input:radio[name=operator]:checked").val();
    var result = calc(number1, number2, operator);
    $("#output").text(result);
  });
});
