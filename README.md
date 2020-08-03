# TP-Objetos
Trabajo Practico

TP Objetos.
El trabajo practico desarrolla un programa que modela una determinada ruta de colectivos teniendo en cuenta los tramos por ciudades. Estos tramos son recibidos en un archivo de texto y se muestran en  un grafo no dirigido cuyos nodos representan las distintas ciudades.

Librerías utilizadas:
Undirender:  Es una librería que, dada una altura, un ancho y una lista de adyacencia que describe un gráfico no dirigido, devuelva una cadena de filas de ancho por columnas de alto que representa el gráfico en una fuente de ancho fijo. 
En este trabajo practico, la librería se utilizo para realizar el grafo no dirigido donde, como explique anteriormente,  los nodos son las ciudades  pertenecientes a la ruta y los arcos indican que entre esas ciudades existe servicio de colectivo.

ReadlineSync: es una librería que se utiliza para que el usuario pueda ingresar datos y valores por teclado.
En este caso se ingresa el nombre de la ruta, y el ancho y alto deseado para el grafo.

@types/node: es una librería que se utiliza para poder insertarle al programa valores desde un archivo txt. Esta librería la utilizo para tomar el listado de ciudades conectadas por un servicio de colectivo desde un  archivo txt .


Clases:
   -- Clase RutasColectivos: esta clase se utiliza para modelar el objeto grafo. Posee una variable para representar el alto del grafo, otra el ancho y una que almacena las rutas. Esta variable es de tipo "Rutas", y como esta esta modelada en otra clase, se cumple la composicion de clases solicitada para este trabajo.
    Dentro de esta clase se utiliza la libreria asignadapara imprimir el grafo.
    --Clase Rutas: esta clase modela la ruta especificada. Posee una variable para el nombre y una variable que es arreglo de arreglos para almacenar la misma.
    
Descripciondel funcionamiento:

El usiario ingresa por teclado el nombre de la ruta, y el ancho y alto del grafo.La ruta, modelada como un arreglo de arreglos, se arma con los pares contenidos en el archivo de texto rutas.txt en un metodo llamado ArmarRutas dentro del main .
La misma es pasada como parametro al constructor de la clase Rutas junto al nombre. Luego al constructor de la clase RutasColectivos se le pasa como parametro el ancho, alto y la instancia de la clase Rutas creada anteriormente.
Creada una instancia de la Clase RutasColectivos, se imprime el grafo.



