var tri = function(number1, number2, number3) {

    if (number1 === number2 && number2 === number3 && number1 === number3) {
      return "Equilateral";
    } else if ((number1 === number2) || (number1 === number3) || (number2 === number3)) {
      return "Isoceles";
    } else if ((number1 != number2) || (number1 != number3) || (number2 != number3)) {
      return "Scalene";
    } else if (((number1 + number2) <= number3)) {
      return "Not a triangle";
    }

  }


$(document).ready(function() {
  $("form#triangle").submit(function() {
    event.preventDefault();
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var number3 = parseInt($("#input3").val());
    var result = tri(number1, number2, number3);
    $("#output").text(result);
  });
});
