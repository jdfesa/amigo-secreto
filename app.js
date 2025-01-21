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

  // Validar que el nombre no esté duplicado
  if (amigos.includes(nombreAmigo)) {
    alert(`El nombre "${nombreAmigo}" ya está en la lista.`);
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

// Función para seleccionar un amigo aleatorio
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  const amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el HTML
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
