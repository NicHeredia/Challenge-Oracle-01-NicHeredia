function esconderElementos(){
  document.getElementById("esconder").style.display = "none";
  document.getElementById("muñeco").style.display = "none";
  document.getElementById("resultado").style.display = "block";
  document.getElementById("boton-copiar").style.display = "block";
}

function encriptador() {
    x = ""
    var x = document.getElementById("encriptador").value;

    if (x != "") {
      esconderElementos();
      x = x.replace(/e/g, "enter");
      x = x.replace(/i/g, "imes");
      x = x.replace(/a/g, "ai");
      x = x.replace(/o/g, "ober");
      x = x.replace(/u/g, "ufat"); 
      document.getElementById("resultado").innerHTML = x;
      document.getElementById("encriptador").value = ""
    } else {
      console.log("array vacio");
    }
  }

  function desencriptador() {
    y = ""
    var y = document.getElementById("encriptador").value;
    if (y != ""){
    esconderElementos();
    y = y.replace(/enter/g, "e");
    y = y.replace(/imes/g, "i");
    y = y.replace(/ai/g, "a");
    y = y.replace(/ober/g, "o");
    y = y.replace(/ufat/g, "u");
    document.getElementById("resultado").innerHTML = y;
    document.getElementById("encriptador").value = ""
  
    } else {
      console.log("array vacio");
    }
  }


  function copyToClickBoard(){
    var content = document.getElementById('resultado').innerHTML;

    navigator.clipboard.writeText(content)       
}

function minus(e) {
  e.value = e.value.toLowerCase();
}

