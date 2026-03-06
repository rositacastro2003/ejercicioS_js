// ==========================================
// EJERCICIOS JAVASCRIPT - SERIE 2
// Nivel: Básico - Condicionales y Operadores
// ==========================================
// Instrucciones:
// - No cambies los nombres de las funciones
// - Reemplaza los comentarios con tu código
// - Ejecuta `npm test` para verificar tus soluciones
// ==========================================

// ██████  COMPARACIÓN Y CONDICIONALES ████████████████████████

// Test 1:
function esMayorDeEdad(edad) {  return edad >= 18
	// Recibe un número representando la edad de una persona.
	// Devuelve true si la edad es mayor o igual a 18, false en caso contrario.
	// Tu código:
}

// Test 2:
function clasificarTriangulo(lado1, lado2, lado3) {
	
	if ( lado1 ===  lado2 && lado2=== lado3)
		return "Equilátero";
	if ( lado1 === lado2 || lado1=== lado3||lado3 ===lado2){
		return "Isósceles";
	}
	if (lado1 + lado2 <= lado3 || lado1 + lado3 <= lado2 || lado3 + lado2 <= lado1) {
		return "No es triángulo";
	} 
	return "Escaleno";
	
	// Recibe tres números representando los lados de un triángulo.
	// Devuelve:
	// - "Equilátero" si los tres lados son iguales
	// - "Isósceles" si exactamente dos lados son iguales
	// - "Escaleno" si todos los lados son diferentes
	// - "No es triángulo" si no cumple la propiedad triangular
	// Tu código:
}

// Test 3:
function calcularDescuento(precio, esMiembro, esFinDeSemana) {
	// Recibe: precio (número), esMiembro (boolean), esFinDeSemana (boolean)
	// Reglas de descuento:
	// - Si es miembro Y es fin de semana: 30% de descuento
	// - Si es miembro O es fin de semana: 15% de descuento
	// - Si no cumple ninguna: sin descuento (0%)
	// Devuelve el precio final después de aplicar el descuento.
	// Tu código:
	if(esMiembro && esFinDeSemana) {
		return precio * 0.7;
	}
	if(esMiembro || esFinDeSemana) {
		return precio * 0.85;
	}
	return precio;
}


// Test 4:
function obtenerDiaSemana(numero) {
	// Recibe un número del 1 al 7.
	// Devuelve el nombre del día correspondiente usando switch:
	// 1 = "Lunes", 2 = "Martes", ..., 7 = "Domingo"
	// Si el número no está en el rango, devuelve "Día inválido"
	// Tu código:
	  switch (numero) {
    case 1: return "Lunes";
    case 2: return "Martes";
    case 3: return "Miércoles";
    case 4: return "Jueves";
    case 5: return "Viernes";
    case 6: return "Sábado";
    case 7: return "Domingo";
    default: return "Día inválido";
  }
}

