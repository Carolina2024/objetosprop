import {propiedades_alquiler} from './data/propiedades_alquiler.js';

const taProp = (propiedades, elementId) => {
  const element = document.getElementById(elementId)

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
  `;

  card.innerHTML = cardTemplate;
  element.appendChild(card)
  });
}

taProp(propiedades_alquiler, 'pAlquiler');
