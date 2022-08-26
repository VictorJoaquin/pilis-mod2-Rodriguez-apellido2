let boton=document.querySelector("#send")
console.log(boton)

boton.addEventListener('click',function(){
    event.preventDefault()
    let comercioForm=document.querySelector('#comercio').value
    let titularForm=document.querySelector('#titular').value
    let celularForm=document.querySelector('#celular').value

    if(comercioForm != 0 && titularForm!=0 && celularForm != 0){ 
        const mensajeObj = {
            comercio: comercioForm,
            titular: titularForm,
            celular: celularForm
        }
        console.log(mensajeObj);
       
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(mensajeObj),
            headers: { "Content-type": "application/json; charset=UTF-8" },
        })
            .then((response) => response.json())
            .then((json) => { 
                console.log(json);
                Swal.fire(
                    'Se enviaron sus datos',
                    'En breve nos comunicaremos', 
                    'success'
                );
            })
    }else
        console.log("No se ingresaron datos")
})