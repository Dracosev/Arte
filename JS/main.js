
let titulo = document.querySelectorAll(".animacion__scroll");
var imagenes = document.querySelectorAll(".images__cubismo");
let btn_bajar = document.querySelector(".text_favuismo");
let contenedor_imagenes = document.querySelector(".contenedor__images");
let contendor_principal_favuismo = document.querySelector(".hero_favuismo");
let contenedor_formulario = document.querySelector(".formulario__general");

function mostrarElementos(){
    let scrollTop = document.documentElement.scrollTop;


    for (var i = 0; i < titulo.length; i++){
        //La distancia del inicio de la pagina
        let alturaAnimado = titulo[i].offsetTop;
        
        // console.log(alturaAnimado);

        //Distancia de los elementos con el scroll top
        if(alturaAnimado -450< scrollTop){
            // console.log(titulo[i]);
            titulo[i].classList.add("aparecer__");
            titulo[i].style.opacity = 1;
            // console.log(alturaAnimado);
            
            
        }
        else{
            titulo[i].style.opacity =0;
            titulo[i].classList.remove("aparecer__");
        }
    }

}





//Funcion para agregar fondo y asignar nuevos tamaños
function menuScoll(){
    var menu = this.document.querySelector(".cabecera__");

    //Esto nos ayuda al scroll asignadole altiro una clase y cuando el scroll es mayor que 0 se asigna la clase
    menu.classList.toggle("abajo", window.scrollY>0);
}


function listarImagenes(){
    let scrollTopImagenes = document.documentElement.scrollTop;
        for(var i = 0; i < imagenes.length; i++){
            let alturaAnimadoImagenes = imagenes[i].offsetTop;
        
        //Distancia de los elementos con el scroll top
        if(alturaAnimadoImagenes -350< scrollTopImagenes){
            // console.log(titulo[i]);
            
            imagenes[i].classList.add("aparecer__img");
            
            
            imagenes[i].style.opacity=1;            
            
        }
        else{
            imagenes[i].style.opacity =0;
            imagenes[i].classList.remove("aparecer__img");
            
        }
        }
        //La distancia del inicio de la pagina
        
    

}


/*Funcion que me permite mostrar las imagenes del bloque favuismo (***Me falta hacer que el boton se puede heredar o algo asi) */
btn_bajar.addEventListener('click', function(){
    contenedor_imagenes.classList.toggle('permitir__contenedor');
    // contendor_principal_favuismo.classList.toggle('desparecer_contenedor')

    
    console.log("SI sirvio");
})

// btn_bajar.addEventListener('onclick',function(){
//     contenedor_imagenes.style.display('none');
//     console.log("Texto ya no esta en display block");
// })
function desparecer_contenedor(){
    let scrollTopContenedor = document.documentElement.scrollTop;
        
            let alturaAnimadoContenedor= contenedor_imagenes.offsetTop;
        
        //Distancia de los elementos con el scroll top
        if(alturaAnimadoContenedor -350> scrollTopContenedor){
          
            contenedor_imagenes.classList.toggle('permitir__contenedor');
            
            // alert("es mayor");
        }
}


window.addEventListener('scroll',animacionEntradaFormulario);

function animacionEntradaFormulario(){
    let topScroll = document.documentElement.scrollTop;
    
    let scrollTopContenedor = contenedor_formulario.offsetTop;
    
    if(scrollTopContenedor -350 < topScroll){
        contenedor_formulario.classList.add("datos_entrada;");
        contenedor_formulario.style.opacity=1;
    }
    else{
        contenedor_formulario.classList.remove("datos_entrada;");
        contenedor_formulario.style.opacity=0;
    }
}
window.addEventListener('scroll', menuScoll);
window.addEventListener('scroll', mostrarElementos);
window.addEventListener('scroll', listarImagenes);
window.addEventListener('scroll', desparecer_contenedor);
window.addEventListener('load',function(){
})
alert("Pagina tendra una proxima actualizacion VERSION(1.1)");
