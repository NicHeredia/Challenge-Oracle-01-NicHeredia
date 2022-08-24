//captura del textArea y boton encriptar
const textarea = document.querySelector("#encriptador");

const resultado = document.querySelector("#resultado");


// Transicion de elementos del contenedor-resultado
function esconderElementos(){
    document.getElementById("esconder").style.display = "none";
    document.getElementById("muñeco").style.display = "none";
    document.getElementById("resultado").style.display = "block";
    document.getElementById("btn-copiar").style.display = "block";
  }



//funcion que Encripta el texto
const encriptarTexto = () =>{
    if(textarea.value != ""){
        esconderElementos();
        textarea.value = textarea.value.replace(/e/g, "enter");
        textarea.value = textarea.value.replace(/i/g, "imes");
        textarea.value = textarea.value.replace(/a/g, "ai");
        textarea.value = textarea.value.replace(/o/g, "ober");
        textarea.value = textarea.value.replace(/u/g, "ufat");
        resultado.textContent = textarea.value;
    } else {
        console.log("no se ingreso texto");
    }
    textarea.value = "";
}


//funcion que Desencripta el texto
const desencriptarTexto = () =>{
    if(textarea.value != ""){
        esconderElementos();
        textarea.value = textarea.value.replace(/enter/g, "e");
        textarea.value = textarea.value.replace(/imes/g, "i");
        textarea.value = textarea.value.replace(/ai/g, "a");
        textarea.value = textarea.value.replace(/ober/g, "o");
        textarea.value = textarea.value.replace(/ufat/g, "u");
        resultado.textContent = textarea.value;
    } else {
        console.log("No se ingreso texto");
    }
    inputTextarea.value = "";
}


//funcion encargada de copiar el texto del campo de resultado

const copiarResultado = () =>{
    navigator.clipboard.writeText(resultado.textContent);
    swal("Texto copiado correctamente!", "You clicked the button!", "success");

}

