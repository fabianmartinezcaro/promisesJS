const paises = [];

function mostrarPaises(){
    console.log(paises);
}

function nuevoPais(pais, callback){
    paises.push(pais);
    console.log('Agregado:', pais)
    callback();
}

function iniciarCallBackHell(){
    setTimeout(() => {
        nuevoPais('Dubai', mostrarPaises);

        setTimeout(() => {
            nuevoPais('Japon', mostrarPaises)

            setTimeout(() => {
                nuevoPais('Chile', mostrarPaises);
            }, 3000);
        }, 4000);
    }, 3000);
}

iniciarCallBackHell();