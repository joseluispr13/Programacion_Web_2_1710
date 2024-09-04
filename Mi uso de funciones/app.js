let numeroMaquina = Math.floor(Math.random() * 10) + 1;
let vidas = 3;

function pedirNombre() {
    let nombre = prompt("NOMBRE DEL JUGADOR: ");
    return nombre;
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function pedirNumero() {
    let numero = parseInt(prompt("INGRESA UN NÚMERO EN EL RANGO DE 1 A 10: "));
    alert("USTED INGRESO EL NÚMERO " + numero);
    return numero;
}

function iniciarAdivinaNum() {
    let nombreUsuario = pedirNombre();
    mostrarMensaje(nombreUsuario + " POSEES: " + vidas + " VIDAS");

    while (vidas > 0) {
        let numeroUsuario = pedirNumero();

        if (numeroUsuario === numeroMaquina) {
            mostrarMensaje("FELICIDADES " + nombreUsuario + ", HA ELEGIDO EL NÚMERO QUE HE PENSADO");
            alert("VUELVA PRONTO :)");
            console.log("GAME OVER");
            break;
        } else {
            vidas--;
            if (vidas > 0) {
                let pista = numeroUsuario > numeroMaquina ? "INGRESA UN NÚMERO MENOR, " : "INGRESA UN NÚMERO MAYOR, ";
                mostrarMensaje(pista + "POSEE " + vidas + " INTENTOS MÁS (VIDAS)");
            } else {
                mostrarMensaje("JUEGO TERMINADO (GAME OVER) " + nombreUsuario + ", EL NÚMERO ERA: " + numeroMaquina);
                alert("SUERTE PARA LA PRÓXIMA");
                console.log("GAME OVER");
            }
        }
    }
}

    iniciarAdivinaNum();