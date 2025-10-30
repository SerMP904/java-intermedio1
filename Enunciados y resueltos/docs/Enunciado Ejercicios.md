# Manipulación del DOM

## Ejercicio 1. Acceso al DOM.

Crea un archivo HTML con un párrafo con un id único.
Utiliza document.getElementById() para acceder al párrafo y muestra su contenido en la consola.
En el archivo HTML anterior crea varios elementos con la misma clase.
Ahora utiliza document.querySelectorAll() para acceder a todos los elementos con dicha clase y muestra su contenido en la consola.

## Ejercicio 2. Cambiar el contenido de un elemento del DOM.

Crea un archivo HTML con un div vacío.
Escribe una función que utilice document.querySelectorAll() para acceder al elemento del
div y añada el siguiente contenido: un párrafo con un ‘lorem ipsum...’ y debajo un botón con el texto ‘Continuar’

## Ejercicio 3. Crea una web en HTML

Debe mostrar en HTML 4 cuadrados rellenos de color hex. #3b78d7.  
Usando CSS centrar los cuadrados horizontal y verticalmente con una separación de 10px.
Una vez esté listo el código CSS elimina los elementos HTML y crea una función a través de JavaScript que le pasemos el número de cuadrados y añada todos los elementos HTML necesarios para mostrar el mismo resultado que antes.  
Ahora crea las clases necesarias en CSS para que los cuadrados alternen 3 colores sucesivamente y actualiza tu función para que aplique las clases.
Nota: para definir las clases CSS que va a tener un elemento en Javascript usa la propiedad “className” o "classList" de dicho elemento asignándole una cadena de texto con el nombre de las clases.

## Ejercicio 4. Crea un elemento “card” o tarjeta para mostrar una película

Utiliza tanto código HTML como código CSS para darle la apariencia que prefieras.
Utiliza un objeto película con los datos de una película y la URL a la imagen de su portada.
Una vez terminado, genera un duplicado dinámicamente usando código Javascript en el que utilices las propiedades y métodos vistos para el acceso y manipulación del DOM.

# Shadow

## Ejercicio 5. Cambiar el texto interno del Shadow DOM

Tras crear un shadow DOM con un <p>Into Shadow</p> dentro de el, usa shadow.querySelector('p') y cambia su textContent.
Tenemos que modificar un <p> que está dentro del shadow para que ponga “Hola desde el Shadow DOM”.
Resultado: el texto del p encapsulado debe ser rojo y cambiar a “Hola desde el Shadow DOM”.
Nota: Debe estar en open.

# Eventos

## Ejercicio 6. Mostrar coordenadas del ratón en tiempo real

Vamos a mover el ratón por encima de un div que creemos que tendrá de clase "container-mouse-move" y con un tamaño de 300px x 200px y border 1px solid grey.
Necesitamos mostrar por consola los valores de clientX / clientY mediante javascript.
Nota:Usar un event listener con 'mousemove' para conseguirlo y extraer esas propiedades del event.
Resultado: la consola va mostrando coordenadas al mover el ratón por el container.

## Ejercicio 7. Extreer valor de un input

Vamos a definir por javascript un input, con id="input-test" y lo agregaremos al DOM
Luego crearemos un event listener del tipo 'input' y vmoa s mostrar por consola el valor actual de ese input cuando tecleemos dentro.
Nota: Para extraer el valor usaremos input.value

## Ejercicio 8. Creando un contador de clicks

Vamos a definir un boton, con el texto inicial "Clicks: 0" y lo agregaremos al DOM.
Crearemos un event listener que cada vez que hagamos click, incremente ese numero mostrado.
EJ: Clicks: 1, Clicks: 2, y así sucesivamente.
Opcional: Crear tambien un botn para resetear el contador.

## Ejercicio 9. Detectar tecla presionada

Vamos a crear un event listener para el DOM, que nos mostrará por consola que tecla hemso pulsado.
Nota: Usar el evento 'keydown' y extraer su valor con event.key.

# Animaciones

## Ejercicio 10. Animar un cuadrado

Hacer que un cuadrado se mueva hacia la derecha 100px y luego vuelva a su posición original
Nota: Usar requestAnimationFrame y cambiar sentido multiplicando translateX por -1 cuando sea necesario.

## Ejercicio 11. Cambio de color en el click de ratón

Teniendo un div con un background color azul, hacer que cambie a rojo en el click, y si se vuelve a pulsar, de nuevo azul y así sucesivamente.
Nota: Es de tipo transicion

## Ejercicio 12. Rotar un elemento

Rotar un elemento creado 360º.

# Drag & Drop

## Ejercicio 13. Arrastrar un elemento encima de otro y volcar datos

Crea dos divs, teniendo en cuenta que uno deberás arrastrarlo encima del otro pasandole un opjeto que previamente tengas definido, y vuenca su contenido en el textContent del segundo elemento.

# Scope y variables

## Ejercicio 14 — Scope local y global

Declara variables con var, let y const en distintos ámbitos (global, función, bloque) y muestra por consola dónde son accesibles.

# Control de tiempo

## Ejercicio 15 — setTimeout

Crea un mensaje que se muestre en #app 3 segundos después de pulsar un botón.

## Ejercicio 16 — setInterval y clearInterval

Crea un contador que aumente cada segundo y un botón que lo detenga cuando se pulse y otro para resetearlo a 0.

# Formularios

## Ejercicio 17 — Capturar valores de formulario

Crea un formulario simple con nombre, direccion, email y edad, y al enviarlo, muestra los datos en consola sin recargar la página (usando preventDefault).

## Ejercicio 18 — Validación básica

Añade una validación al ejercicio anterior: si el nombre está vacío,la edad es menor de 18, el email no tiene la @ o la direccion tiene menos de 10 caracteres, muestra un mensaje de error debajo del formulario diciendo cual es el error con un mensaje.
Nota: En caso de haber más de un error, debem mostrase todos.


# Peticiones HTTP y fetch

## Ejercicio 19 — fetch GET básico

Haz una petición fetch() a una API pública (por ejemplo, https://jsonplaceholder.typicode.com/users) y muestra los nombres en una lista.

## Ejercicio 20 — Manejo de errores con fetch

Simula una petición a una URL errónea y muestra en consola el mensaje de error con el código de estado.

## Ejercicio 21 — fetch POST simulado

Envía un objeto JSON a una API (como https://jsonplaceholder.typicode.com/posts) y muestra la respuesta recibida.

## Ejercicio 22 - fetch PUT simulado

Reemplaza completamente el post con id: 1 en la misma API usando el método PUT, enviando un nuevo title y body.

## Ejercicio 23 - fetch  PATCH

Modifica solo el título (title) del post con id: 1 usando el método PATCH.

## Ejercicio 24 - fetch DELETE

Elimina el post con id: 1 usando el método DELETE y muestra un mensaje en consola confirmando la eliminación.