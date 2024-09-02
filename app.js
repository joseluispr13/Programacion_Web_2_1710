
/*alert("BIENVENIDO");
alert("ESTA PÁGINA POSEE UNA FUNCIÓN LA CUAL DEPENDIENDO LA HORA EN LA QUE SE ESTE EJECUTANDO DICHA FUNCIÓN, ESTA LE DEVOLVERÁ UN SALUDO DE ACUERDO A LA HORA OBTENIDA");
*/
function saludarSegunHora(nombreUsuario){
    const horaActual = new Date().getHours(); // Obtener la hora actual
    let saludo;

    if(horaActual < 12){
        saludo = "Buenos días " + nombreUsuario;
    } else if (horaActual => 12 && horaActual <= 18){
        saludo = "Buenas tardes " + nombreUsuario;;   
    }else {
        saludo = "Buenas noches " + nombreUsuario;;
    }

    return saludo;
}

const nombreUsuario = "Jose Luis";
console.log(saludarSegunHora(nombreUsuario));
console.log("Hasta luego, vuelva pronto :)");
