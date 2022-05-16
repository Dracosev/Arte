let nombre = document.getElementById("nombrePersona");
let apellido = document.getElementById("apellidoPersona");
let correo = document.getElementById("correoPersona");
let telefono = document.getElementById("telefonoPersona");
let errores = document.getElementById("error");
let formulario = document.getElementById("formulario");

function validarFormulario(){

    let mensajesError = "";
    let emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if(nombre.value ===null || nombre.value ===''){

        mensajesError += "Ingresa tu nombre <br>"
    }else if(apellido.value ===null || apellido.value ===''){
        mensajesError += "Ingresa tu apellido <br>"
    }else if (!emailRegex.test(correo.value)){
        mensajesError += "Correo Invalido <br>";
    }else if(correo.value === null || correo.value === ""){
        mensajesError += "Escriba algun correo"
    }else{
        alert("Enviado Satisfactoriamente!");
    }
    
    
    errores.innerHTML = mensajesError;
}

// function validarOtroFormulario(){
//     formulario.addEventListener("submit", e=>{
//         let mensajesError = "";
//         e.preventDefault();

//         if(nombre.value.length<=8){
//             mensajesError += "Nombre menor que 8 caracteres";
//             console.log("mnor que 8")
//         }

//         errores.innerHTML = errores;
//     })
// }