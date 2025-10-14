<template>
  <main id="main">
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
            <router-link to="/dashboard" class="navbar__navsLinks navsLinksActive">
              <i class="fa-solid fa-chart-line" id="navsLinksActiveI"></i>
              <span id="navsLinksActiveSpan">Dashboard</span>
              <i class="fa-solid fa-chevron-right" id="navsLinksActiveI"></i>
            </router-link>
          </li>
          <li>
            <router-link to="/equipos" class="navbar__navsLinks">
              <i class="fa-solid fa-desktop"></i>
              <span>Equipos</span>
            </router-link>
          </li>
          <li>
            <router-link to="/movimientos" class="navbar__navsLinks">
              <i class="fa-solid fa-right-left"></i>
              <span>Movimientos</span>
            </router-link>
          </li>
          <li>
            <router-link to="/mantenimiento" class="navbar__navsLinks">
              <i class="fa-solid fa-screwdriver-wrench"></i>
              <span>Mantenimiento</span>
            </router-link>
          </li>
          <li>
            <router-link to="/almacen" class="navbar__navsLinks">
              <i class="fa-solid fa-warehouse"></i>
              <span>Almacén</span>
            </router-link>
          </li>
          <li>
            <router-link to="/reportes" class="navbar__navsLinks">
              <i class="fa-solid fa-file-lines"></i>
              <span>Reportes</span>
            </router-link>
          </li>
          <li>
            <router-link to="/usuarios" class="navbar__navsLinks">
              <i class="fa-solid fa-users"></i>
              <span>Usuarios</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <div class="aside__pieDelAside">
        <span class="lineaDivisora"></span>
        <a href="#" class="navbar__navsLinks">
          <i class="fa-solid fa-chevron-left"></i>
          <span>Contraer</span>
        </a>
        <a href="/" class="navbar__navsLinks navsLinksCerrarSesion">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
          <span>Cerrar Sesión</span>
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
    <section id="sectionDashboard">
      <!-- el encabezado  -->
      <div class="sectionDashboard__encabezado">
        <div class="encabezado__titulos">
          <h1>Dashboard Principal</h1>
          <p>Resumen general del inventario de equipos TI</p>
        </div>
        <div class="encabezado__buttons">
          <button class="btnExportar"btn><i class="fa-solid fa-download"></i>Exportar</button>
          <button class="btnAdd"btn><i class="fa-solid fa-plus"></i>Nuevo Equipo</button>
        </div>
      </div>
      <div class="sectionDashboard__encabezadoCards">
        <!-- Todas las cards principales  -->
        <article class="encabezadoCards__article">
          <div class="encabezadoCards__content">
            <h3>Total Equipos</h3>
            <h4>1,243</h4>
            <p><span class="article__spanGreen">+12%</span> vs mes anterior</p>
          </div>
          <div class="encabezadoCards__icon">
            <i class="fa-solid fa-desktop"></i>
          </div>
        </article>
        <article class="encabezadoCards__article">
          <div class="encabezadoCards__content">
            <h3>En Uso</h3>
            <h4>987</h4>
            <p><span class="article__spanGreen">+8%</span> vs mes anterior</p>
          </div>
          <div class="encabezadoCards__icon">
            <i class="fa-solid fa-circle-check"></i>
          </div>
        </article>
        <article class="encabezadoCards__article">
          <div class="encabezadoCards__content">
            <h3>En Almacén</h3>
            <h4>156</h4>
            <p><span class="article__spanRed">-5%</span> vs mes anterior</p>
          </div>
          <div class="encabezadoCards__icon">
            <i class="fa-solid fa-warehouse"></i>
          </div>
        </article>
        <article class="encabezadoCards__article">
          <div class="encabezadoCards__content">
            <h3>Mantenimientos</h3>
            <h4>43</h4>
            <p><span class="article__spanGreen">+15%</span> vs mes anterior</p>
          </div>
          <div class="encabezadoCards__icon">
            <i class="fa-solid fa-screwdriver-wrench"></i>
          </div>
        </article>
      </div>
      <!-- evolucion de equipos y actividades recientes -->
      <section id="sectionDashboardDatos">
        <div class="sectionDashboardDatos__evolucionDeEquipos"></div>
        <div class="sectionDashboardDatos__actividadesRecientes"></div>
      </section>
    </section>
  </main>
</template>

