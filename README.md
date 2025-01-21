# Descripción del Challenge "Amigo Secreto" de Alura Latam

Este proyecto corresponde a un desafío de programación propuesto por Alura Latam como parte de su curso de desarrollo web. El reto tiene como objetivo implementar una aplicación que gestione un juego clásico de "Amigo Secreto", donde los usuarios pueden agregar nombres a una lista de amigos, evitar duplicados, y realizar un sorteo aleatorio para asignar un "Amigo Secreto" a cada participante. A lo largo de este desafío, se pone énfasis en la lógica de programación, la manipulación del DOM, y la correcta validación de entradas. El código desarrollado permite agregar, visualizar y sortear amigos, asegurando una experiencia de usuario interactiva y libre de errores, como nombres duplicados.


1. **Array de amigos (`let amigos = []`)**:  
   Se utiliza para almacenar los nombres de los amigos, los cuales son agregados, listados y sorteados a lo largo de la ejecución del código.

2. **Función `agregarAmigo()`**:  
   - **Captura el valor del campo de entrada**: Utiliza `document.getElementById('amigo')` para obtener el valor ingresado en el campo de texto donde el usuario escribe el nombre del amigo.
   - **Validación**: Verifica si el campo está vacío y muestra un mensaje de advertencia usando `alert()`. Además, valida si el nombre ya existe en el array `amigos` con `amigos.includes(nombreAmigo)` para evitar duplicados.
   - **Actualización de la lista**: Si el nombre es válido y único, se agrega al array `amigos` y se limpia el campo de entrada con `inputAmigo.value = ""`. Después, llama a la función `actualizarLista()` para reflejar el cambio en el HTML.
   
3. **Función `actualizarLista()`**:  
   - **Limpiar la lista existente**: Utiliza `innerHTML = ""` para limpiar el contenido actual de la lista en el HTML antes de mostrar los nuevos elementos. Esto asegura que la lista no se duplique al agregar más amigos.
   - **Recorrido e inserción de elementos**: Recorre el array `amigos` usando un ciclo `for`, y para cada nombre, crea un nuevo elemento `<li>` con `document.createElement('li')`. Luego, asigna el nombre del amigo a este elemento y lo agrega a la lista en el HTML usando `appendChild()`.

4. **Función `sortearAmigo()`**:  
   - **Verificación de amigos disponibles**: Verifica si hay al menos un amigo en el array antes de realizar el sorteo. Si no hay amigos, muestra una alerta.
   - **Generación de índice aleatorio**: Utiliza `Math.random()` para generar un número aleatorio, que luego es convertido en un índice válido del array con `Math.floor()`.
   - **Mostrar el resultado**: Obtiene el nombre del amigo sorteado y lo muestra en el HTML usando `innerHTML`, con un formato destacado para que el resultado sea visible y claro para el usuario.

### **Uso de `innerHTML`**:  
`innerHTML` se utiliza para actualizar el contenido de los elementos HTML. En el caso de la función `actualizarLista()`, se limpia el contenido de la lista antes de volver a llenarla con los amigos actuales. En `sortearAmigo()`, se actualiza el área donde se muestra el amigo sorteado.

### **Separación de funciones**:  
El código se organiza en funciones independientes para mantener un flujo claro y modular:
- `agregarAmigo()` se encarga de la lógica de agregar amigos.
- `actualizarLista()` se ocupa de reflejar esos cambios en la interfaz.
- `sortearAmigo()` maneja el sorteo aleatorio de amigos.
Esta separación permite que cada función tenga una única responsabilidad, lo que mejora la legibilidad, reutilización y mantenimiento del código.
