let getId_lista = document.getElementById("getId-list");
let getProduct_form = document.getElementById("getProduct-form");

getProduct_form.addEventListener("submit", async(event) => {
    event.preventDefault(); //Evitamos el envío por defecto del formulario
    
    try {
        // Obtenemos y almacenamos la información del formulario
        let formData = new FormData(event.target);

        // Transformamos el objeto FormData en un objeto JS normal
        let data = Object.fromEntries(formData.entries());
        
        // Almacenamos el valor numérico del formulario para pasárselo a la petición fetch
        let idProd = data.idProd;
        console.log(idProd);
        
        let response = await fetch(`http://localhost:3000/vehiculos/${idProd}`);

        let datos = await response.json();
        console.log(datos);

        let producto = datos.payload[0]; // El primer resultado es el que contiene el producto que nos devolvió la consulta

        let htmlProductos = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <h3>${producto.nombre} - ${producto.modelo}</h3>
            <p><strong>Precio:</strong> $${producto.precio}</p>
            <p><strong>Kilometraje:</strong> ${producto.km} km</p>
            <p><strong>Color:</strong> ${producto.color}</p>
                <button class="boton-carrito" data-id="${producto.id}">Agregar al carrito</button>
        `
        getId_lista.innerHTML = htmlProductos;
    } catch(error) {
        console.error("Error al obtener el producto: ", error);
    } 

});
