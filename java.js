function preguntarDatos() {
    var cantidad = 10; // Cantidad de datos
    var datos = [9.8, 9.8, 9.8, 9.8, 1.1,9.8,9.8,9.8,9.8,9.8]; // INgresar datos
   
    var suma = 0;
    for (var i = 0; i < datos.length; i++) {
       suma += datos[i];
    }
   
    var promedio = suma / datos.length;
    var mayores = 0;
   
    for (var i = 0; i < datos.length; i++) {
       if (datos[i] > promedio) {
         mayores++;
       }
    }
   
    console.log("Cantidad de datos mayores: " + mayores);
   }
   
   preguntarDatos();