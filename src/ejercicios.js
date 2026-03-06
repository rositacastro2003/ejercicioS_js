// ==========================================
// EJERCICIOS DE JAVASCRIPT - NIVEL BÁSICO
// ==========================================
// Total: 35 tests a aprobar
// ==========================================
///// dsgsgds
// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Test 1:
// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola señorita";

// Test 2
// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 45;

// Test 3
// Crea una variable booleana:
const nuevoBool = true;

// Test 4
// Resuelve el siguiente problema matemático:
const nuevaResta =  10-5===5;

// Test 5
// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10*4===40;

// Test 6
// Resuelve el siguiente problema matemático:
const nuevoModulo = 21%5===1;

// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

// Test 7
function devolverString(str) {
	return str
	// "Return" la string provista: str
	// Tu código:
}

// Test 8
function suma(x, y) {return x+y
	// "x" e "y" son números
	// Suma "x" e "y" juntos y devuelve el valor
	// Tu código:
}

// Test 9
function resta(x, y) {return x-y
	// Resta "y" de "x" y devuelve el valor
	// Tu código:
}

// Test 10
function divide(x, y) {return x/y
	// Divide "x" entre "y" y devuelve el valor
	// Tu código:
}

// Test 11
function multiplica(x, y) {return x*y
	// Multiplica "x" por "y" y devuelve el valor
	// Tu código:
}

// Test 12
function sonIguales(x, y) {return x===y
	// Devuelve "true" si "x" e "y" son iguales
	// De lo contrario, devuelve "false"
	// Tu código:
}

// Test 13
function tienenMismaLongitud(str1, str2) {return str1.length===str2.length
	// Devuelve "true" si las dos strings tienen la misma longitud
	// De lo contrario, devuelve "false"
	// Tu código:
}

// Test 14
function menosQueNoventa(num) {return num<90
	// Devuelve "true" si el argumento de la función "num" es menor que noventa
	// De lo contrario, devuelve "false"
	// Tu código:
}

// Test 15
function mayorQueCincuenta(num) {return num >50;
	// Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
	// De lo contrario, devuelve "false"
	// Tu código:
}

// Test 16
function obtenerResto(x, y) {return x % y;
	// Obten el resto de la división de "x" entre "y"
	// Tu código:
}

// Test 17
function esPar(num) {return num % 2=== 0;
	// Devuelve "true" si "num" es par
	// De lo contrario, devuelve "false"
	// Tu código:
}

// Test 18
function esImpar(num) {return num % 2!==0;
	// Devuelve "true" si "num" es impar
	// De lo contrario, devuelve "false"
	// Tu código:
}

// Test 19
function elevarAlCuadrado(num) {return num *num;
	// Devuelve el valor de "num" elevado al cuadrado
	// ojo: No es raiz cuadrada!
	// Tu código:
}

// Test 20
function elevarAlCubo(num) {return num * num* num;
	// Devuelve el valor de "num" elevado al cubo
	// Tu código:
}

// Test 21
function elevar(num, exponent) {
	return Math.pow(num,exponent);
	// Devuelve el valor de "num" elevado al exponente dado en "exponent"
	// Tu código:
}

// Test 22
function redondearNumero(num) {
	// Redondea "num" al entero más próximo y devuélvelo
	// Tu código:
}

// Test 23
function redondearHaciaArriba(num) {
	// Redondea "num" hacia arriba (al próximo entero) y devuélvelo
	// Tu código:
}

// Test 24
function numeroRandom() {
	//Generar un número al azar entre 0 y 1 y devolverlo
	//Pista: investigá qué hace el método Math.random()
	// Tu código:
}

// Test 25
function esPositivo(numero) {
	//La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo.
	//Si el número es positivo, devolver ---> "Es positivo"
	//Si el número es negativo, devolver ---> "Es negativo"
	//Si el número es 0, devuelve false
	// Tu código:
}

// Test 26
function agregarSimboloExclamacion(str) {
	// Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
	// Ejemplo: "hello world" pasaría a ser "hello world!"
	// Tu código:
}

// Test 27
function combinarNombres(nombre, apellido) {
	// Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
	// Ejemplo: "Soy", "Hola" -> "Soy Hola"
	// Tu código:
}

// Test 28
function obtenerSaludo(nombre) {
	// Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
	// "Martin" -> "Hola Martin!"
	// Tu código:
}

// Test 29
function obtenerAreaRectangulo(alto, ancho) {
	// Retornar el area de un rectángulo teniendo su altura y ancho
	// Tu código:
}

// Test 30
function retornarPerimetro(lado) {
	//Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
	//Escribe tu código aquí
}

// Test 31
function areaDelTriangulo(base, altura) {
	//Desarrolle una función que calcule el área de un triángulo.
	//Escribe tu código aquí
}

// Test 32
function deEuroAdolar(euro) {
	//Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
	//como parámetro un número de euros y calcule el cambio en dólares.
	//Escribe tu código aquí
}

// Test 33
function esVocal(letra) {
	//Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
	//Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
	//que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
	// Si no es vocal, tambien debe devolver "Dato incorrecto".
	//Escribe tu código aquí
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
	nuevaString,
	nuevoNum,
	nuevoBool,
	nuevaResta,
	nuevaMultiplicacion,
	nuevoModulo,
	devolverString,
	tienenMismaLongitud,
	sonIguales,
	menosQueNoventa,
	mayorQueCincuenta,
	suma,
	resta,
	divide,
	multiplica,
	obtenerResto,
	esPar,
	esImpar,
	elevarAlCuadrado,
	elevarAlCubo,
	elevar,
	redondearNumero,
	redondearHaciaArriba,
	numeroRandom,
	esPositivo,
	agregarSimboloExclamacion,
	combinarNombres,
	obtenerSaludo,
	obtenerAreaRectangulo,
	retornarPerimetro,
	areaDelTriangulo,
	deEuroAdolar,
	esVocal,
};
