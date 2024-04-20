import {propiedades_venta} from './data/propiedades_venta.js'; // se importa el arreglo desde venta.js
import {propiedades_alquiler} from './data/propiedades_alquiler.js'; // se importa el arreglo desde alquiler.js

const iProp = (propiedades, elementId) => {
  const element = document.getElementById(elementId)

// forEach para recorrer
  propiedades.forEach((propiedad) => {
    const card = document.createElement('div')
    card.className = "col-md-4 mb-4"

    const cardTemplate = `
      <div class ="card">
        <img
          src="${propiedad.src}"
          class="card-img-top"
          alt="${propiedad.nombre}"
        />

        <div class="card-body">
          <h5 class="card-title"> ${propiedad.nombre}
          </h5>
          <p class="card-text"> ${propiedad.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>
            ${propiedad.ubicacion}
          </p>

          <p>
            <i class="fas fa-bed"></i> ${propiedad.habitaciones}  Habitaciones |
            <i class="fas fa-bath"></i> ${propiedad.baños} Baños
          </p>

          <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo.toLocaleString("USD")} </p>

          ${propiedad.smoke === true
          ? '<p class="text-success"><i class="fas fa-smoking"></i> Permitido Fumar</p>'
          : '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'
        }

        ${propiedad.pets === true
          ? '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>'
          : '<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>'
        }

        </div>
      </div>
      `; // en los dos bloques anteriores si smoke o pets es true o false se muestra cierto icono y parrafo
    card.innerHTML = cardTemplate;
    element.appendChild(card); // card dentro de element

  });

} // termina el forEach

//PROFESOR RAUL INDICA QUE DEBEMOS CON BOTON MOSTRAR LA PROPIEDAD QUE FALTA
// al hacer click en boton que se muestre la propiedad faltante y las anteriores
const verMasB = document.getElementById('verMas');
let mostrarT = false;
verMasB.addEventListener('click', () => {
  if (!mostrarT) {
    iProp([propiedades_venta[3]], 'pVentasI'); // agrega la propiedad
    verMasB.textContent = 'Mostrar menos';
    mostrarT = true;
  } else {
    pVentasI.innerHTML = ''; // para limpiar contenido
    iProp(propiedades_venta.slice(0, 3), 'pVentasI'); // muestra las 3 primeras propiedades
    verMasB.textContent = 'Ver todas las propiedades en venta';
    mostrarT = false;
  }

});

const verMasBa = document.getElementById('verMasA');
let mostrarTt = false;
verMasBa.addEventListener('click', () => {
  if (!mostrarTt) {
    iProp([propiedades_alquiler[3]], 'pAlquilerI');
    verMasBa.textContent = 'Mostrar menos';
    mostrarTt = true;
  } else {
    pAlquilerI.innerHTML = '';
    iProp(propiedades_alquiler.slice(0, 3), 'pAlquilerI');
    verMasBa.textContent = 'Ver todas las propiedades en alquiler';
    mostrarTt = false;
  }

});

iProp(propiedades_venta.slice(0, 3), 'pVentasI');
iProp(propiedades_alquiler.slice(0, 3), 'pAlquilerI');

