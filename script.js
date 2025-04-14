// Espera a que todo el DOM esté cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", async () => {
    // Obtiene el contenedor donde se agregarán las tarjetas de usuario
    const container = document.getElementById("user-list");

    // Realiza una solicitud HTTP a una API falsa para obtener una lista de usuarios
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const allUsers = await res.json();

    // Duplica los dos primeros usuarios para tener un total de 12 (la API devuelve 10)
    const users = [...allUsers, allUsers[0], allUsers[1]];

    // Inicializa el contador de usuarios favoritos
    let favCount = 0;

    // Recorre cada usuario y crea su tarjeta
    users.forEach(user => {
        // Crea una columna para usar con Bootstrap (3 columnas por fila)
        const col = document.createElement("div");
        col.className = "col-md-4 mb-4";

        // Verifica si el usuario está marcado como favorito en el almacenamiento local
        const isFav = localStorage.getItem(`fav-${user.id}`);
        if (isFav) favCount++; // Incrementa el contador si es favorito

        // Crea la tarjeta visual del usuario
        const card = document.createElement("div");
        card.className = "card p-3 shadow-sm";

        // Inserta el contenido HTML de la tarjeta, incluyendo:
        // - Nombre del usuario
        // - Ícono de estrella (relleno si es favorito)
        // - Correo electrónico
        // - Botón para ver más detalles
        card.innerHTML = `
            <div class="d-flex justify-content-between align-items-center">
                <h5 class="mb-0">${user.name}</h5>
                <i class="bi bi-star${isFav ? "-fill favorite" : ""}" role="button" onclick="toggleFavorite(${user.id}, this)"></i>
            </div>
            <p class="mb-1">Email: ${user.email}</p>
            <button class="btn btn-green btn-sm" onclick='showDetails(${JSON.stringify(user)})'>Ver Detalles</button>
        `;

        // Agrega la tarjeta dentro de la columna y la columna dentro del contenedor
        col.appendChild(card);
        container.appendChild(col);
    });

    // Actualiza la cantidad de favoritos mostrada en la interfaz
    updateFavoriteCount(favCount);
});

// Función para mostrar los detalles del usuario en un modal
function showDetails(user) {
    // Inserta información adicional en el cuerpo del modal (teléfono y sitio web)
    const modalBody = document.getElementById("modal-body");
    modalBody.innerHTML = `
        <p><strong>Teléfono:</strong> ${user.phone}</p>
        <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
    `;

    // Muestra el modal utilizando Bootstrap
    const modal = new bootstrap.Modal(document.getElementById("userModal"));
    modal.show();
}

// Función para agregar o quitar un usuario de los favoritos
function toggleFavorite(userId, icon) {
    const key = `fav-${userId}`; // Clave del usuario en localStorage
    let count = parseInt(document.getElementById("fav-count").textContent); // Obtiene el número actual de favoritos

    if (localStorage.getItem(key)) {
        // Si ya está en favoritos, lo elimina
        localStorage.removeItem(key);
        icon.classList.remove("bi-star-fill", "favorite");
        icon.classList.add("bi-star");
        updateFavoriteCount(count - 1); // Disminuye el contador
    } else {
        // Si no está en favoritos, lo agrega
        localStorage.setItem(key, true);
        icon.classList.remove("bi-star");
        icon.classList.add("bi-star-fill", "favorite");
        updateFavoriteCount(count + 1); // Aumenta el contador
    }
}

// Función que actualiza visualmente el contador de favoritos
function updateFavoriteCount(count) {
    document.getElementById("fav-count").textContent = count;
}
