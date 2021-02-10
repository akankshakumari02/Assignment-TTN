function area()
{
  var result;
  r = document.getElementById("r").value;
  result = "Area of Circle of radius "+r+" is = "+(3.14*r*r);
  document.getElementById("result").innerHTML=result;
} 
