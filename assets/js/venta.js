import { propiedades_venta } from './data/propiedades_venta.js'; // se importa desde propiedades_venta.js

// se realiza funcion tvProp que toma dos parametros, propiedades es un array, elementId donde se mostraran
const tvProp = (propiedades, elementId) => {
  const element = document.getElementById(elementId); // se crea const element, para ser ocupado dentro de la funcion

// se crea forEach para recorrer el arreglo con los objetos de propiedades
  propiedades.forEach((propiedad) => {
    const card = document.createElement('div')
    card.className = 'col-md-4 mb-4'

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

  card.innerHTML = cardTemplate; // modificación, se agrega a html
  element.appendChild(card) // card dentro de element
  });
}

tvProp(propiedades_venta, 'pVentas'); // invoca la funcion, pasando dos parametros, uno con los arrays de objetos y el otro el id de html
