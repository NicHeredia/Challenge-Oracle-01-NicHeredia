//captura de los botones
const botonEncriptar = document.querySelector("#btn-encriptar");
const botonDesencriptar = document.querySelector("#btn-desencriptar");
const botonCopiar = document.querySelector("#btn-copiar")


//escucha de los eventos de los Botones

botonEncriptar.addEventListener("click", encriptarTexto);
botonDesencriptar.addEventListener("click", desencriptarTexto);
botonCopiar.addEventListener("click", copiarResultado);


//validacion inputTextarea
textarea.addEventListener("keyup", () =>{
    textarea.value = textarea.value.toLowerCase();
    textarea.value = textarea.value.replace(/[^a-zA-Z]+/g, "");
})

