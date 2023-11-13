/*---------------------Seccion-item-------------------------*/
 /*---------------------Botones------------------*/
 const add=document.querySelector('#add');
 const subtract=document.querySelector('#subtract');
 const quantity=document.querySelector('#quantity');

 add.addEventListener('click', () => {
  quantity.value = Number(quantity.value) + 1;
});

subtract.addEventListener('click', () => {
  // Verifica si el valor es mayor que 0 antes de restar
  if (Number(quantity.value) > 0) {
    quantity.value = Number(quantity.value) - 1;
  }
});

/*---------------------Seccion-Cart-------------------------*/



