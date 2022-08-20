/*
//inicio
alert("Bienvenido a Banco Torola");
alert("Esta es nuestra pagina de simulacion de cambio de divisas");
 
let cotizacion_dolar = 286;
let cotizar_Dolar = (pesos) => pesos / cotizacion_dolar;
let cotizar_Pesos = (dolar) => dolar * cotizacion_dolar;


let seleccion = prompt("Seleccionar el Tipo De Cambio. 1=Cambiar Pesos a Dolar o 2=Cambiar Dolar a Pesos");
let valor = prompt("Ingrese el Valor");
//calculadora
switch (seleccion) {
    case "1":
        alert("USTED TIENE: USD$  " + cotizar_Dolar(valor));
        break;

    case "2":
        alert("USTED TIENE: $PESOS  " + cotizar_Pesos(valor));
        break;

}
