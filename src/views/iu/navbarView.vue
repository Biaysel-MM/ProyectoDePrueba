<template>
  <aside id="aside">
    <div class="aside__encabezado">
      <i class="fa-solid fa-laptop-code"></i>
      <div class="containerTitulo">
        <h2>Inventario TI</h2>
        <p>Administrador</p>
      </div>
      <!-- <span class="lineaDivisora"></span> -->
    </div>

    <nav class="aside__navbar">
      <ul class="navbar__ulContainer">

        <li>
          <router-link to="/admin/dashboard" class="navbar__navsLinks" exact-active-class="navsLinksActive">
            <i class="fa-solid fa-chart-line navsLinskAll"></i>
            <span class="navsLinskAll">Dashboard</span>
            <i v-if="$route.path === '/admin/dashboard'" class="fa-solid fa-chevron-right"></i>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/equipos" class="navbar__navsLinks" exact-active-class="navsLinksActive">
            <i class="fa-solid fa-desktop navsLinskAll"></i>
            <span class="navsLinskAll">Equipos</span>
            <i v-if="$route.path === '/admin/equipos'" class="fa-solid fa-chevron-right"></i>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/movimientos" class="navbar__navsLinks" exact-active-class="navsLinksActive">
            <i class="fa-solid fa-right-left navsLinskAll"></i>
            <span class="navsLinskAll">Movimientos</span>
            <i v-if="$route.path === '/admin/movimientos'" class="fa-solid fa-chevron-right"></i>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/mantenimiento" class="navbar__navsLinks" exact-active-class="navsLinksActive">
            <i class="fa-solid fa-screwdriver-wrench navsLinskAll"></i>
            <span class="navsLinskAll">Mantenimiento</span>
            <i v-if="$route.path === '/admin/mantenimiento'" class="fa-solid fa-chevron-right"></i>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/almacen" class="navbar__navsLinks" exact-active-class="navsLinksActive">
            <i class="fa-solid fa-warehouse navsLinskAll"></i>
            <span class="navsLinskAll">Almacén</span>
            <i v-if="$route.path === '/admin/almacen'" class="fa-solid fa-chevron-right"></i>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/reportes" class="navbar__navsLinks" exact-active-class="navsLinksActive">
            <i class="fa-solid fa-file-lines navsLinskAll"></i>
            <span class="navsLinskAll">Reportes</span>
            <i v-if="$route.path === '/admin/reportes'" class="fa-solid fa-chevron-right"></i>
          </router-link>
        </li>

        <li>
          <router-link to="/admin/usuarios" class="navbar__navsLinks" exact-active-class="navsLinksActive">
            <i class="fa-solid fa-users navsLinskAll"></i>
            <span class="navsLinskAll">Usuarios</span>
            <i v-if="$route.path === '/admin/usuarios'" class="fa-solid fa-chevron-right"></i>
          </router-link>
        </li>

      </ul>
    </nav>



    <div class="aside__pieDelAside">
      <span class="lineaDivisora"></span>
      <a href="#" class="navbar__navsLinks">
        <i class="fa-solid fa-chevron-left navsLinskAll"></i>
        <span class="navsLinskAll">Contraer</span>
      </a>
      <a href="/" class="navbar__navsLinks navsLinksCerrarSesion">
        <i class="fa-solid fa-arrow-right-to-bracket navsLinskAll navsLinskCerrarSesion"></i>
        <span class="navsLinskAll navsLinskCerrarSesion">Cerrar Sesión</span>
      </a>
    </div>
  </aside>
  <header id="header">
    <div class="header__inputBuscarContainer">
      <i class="fa-solid fa-magnifying-glass"></i>
      <input type="search" name="" id="" placeholder="Buscar equipos, usuarios, departamentos...">
    </div>
    <div class="header__encabezadoDelHeader">
      <i class="fa-solid fa-bell"></i>
      <div class="header__usuarioContainer">
        <div class="usuarioContainer__content">
          <h2>Administrador</h2>
          <p>Admin@inventario.edo.do</p>
        </div>
        <i class="fas fa-user-shield"></i>
      </div>
    </div>
  </header>
