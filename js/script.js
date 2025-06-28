function mostrarAlerta(mensaje) {
  alert(mensaje);
}

// Ejemplo: validación simple en formulario (puede expandirse)
function validarFormularioBasico() {
  const nombre = document.getElementById('nombre')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const mensaje = document.getElementById('mensaje')?.value.trim();

  if (!nombre || !email || !mensaje) {
    mostrarAlerta('Por favor completá todos los campos.');
    return false;
  }

    mostrarAlerta('Formulario enviado correctamente. Gracias.');
    return true;
  }

// Ejemplo para quiz
result = "<span class='respuesta-correcta' style='font-weight:bold;'>¡Excelente! Todas las respuestas son correctas 🎉</span>";


