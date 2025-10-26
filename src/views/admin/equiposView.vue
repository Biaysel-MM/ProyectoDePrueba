<script setup>
import { ref } from "vue";
import NavbarView from "../iu/navbarView.vue";

import ModalDetalle from "../../components/modalDetallesComponent.vue";
import ModalEditar from '../../components/modalEditarComponent.vue';

// mostrar modal de detalle 
const showModalDetalle = ref(false);
const openModalDetalle = () => (showModalDetalle.value = true);
const closeModalDetalle = () => (showModalDetalle.value = false);

// mostrar modal de detalle 
const showModalEditar = ref(false);
const openModalEditar = () => (showModalEditar.value = true);
const closeModalEditar = () => (showModalEditar.value = false);

</script>
<template>
  <main id="main">
    <NavbarView />
    <section id="sectionEquipos">
      <div class="containerRetringido">
        <!-- el encabezado  -->
        <header class="sectionDashboard__encabezado">
          <div class="encabezado__titulos">
            <h1>Gestión de Equipos</h1>
            <p>Administra todos los equipos del inventario TI</p>
          </div>
          <div class="encabezado__buttons">
            <button class="btnExportar" btn><i class="fa-solid fa-download"></i>Exportar</button>
            <button class="btnAdd" btn><i class="fa-solid fa-plus"></i>Registrar Equipo</button>
          </div>
        </header>
        <div class="sectionDashboard__encabezadoCards">
          <!-- Todas las cards principales  -->
          <article class="encabezadoCards__article">
            <div class="encabezadoCards__content">
              <h3>Total Equipos</h3>
              <h4>1,243</h4>
            </div>
            <div class="encabezadoCards__icon">
              <i class="fa-solid fa-desktop"></i>
            </div>
          </article>
          <article class="encabezadoCards__article">
            <div class="encabezadoCards__content">
              <h3>CPU/Laptops</h3>
              <h4>56</h4>
            </div>
            <div class="encabezadoCards__icon">
              <i class="fa-solid fa-laptop"></i>
            </div>
          </article>
          <article class="encabezadoCards__article">
            <div class="encabezadoCards__content">
              <h3>Monitores</h3>
              <h4>523</h4>
            </div>
            <div class="encabezadoCards__icon">
              <i class="fas fa-tv text-xl"></i>
            </div>
          </article>
          <article class="encabezadoCards__article">
            <div class="encabezadoCards__content">
              <h3>Otros</h3>
              <h4>264</h4>
            </div>
            <div class="encabezadoCards__icon">
              <i class="fas fa-box text-xl"></i>
            </div>
          </article>
        </div>
        <!-- area de busqueda y filtrado  -->
        <div class="sectionEquipos__filtrados">
          <div class="filtrados__busqueda filtrados__selectsBusqueda">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="search" placeholder="Buscar Bien Nacional" class="filtrados__busquedaInput">
          </div>
          <select name="" id="" class="filtrados__selectsBusqueda">
            <option value="">Todos los tipos</option>
            <option value="CPU">CPU</option>
            <option value="Monitor">Monitor</option>
            <option value="Proyector">Proyector</option>
            <option value="Escáner">Escáner</option>
            <option value="Triturador">Triturador</option>
          </select>
          <select name="" id="" class="filtrados__selectsBusqueda">
            <option value="">Todos los departamentos</option>
            <option value="Sistema">Sistema</option>
            <option value="Contabilidad">Contabilidad</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
          </select>
          <select name="" id="" class="filtrados__selectsBusqueda">
            <option value="">Todos los estados</option>
            <option value="Activo">Activo</option>
            <option value="En Mantenimiento">En Mantenimiento</option>
            <option value="En Almacén">En Almacén</option>
            <option value="Dado debaja">Dado debaja</option>
          </select>
        </div>
        <!-- todos los equipos con sus detalles  -->
        <div class="sectionEquipos__todosLosEquipos">
          <article class="todosLosEquipos__card">
            <!-- Encabezado del card -->
            <header class="card__encabezado">
              <i class="fas fa-desktop icono-tipo"></i>
              <span class="estado activo">Activo</span>
            </header>

            <!-- Contenido principal -->
            <div class="card__contenido">
              <h4 class="card__titulo">CPU Dell Optiplex</h4>
              <p class="card__codigo">BN-2024-001</p>
              <p class="card__usuario"><i class="fas fa-user"></i> Juan Pérez</p>
              <p class="card__departamento"><i class="fas fa-building"></i> Sistemas</p>
              <p class="card__caracteristicas"><i class="fas fa-microchip"></i> Intel Core i7-12700</p>
            </div>
            <!-- pie de la card  -->
            <footer class="card__pieDeLaCard">
              <button @click="openModalDetalle">Ver detalles</button>
              <i class="fas fa-edit text-gray-600" @click="openModalEditar"></i>
            </footer>
          </article>
          <article class="todosLosEquipos__card">
            <!-- Encabezado del card -->
            <header class="card__encabezado">
              <i class="fas fa-tv text-2xl icono-tipo"></i>
              <span class="estado activo">Activo</span>
            </header>

            <!-- Contenido principal -->
            <div class="card__contenido">
              <h4 class="card__titulo">Monitor LG UltraWide</h4>
              <p class="card__codigo">BN-2024-002</p>
              <p class="card__usuario"><i class="fas fa-user"></i> María González</p>
              <p class="card__departamento"><i class="fas fa-building"></i> Contabilidad</p>
            </div>
            <!-- pie de la card  -->
            <footer class="card__pieDeLaCard">
              <button @click="openModalDetalle">Ver detalles</button>
              <i class="fas fa-edit text-gray-600" @click="openModalEditar"></i>
            </footer>
          </article>
          <article class="todosLosEquipos__card">
            <!-- Encabezado del card -->
            <header class="card__encabezado">
              <i class="fas fa-box text-2xl icono-tipo"></i>
              <span class="estado mantenimiento">En Mantenimiento</span>
            </header>

            <!-- Contenido principal -->
            <div class="card__contenido">
              <h4 class="card__titulo">Proyector Epson</h4>
              <p class="card__codigo">BN-2024-003</p>
              <p class="card__usuario"><i class="fas fa-user"></i> Carlos Ramírez</p>
              <p class="card__departamento"><i class="fas fa-building"></i> Capacitación</p>
            </div>

            <!-- pie de la card  -->
            <footer class="card__pieDeLaCard">
              <button @click="openModalDetalle">Ver detalles</button>
              <i class="fas fa-edit text-gray-600" @click="openModalEditar"></i>
            </footer>
          </article>
          <article class="todosLosEquipos__card">
            <!-- Encabezado del card -->
            <header class="card__encabezado">
              <i class="fas fa-box text-2xl icono-tipo"></i>
              <span class="estado almacen">Almacén</span>
            </header>

            <!-- Contenido principal -->
            <div class="card__contenido">
              <h4 class="card__titulo">Escáner HP ScanJet</h4>
              <p class="card__codigo">BN-2024-004</p>
              <p class="card__usuario"><i class="fas fa-user"></i> Ana Martínez</p>
              <p class="card__departamento"><i class="fas fa-building"></i> Archivo</p>
            </div>

            <!-- pie de la card  -->
            <footer class="card__pieDeLaCard">
              <button @click="openModalDetalle">Ver detalles</button>
              <i class="fas fa-edit text-gray-600" @click="openModalEditar"></i>
            </footer>
          </article>
          <article class="todosLosEquipos__card">
            <!-- Encabezado del card -->
            <header class="card__encabezado">
              <i class="fas fa-tv text-2xl icono-tipo"></i>
              <span class="estado activo">Activo</span>
            </header>

            <!-- Contenido principal -->
            <div class="card__contenido">
              <h4 class="card__titulo">Monitor LG UltraWide</h4>
              <p class="card__codigo">BN-2024-002</p>
              <p class="card__usuario"><i class="fas fa-user"></i> Jose Martinez</p>
              <p class="card__departamento"><i class="fas fa-building"></i> Archivo</p>
            </div>
            <!-- pie de la card  -->
            <footer class="card__pieDeLaCard">
              <button @click="openModalDetalle">Ver detalles</button>
              <i class="fas fa-edit text-gray-600" @click="openModalEditar"></i>
            </footer>
          </article>
          <article class="todosLosEquipos__card">
            <!-- Encabezado del card -->
            <header class="card__encabezado">
              <i class="fas fa-desktop icono-tipo"></i>
              <span class="estado activo">Activo</span>
            </header>

            <!-- Contenido principal -->
            <div class="card__contenido">
              <h4 class="card__titulo">CPU Dell Optiplex</h4>
              <p class="card__codigo">BN-2024-001</p>
              <p class="card__usuario"><i class="fas fa-user"></i> José Castillo</p>
              <p class="card__departamento"><i class="fas fa-building"></i> Sistemas</p>
              <p class="card__caracteristicas"><i class="fas fa-microchip"></i> Intel Core i7-12700</p>
            </div>
            <!-- pie de la card  -->
            <footer class="card__pieDeLaCard">
              <button @click="openModalDetalle">Ver detalles</button>
              <i class="fas fa-edit text-gray-600" @click="openModalEditar"></i>
            </footer>
          </article>
        </div>
        <!-- Modal Detalle-->
        <ModalDetalle :show="showModalDetalle" @close="closeModalDetalle" />
        <ModalEditar :show="showModalEditar" @close="closeModalEditar" />
      </div>
    </section>
  </main>
