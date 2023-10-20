// Pom ----------------------------------------
function tocaSomPom () {
    document.querySelector('#som_tecla_pom').play();
}

function tocaSomClap () {
    document.querySelector('#som_tecla_clap').play();
}
const listaDeTeclas = document.querySelectorAll('.tecla');



    listaDeTeclas[0].onclick = tocaSomPom;

    listaDeTeclas[1].onclick = tocaSomClap;

     let contador=0
     while(contador<listaDeTeclas.length){
        listaDeTeclas[contador]onclick = tocaSomPom;
        contador=contador+1;
        console.log(contador)
     }
    