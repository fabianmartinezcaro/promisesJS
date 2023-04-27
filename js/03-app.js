const aplicarDescuento = new Promise((resolve, reject)=>{

    const descuento = true;

    if(descuento){
        resolve('Se ha aplicado el descuento')
    }else{
        reject('No se pudo aplicar el descuento')
    }

});

aplicarDescuento
    .then(resultado => descuento(resultado))
    .catch(error => {
        console.log(error)
    })


function descuento(mensaje){
    console.log(mensaje)
}


console.log(aplicarDescuento)

// Hay 3 valores posibles
// fulfilled = la promesa se cumplio
// rejected = la promesa no se cumplio
// pending = Aun no se cumple y tampoco fue rechazado
