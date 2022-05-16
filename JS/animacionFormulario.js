let datos = document.querySelectorAll(".datosPersona");
let contenedor_formulario = document.getElementsByClassName("formulario__contacto");

window.addEventListener('scroll',animacionEntradaFormulario);

function animacionEntradaFormulario(){
    let topScroll = document.documentElement.scrollTop;
    
    let scrollTopContenedor = contenedor_formulario.offsetTop;
    
    if(scrollTopContenedor -350 < topScroll){
        contenedor_formulario.classList.add("datos_entrada")
    }
}
