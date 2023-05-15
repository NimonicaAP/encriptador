function encriptar(){
    let entrada = document.getElementById('encriptarTexto').value.toLowerCase();

    let encriptarTexto = entrada.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai').replace(/o/g,'ober').replace(/u/g,'ufat');

    document.getElementById('textoEncriptado').innerHTML = encriptarTexto;
}

function desencriptar(){
    let encriptado = document.getElementById('encriptarTexto').value.toLowerCase();

    let desencriptarTexto = encriptado.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a').replace(/ober/g,'o').replace(/ufat/g,'u');
    document.getElementById('textoEncriptado').innerHTML = desencriptarTexto;
}

function copiarTexto(){
    let contenido = document.getElementById('textoEncriptado').value;
    navigator.clipboard.writeText(contenido);
    alert('Texto copiado al portapapeles');
}

function borrarEntrada(){
    document.getElementById('textoEncriptado').innerHTML='';
}

document.getElementById('btnEncriptar').addEventListener('click', encriptar);
document.getElementById('btnDes').addEventListener('click', desencriptar);
document.getElementById('encriptarTexto').addEventListener('input', borrarEntrada);
document.getElementById('btnCopiar').addEventListener('click', copiarTexto);