</template>

<style scoped>
#sectionEquipos {
  margin-left: 250px;
  padding: 20px;
  display: flex;
  justify-content: center;
}

/* estilos del encabezado del dashboard  */
.sectionDashboard__encabezado {
  display: flex;
  justify-content: space-between;
}

.encabezado__titulos h1 {
  font-weight: 500;
}

.encabezado__buttons {
  display: flex;
  gap: 20px;
  height: fit-content;
}

.encabezado__buttons .btnExportar {
  color: #023670;
  border: 2px solid #023670;
  padding: 10px 20px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
}

.encabezado__buttons .btnExportar:hover {
  color: #fff;
  background: #023670;
}

.encabezado__buttons .btnExportar i,
.encabezado__buttons .btnAdd i {
  margin-right: 5px;
}

.encabezado__buttons .btnAdd {
  background: #CE1126;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.encabezado__buttons .btnAdd:hover {
  background: #A10E1E;
}

/* estilos de las cards principales del dashboard  */
.sectionDashboard__encabezadoCards {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
  gap: 20px;
}

.encabezadoCards__article {
  display: flex;
  justify-content: space-between;
  width: 250px;
  padding: 20px;
  border: 1px solid #DEE2E6;
  border-radius: 8px;
}

.encabezadoCards__article:hover {
  box-shadow: 0 2px 4px #aaa;
}

