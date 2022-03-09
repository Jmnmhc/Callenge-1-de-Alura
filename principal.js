var botonEncriptar = document.querySelector("#btn-encriptar");
var textoIngresado = document.querySelector("#input-texto");
var botonDesencriptar = document.querySelector("#btn-desencriptar");
var botonCopiar = document.querySelector("#btn-copy");
var copiarTexto = document.querySelector("#msg");


botonEncriptar.addEventListener("click",function(event){
 
        event.preventDefault();         //impido que actualice
 
        validarTexto(textoIngresado);   //intento validar llamando a la funcion
        encriptar(textoIngresado);      //envio el texto a la funcion para ser encriptado
        textoIngresado.value ="";       //pongo en blanco el cuadro de texto donde se ingresa
});

botonDesencriptar.addEventListener("click",function(event){

        event.preventDefault();         //impido q actualice

        validarTexto(textoIngresado);   //intento validar llamando a la funcion
        desEncriptar(textoIngresado);   //envio el texto a la funcion para desencriptar
        textoIngresado.value ="";       //pongo en blanco el cuadro de texto donde se ingresa
});

botonCopiar.addEventListener("click",function(event){

    event.preventDefault();
    copiar(copiarTexto)
})

