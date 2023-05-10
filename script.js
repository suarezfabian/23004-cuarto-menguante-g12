// Utilizamos la API Formspree para enviar el formulario por email y devolver un mensaje al usuario ,previo al envio verificamos que los campos esten completos

const $form = document.querySelector("#contact-form");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  // Obtener el formulario y los campos
  const nameField = document.getElementById("name");
  const numberField = document.getElementById("number");
  const countryField = document.getElementById("country");
  const messageField = document.getElementById("message");

  // Verificar si los campos obligatorios se han completado
  if (
    nameField.value === "" ||
    numberField.value === "" ||
    countryField.value === "" ||
    messageField.value === ""
  ) {
    alert("Por favor complete todos los campos.");
    return; //Evitamos que se envie el formulario
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
