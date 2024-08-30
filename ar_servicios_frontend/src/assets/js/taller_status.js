function checkShopStatus() {
    const statusElement = document.getElementById('shop-status');
    const now = new Date();
    const currentHour = now.getHours();
    const openHour = 12; // 12:00 PM
    const closeHour = 21; // 21:00 PM

    if (currentHour >= openHour && currentHour < closeHour) {
        statusElement.textContent = "Estamos trabajando!";
        statusElement.classList.add('open');
    } else {
        statusElement.textContent = "Regresamos mañana";
        statusElement.classList.remove('open');
    }
}

document.addEventListener('DOMContentLoaded', checkShopStatus);
