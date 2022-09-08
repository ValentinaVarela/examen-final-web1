1-COMAS: situadas en los objetos del 1 al 9(en el objeto 6 ya existe una ","... y en el objeto numero 6 no es necearia la coma ya que es el ultimo objeto)

2-No se tienen agregadas las imagenes de los productos

3-Hay una funcion que se esta exportando que no es necesaria en la "tienda.js"

4-Cuando se crea la Fila se debe crear let fila=document.getElementById("fila");
  pero no se debe crear con createElementById: por ejemplo let fila=document.createElementById("fila");

5-En la variable separador se debe crear con un CreateElement no con un ("getElementById")

6-Cuando se crea la fila se puede resolver de esta manera:
   -crear una etiqueta de html, la cual puede ser el padre de la fila

7-Cuando se crea la fila desde js, crearla html y llamarla por id en js

8-En la funcion del foreach falta el parametro "producto"

9-Cuando se crea los elementos se repite una propiedad que es classlist, estas clases se deben de meter en una solo propiedad(.classList.add("..."))

10-En el elemento "botonampliarinfo" no deberia ir "button", deberia ir "btn"