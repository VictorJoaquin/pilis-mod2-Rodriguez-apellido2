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


//consulta a Api del clima
//https://api.openweathermap.org/data/2.5/weather?id=3836564&appid=057bee1d4b18ab2fe4b0394804bd577d

fetch ("https://api.openweathermap.org/data/2.5/weather?id=3836564&appid=057bee1d4b18ab2fe4b0394804bd577d")
.then(response => response.json())
.then(data => { 
    mostrarClima(data)

    console.log(data.main.temp)
    
})
.catch(err => console.log(err))
function mostrarClima(data){
    let ciudad = data.name +"             ";
    let temperatura = "Temperatura "+ ((data.main.temp - 273.15).toFixed(0)) + "ºC";
    let humedad = "  Humedad: " + data.main.humidity + "%" ;

    document.getElementById("clima1").innerHTML = ciudad;
    document.getElementById("clima2").innerHTML = temperatura + humedad;

}
