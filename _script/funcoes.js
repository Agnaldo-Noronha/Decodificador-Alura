/* Configuração de mostrar as divs*/

const outputArea = document.getElementById('outputArea');
const outputInicial = document.getElementById('outputInicial');
const btn = document.querySelector('.btn');

outputArea.style.display = 'none';

btn.addEventListener('click', function(){
    if (outputArea.style.display == 'none'){
        outputArea.style.display = 'block';
        outputInicial.style.display = 'none';
    }
    else{
        outputArea.style.display == 'none';
    }
});

/*Criptografia*/
    
const inputTexto = document.getElementById("textinput")
const mensagem = document.getElementById("textoutput")

function btnEncrip(){
    const textoEncriptado = encriptar(inputTexto.value)
    mensagem.value = textoEncriptado
}

function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    
    for (let i=0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }   
    }
    return stringEncriptada;
}

/* Descriptografia*/

function desencriptar (){
    let txtencrip = inputTexto.value
    txtencrip = txtencrip.replaceAll(/enter/gi, "e")
                          .replaceAll(/imes/gi, "i")
                          .replaceAll(/ai/gi, "a")
                          .replaceAll(/ober/gi, "o")
                          .replaceAll(/ufat/gi, "u");
    mensagem.innerHTML = txtencrip;                        
}

/*Botão copiar*/

function mudacor (){
    let botao = document.getElementById('copiar');
    botao.style.backgroundColor = 'green'
    botao.style.color = 'White'
    botao.innerText = 'Texto copiado!';
}

function myFunction() {
    let texto = document.getElementById('textoutput');
    let botao = document.getElementById('copiar');
    texto.select();
    texto.setSelectionRange(0, 99999); 
    navigator.clipboard.writeText(texto.value);
    botao.onclick = mudacor()
}



    

