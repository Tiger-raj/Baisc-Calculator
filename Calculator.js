    
function but(number) {
 
  var box = document.getElementById("blank") ;
  box.value = box.value + number  ;
  
}

function equal(){
  var expression = document.getElementById("blank").value ;
 var answer = eval(expression);

  document.getElementById("blank").value = answer;

}

function clearFunc(){
  document.getElementById("blank").value = "" ;

}
function showConst(){
  document.getElementById("constBox").style.display = "block" ;
  
}

function back(){
var inputVal =  document.getElementById("blank").value ;
var newVal = inputVal.substring(0,inputVal.length-1 ) ;
document.getElementById("blank").value = newVal ;
  
}
