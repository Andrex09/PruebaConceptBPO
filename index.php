<!DOCTYPE html>
<html lang="es">
<head>
    <!-- Define el tipo de codificación de caracteres -->
    <meta charset="UTF-8">

    <!-- Título de la pestaña del navegador -->
    <title>Usuarios - Concept BPO</title>

    <!-- Enlace a Bootstrap 5 (para estilos y estructura) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Enlace a Bootstrap Icons (para íconos como la estrella de favorito) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Enlace a una hoja de estilos personalizada -->
    <link rel="stylesheet" href="style.css">
</head>
<body>

<!-- Contenedor principal con espacio interno (padding vertical) -->
<div class="container py-4">

    <!-- Título principal centrado -->
    <h1 class="text-center mb-4">Lista de Usuarios</h1>

    <!-- Sección para mostrar el contador de usuarios favoritos, alineado a la derecha -->
    <div class="text-end mb-3">
        <strong>Favoritos: <span id="fav-count">0</span></strong>
    </div>

    <!-- Contenedor donde se agregarán las tarjetas de usuarios (rellenado con JavaScript) -->
    <div id="user-list" class="row"></div>
</div>

<!-- Modal de Bootstrap para mostrar los detalles del usuario -->
<div class="modal fade" id="userModal" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- Encabezado del modal con botón para cerrarlo -->
      <div class="modal-header">
        <h5 class="modal-title" id="userModalLabel">Detalles del Usuario</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
      </div>

      <!-- Cuerpo del modal donde se mostrarán los detalles (llenado dinámicamente con JS) -->
      <div class="modal-body" id="modal-body">
        <!-- Detalles se llenan con JS -->
      </div>
    </div>
  </div>
</div>

<!-- Scripts necesarios para que funcione Bootstrap (como modales y botones) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- Archivo JavaScript personalizado que contiene la lógica de la app -->
<script src="script.js"></script>

</body>
</html>
