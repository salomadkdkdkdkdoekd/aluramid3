function tocaSom (seletorAudio) {
    document.querySelector(seletorAudio).play();
    if (elemento != null&& elemento.localName === 'audio'){
        elemento.play();
    }
else
     console.log('Elemento não encontrado ou seletor inválido')

}
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];  
    const idAudio = `#som_${instrumento}`; //TEMPLATE STRING
 
    tecla.onclick = function () {
        tocaSom(idAudio);

    }

    tecla.onkeydown = function(evento) {

        console.log(evento.code === 'Space'|| evento.code === 'Enter'){

    if(evento.code == 'Space') {
        tecla.classList.add('ativa');

    }
    
    if (){
        





    }

    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    
    }
} 
