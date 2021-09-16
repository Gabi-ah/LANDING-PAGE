

$('form').submit((e) => {

    e.preventDefault()

    const correo = $('#correo').val()
    const producto = $('#producto').val()
    const cantidad = $('#cantidad').val()
    const mensaje = $('#mensaje').val()
    const genero =$('input[name="genero"]').val()

    if(correo == ""){      
        alert("el correo no puede estar vacio")

    }
    if(mensaje == ""){      
        alert("el mensaje no puede estar vacio")

    }
    if(correo != "" && mensaje != ""){
        alert("tu formulario está correcto")

    }




    const formValue = {
        "correo": correo,
        "producto": producto,
        "cantidad": cantidad,
        "mensaje": mensaje,
        "genero": genero,
    }
    console.log(formValue)
})

