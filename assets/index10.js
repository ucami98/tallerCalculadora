
document.getElementById("suma").addEventListener("click", function (resultSuma) {
    var input1 = document.getElementById("var1").value;
    var input2 = document.getElementById("var2").value;
    var resultSuma=(parseInt(input1)+parseInt(input2));
      var pElement = document.getElementById("data");
  
  pElement.innerHTML = "La suma de "+input1 + " y "+input2+" es = " +resultSuma;
})
document.getElementById("resta").addEventListener("click", function (resultResta) {
    var input1 = document.getElementById("var1").value;
    var input2 = document.getElementById("var2").value;
    var resultResta=(parseInt(input1)-parseInt(input2));
      var pElement = document.getElementById("data");
  
  pElement.innerHTML = "La resta de "+input1 + " y "+input2+" es = " +resultResta;
})
document.getElementById("multiplicacion").addEventListener("click", function (resultMult) {
    var input1 = document.getElementById("var1").value;
    var input2 = document.getElementById("var2").value;
    var resultMult=(parseInt(input1)*parseInt(input2));
      var pElement = document.getElementById("data");
  
  pElement.innerHTML = "La multiplicación de "+input1 + " y "+input2+" es = " +resultMult;
})
document.getElementById("division").addEventListener("click", function (resultDiv) {
    var input1 = document.getElementById("var1").value;
    var input2 = document.getElementById("var2").value;
    var resultDiv=(parseInt(input1)/parseInt(input2));
      var pElement = document.getElementById("data");
  
  pElement.innerHTML = "La division de "+input1 + " y "+input2+" es = " +resultDiv;
})