<style scoped>
  #aside{
    width: 250px;
    height: 100vh;
    background: #023670;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
  }
  .aside__navbar{
  margin-bottom: auto;
  }
  .aside__navbar, .aside__encabezado{
    padding: 20px;
  }
  .aside__pieDelAside{
    padding: 10px 20px;
  }
  /* encabezado del navbar  */
  .aside__encabezado{
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .fa-laptop-code{
    background: #CE1126;
    padding: 10px 8px;
    border-radius: 8px;
    font-size: 20px;
  }
  .containerTitulo h2{
    font-size: 16px;
    font-weight: 600;
  }
  .containerTitulo p{
    font-size: 12px;
  }
  /* estos son los codigos del navbar  */
  .aside__navbar, .aside__pieDelAside{
    border-top: 1px solid #005076;
  }
  .navbar__ulContainer, .aside__pieDelAside{
    display: flex;
    flex-direction: column;
    gap: 5px;
}
  .navbar__navsLinks{
    box-sizing: border-box;
    border: none;
    outline: none;
    background: none;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 10px 20px;
    border-radius: 8px;
    width: 100%;
    cursor: pointer;
  }
  .navbar__navsLinks:hover{
    background: #004085ff;
  }
  .fa-chevron-right{
    margin-left: auto;
  }
  .navbar__navsLinks i, .navbar__navsLinks span{
    color: #D1D5DC;
    font-size: 15px;
    font-weight: 600;
  }
  .navsLinksActive, .navsLinksActive:hover, .navsLinksCerrarSesion:hover{
    background: #CE1126;
  }
  #navsLinksActiveI, #navsLinksActiveSpan{
    color: #fff;
  }

  /* estilos del header  */
  #header{
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
  }
  /* estilos del buscador  */
  .header__inputBuscarContainer{
    width: 500px;
    border: 1px solid #eee;
    height: fit-content;
    display: flex;
    cursor: text;
    padding: 10px 20px;
    gap: 10px;
    border-radius: 8px;
  }
  .header__inputBuscarContainer input{
    flex: 1;
    border: none;
    outline: none;
  }
  .header__inputBuscarContainer i{
    color: #D1D5DC;
  }
  /* estilos del header pero del usuario logueado */
  .header__encabezadoDelHeader{
    display: flex;
    align-items: center;
  }
  .fa-bell{
    position: relative;
    margin-right: 20px;
    font-size: 18px;
    color: #666;
  }
  .fa-bell::after{
    content: '';
    position: absolute;
    top: -6px;
    right: -6px;
    padding: 4px;
    border-radius: 100%;
    background: #CE1126;
  }
  .header__usuarioContainer{
    display: flex;
    align-items: center;
    text-align: end;
    border-left: 1px solid #888;
  }
  .usuarioContainer__content{
    margin: 0 10px 0 20px;
  }
  .usuarioContainer__content h2{
    font-size: 16px;
    font-weight: 500;
  }
  .usuarioContainer__content p{
    font-size: 12px;
    color: #888;
  }
  .fa-user-shield{
    background: #023670;
    border-radius: 100%;
    padding: 12px 10px;
    color: #fff;
  }

  /* estilos se la seccion completa del dashboard */
  #sectionDashboard{
    margin-left: 250px;
    padding: 20px;
  }
  /* estilos del encabezado del dashboard  */
  .sectionDashboard__encabezado{
    display: flex;
    justify-content: space-between;
  }
  .encabezado__titulos h1{
    font-weight: 500;
  }
  .encabezado__buttons{
    display: flex;
    gap: 20px;
    height: fit-content;
  }
  .encabezado__buttons .btnExportar{
    color: #023670;
    border: 2px solid #023670;
    padding: 10px 20px;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
  }
  .encabezado__buttons .btnExportar:hover{
    color: #fff;
    background: #023670;
  }
  .encabezado__buttons .btnExportar i, .encabezado__buttons .btnAdd i{
    margin-right: 5px;
  }
  .encabezado__buttons .btnAdd{
    background: #CE1126;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
  }
  .encabezado__buttons .btnAdd:hover{
    background: #A10E1E;
  }
  /* estilos de las cards principales del dashboard  */
  .sectionDashboard__encabezadoCards{
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 20px 0;
  }
  .encabezadoCards__article{
    display: flex;
    justify-content: space-between;
    width: 250px;
    padding: 20px;
    border: 1px solid #DEE2E6;
    border-radius: 8px;
  }
  .encabezadoCards__article:hover{
    box-shadow: 0 2px 4px #aaa; 
  }
  .encabezadoCards__article h3{
    font-weight: 400;
    font-size: 14px;
    color: #666;
  }
  .encabezadoCards__article h4{
    font-weight: 600;
    font-size: 25px;
  }
  .article__spanGreen{
    color: #00A63E;
  }
  .article__spanRed{
    color: #CE1126;
  }
  .encabezadoCards__icon i{
    font-size: 18px;
    padding: 10px 12px;
    border-radius: 8px;
  }
  .encabezadoCards__icon .fa-desktop{
    color: #023670;
    background: #02367011;
  }
  .encabezadoCards__icon .fa-circle-check{
    color: #00A63E;
    background: #00A63E11;
  }
  .encabezadoCards__icon .fa-warehouse{
    color: #F54A00;
    background: #F54A0011;
  }
  .encabezadoCards__icon .fa-screwdriver-wrench{
    color: #CE1126;
    background: #CE112611;
  }
  /* seccion de los datos  */
  #sectionDashboardDatos{
    display: flex;
    justify-content: space-between;
    height: 400px;
  }
  /* estilos del grafico de actividades de equipos  */
  .sectionDashboardDatos__evolucionDeEquipos{
    width: 690px;
    border-radius: 8px;
    border: 1px solid #DEE2E6;
  }
  /* estilos de actividades recientes  */
  .sectionDashboardDatos__actividadesRecientes{
    width: 350px;
    border-radius: 8px;
    border: 1px solid #DEE2E6;
  }
</style>



