// LISTA DE GUITARRAS


const guitarras = [
  {
    marca: "Fender",
    modelo: "Stratocaster",
    anio: "2015",
    color: "rojo",
    precio: 1700000,
  },
  {
    marca: "Gibson",
    modelo: "Les Paul",
    anio: "1990",
    color: "negro",
    precio: 2000000,
  },
  {
    marca: "Fender",
    modelo: "Telecaster",
    anio: "2024",
    color: "celeste",
    precio: 1900000,
  },
  {
    marca: "Gretsch",
    modelo: "Electromatic",
    anio: "2020",
    color: "negro",
    precio: 3000000,
  },
  {
    marca: "Gibson",
    modelo: "Sg",
    anio: "2024",
    color: "rojo",
    precio: 2000000,
  },
];


// ver guitarras:

function mostrarGuitarras(guitarras) {
  guitarras.forEach((v) => {
    console.log(`${v.marca} ${v.modelo} ${v.color} ${v.anio} \n$${v.precio}`);
  })
}


const todas = document.getElementById("todas")

todas.addEventListener("click", () => mostrarGuitarras(guitarras))



// buscador

const buscador = document.getElementById("buscador")
const resultados = document.getElementById("listaGuitarras")
const botonBuscar = document.getElementById("buscar")
let btnComprar;

function realizarBusqueda() {
  const filtro = buscador.value.toUpperCase();
  resultados.innerHTML = ''; 


  guitarras.forEach((guitarra) => {
    if (guitarra.marca.toUpperCase().includes(filtro) || guitarra.modelo.toUpperCase().includes(filtro)) {
      const li = document.createElement('li');
      li.textContent = `${guitarra.marca} ${guitarra.modelo} - Precio: ${guitarra.precio} ARS`;
      li.style.margin = '20px'
      resultados.appendChild(li);

      btnComprar = document.createElement('button')
      btnComprar.textContent = `comprar`;
      btnComprar.className = 'comprar'
      resultados.appendChild(btnComprar)
    }
    // else{
      
    //   const advertencia = document.createElement('p')
    //   advertencia.textContent = `No tenemos esa marca.`
    //   resultados.appendChild(advertencia)
      
    // }
  });
}


botonBuscar.addEventListener("click", realizarBusqueda);

// limpiar busqueda

const limpiarBusqueda = document.getElementById("limpiar")

limpiarBusqueda.addEventListener("click", () => {
  resultados.innerHTML = '';
})


// boton comprar


resultados.addEventListener("click", (event) => {
  if (event.target && event.target.classList.contains('comprar')) {
    prompt("ingresa tus datos:");
  }})














function filtrarPorMarca(marcaUsuario) {
  const guitarrasFiltradas = guitarras.filter((v) => v.marca.toLowerCase() === marcaUsuario.toLowerCase());
  if (guitarrasFiltradas.length === 0) {
    alert(`No disponemos de ninguna guitarra de la marca ${marcaUsuario}`);
  } else {
    mostrarGuitarras(guitarrasFiltradas);
  }
}

function filtrarPorPrecio(precioMax) {
  const guitarrasFiltradas = guitarras.filter((v) => v.precio <= precioMax);
  if (guitarrasFiltradas.length === 0) {
    alert(`No disponemos de ningún vehículo por debajo de $${precioMax}`);
  } else {
    mostrarGuitarras(guitarrasFiltradas);
  }
}












// function mostrarMenu() {
//   let opcion;

//   do {
//     opcion = prompt(
//       "Bienvenido a GuitarCenter. Ingrese una opción: \n\n1 - Mostrar guitarras disponibles\n2 - Buscar por marca\n3 - Filtrar por precio\n4 - Salir\n\n(Abra la consola para ver los resultados)"
//     );
//     switch (opcion) {
//       case "1":
//         mostrarGuitarras(guitarras);
//         break;
//       case "2":
//         const marcaUsuario = prompt("¿Qué marca desea buscar?");
//         filtrarPorMarca(marcaUsuario);
//         break;
//       case "3":
//         const precioMax = parseInt(prompt("Ingrese el precio máximo"));
//         filtrarPorPrecio(precioMax);
//         break;
//       case "4":
//         alert("Gracias por visitarnos :)");
//         break;
//       default:
//         alert("Opción incorrecta");
//         break;
//     }
//   } while (opcion !== "4");
// }

// mostrarMenu();
