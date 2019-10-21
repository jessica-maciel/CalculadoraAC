
function escrever(num1){
  
  var num2 = document.getElementById('resultado').value += num1;
  
}

 function resultado1(num){

  var cont = document.getElementById("resultado").value;
  
  try {
    //document.getElementById("resultado").value = eval(document.getElementById("resultado").value);

    document.getElementById("resultado").value = eval(cont);

  }
  catch(err) {
   
    document.getElementById("resultado").value = "Erro de operação.";//err.message"";
    
  }
 
}