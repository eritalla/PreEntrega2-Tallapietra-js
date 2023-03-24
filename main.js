const productos = [
    {nombre: "Borcego", precio: 25000},
    {nombre: "Texana", precio: 30000}, 
    {nombre: "BotaCañaAlta", precio: 35000},
    {nombre: "BotaCañaBaja", precio: 30000},
    {nombre: "Zapatilla", precio:15000}
]

let carrito= []
let seleccion= prompt ("Hola! desea comprar algún producto si o no?")
while (seleccion != "si" && seleccion !=no){alert ("por favor ingrese si o no")
seleccion = prompt ("Hola! desea comprar algún producto si o no?")
}
if (seleccion == "si"){
    alert ("elegí un producto")
    let todoslosProductos = productos.map (
        (producto) => producto.nombre + " " + producto.precio + "$"
    );
    alert (todoslosProductos.join(" - "))
} else if (seleccion = "no") {
    alert ("gracias por visitarnos! hasta pronto!")
}
while (seleccion != "no") {
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0

    if (producto =="Borcego" || producto == "Texana" || producto =="BotaCañaAlta" || producto == "BotaCañaBaja" || producto == "Zapatilla"){
        switch (producto) {
            case "Borcego":
                precio = 25000;
                break;
            case "Texana":
                precio = 30000;
                break;
            case "BotaCañaAlta":
                precio = 35000;
                break;
            case "BotaCañaBaja":
                precio = 30000;
                break;
            case "Zapatilla":
                precio = 15000;
                break;
            default:
                break
        }
    let talle = parseInt (prompt ("Ingresá tu número de talle"))
    
    carrito.push({producto, talle, precio})
    console.log (carrito)
    } else {
        alert ("no tenemos ese producto :(")
    }

    seleccion = prompt ("Desea seguir comprando?")

    while (seleccion === "no"){
        alert ("Muchas gracias por tu compra, que lo disfrutes!")
        carrito.forEach ((carritoFinal) => {
            console.log (`producto:${carritoFinal.producto}, talle: ${carrito.talle}`)
        })
        break;

    }
}

const total = carrito.reduce ((acc, el)=> acc + el.precio, 0)
alert(`el total a pagar por tu compra es: ${total}`)