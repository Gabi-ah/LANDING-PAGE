

$('form').submit((e) => {

    e.preventDefault()

    const correo = $('#correo').val()
    const producto = $('#producto').val()
    const cantidad = $('#cantidad').val()
    const mensaje = $('#mensaje').val()
    const genero =$('input[name="genero"]').val()



    const formValue = {
        "correo": correo,
        "producto": producto,
        "cantidad": cantidad,
        "mensaje": mensaje,
        "genero": genero,
    }
    console.log(formValue)
})

