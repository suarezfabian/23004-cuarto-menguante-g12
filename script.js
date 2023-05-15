// // Utilizamos la API Formspree para enviar el formulario por email y devolver un mensaje al usuario ,previo al envio verificamos que los campos esten completos

const $form = document.querySelector("#contact-form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  // Obtener el formulario y los campos
  const nameField = document.getElementById("fname");
  const numberField = document.getElementById("number");
  const countryField = document.getElementById("country");
  const messageField = document.getElementById("message");
  const numberRegex = /^[0-9]+$/;

  // Verificar si los campos obligatorios se han completado
  if (nameField.value === "") {
    alert("Por favor complete el campo NOMBRE");
    return;
  } else if (numberField.value === "") {
    alert("Por favor complete el campo NÚMERO");
    return;
  } else if (!numberRegex.test(numberField.value)) {
    alert("Por favor ingrese un NÚMERO válido");
    return;
  } else if (countryField.value === "") {
    alert("Por favor seleccione el BARRIO");
    return;
  } else if (messageField.value === "") {
    alert("Por favor escriba el MENSAJE");
    return;
  }

  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      accept: "application/json",
    },
  });

  if (response.ok) {
    alert("Gracias por contactarte, te escribiremos pronto");
    nameField.value = nameField.defaultValue;
    numberField.value = numberField.defaultValue;
    countryField.value = countryField.defaultValue;
    messageField.value = messageField.defaultValue;
  }
}
