// function updateShopStatus() {
//     const now = new Date();
//     const hours = now.getHours();
//     const day = now.getDay();
//     const statusBar = document.getElementById('shop-status-bar');
//     const openHour = 12;
//     const closeHour = 21;

//     if (day >= 1 && day <= 5 && hours >= openHour && hours < closeHour) {
//         statusBar.style.backgroundColor = '#2ecc71'; 
//         statusBar.innerText = 'Estamos trabajando';
//     } else {
//         statusBar.style.backgroundColor = '#ca1313';
//         statusBar.innerText = 'Cerrado';
//     }
// }

// window.onload = updateShopStatus;

function checkOpenStatus() {
    const now = new Date();
    const openingTime = new Date();
    const closingTime = new Date();

    // Establecer horario de apertura y cierre
    openingTime.setHours(8, 0, 0); // 08:00
    closingTime.setHours(17, 0, 0); // 17:00

    const statusElement = document.getElementById('status');
    const countdownElement = document.getElementById('countdown');

    if (now >= openingTime && now < closingTime) {
        statusElement.textContent = "Estamos trabajando";
        countdownElement.textContent = ""; // Limpiar el contador

        // Calcular tiempo restante hasta el cierre
        const timeUntilClose = closingTime - now;

        // Si falta menos de 1 hora (3600000 ms)
        if (timeUntilClose <= 3600000) {
            const hours = Math.floor((timeUntilClose % (1000 * 3600 * 24)) / (1000 * 3600));
            const minutes = Math.floor((timeUntilClose % (1000 * 3600)) / (1000 * 60));
            countdownElement.textContent = `Cerramos en ${hours}h ${minutes}m`;
        }
    } else {
        statusElement.textContent = "Estamos cerrados";
        countdownElement.textContent = ""; // Limpiar el contador
    }
}

// Ejecutar la función al cargar la página
window.onload = function() {
    checkOpenStatus();
    setInterval(checkOpenStatus, 60000); // Actualizar cada minuto
};
