//Funcion para llenar dinamicamente
//la tienda

  let productos = [
    {
      nombre: "Batimovil a escala",
      precio: 400000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen1.jpg?alt=media&token=3b790d17-51e4-4cad-a8d1-4089f3c36d5a",
      descripcion: "Batimovil a escala de la ultima pelicula",
    },
    {
      nombre: "Camiseta Batman",
      precio: 80000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen2.jpg?alt=media&token=ebd7c890-5913-4995-afee-16ba6885f033",
      descripcion: "Camiseta original DC",
    },
    {
      nombre: "Gorra Batman",
      precio: 50000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen3.jpg?alt=media&token=9a52782e-db95-4354-8a26-8b90ff448ea2",
      descripcion: "Gorra original DC",
    },
    {
      nombre: "Bati termo DC",
      precio: 35000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen4.jpg?alt=media&token=04040b80-2a6e-4529-8976-f94d95a532aa",
      descripcion: "Termo para bati chocolate",
    },
    {
      nombre: "Batmav v Superman",
      precio: 300000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen5.webp?alt=media&token=ee774b84-cc9b-40c5-86c3-64ed114a3f4e",
      descripcion: "Imagen a escala de la pelicula Batman v Superman",
    },
    {
      nombre: "Bati morral Totto",
      precio: 80000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen6.jpg?alt=media&token=27452c3b-b250-4eaf-99ca-9b2f36fc6d98",
      descripcion: "Bolso original DC",
    },
    {
      nombre: "Silla Gaming Batman",
      precio: 2000000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen7.webp?alt=media&token=6ce71e39-c3dc-449d-96ad-3beead7722c4",
      descripcion: "Silla comoda y original DC",
    },
    {
      nombre: "caja de comics Batman",
      precio: 300000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen8.jpg?alt=media&token=e1ee843d-45d1-4ff7-832c-ebc30dbf7b19",
      descripcion: "comics Batman originales",
    },
    {
      nombre: "Bati caja sorpresa",
      precio: 250000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen9.jpg?alt=media&token=f28918cf-1bfd-49e7-8d3a-8f33f8c59d0c",
      descripcion: "Caja sorpresa con productos de batman",
    },
    {
      nombre: "Bati lonchera totto",
      precio: 80000,
      foto: "https://firebasestorage.googleapis.com/v0/b/tiendaexamen-6fa04.appspot.com/o/imagen10.jpg?alt=media&token=e1980b12-13ac-441f-93a1-017f54ba56a6",
      descripcion: "Lonchera para llevar tus bati alimentos",
    },
  ];

  //Rutina para recorrer el arreglo y crear las tarjetas de cada producto

  //1. crear una referencia a un elemento "PADRE" o "BASE" donde anclaremos los demas
  let fila = document.getElementById("fila");

  //2. Necesito recorrer un arreglo
  productos.forEach(function (producto) {
    //3. CREAMOS LOS ELEMENTOS NECESARIOS PARA PINTAR LOS PRODUCTOS
    let columna = document.createElement("col-4");
    columna.classList.add("col-md-12");

    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-100");

    let imagen = document.createElement("img");
    imagen.classList.add("card-img-top", "p-3", "h-100");
    imagen.src = producto.foto;

    let separador = document.createElement("hr");
    separador.classList.add("w-50", "mx-auto", "d-block");

    let nombre = document.createElement("h5");
    nombre.classList.add("fw-bold", "text-center", "mx-3");                        
    nombre.textContent = producto.nombre;

    let precio = document.createElement("h6");
    precio.classList.add("text-center", "text-muted");
    precio.textContent = producto.precio;

    let botonAmpliarInfo = document.createElement("btn");
    botonAmpliarInfo.setAttribute("type", "button");
    botonAmpliarInfo.classList.add("btn", "btn.outline-dark", "mx-3", "mb-3");
    botonAmpliarInfo.textContent = "Ver producto";

    //VAMOS A ANCLAR (PONER)(DISPONER) LAS ETIQUETAS
    //QUE ACABAMOS DE CREAR EN NUESTRA BASE
    tarjeta.appendChild(imagen);
    tarjeta.appendChild(separador);
    tarjeta.appendChild(nombre);
    tarjeta.appendChild(precio);
    tarjeta.appendChild(botonAmpliarInfo);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
  });

