function calculate()
{
    
  var result;
  var p = prompt("Please enter Amount");
  var r = prompt("Please enter Rate");
  var t = prompt("Please enter Time");
  result = "Calculated Interest is :"+(p*r*t)/100;
  document.getElementById("demo").innerHTML=result;
} 
