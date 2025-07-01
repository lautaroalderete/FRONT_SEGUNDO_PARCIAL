let productosTienda = [
    {
        id: 1,
        nombre: "Amarok V6",
        modelo: 2025,
        precio: 42000,
        km: 0,
        img: "img/Amarok-v6.jpg"
    },
    {
        id: 2,
        nombre: "Vento GLI",
        modelo: 2023,
        precio: 25000,
        km: 25000,
        img: "img/Vento-GLI.jpg"
    },
    {
        id: 3,
        nombre: "Fiat 147",
        modelo: 1998,
        precio: 1500,
        km: 235000,
        img: "img/F147.jpg"
    },
    {
        id: 4,
        nombre: "Renault Clio",
        modelo: 2013,
        precio: 7500,
        km: 250000,
        img: "img/Clio.jpg"
    },
    {
        id: 5,
        nombre: "Chevrolet Corsa 3P",
        modelo: 2008,
        precio: 5000,
        km: 273000,
        img: "img/Corsa-3p.jpg"
    },
    {
        id: 6,
        nombre: "Fiat Cronos",
        modelo: 2025,
        precio: 15000,
        km: 0,
        img: "img/Cronos.jpg"
    },
    {
        id: 7,
        nombre: "Falcon Sprint",
        modelo: 1981,
        precio: 20000,
        km: 30000,
        img: "img/Falcon-sprint.jpg"
    },
    {
        id: 8,
        nombre: "Gol Power",
        modelo: 2010,
        precio: 8500,
        km: 250000,
        img: "img/Gol-power.jpg"
    },
    {
        id: 9,
        nombre: "Gol Trend",
        modelo: 2017,
        precio: 15000,
        km: 120000,
        img: "img/Gol-Trend.jpg"
    },
    {
        id: 10,
        nombre: "Golf MK7",
        modelo: 2022,
        precio: 27000,
        km: 30000,
        img: "img/Golf-MK7.jpg"
    },
    {
        id: 11,
        nombre: "Ranger Raptor",
        modelo: 2025,
        precio: 85000,
        km: 0,
        img: "img/Ranger-Raptor.jpg"
    },
    {
        id: 12,
        nombre: "Toyota Corolla",
        modelo: 2020,
        precio: 20000,
        km: 100000,
        img: "img/Toyota-Corolla.jpg"
    }
]

let productoContainer = document.querySelector(".container-productos");
let barraBusqueda = document.querySelector(".nav-barra-busqueda");
let btnCarrito = document.querySelector(".boton-carrito");
let carrito = [];
let itemsCarrito = document.querySelector("#items-carrito");

function mostrarProductos(array){
    let cartaProducto = "";
    for (let i = 0; i < array.length; i++){
        cartaProducto += `<div class="tarjeta-producto">
                <img src="${array[i].img}" alt="${array[i].nombre}" class="producto">
                <h3>${array[i].nombre}</h3>
                <p>Modelo: ${array[i].modelo}</p>
                <p>KM: ${array[i].km}</p>
                <p>Precio: $${array[i].precio}</p>
                <button onclick="agregarCarrito(${array[i].id})" class="boton-carrito">Agregar al carrito</button>
            </div>`
    }
    productoContainer.innerHTML = cartaProducto;
};

barraBusqueda.addEventListener("keyup", function(){
    let valorInput = barraBusqueda.value.toLowerCase().trim();
    console.log(valorInput);
    let productosFiltrados = productosTienda.filter(producto => producto.nombre.toLowerCase().includes(valorInput));
    mostrarProductos(productosFiltrados);
});

function agregarCarrito(id){
    console.log(`El id del producto es ${id}`);
    let nuevoProducto = productosTienda.find(producto => producto.id === id);
    
    console.log(nuevoProducto)
    carrito.push(nuevoProducto);
    mostrarCarrito();
}

function mostrarCarrito(){
    let listaCarrito = "";
    carrito.forEach(item => {
        listaCarrito += `
        <li class="tarjeta-carrito">
            <p>${item.nombre} - $${item.precio}</p>
            <button onclick="console.log('${item.nombre}')">Eliminar</button>
        </li>`
    })
    itemsCarrito.innerHTML = listaCarrito;
}

function init(){
    mostrarProductos(productosTienda);
};

const usuario = {
    nombre: "Johnny",
    edad: 25,
    habilidades: ["JavaScript", "HTML"]
};
console.log("Objeto:");
console.log(usuario);

// Transformamos este objeto JavaScript en una cadena JSON
const jsonString = JSON.stringify(usuario);
console.log(jsonString);

init();