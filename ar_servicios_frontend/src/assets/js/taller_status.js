function updateShopStatus() {
    const now = new Date();
    const hours = now.getHours();
    const day = now.getDay();
    const statusBar = document.getElementById('shop-status-bar');
    const openHour = 12;
    const closeHour = 21;

    if (day >= 1 && day <= 5 && hours >= openHour && hours < closeHour) {
        statusBar.style.backgroundColor = '#2ecc71'; 
        statusBar.innerText = 'Estamos trabajando';
    } else {
        statusBar.style.backgroundColor = '#ca1313';
        statusBar.innerText = 'Cerrado';
    }
}

window.onload = updateShopStatus;
