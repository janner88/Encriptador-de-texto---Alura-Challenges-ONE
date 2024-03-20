const textarea = document.querySelector(".text-area")
const mensaje = document.querySelector(".mensaje")
const cajaResultado = document.querySelector(".cajaResultado")
const copiar = document.querySelector(".boton-copiar")


// Esta función verifica si el texto de entrada contiene solo letras minúsculas sin acentos.
// Si la entrada no es válida, muestra un mensaje de error y vuelve a cargar la página.

function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validar = textoEscrito.match(/^[a-z\s]*$/i);

    if(!validar || validar === 0) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Solo son permitidas letras minúsculas y sin acentos',
            showConfirmButton: true,
          }).then(() => location.reload());
        return true;
    }
}


function botonEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textarea.value)
        mensaje.value = textoEncriptado
        textarea.value = "";
        mensaje.style.backgroundImage = "none";
        copiar.style.display = "block";
        copiar.style.display = "inherit";
        cajaResultado.style.transform = "rotateY(180deg)";
    }
}


function botonDesencriptar(){
    if(!validarTexto()) {
    const textoEncriptado = desencriptar(textarea.value)
    mensaje.value = textoEncriptado
    textarea.value = "";
    copiar.style.display = "block";
    copiar.style.display = "inherit";
    cajaResultado.style.transform = "rotateY(180deg)";
    }
}


function botonCopiar() {
    copiaResultado();
    copiar.style.display = "none";
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'El texto ha sido copiado',
        showConfirmButton: false,
        timer: 2600
      })
}


function copiaResultado() {    
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    cajaResultado.style.transform = "rotateY(360deg)";
}

//Laves de encriptacion
//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function encriptar(stringEncriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }    
    }
    return stringEncriptado
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }    
    }
    return stringDesencriptado
}