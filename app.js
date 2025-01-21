// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de amigos
let amigos = [];

// Función para agregar un amigo
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();

  // Validar que el campo no esté vacío
  if (nombreAmigo === "") {
    alert("Por favor, inserte un nombre.");
    return;
  }

  // Añadir el nombre al array de amigos
  amigos.push(nombreAmigo);

  // Limpiar el campo de entrada
  inputAmigo.value = "";

  // Actualizar la lista en el HTML
  actualizarLista();
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
  const listaAmigos = document.getElementById('listaAmigos');
  
  // Limpiar el contenido actual de la lista
  listaAmigos.innerHTML = "";

  // Recorrer el array usando un bucle for
  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    listaAmigos.appendChild(li);
  }
}



