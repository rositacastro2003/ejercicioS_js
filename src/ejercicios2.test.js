/* eslint-disable no-undef */
const { esMayorDeEdad, clasificarTriangulo, calcularDescuento, obtenerDiaSemana, esAnioBisiesto, validarContraseña, calcularIMC, esMultiplo, obtenerEstacion, calcularPropina, esPalabraPalindroma, contarVocales, formatearNombre, sumarHasta, obtenerParesHasta, factorial, buscarNumero, obtenerPrimerosN } = require("./ejercicios2");

// ██████  TESTS: 18 FUNCIONES = 18 TESTS ████████████████████████

describe("1. esMayorDeEdad(edad)", function () {
	it("debe retornar true si edad >= 18, false en caso contrario", function () {
		expect(esMayorDeEdad(18)).toBe(true);
		expect(esMayorDeEdad(25)).toBe(true);
		expect(esMayorDeEdad(17)).toBe(false);
		expect(esMayorDeEdad(0)).toBe(false);
	});
});

describe("2. clasificarTriangulo(lado1, lado2, lado3)", function () {
	it("debe clasificar correctamente el tipo de triángulo", function () {
		expect(clasificarTriangulo(5, 5, 5)).toBe("Equilátero");
		expect(clasificarTriangulo(5, 5, 3)).toBe("Isósceles");
		expect(clasificarTriangulo(3, 4, 5)).toBe("Escaleno");
		expect(clasificarTriangulo(1, 2, 10)).toBe("No es triángulo");
	});
});

describe("3. calcularDescuento(precio, esMiembro, esFinDeSemana)", function () {
	it("debe aplicar el descuento correcto según las condiciones", function () {
		expect(calcularDescuento(100, true, true)).toBe(70);
		expect(calcularDescuento(100, true, false)).toBe(85);
		expect(calcularDescuento(100, false, false)).toBe(100);
	});
});

describe("4. obtenerDiaSemana(numero)", function () {
	it('debe retornar el nombre del día o "Día inválido"', function () {
		expect(obtenerDiaSemana(1)).toBe("Lunes");
		expect(obtenerDiaSemana(7)).toBe("Domingo");
		expect(obtenerDiaSemana(0)).toBe("Día inválido");
		expect(obtenerDiaSemana(8)).toBe("Día inválido");
	});
});

describe("5. esAnioBisiesto(anio)", function () {
	it("debe retornar true si es bisiesto, false si no lo es", function () {
		expect(esAnioBisiesto(2000)).toBe(true);
		expect(esAnioBisiesto(2024)).toBe(true);
		expect(esAnioBisiesto(1900)).toBe(false);
		expect(esAnioBisiesto(2023)).toBe(false);
	});
});

describe("6. validarContraseña(password)", function () {
	it("debe validar que la contraseña cumpla todos los requisitos", function () {
		expect(validarContraseña("Password1")).toBe(true);
		expect(validarContraseña("MiClave123")).toBe(true);
		expect(validarContraseña("Pass1")).toBe(false);
		expect(validarContraseña("password123")).toBe(false);
		expect(validarContraseña("Password")).toBe(false);
	});
});

describe("7. calcularIMC(peso, altura)", function () {
	it("debe clasificar correctamente según el IMC calculado", function () {
		expect(calcularIMC(50, 1.75)).toBe("Bajo peso");
		expect(calcularIMC(70, 1.75)).toBe("Peso normal");
		expect(calcularIMC(85, 1.75)).toBe("Sobrepeso");
		expect(calcularIMC(100, 1.75)).toBe("Obesidad");
	});
});

describe("8. esMultiplo(num1, num2)", function () {
	it("debe retornar true si uno es múltiplo del otro", function () {
		expect(esMultiplo(10, 5)).toBe(true);
		expect(esMultiplo(5, 10)).toBe(true);
		expect(esMultiplo(7, 3)).toBe(false);
	});
});

describe("9. obtenerEstacion(mes)", function () {
	it("debe retornar la estación correcta según el mes", function () {
		expect(obtenerEstacion(1)).toBe("Invierno");
		expect(obtenerEstacion(4)).toBe("Primavera");
		expect(obtenerEstacion(7)).toBe("Verano");
		expect(obtenerEstacion(10)).toBe("Otoño");
		expect(obtenerEstacion(0)).toBe("Mes inválido");
	});
});

describe("10. calcularPropina(total, porcentaje)", function () {
	it("debe calcular correctamente la propina redondeada a 2 decimales", function () {
		expect(calcularPropina(100, 10)).toBe(10);
		expect(calcularPropina(50, 20)).toBe(10);
		expect(calcularPropina(33.33, 10)).toBe(3.33);
	});
});

describe("11. esPalabraPalindroma(palabra)", function () {
	it("debe retornar true si es palíndromo, false si no lo es", function () {
		expect(esPalabraPalindroma("reconocer")).toBe(true);
		expect(esPalabraPalindroma("Ana")).toBe(true);
		expect(esPalabraPalindroma("hola")).toBe(false);
	});
});

describe("12. contarVocales(texto)", function () {
	it("debe contar correctamente el número de vocales", function () {
		expect(contarVocales("Hola")).toBe(2);
		expect(contarVocales("JavaScript")).toBe(3);
		expect(contarVocales("xyz")).toBe(0);
		expect(contarVocales("")).toBe(0);
	});
});

describe("13. formatearNombre(nombre, apellido, mayusculas)", function () {
	it("debe formatear el nombre según el parámetro mayusculas", function () {
		expect(formatearNombre("juan", "perez", true)).toBe("JUAN PEREZ");
		expect(formatearNombre("juan", "perez", false)).toBe("Juan Perez");
		expect(formatearNombre("MARIA", "LOPEZ", false)).toBe("Maria Lopez");
	});
});

describe("14. sumarHasta(limite)", function () {
	it("debe retornar la suma de 1 hasta el límite", function () {
		expect(sumarHasta(1)).toBe(1);
		expect(sumarHasta(5)).toBe(15);
		expect(sumarHasta(10)).toBe(55);
		expect(sumarHasta(0)).toBe(0);
	});
});

describe("15. obtenerParesHasta(limite)", function () {
	it("debe retornar un array con los números pares hasta el límite", function () {
		expect(obtenerParesHasta(10)).toEqual([0, 2, 4, 6, 8, 10]);
		expect(obtenerParesHasta(5)).toEqual([0, 2, 4]);
		expect(obtenerParesHasta(0)).toEqual([0]);
	});
});

describe("16. factorial(n)", function () {
	it("debe retornar el factorial del número", function () {
		expect(factorial(0)).toBe(1);
		expect(factorial(1)).toBe(1);
		expect(factorial(5)).toBe(120);
		expect(factorial(7)).toBe(5040);
	});
});

describe("17. buscarNumero(array, objetivo)", function () {
	it("debe retornar true si encuentra el número en el array", function () {
		expect(buscarNumero([1, 2, 3, 4], 3)).toBe(true);
		expect(buscarNumero([10, 20, 30], 10)).toBe(true);
		expect(buscarNumero([1, 2, 3], 5)).toBe(false);
		expect(buscarNumero([], 1)).toBe(false);
	});
});

describe("18. obtenerPrimerosN(array, n)", function () {
	it("debe retornar los primeros n elementos del array", function () {
		expect(obtenerPrimerosN([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
		expect(obtenerPrimerosN([1, 2], 5)).toEqual([1, 2]);
		expect(obtenerPrimerosN([1, 2, 3], 0)).toEqual([]);
		expect(obtenerPrimerosN([1, 2, 3], -1)).toEqual([]);
	});
});
