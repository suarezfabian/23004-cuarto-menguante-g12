// Obtener el formulario y los campos
const form = document.getElementById("contact-form");
const fnameField = document.getElementById("fname");
const numberField = document.getElementById("number");
const countryField = document.getElementById("country");
const messageField = document.getElementById("message");

// Validar el formulario cuando se envía
form.addEventListener("submit", function(event) {
  // Verificar si los campos obligatorios se han completado
  if (fnameField.value === "" ||numberField.value === "" || countryField.value === "" || messageField.value === "") {
    event.preventDefault(); // Evitar que se envíe el formulario
    alert("Por favor complete todos los campos.");
  }
});

