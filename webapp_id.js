document.addEventListener('DOMContentLoaded', () => {
    const getIdBtn = document.getElementById('getIdBtn');
    const idDisplay = document.getElementById('idDisplay');

    getIdBtn.addEventListener('click', () => {
        // Obtener datos del usuario a través de la WebApp de Telegram
        if (window.Telegram && window.Telegram.WebApp && window.Telegram.WebApp.initDataUnsafe) {
            const userData = window.Telegram.WebApp.initDataUnsafe.user;
            if (userData && userData.id) {
                idDisplay.textContent = userData.id;
                console.log("ID de Telegram obtenido:", userData.id);
            } else {
                idDisplay.textContent = "ID no encontrado.";
                console.error("No se pudo obtener el ID del usuario.");
            }
        } else {
            idDisplay.textContent = "No estás en Telegram WebApp.";
            console.error("La aplicación no se está ejecutando en Telegram WebApp.");
        }
    });
});
