document
  .getElementById("formGenerador")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Obtener valores del formulario
    let semilla = parseInt(document.getElementById("semilla").value);
    const digitos = parseInt(document.getElementById("digitos").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    // Tabla
    const tbody = document.querySelector("#tablaResultados tbody");
    tbody.innerHTML = "";

    for (let i = 1; i <= cantidad; i++) {
      let semillaOriginal = semilla; // ✅ Guardar semilla antes del cálculo
      let cuadrado = (semillaOriginal * semillaOriginal).toString();

      if (cuadrado.length % 2 !== 0) {
        cuadrado = "0" + cuadrado;
      }

      const inicio = Math.floor((cuadrado.length - digitos) / 2);
      const fin = inicio + digitos;
      let digitosCentrales = cuadrado.substring(inicio, fin);

      let nuevaSemilla = parseInt(digitosCentrales);
      let Ri = nuevaSemilla / Math.pow(10, digitos);

      const fila = `
        <tr>
            <td>${i}</td>
            <td>${semillaOriginal}</td>   <!-- ✅ Ahora imprime la semilla correcta -->
            <td>${cuadrado}</td>
            <td>${digitosCentrales}</td>
            <td>${Ri.toFixed(digitos)}</td>
        </tr>
    `;

      tbody.innerHTML += fila;

      // Actualizar para la siguiente iteración
      semilla = nuevaSemilla;
    }
  });
