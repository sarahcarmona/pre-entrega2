// Creamos un objeto "Producto" con su nombre y precio
class Producto {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  // Creamos una pila para el carrito
  let carrito = [];
  
  // Función de bienvenida
  function bienvenida() {
    console.log("Bienvenido al carrito de compras");
  }
  
  // Función para agregar un producto al carrito
  function agregarProducto() {
    let nombre = prompt("Ingrese el nombre del producto");
    let precio = prompt("Ingrese el precio del producto");
  
    let producto = new Producto(nombre, precio);
  
    carrito.push(producto);
  
    console.log(`${producto.nombre} se ha agregado al carrito.`);
  }
  
  // Función para eliminar un producto del carrito
  function eliminarProducto() {
    let nombre = prompt("Ingrese el nombre del producto a eliminar");
  
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre === nombre) {
        carrito.splice(i, 1);
        console.log(`${nombre} se ha eliminado del carrito.`);
        return;
      }
    }
  
    console.log(`No se encontró ${nombre} en el carrito.`);
  }
  
  // Función para mostrar el contenido del carrito
  function mostrarCarrito() {
    console.log("Contenido del carrito:");
  
    if (carrito.length === 0) {
      console.log("El carrito está vacío.");
      return;
    }
  
    for (let i = 0; i < carrito.length; i++) {
      console.log(`${i+1}. ${carrito[i].nombre} (${carrito[i].precio})`);
    }
  }
  
  // Función para mostrar el costo total del carrito
  function mostrarCostoTotal() {
    let costoTotal = 0;
  
    for (let i = 0; i < carrito.length; i++) {
      costoTotal += parseFloat(carrito[i].precio);
    }
  
    console.log(`El costo total del carrito es: ${costoTotal.toFixed(2)}`);
  }
  
  // Menú de opciones
  function menu() {
    console.log("");
    console.log("Menú de opciones:");
    console.log("1. Agregar producto");
    console.log("2. Eliminar producto");
    console.log("3. Mostrar contenido del carrito");
    console.log("4. Mostrar costo total");
    console.log("5. Salir");
  
    let opcion = prompt("Seleccione una opción");
  
    switch (opcion) {
      case "1":
        agregarProducto();
        break;
      case "2":
        eliminarProducto();
        break;
      case "3":
        mostrarCarrito();
        break;
      case "4":
        mostrarCostoTotal();
        break;
      case "5":
        console.log("Gracias por usar el carrito de compras.");
        return;
      default:
        console.log("Opción inválida.");
    }
  
    menu();
  }
  
  // Ejecutamos el programa
  bienvenida();
  menu();