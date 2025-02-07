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
  guitarras.forEach((guitarra) => {
    const li = document.createElement('li');
    li.textContent = `${guitarra.marca} ${guitarra.modelo} - Precio: ${guitarra.precio} ARS`;
    li.style.margin = '20px';
    resultados.appendChild(li);
  
    const btnComprar = document.createElement('button');
    btnComprar.textContent = `comprar`;
    btnComprar.className = 'comprar';
    btnComprar.setAttribute('data-marca', guitarra.marca);
    btnComprar.setAttribute('data-modelo', guitarra.modelo);
    resultados.appendChild(btnComprar);
  });
  
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
      btnComprar.setAttribute('data-marca', guitarra.marca);
      btnComprar.setAttribute('data-modelo', guitarra.modelo);
      
      
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
    Swal.fire({
      title: "Agregado al carrito!",
      text: "Podes llevarlo cuando quieras",
      icon: "success"
    });
  }})


// agregar al carrito


const carrito = []

localStorage.setItem('carrito', JSON.stringify(carrito));

function agregarAlCarrito(guitarraBuscada) {
  
  carrito.push(guitarraBuscada);

  console.log('Guitarra agregada al carrito:', guitarraBuscada);
  console.log('Carrito de compras:', carrito);
}

const botonesComprar = document.querySelectorAll('.comprar');



  botonesComprar.forEach(btnComprar => {
    btnComprar.addEventListener('click', (    ) => {
      
      const marca = btnComprar.getAttribute('data-marca');
      const modelo = btnComprar.getAttribute('data-modelo');
      


      const guitarraBuscada = guitarras.find(guitarra => guitarra.marca == marca && guitarra.modelo == modelo);
      console.log(guitarraBuscada)
      
      if (guitarraBuscada) {
        agregarAlCarrito(guitarraBuscada);
      }
    });
  })




const apiURL = 'https://pokeapi.co/api/v2/pokemon/ditto'

const contenedor = document.getElementById('api-recomendado');

  fetch(apiURL)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error en la solicitud: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Datos recibidos:', data);

      const pokemonElement = document.createElement('div');
      pokemonElement.innerHTML = `
        <img src="${data.sprites.front_default}" alt="Imagen de ${data.name}">
        <h3>Nombre: ${data.name}</h3>
        <p>Altura: ${data.height}</p>
        <p>Peso: ${data.weight}</p>
        <p>Tipo: ${data.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
      `;
      contenedor.appendChild(pokemonElement);
    })
    .catch(error => {
      console.error('Error al obtener los datos:', error);})

      contenedor.style.marginTop = '300px';










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










