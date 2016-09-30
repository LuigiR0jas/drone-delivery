# drone-delivery
Simple Web Development 1 proyect, using Google Maps API.

# Descripción:
Se trata de una aplicación web que permite el trazado de rutas aéreas para el vuelo de drones de envío (de los que te llevan cosas hasta la puerta de tu casa). La aplicación debe funcionar tal como lo especifica el apartado de requerimientos.

# Requerimientos:
Se debe generar una aplicación web para el cálculo de distancias entre puntos geográficos. Para ello, esta debe estimar la posición del dispositivo que entra a la aplicación web, si y sólo si el usuario decide compartir su ubicación (hecho en clase).

Hecho esto, se debe permitir que el usuario haga clic en el mapa (deben investigar sobre el evento onclick; también pueden revisar este enlace) y posteriormente se debe ubicar un marcador en la misma posición donde el usuario cliqueó (hecho en clase, salvo la parte del clic). Por último, se debe trazar una línea recta entre ambos puntos (se hace así) y determinar la distancia que hay entre los mismos, considerando la naturaleza esférica del planeta tierra (este requerimiento lo dejo para que investiguen cómo hacerlo ustedes mismos).

# Acotaciones:
1) La aplicación debe tener un botón que permita quitar todos los marcadores y líneas del mapa. Cuando se hace clic en este botón, debe habilitarse otro que permita calcular nuevamente la posición.

2) Si el usuario hace clic nuevamente en algún otro lugar del mapa, se debe remover el marcador y la línea que se ubicó en primer lugar y repetir el proceso de colocación y medición de distancia.

3) En caso de que el usuario no desee compartir su ubicación, deben deshabilitarse los botones de acción, bloqueando así a la aplicación.

Requerimientos Opcionales:
Siempre que se calcule la ubicación del usuario, es necesario definir mediante un círculo la precisión del cálculo de las coordenadas, empleando un círculo gráfico en el mapa que refleje dicho valor.

# Fecha de Entrega:
Este proyecto puede entregarse entre el momento en el que reciban este correo y el día viernes, 30 de septiembre con una nota máxima de 20 puntos. A partir del sábado, 1 de octubre, el proyecto pasará a tener una nota máxima de 13 puntos. El proyecto no tendrá ninguna validez académica si no se entrega antes del 7 de octubre de este año.

# Información Adicional:
Les recomiendo el sitio web Stack Overflow si tienen alguna duda sobre la programación como tal en JavaScript. Les menciono esto porque en alguno de los requerimientos anteriores, es necesario emplear un arreglo de JSONs, y a lo mejor les cuesta un poco comprender qué ocurre en los ejemplos de Google Maps API si no entienden del todo esta característica de JavaScript.
