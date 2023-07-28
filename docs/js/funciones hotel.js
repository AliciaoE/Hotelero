function mostrarMensajeCancelacion(mensaje) {
  if (mensaje === null) {
    alert("Operación cancelada. No se ha realizado ninguna gestión.");
    return true; // Indicar que la operación fue cancelada
  }
}

function consultar() {
  let nomHotel = prompt("Introducir el nombre del hotel que quiere consultar:");
  if (mostrarMensajeCancelacion(nomHotel)) {
    return; // Salir de la función si se ha cancelado
  }

  let encontrado = false;
  let indice = -1;
  let i = 0;
  let vueltas = hotels.length;
  while (i < vueltas && !encontrado) {
    if (nomHotel === hotels[i].nom) {
      indice = i;
      encontrado = true;
    }
    i++;
  }
  if (encontrado) {
    const resultadoElemento = document.getElementById("resultado");
    const gasto = calcularGasto(hotels[indice]);
    const numPersonas = Math.ceil(hotels[indice].getNumHabitacions() / 20);
    resultadoElemento.innerHTML = `Nom: ${hotels[indice].nom}<br> 
    Numero de habitaciones: ${hotels[indice].habitacions}<br>   
    Plantas edificio: ${hotels[indice].plantes} <br>  
    Superficie Total: ${hotels[indice].superficieTotal} <br> <br> 
    Personas necesarias per poder dar servicio de habitaciones: ${numPersonas} <br> Coste de servicio de habitaciones: ${gasto} € al mes.`;
  } else {
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.innerHTML = `No se encontró ningún hotel de nombre "${nomHotel}" en el arreglo.`;
  }
  return indice;
}

function crearHotels() {
  const hotelNew = new Hotel();
  hotelNew.setNom(
    prompt("Introducir el nombre del hotel que quiere consultar:")
  );
  if (mostrarMensajeCancelacion(hotelNew.getNom())) {
    return; // Salir de la función si se ha cancelado
  }
  hotelNew.setNumHabitacions(
    parseInt(prompt("Introducir numero de habitaciones"))
  );
  if (
    isNaN(hotelNew.getNumHabitacions()) ||
    hotelNew.getNumHabitacions() <= 0
  ) {
    alert("Número de habitaciones inválido. Debe ser un número positivo.");
    return;
  }
  hotelNew.setNumPlantes(parseInt(prompt("Introducir las plantas:")));
  if (isNaN(hotelNew.getNumPlantes()) || hotelNew.getNumPlantes() <= 0) {
    alert("Número de plantas inválido. Debe ser un número positivo.");
    return;
  }
  hotelNew.setSuperficieTotal(
    parseInt(prompt("Introducir numero de metros superficie total:"))
  );
  if (
    isNaN(hotelNew.getSuperficieTotal()) ||
    hotelNew.getSuperficieTotal() <= 0
  ) {
    alert("Superficie total inválida. Debe ser un número positivo.");
    return;
  }
  hotels.push(hotelNew);
  const resultado =
    "Información del nuevo hotel creado: <br> " + hotelNew.toString();
  const gasto = calcularGasto(hotelNew);
  const num_persones = Math.ceil(hotelNew.getNumHabitacions() / 20);
  document.getElementById("resultado").innerHTML =
    resultado +
    "<br>" +
    "Resumen hoteles creados" +
    "<br>" +
    hotels +
    "<br>" +
    " son necesarios" +
    num_persones +
    " persones per atendre el servei d'habitacions de l'hotel i el cost total destinat al servei és de " +
    gasto +
    " € al mes.";
}

function eliminarHotel() {
  let nomHotel = prompt("Introducir el nombre del hotel que quiere consultar:");
  if (mostrarMensajeCancelacion(nomHotel)) {
    return; // Salir de la función si se ha cancelado
  }

  let encontrado = false;
  for (let i = 0; i < hotels.length; i++) {
    if (hotels[i].nom === nomHotel) {
      const seguro = confirm(
        `¿Está seguro que desea eliminar este hotel? ${nomHotel}?`
      );
      if (seguro) {
        const eliminado = hotels.splice(i, 1)[0];
        encontrado = true;
        alert("Hotel eliminado correctamente: " + eliminado.toString());
        document.getElementById("resultado").innerHTML =
          "Hotel eliminado: " + eliminado.toString();
      } else {
        alert("Eliminación cancelada.");
      }
      break;
    }
  }

  if (!encontrado) {
    alert("No se ha encontrado ningún Hotel con el nombre indicado indicada.");
  }
}

function modificarHotel() {
  let nomHotel = prompt("Introducir el nombre del hotel que quiere consultar:");
  if (nomHotel === null) {
    alert("Error: Operación cancelada.");
    return; // Salir de la función si se ha cancelado
  }
  let encontrado = false;

  for (let i = 0; i < hotels.length; i++) {
    if (hotels[i].nom === nomHotel) {
      let resultadoElemento = document.getElementById("resultado");

      resultadoElemento.innerHTML =
        "Datos antiguos del hotel " + nomHotel + ": " + hotels[i].toString();

      let nuevoNomHotel = prompt("Introduce el nuevo nombre del hotel:");
      if (nuevoNomHotel === null) {
        alert("Error: Operación cancelada.");
        return; // Salir de la función si se ha cancelado
      }

      let nuevoNumHabitaciones = parseInt(
        prompt("Introduce el nuevo número de habitaciones:")
      );
      if (isNaN(nuevoNumHabitaciones)) {
        alert("Error: Valor inválido o operación cancelada.");
        return; // Salir de la función si el valor no es un número o se ha cancelado
      }

      let nuevoNumPlantes = parseInt(
        prompt("Introduce el nuevo número de plantas:")
      );
      if (isNaN(nuevoNumPlantes)) {
        alert("Error: Valor inválido o operación cancelada.");
        return; // Salir de la función si el valor no es un número o se ha cancelado
      }

      let nuevaSuperficieTotal = parseInt(
        prompt("Introduce la nueva superficie total:")
      );
      if (isNaN(nuevaSuperficieTotal)) {
        alert("Error: Valor inválido o operación cancelada.");
        return; // Salir de la función si el valor no es un número o se ha cancelado
      }

      // Resto del código para modificar el hotel...

      encontrado = true;
      alert("Hotel modificado correctamente.");
      break;
    }
  }

  if (!encontrado) {
    alert("Error: El hotel no está configurado.");
  }
}

function resetear() {
  // Restablecer el contenido del párrafo de resultado a su estado inicial
  const resultadoElement = document.getElementById("resultado");
  resultadoElement.textContent = "No se ha realizado ninguna consulta.";
  resultadoElement.classList.add("empty"); // Añadir la clase "empty" para que aparezca el estilo de resultado vacío
}
function inventarioTotal() {
  let mensaje = "Inventario total de hoteles:<br><br>";

  hotels.forEach((hotel) => {
    mensaje += `Nombre: ${hotel.nom}<br>`;
    mensaje += `Numero de habitaciones : ${hotel.habitacions}<br>`;
    mensaje += `Plantas edificio: ${hotel.plantes}<br>`;
    mensaje += `Superficie Total: ${hotel.superficieTotal}<br><br>`;
  });

  document.getElementById("resultado").innerHTML = mensaje;
}