.encabezadoCards__article h3 {
  font-weight: 400;
  font-size: 14px;
  color: #666;
}

.encabezadoCards__article h4 {
  font-weight: 600;
  font-size: 25px;
}

.encabezadoCards__icon i {
  font-size: 18px;
  padding: 10px 12px;
  border-radius: 8px;
}

.encabezadoCards__icon .fa-desktop {
  color: #023670;
  background: #02367011;
}

.encabezadoCards__icon .fa-laptop {
  color: #00A63E;
  background: #00A63E11;
}

.encabezadoCards__icon .fa-tv {
  color: #F54A00;
  background: #F54A0011;
}

.encabezadoCards__icon .fa-box {
  color: #CE1126;
  background: #CE112611;
}

/* estilos del area de busqueda y filtrados  */
.sectionEquipos__filtrados {
  display: flex;
  align-items: center;
  padding: 20px;
  gap: 20px;
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  box-shadow: 0 2px 4px #aaa;
}

.filtrados__selectsBusqueda {
  flex: 1;
  padding: 10px;
  border: 1px solid #DEE2E6;
  border-radius: 8px;
}

.filtrados__busquedaInput {
  border: none;
  outline: none;
  width: auto;
  height: 100%;
}

.filtrados__busqueda {
  cursor: text;
}

.filtrados__busqueda i {
  margin-right: 10px;
  color: #666;
}

/* estilos para las cards de todos los equipos  */
.sectionEquipos__todosLosEquipos {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  gap: 20px;
  justify-content: flex-start;
}

.todosLosEquipos__card {
  flex: 1 1 300px;
  max-width: 350px;
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  padding: 20px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card__encabezado {
  display: flex;
  justify-content: space-between;
}

.card__encabezado .icono-tipo {
  font-size: 25px;
  padding: 15px;
  border-radius: 8px;
}

.card__encabezado .fa-desktop {
  color: #023670;
  background: #02367011;
}

.card__encabezado .fa-tv {
  color: #00A63E;
  background: #00A63E11;
}

.card__encabezado .fa-box {
  color: #F54A00;
  background: #F54A0011;
}

.card__encabezado .estado {
  padding: 4px 12px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 12px;
  height: fit-content;
}

.card__encabezado .activo {
  background-color: #DBFCE7;
  color: #016630;
}

.card__encabezado .mantenimiento {
  background-color: #FFEDD4;
  color: #9F2D22;
}

.card__encabezado .almacen {
  background-color: #02367022;
  color: #023670;
}

.card__contenido {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 15px 0;
}

.card__contenido .card__titulo {
  font-size: 16px;
  font-weight: 500;
}

.card__contenido .card__codigo {
  font-size: 15px;
  font-weight: 500;
  color: #023670;
}

.card__contenido p,
.card__contenido .fas {
  color: #666;
}

.card__contenido .fas {
  margin-right: 10px;
}

.card__pieDeLaCard {
  display: flex;
  align-items: center;
  gap: 10px;
}

.card__pieDeLaCard button {
  flex: 1;
  border: none;
  text-align: start;
  padding: 15px;
  border-radius: 8px;
  background-color: #023670;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
  transform: scale(1);
  transition: transform .3s;
}

.card__pieDeLaCard button:hover {
  transform: scale(1.05);
  transition: transform .3s;
}

.card__pieDeLaCard i {
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #DEE2E6;
  cursor: pointer;
  transform: scale(1);
  transition: transform .3s;
}

.card__pieDeLaCard i:hover {
  transform: scale(1.15);
  transition: all .3s;
  background: #023670;
  color: #fff;
}

/* estilos para el modal  */
</style>