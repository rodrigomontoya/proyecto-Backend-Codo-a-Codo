document.addEventListener('DOMContentLoaded', function () {
  const cantidadInputs = document.querySelectorAll('.producto-cantidad input');
  const precioUnitarioElements = document.querySelectorAll('.precioUnitario');
  const productoTotalElements = document.querySelectorAll('.producto-total span');
  const subtotalElement = document.querySelector('.subtotal-fila-2 .desc-numero');
  const totalElement = document.querySelector('.total-fila-4 span');
  const deleteButtons = document.querySelectorAll('.producto-eliminar img');
  const resumenSubtotalElement = document.querySelector('.subtotal-fila-2 .desc-numero');
  const resumenTotalElement = document.querySelector('.total-fila-4 span');
  const resumenCantidadElement = document.querySelector('.cant-fila-1 .desc-numero');

  function updateTotals() {
    let subtotal = 0;
    let itemCount = 0;

    cantidadInputs.forEach((input, index) => {
      const cantidad = parseInt(input.value) || 0;
      const precioUnitario = parseFloat(precioUnitarioElements[index].textContent);
      const total = cantidad * precioUnitario;
      productoTotalElements[index].textContent = '$' + total.toFixed(2);
      subtotal += total;
      itemCount += cantidad;
    });

    subtotalElement.textContent = '$' + subtotal.toFixed(2);
    totalElement.textContent = '$' + subtotal.toFixed(2);

    resumenSubtotalElement.textContent = '$' + subtotal.toFixed(2);
    resumenTotalElement.textContent = '$' + subtotal.toFixed(2);

    resumenCantidadElement.textContent = itemCount;
  }

  const incrementButtons = document.querySelectorAll('.producto-cantidad button:nth-child(1)');
  const decrementButtons = document.querySelectorAll('.producto-cantidad button:nth-child(2)');

  incrementButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      let cantidad = parseInt(cantidadInputs[index].value) || 0;
      cantidad++;
      cantidadInputs[index].value = cantidad;
      updateTotals();
    });
  });

  decrementButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      let cantidad = parseInt(cantidadInputs[index].value) || 0;
      if (cantidad > 0) {
        cantidad--;
        cantidadInputs[index].value = cantidad;
        updateTotals();
      }
    });
  });

  // Agregar evento para eliminar productos
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', function () {
      // Encuentra el elemento padre del botón (div) y elimina ese elemento
      const cartItem = button.closest('.cart-prod-fila');
      cartItem.remove();
      updateTotals();
      updateResumenCantidades();
    });
  });

  // Función para actualizar las cantidades y los totales en el resumen
  function updateResumenCantidades() {
    // Obtener todas las cantidades de productos en el carrito
    const cantidadInputs = document.querySelectorAll('.producto-cantidad input');

    // Calcular la cantidad total de elementos en el carrito
    let itemCount = 0;
    let subtotal = 0;

    cantidadInputs.forEach((input, index) => {
      const cantidad = parseInt(input.value) || 0;
      const precioUnitario = parseFloat(precioUnitarioElements[index].textContent);
      subtotal += cantidad * precioUnitario;
      itemCount += cantidad;
    });

    // Actualiza las cantidades, el subtotal y el total en el resumen
    resumenCantidadElement.textContent = itemCount;
    resumenSubtotalElement.textContent = '$' + subtotal.toFixed(2);
    resumenTotalElement.textContent = '$' + subtotal.toFixed(2);
  }

  // Llama a updateTotals después de cargar la página
  updateTotals();
});






