<template>
  <main id="main">
    <aside id="aside">
      <div class="aside__encabezado">
        <i class="fa-solid fa-laptop-code"></i>
        <div class="containerTitulo">
          <h2>Inventario TI</h2>
          <p>Administrador</p>
        </div>
        <span class="lineaDivisora"></span>
      </div>

      <nav class="aside__navbar">
        <ul>
          <li>
            <router-link to="/dashboard">
              <i class="fa-solid fa-chart-line"></i>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link to="/equipos">
              <i class="fa-solid fa-desktop"></i>
              <span>Equipos</span>
            </router-link>
          </li>
          <li>
            <router-link to="/movimientos">
              <i class="fa-solid fa-right-left"></i>
              <span>Movimientos</span>
            </router-link>
          </li>
          <li>
            <router-link to="/mantenimiento">
              <i class="fa-solid fa-screwdriver-wrench"></i>
              <span>Mantenimiento</span>
            </router-link>
          </li>
          <li>
            <router-link to="/almacen">
              <i class="fa-solid fa-warehouse"></i>
              <span>Almacén</span>
            </router-link>
          </li>
          <li>
            <router-link to="/reportes">
              <i class="fa-solid fa-file-lines"></i>
              <span>Reportes</span>
            </router-link>
          </li>
          <li>
            <router-link to="/usuarios">
              <i class="fa-solid fa-users"></i>
              <span>Usuarios</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="aside__pieDelAside">
        <span class="lineaDivisora"></span>
        <button>
          <i class="fa-solid fa-chevron-left"></i>
          <span>Contraer</span>
        </button>
        <button>
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
          <span>Cerrar Sesión</span>
        </button>
      </div>
    </aside>
  </main>
</template>
