console.log("funciona")

window.addEventListener("load", function(){
    let formulario = document.querySelector("form.formlogin");

    formulario.addEventListener("submit", function(e){
        
        let errores = []
        
        let campoNombre = document.querySelector("input.nombre")

        if(campoNombre.length < 2){
            errores.push("El campo nombre tiene que estar completo")
        } else if (campoNombre.value == ""){
            errores.push("El campo nombre tiene que estar completo")
        }


        let campoApellido = document.querySelector("input.apellido")

        if(campoApellido.length < 2){
            errores.push("El campo apellido tiene estar completo")
        }else if (campoApellido.value == ""){
            errores.push("El campo apellido tiene que estar completo")
        }


        let campoContrasenia = document.querySelector("input.contrasenia")

        if(campoContrasenia < 8){
            errores.push("la contraseña debe ser mayor a 8 caracteres")
        }

        let campoEmail = document.querySelector("input.email")

        if(campoEmail.value == null){
            errores.push("el Email es obligatorio")
        }

        let campoImagen = document.querySelector("input.imagen")


        if(errores.length > 0) {
            e.preventDefault

            let ulErrores = document.querySelector("div.errores ul")

            for (let i = 0; i < errores.length ; i++){
                ulErrores.innerHTML += "<li>" + errores[i] +"</li>"
            }
        }
        
    })
})