</template>

<style scoped>
#aside {
  width: 250px;
  height: 100vh;
  background: #023670;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
}

.aside__navbar {
  margin-bottom: auto;
}

.aside__navbar,
.aside__encabezado {
  padding: 20px;
}

.aside__pieDelAside {
  padding: 10px 20px;
}

/* encabezado del navbar  */
.aside__encabezado {
  display: flex;
  align-items: center;
  gap: 10px;
}

.fa-laptop-code {
  background: #CE1126;
  padding: 10px 8px;
  border-radius: 8px;
  font-size: 20px;
}

.containerTitulo h2 {
  font-size: 16px;
  font-weight: 600;
}

.containerTitulo p {
  font-size: 12px;
}

/* estos son los codigos del navbar  */
.aside__navbar,
.aside__pieDelAside {
  border-top: 1px solid #005076;
}

.navbar__ulContainer,
.aside__pieDelAside {
  display: flex;
  flex-direction: column;
  gap: 5px;
}


.fa-chevron-right {
  margin-left: auto;
}


.fa-chevron-right {
  margin-left: auto;
  color: #fff;
}

/* Estilo base */
.navbar__navsLinks {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  border-radius: 6px;
  color: #d1d5dc;
  font-size: 15px;
  font-weight: 600;
  transition: 0.3s;
  text-decoration: none;
}

.navbar__navsLinks .navsLinskAll {
  color: inherit; 
}

.navbar__navsLinks:hover {
  background: #004085ff;
  color: #fff;
}

.navbar__navsLinks:hover .navsLinskAll {
  color: #fff;
}

.navsLinksActive {
  background: #CE1126;
  color: #fff;
}

.navsLinksActive .navsLinskAll {
  color: #fff;
}

.navsLinksActive .fa-chevron-right {
  color: #fff;
}

.navsLinksActive:hover {
  background: #CE1126;
  color: #fff;
}

.navsLinksCerrarSesion:hover {
  background: #CE1126;
  color: #fff;
}

.navsLinksCerrarSesion:hover .navsLinskAll {
  color: #fff;
}

/* Chevron (alineado a la derecha y blanco solo si activo) */
.fa-chevron-right {
  margin-left: auto;
  color: inherit;
}


/* estilos del header  */
#header {
  margin-left: 250px;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 250px);
  height: auto;
  padding: 20px;
  background: #fff;
  border-bottom: 1px solid #eee;
  box-shadow: 0 2px 4px #aaa;
  position: sticky;
  top: 0;
  z-index: 20;
}

/* estilos del buscador  */
.header__inputBuscarContainer {
  width: 500px;
  border: 1px solid #eee;
  height: fit-content;
  display: flex;
  cursor: text;
  padding: 10px 20px;
  gap: 10px;
  border-radius: 8px;
}

.header__inputBuscarContainer input {
  flex: 1;
  border: none;
  outline: none;
}

.header__inputBuscarContainer i {
  color: #D1D5DC;
}

/* estilos del header pero del usuario logueado */
.header__encabezadoDelHeader {
  display: flex;
  align-items: center;
}

.fa-bell {
  position: relative;
  margin-right: 20px;
  font-size: 18px;
  color: #666;
}

.fa-bell::after {
  content: '';
  position: absolute;
  top: -6px;
  right: -6px;
  padding: 4px;
  border-radius: 100%;
  background: #CE1126;
}

.header__usuarioContainer {
  display: flex;
  align-items: center;
  text-align: end;
  border-left: 1px solid #888;
}

.usuarioContainer__content {
  margin: 0 10px 0 20px;
}

.usuarioContainer__content h2 {
  font-size: 16px;
  font-weight: 500;
}

.usuarioContainer__content p {
  font-size: 12px;
  color: #888;
}

.fa-user-shield {
  background: #023670;
  border-radius: 100%;
  padding: 12px 10px;
  color: #fff;
}
</style>