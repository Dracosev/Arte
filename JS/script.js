let titulo = document.querySelectorAll(".animacion__scroll");
var imagenes = document.querySelectorAll(".images__cubismo");
let btn_bajar = document.querySelector(".text_favuismo");
let contenedor_imagenes = document.querySelector(".contenedor__images");
let contendor_principal_favuismo = document.querySelector(".hero_favuismo");

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


window.addEventListener('scroll', menuScoll);
window.addEventListener('scroll', mostrarElementos);
window.addEventListener('scroll', listarImagenes);


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

btn_bajar.addEventListener('click', function(){
    contenedor_imagenes.classList.toggle('permitir__contenedor');
    contendor_principal_favuismo.classList.toggle('desparecer_contenedor')

    
    console.log("SI sirvio");
})

// btn_bajar.addEventListener('onclick',function(){
//     contenedor_imagenes.style.display('none');
//     console.log("Texto ya no esta en display block");
// })