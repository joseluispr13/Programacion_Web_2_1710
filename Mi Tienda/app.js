// Arreglo para almacenar productos en el carrito
let carrito = [];

// Función para mostrar nuestro menú
function mostrarMenu(){
    return parseInt(prompt(`
        Seleccione un producto para agregar al carrito:
        1. Camisa - $300
        2. Pantalón - $500
        3. Zapatos - $800
        4. Sombrero - $200
        5. Ver Carrito y Total
        6. Salir
        Elige una opción:
    `));
}

// Función para agregar productos al carrito
function agregarProducto(nombre, precio){
    let producto = { nombre: nombre, precio: precio };
    carrito.push(producto);
    console.log(`Se agregó ${nombre} al carrito`);
}

// Función para ver los productos del carrito y el total
function verCarrito(){
    if(carrito.length === 0){
        alert("El carrito está vacío");
    } else {
        let mensaje = "Carrito de compras:\n";
        let total = 0;

        carrito.forEach((producto, index) => {
            mensaje += `${index + 1}. ${producto.nombre} - $${producto.precio}\n`;
            total += producto.precio;
        });

        mensaje += `\nTotal: $${total}`;
        console.log(mensaje);
    }
}

// Función para manejar el flujo del programa
function iniciarPrograma(){
    let continuar = true;
    while(continuar){
        let opcion = mostrarMenu();
        switch(opcion){
            case 1:
                agregarProducto("Camisa", 300);
                break;
            case 2:
                agregarProducto("Pantalón", 500);
                break;
            case 3:
                agregarProducto("Zapatos", 800);
                break;
            case 4:
                agregarProducto("Sombrero", 200);
                break;
            case 5:
                verCarrito();
                break;
            case 6:
                alert("Saliendo del programa...");
                continuar = false;
                break;
            default:
                alert("Opción no válida. Intenta nuevamente.");
        }
    }
    alert("Programa finalizado, gracias por su compra, vuelva pronto :)");
}

iniciarPrograma();