// Test 5:
function esAnioBisiesto(anio) {
	// Recibe un número representando un año.
	// Devuelve true si es bisiesto, false si no lo es.
	// Regla: Es bisiesto si es divisible por 4,
	// EXCEPTO si es divisible por 100 (a menos que también sea divisible por 400).
	// Ejemplos: 2000 → true, 1900 → false, 2024 → true, 2023 → false
	// Tu código:
	 if ((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0) {
    return true;
  }
  return false;
}

// ██████  OPERADORES LÓGICOS Y MATEMÁTICOS ████████████████████████

// Test 6:
function validarContraseña(password) {
	// Recibe un string con una contraseña.
	// Devuelve true si cumple TODAS estas condiciones:
	// - Tiene al menos 8 caracteres
	// - Contiene al menos una letra mayúscula
	// - Contiene al menos un número
	// De lo contrario, devuelve false.
	// Pista: Usa métodos de string como .length, .includes(), o expresiones regulares simples.
	// Tu código:
	  let mayuscula = /[A-Z]/.test(password);
  let numero = /[0-9]/.test(password);

  return password.length >= 8 && mayuscula && numero;


}

// Test 7:
function calcularIMC(peso, altura) {
	// Recibe: peso (kg, número), altura (metros, número)
	// Calcula el IMC: peso / (altura * altura)
	// Devuelve un string con la clasificación:
	// - IMC < 18.5 → "Bajo peso"
	// - 18.5 <= IMC < 25 → "Peso normal"
	// - 25 <= IMC < 30 → "Sobrepeso"
	// - IMC >= 30 → "Obesidad"
	// Tu código:
	 let imc = peso / (altura * altura);

  if (imc < 18.5) return "Bajo peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Sobrepeso";
  return "Obesidad";
}

// Test 8:
function esMultiplo(num1, num2) {  return num1 % num2 === 0 || num2 % num1 === 0;
	// Recibe dos números enteros.
	// Devuelve true si num1 es múltiplo de num2 o viceversa.
	// Ejemplo: esMultiplo(10, 5) → true, esMultiplo(7, 3) → false
	// Tu código:
}

// Test 9:
function obtenerEstacion(mes) {
	switch (mes) {
    case 12:
    case 1:
    case 2:
      return "Invierno";

    case 3:
    case 4:
    case 5:
      return "Primavera";

    case 6:
    case 7:
    case 8:
      return "Verano";

    case 9:
    case 10:
    case 11:
      return "Otoño";

    default:
      return "Mes inválido";
  }
	// Recibe un número del 1 al 12 representando el mes.
	// Devuelve la estación del año (hemisferio norte) usando switch:
	// - Diciembre, Enero, Febrero → "Invierno"
	// - Marzo, Abril, Mayo → "Primavera"
	// - Junio, Julio, Agosto → "Verano"
	// - Septiembre, Octubre, Noviembre → "Otoño"
	// Si el mes no es válido, devuelve "Mes inválido"
	// Tu código:
}

// Test 10:
function calcularPropina(total, porcentaje) {
	// Recibe: total de la cuenta (número), porcentaje de propina (número, ej: 10 para 10%)
	// Devuelve el monto de la propina redondeado a 2 decimales.
	// Ejemplo: calcularPropina(100, 15) → 15.00
	// Pista: Usa toFixed(2) y luego convierte a número si es necesario.
	// Tu código:
	  let propina = total * porcentaje / 100;
  return Number(propina.toFixed(2));
}

// ██████  STRINGS Y VALIDACIONES ████████████████████████

// Test 11: let contador = 0;
function esPalabraPalindroma(palabra) {
	// Recibe un string.
	// Devuelve true si la palabra se lee igual de izquierda a derecha
	// y de derecha a izquierda (ignora mayúsculas/minúsculas).
	// Ejemplo: "reconocer" → true, "hola" → false, "Ana" → true
	// Tu código:
	let texto = palabra.toLowerCase();
  let invertida = texto.split("").reverse().join("");

  return texto === invertida;
}

// Test 12:
function contarVocales(texto) {
	// Recibe un string.
	// Devuelve el número total de vocales (a, e, i, o, u) que contiene.
	// No distingue entre mayúsculas y minúsculas.
	// Ejemplo: contarVocales("Hola Mundo") → 4
	// Tu código:
	 let contador = 0;
  let vocales = "aeiou";

  for (let i = 0; i < texto.length; i++) {

    if (vocales.includes(texto[i].toLowerCase())) {
      contador++;
    }

  }

  return contador;
}

// Test 13:
function formatearNombre(nombre, apellido, mayusculas) {
	// Recibe: nombre (string), apellido (string), mayusculas (boolean)
	// Devuelve el nombre completo formateado:
	// - Si mayusculas es true: "NOMBRE APELLIDO"
	// - Si mayusculas es false: "Nombre Apellido" (primera letra mayúscula, resto minúscula)
	// Ejemplo: formatearNombre("juan", "perez", true) → "JUAN PEREZ"
	// Ejemplo: formatearNombre("juan", "perez", false) → "Juan Perez"
	// Tu código:
}

// ██████  BUCLES BÁSICOS ████████████████████████

// Test 14:
function sumarHasta(limite) {
	// Recibe un número entero positivo.
	// Devuelve la suma de todos los números desde 1 hasta ese límite (inclusive).
	// Ejemplo: sumarHasta(5) → 1+2+3+4+5 = 15
	// Usa un bucle for o while.
	// Tu código:
}

// Test 15:
function obtenerParesHasta(limite) {
	// Recibe un número entero positivo.
	// Devuelve un array con todos los números pares desde 0 hasta el límite (inclusive).
	// Ejemplo: obtenerParesHasta(10) → [0, 2, 4, 6, 8, 10]
	// Usa un bucle for o while.
	// Tu código:
}

// Test 16:
function factorial(n) {
	// Recibe un número entero no negativo.
	// Devuelve el factorial de ese número (n! = n × (n-1) × ... × 1).
	// Ejemplo: factorial(5) → 5×4×3×2×1 = 120
	// Nota: factorial(0) = 1 por definición.
	// Usa un bucle for o while.
	// Tu código:
}

// Test 17:
function buscarNumero(array, objetivo) {
	// Recibe: array (de números), objetivo (número a buscar)
	// Devuelve true si el objetivo está en el array, false en caso contrario.
	// Usa un bucle for para recorrer el array (no uses .includes()).
	// Tu código:
}

// Test 18:
function obtenerPrimerosN(array, n) {
	// Recibe: array (cualquier tipo), n (número entero positivo)
	// Devuelve un nuevo array con los primeros n elementos del array original.
	// Si n es mayor que la longitud del array, devuelve el array completo.
	// Si n es 0 o negativo, devuelve un array vacío.
	// NO uses .slice(), hazlo con un bucle.
	// Ejemplo: obtenerPrimerosN([1,2,3,4,5], 3) → [1,2,3]
	// Tu código:
}

// ██████  NO MODIFICAR DESDE AQUÍ ███████████

module.exports = {
	esMayorDeEdad,
	clasificarTriangulo,
	calcularDescuento,
	obtenerDiaSemana,
	esAnioBisiesto,
	validarContraseña,
	calcularIMC,
	esMultiplo,
	obtenerEstacion,
	calcularPropina,
	esPalabraPalindroma,
	contarVocales,
	formatearNombre,
	sumarHasta,
	obtenerParesHasta,
	factorial,
	buscarNumero,
	obtenerPrimerosN,
};
