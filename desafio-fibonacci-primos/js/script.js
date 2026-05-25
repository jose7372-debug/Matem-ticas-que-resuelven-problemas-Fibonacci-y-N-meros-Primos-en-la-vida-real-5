function calcularAhorro() {
    // 1. Obtención de datos usando obligatoriamente document.getElementById()
    let mesesInput = document.getElementById("meses").value;
    let meses = parseInt(mesesInput);

    // Validación interna por si el usuario altera el formulario
    if (isNaN(meses) || meses < 1) {
        document.getElementById("resultado-acumulado").innerHTML = "Por favor, ingrese un número válido de meses mayor a 0.";
        document.getElementById("resultado-total").innerHTML = "";
        return;
    }

    // 2. Variables para la serie de Fibonacci sin usar vectores (Algoritmo A requerido)
    let a = 0;
    let b = 1;
    let c;
    
    let totalAhorrado = 0;
    let tablaHTML = "<table border='1' style='width:100%; border-collapse: collapse; text-align: center;'>";
    tablaHTML += "<tr><th style='padding: 8px; background-color: #2c3e50; color: white;'>Mes</th><th style='padding: 8px; background-color: #2c3e50; color: white;'>Ahorro del Mes</th></tr>";

    // 3. Ciclo lógico para procesar mes a mes
    for (let i = 1; i <= meses; i++) {
        // En la serie clásica adaptada: Mes 1 = 1, Mes 2 = 1, Mes 3 = 2...
        let ahorroDelMes = b;
        totalAhorrado += ahorroDelMes;

        // Construcción de filas de resultados para la pantalla
        tablaHTML += `<tr><td style='padding: 6px;'>Mes ${i}</td><td style='padding: 6px;'>Bs. ${ahorroDelMes}</td></tr>`;

        // Avanzar en la secuencia Fibonacci sin arrays
        c = a + b;
        a = b;
        b = c;
    }
    tablaHTML += "</table>";

    // 4. Mostrar los resultados en la página utilizando textHTML / innerHTML
    document.getElementById("resultado-acumulado").innerHTML = tablaHTML;
    document.getElementById("resultado-total").innerHTML = "Total general ahorrado: Bs. " + totalAhorrado;
}
