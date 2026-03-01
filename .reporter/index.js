// .reporter/index.js
module.exports = (results) => {
	// Nombres CORRECTOS de propiedades del objeto results de Jest
	const totalTests = results.numTotalTests || 0;
	const passedTests = results.numPassedTests || 0;
	const failedTests = results.numFailedTests || 0;
	const totalAssertions = results.numTotalAssertions || 0;
	const passedAssertions = results.numPassedAssertions || 0;

	console.log("\n" + "=".repeat(60));
	console.log("📊 RESUMEN DE EJERCICIOS");
	console.log("=".repeat(60));
	console.log(`✅ Ejercicios aprobados: ${passedTests}/${totalTests}`);
	console.log(`❌ Ejercicios fallidos: ${failedTests}`);
	console.log(`🔍 Validaciones internas: ${passedAssertions}/${totalAssertions}`);

	if (failedTests === 0) {
		console.log("🎉 ¡Todos los ejercicios aprobados!");
	} else {
		console.log("💡 Revisa los mensajes de error arriba para corregir.");
	}
	console.log("=".repeat(60) + "\n");

	return results;
};
