const textareaEntrada = document.querySelector(".textarea-entrada");
const textareaSalida = document.querySelector(".textarea-salida");


function presionarEncriptar(){
    textareaSalida.value = encriptar(textareaEntrada.value);
}

function presionarDesencriptar(){
    textareaSalida.value = desencriptar(textareaEntrada.value);
}

function presionarCopiar(){
    var clipboard = navigator.clipboard
    clipboard.writeText(textareaSalida.value);
}

function encriptar(texto){
    let textoSalida = "";
    for(let caracter of texto){
        switch(caracter){
            case 'e':
                textoSalida += "enter";
                break
            case 'i':
                textoSalida += "imes";
                break
            case 'a':
                textoSalida += "ai";
                break;
            case 'o':
                textoSalida += "ober";
                break
            case 'u':
                textoSalida += "ufat";
                break
            default:
                textoSalida += caracter;
        }
    }
    return textoSalida;
}

function desencriptar(texto){
    let textoSalida = "";
    console.log(texto.length);
    for(let i = 0; i < texto.length; i++){
        textoSalida += texto[i];
        switch(texto[i]){
            case 'e':
                i += 4;
                break;
            case 'a':
                i++;
                break;
            case 'i':
                i += 3;
                break;
            case 'o':
                i += 3;
                break;
            case 'u':
                i += 3;
                break;
        }
    }
    return textoSalida;
}