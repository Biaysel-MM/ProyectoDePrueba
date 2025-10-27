<script setup>
import { ref, onMounted } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import NavbarView from '../iu/navbarView.vue'

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

// Registrar componente global localmente
const ApexChart = VueApexCharts

const series = ref([
  {
    name: 'Equipos',
    data: [40, 30, 20, 27, 18, 23, 34],
  },
  {
    name: 'Mantenimientos',
    data: [24, 13, 28, 39, 48, 35, 43],
  },
])

const chartOptions = ref({
  chart: {
    toolbar: { show: false },
    foreColor: '#6b7280',
    fontFamily: 'Poppins, sans-serif',
  },
  xaxis: {
    categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['#002D62', '#CE1126'],
  markers: {
    size: 5,
  },
  grid: {
    borderColor: '#e5e7eb',
  },
  tooltip: {
    theme: 'light',
  },
})

onMounted(() => {
  //  carga datos reales des una API
  console.log('Dashboard montado')
})
</script>

<template>
  <main id="main" class="dashboard" role="main">
    <NavbarView />
    <section class="dashboard__section" aria-labelledby="dashboard-title">
      <div class="dashboard__container">
        <!-- Encabezado -->
        <header class="dashboard__header">
          <div class="dashboard__header-titles">
            <h1 id="dashboard-title">Dashboard Principal</h1>
            <p>Resumen general del inventario de equipos TI</p>
          </div>
          <div class="dashboard__header-buttons">
            <button class="dashboard__button dashboard__button--export" aria-label="Exportar reporte">
              <i class="fa-solid fa-download" aria-hidden="true"></i>Exportar
            </button>
            <button class="dashboard__button dashboard__button--add" aria-label="Agregar nuevo equipo">
              <i class="fa-solid fa-plus" aria-hidden="true"></i>Nuevo Equipo
            </button>
          </div>
        </header>
        
        <!-- Tarjetas de resumen -->
        <div class="dashboard__cards">
          <article class="dashboard__card">
            <div class="dashboard__card-content">
              <h3 class="dashboard__card-title">Total Equipos</h3>
              <h4 class="dashboard__card-value">1,243</h4>
              <p class="dashboard__card-change dashboard__card-change--positive">
                <span class="dashboard__change-value">+12%</span> vs mes anterior
              </p>
            </div>
            <div class="dashboard__card-icon">
              <i class="fa-solid fa-desktop" aria-hidden="true"></i>
            </div>
          </article>
          
          <article class="dashboard__card">
            <div class="dashboard__card-content">
              <h3 class="dashboard__card-title">En Uso</h3>
              <h4 class="dashboard__card-value">987</h4>
              <p class="dashboard__card-change dashboard__card-change--positive">
                <span class="dashboard__change-value">+8%</span> vs mes anterior
              </p>
            </div>
            <div class="dashboard__card-icon">
              <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
            </div>
          </article>
          
          <article class="dashboard__card">
            <div class="dashboard__card-content">
              <h3 class="dashboard__card-title">En Almacén</h3>
              <h4 class="dashboard__card-value">156</h4>
              <p class="dashboard__card-change dashboard__card-change--negative">
                <span class="dashboard__change-value">-5%</span> vs mes anterior
              </p>
            </div>
            <div class="dashboard__card-icon">
              <i class="fa-solid fa-warehouse" aria-hidden="true"></i>
            </div>
          </article>
          
          <article class="dashboard__card">
            <div class="dashboard__card-content">
              <h3 class="dashboard__card-title">Mantenimientos</h3>
              <h4 class="dashboard__card-value">43</h4>
              <p class="dashboard__card-change dashboard__card-change--positive">
                <span class="dashboard__change-value">+15%</span> vs mes anterior
              </p>
            </div>
            <div class="dashboard__card-icon">
              <i class="fa-solid fa-screwdriver-wrench" aria-hidden="true"></i>
            </div>
          </article>
        </div>
        
        <!-- Sección de datos: Gráfico y actividades -->
        <section class="dashboard__data-section">
          <!-- Gráfico de evolución -->
          <div class="dashboard__chart-container">
            <div class="dashboard__chart">
              <div class="dashboard__chart-card">
                <div class="dashboard__chart-header">
                  <div class="dashboard__chart-header-top">
                    <h2 class="dashboard__chart-title">Evolución de Equipos</h2>
                    <div class="dashboard__chart-legend">
                      <div class="dashboard__legend-item">
                        <div class="dashboard__legend-dot dashboard__legend-dot--equipos"></div>
                        <span>Equipos</span>
                      </div>
                      <div class="dashboard__legend-item">
                        <div class="dashboard__legend-dot dashboard__legend-dot--mantenimientos"></div>
                        <span>Mantenimientos</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="dashboard__chart-content">
                  <ApexChart 
                    type="line" 
                    height="300" 
                    :options="chartOptions" 
                    :series="series" 
                    aria-label="Gráfico de evolución de equipos y mantenimientos"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <!-- Actividades recientes -->
          <div class="dashboard__activities">
            <h3 class="dashboard__activities-title">Actividades Recientes</h3>
            <div class="dashboard__activities-content">
              <div class="dashboard__activity-item">
                <span class="dashboard__activity-indicator" aria-hidden="true"></span>
                <article class="dashboard__activity">
                  <h4 class="dashboard__activity-title">Nuevo equipo registrado</h4>
                  <p class="dashboard__activity-description">CPU Dell Optiplex 7090</p>
                  <div class="dashboard__activity-footer">
                    <i class="fa-solid fa-user" aria-hidden="true"></i>
                    <p class="dashboard__activity-user">Soporte TI</p>
                    <span class="dashboard__activity-separator" aria-hidden="true"></span>
                    <p class="dashboard__activity-time">Hace 6 horas</p>
                  </div>
                </article>
              </div>
              
              <div class="dashboard__activity-item">
                <span class="dashboard__activity-indicator" aria-hidden="true"></span>
                <article class="dashboard__activity">
                  <h4 class="dashboard__activity-title">Movimiento de equipo</h4>
                  <p class="dashboard__activity-description">BN-2024-001 → Depto. Sistemas</p>
                  <div class="dashboard__activity-footer">
                    <i class="fa-solid fa-user" aria-hidden="true"></i>
                    <p class="dashboard__activity-user">Soporte TI</p>
                    <span class="dashboard__activity-separator" aria-hidden="true"></span>
                    <p class="dashboard__activity-time">Hace 4 horas</p>
                  </div>
                </article>
              </div>
              
              <div class="dashboard__activity-item">
                <span class="dashboard__activity-indicator" aria-hidden="true"></span>
                <article class="dashboard__activity">
                  <h4 class="dashboard__activity-title">Mantenimiento completado</h4>
                  <p class="dashboard__activity-description">Proyector Epson EB-X41</p>
                  <div class="dashboard__activity-footer">
                    <i class="fa-solid fa-user" aria-hidden="true"></i>
                    <p class="dashboard__activity-user">Técnico #1</p>
                    <span class="dashboard__activity-separator" aria-hidden="true"></span>
                    <p class="dashboard__activity-time">Hace 6 horas</p>
                  </div>
                </article>
              </div>
              
              <div class="dashboard__activity-item">
                <span class="dashboard__activity-indicator" aria-hidden="true"></span>
                <article class="dashboard__activity">
                  <h4 class="dashboard__activity-title">Nuevo equipo registrado</h4>
                  <p class="dashboard__activity-description">CPU Dell Optiplex 7090</p>
                  <div class="dashboard__activity-footer">
                    <i class="fa-solid fa-user" aria-hidden="true"></i>
                    <p class="dashboard__activity-user">Soporte TI</p>
                    <span class="dashboard__activity-separator" aria-hidden="true"></span>
                    <p class="dashboard__activity-time">Hace 6 horas</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        
        <!-- Tabla de equipos registrados recientemente -->
        <div class="dashboard__recent-equipment">
          <div class="dashboard__table-container">
            <div class="dashboard__table-header">
              <h3 class="dashboard__table-title">Equipos Registrados Recientemente</h3>
              <a href="#" class="dashboard__table-link">Ver todos →</a>
            </div>
            
            <div class="dashboard__table-headers">
              <span class="dashboard__table-header-item">BIEN NACIONAL</span>
              <span class="dashboard__table-header-item">TIPO</span>
              <span class="dashboard__table-header-item">USUARIO</span>
              <span class="dashboard__table-header-item">DEPARTAMENTO</span>
              <span class="dashboard__table-header-item">ESTADO</span>
              <span class="dashboard__table-header-item">FECHA</span>
              <span class="dashboard__table-header-item">ACCIONES</span>
            </div>
            
            <!-- Filas de la tabla -->
            <div class="dashboard__table-row">
              <span class="dashboard__table-cell dashboard__table-cell--bold">BN-2024-001</span>
              <span class="dashboard__table-cell">
                <i class="fa-solid fa-laptop" aria-hidden="true"></i> CPU
              </span>
              <span class="dashboard__table-cell">Juan Pérez</span>
              <span class="dashboard__table-cell dashboard__table-cell--muted">Sistemas</span>
              <span class="dashboard__status dashboard__status--active">Activo</span>
              <span class="dashboard__table-cell dashboard__table-cell--muted">10/10/2025</span>
              <div class="dashboard__actions">
                <button class="dashboard__action-button" aria-label="Ver detalles" @click="openModalDetalle">
                  <i class="fa-solid fa-eye" aria-hidden="true"></i>
                </button>
                <button class="dashboard__action-button" aria-label="Editar equipo" @click="openModalEditar">
                  <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>
                </button>
                <!-- <button class="dashboard__action-button" aria-label="Eliminar equipo">
                  <i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button> -->
              </div>
            </div>
            
            <div class="dashboard__table-row">
              <span class="dashboard__table-cell dashboard__table-cell--bold">BN-2024-002</span>
              <span class="dashboard__table-cell">
                <i class="fa-solid fa-computer" aria-hidden="true"></i> Monitor
              </span>
              <span class="dashboard__table-cell">Ana Gómez</span>
              <span class="dashboard__table-cell dashboard__table-cell--muted">Contabilidad</span>
              <span class="dashboard__status dashboard__status--maintenance">En Mantenimiento</span>
              <span class="dashboard__table-cell dashboard__table-cell--muted">11/10/2025</span>
              <div class="dashboard__actions">
                <button class="dashboard__action-button" aria-label="Ver detalles" @click="openModalDetalle">
                  <i class="fa-solid fa-eye" aria-hidden="true"></i>
                </button>
                <button class="dashboard__action-button" aria-label="Editar equipo" @click="openModalEditar">
                  <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>
                </button>
                <!-- <button class="dashboard__action-button" aria-label="Eliminar equipo">
                  <i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button> -->
              </div>
            </div>
            
            <div class="dashboard__table-row">
              <span class="dashboard__table-cell dashboard__table-cell--bold">BN-2024-003</span>
              <span class="dashboard__table-cell">
                <i class="fa-solid fa-video" aria-hidden="true"></i> Proyector
              </span>
              <span class="dashboard__table-cell">Carlos Ramírez</span>
              <span class="dashboard__table-cell dashboard__table-cell--muted">Capacitación</span>
              <span class="dashboard__status dashboard__status--maintenance">En Mantenimiento</span>
              <span class="dashboard__table-cell dashboard__table-cell--muted">08/10/2025</span>
              <div class="dashboard__actions">
                <button class="dashboard__action-button" aria-label="Ver detalles" @click="openModalDetalle">
                  <i class="fa-solid fa-eye" aria-hidden="true"></i>
                </button>
                <button class="dashboard__action-button" aria-label="Editar equipo" @click="openModalEditar">
                  <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>
                </button>
                <!-- <button class="dashboard__action-button" aria-label="Eliminar equipo">
                  <i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button> -->
              </div>
            </div>
            
            <div class="dashboard__table-row">
              <span class="dashboard__table-cell dashboard__table-cell--bold">BN-2024-004</span>
              <span class="dashboard__table-cell">
                <i class="fa-solid fa-print" aria-hidden="true"></i> Escáner
              </span>
              <span class="dashboard__table-cell">Ana Martínez</span>
              <span class="dashboard__table-cell dashboard__table-cell--muted">Archivo</span>
              <span class="dashboard__status dashboard__status--active">Activo</span>
              <span class="dashboard__table-cell dashboard__table-cell--muted">07/10/2025</span>
              <div class="dashboard__actions">
                <button class="dashboard__action-button" aria-label="Ver detalles" @click="openModalDetalle">
                  <i class="fa-solid fa-eye" aria-hidden="true"></i>
                </button>
                <button class="dashboard__action-button" aria-label="Editar equipo" @click="openModalEditar">
                  <i class="fa-solid fa-pen-to-square" aria-hidden="true"></i>
                </button>
                <!-- <button class="dashboard__action-button" aria-label="Eliminar equipo">
                  <i class="fa-solid fa-trash" aria-hidden="true"></i>
                </button> -->
              </div>
            </div>
          </div>
        </div>
        <!-- Modal Detalle-->
        <ModalDetalle :show="showModalDetalle" @close="closeModalDetalle" />
        <ModalEditar :show="showModalEditar" @close="closeModalEditar" />
      </div>
    </section>
  </main>
</template>

<style scoped>
/* Estilos base */

.dashboard__section {
  margin-left: 250px;
  padding: 20px;
  display: flex;
  justify-content: center;
}

.dashboard__container {
  width: 100%;
  max-width: 1200px;
}

/* Encabezado */
.dashboard__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;
}

.dashboard__header-titles h1 {
  font-weight: 500;
  font-size: 1.8rem;
  margin-bottom: 5px;
}

.dashboard__header-titles p {
  color: #666;
}

.dashboard__header-buttons {
  display: flex;
  gap: 15px;
}

.dashboard__button {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 0.9rem;
}

.dashboard__button--export {
  color: #023670;
  border: 2px solid #023670;
  background: #fff;
}

.dashboard__button--export:hover {
  color: #fff;
  background: #023670;
}

.dashboard__button--add {
  background: #CE1126;
  color: #fff;
}

.dashboard__button--add:hover {
  background: #A10E1E;
}

.dashboard__button i {
  margin-right: 5px;
}

/* Tarjetas de resumen */
.dashboard__cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.dashboard__card {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  background: #fff;
  transition: box-shadow 0.3s ease;
}

.dashboard__card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.dashboard__card-content h3 {
  font-weight: 400;
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 8px;
}

.dashboard__card-value {
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 8px;
}

.dashboard__card-change {
  font-size: 0.85rem;
}

.dashboard__card-change--positive .dashboard__change-value {
  color: #00A63E;
}

.dashboard__card-change--negative .dashboard__change-value {
  color: #CE1126;
}

.dashboard__card-icon i {
  font-size: 1.1rem;
  padding: 10px 12px;
  border-radius: 8px;
}

.dashboard__card-icon .fa-desktop {
  color: #023670;
  background: rgba(2, 54, 112, 0.07);
}

.dashboard__card-icon .fa-circle-check {
  color: #00A63E;
  background: rgba(0, 166, 62, 0.07);
}

.dashboard__card-icon .fa-warehouse {
  color: #F54A00;
  background: rgba(245, 74, 0, 0.07);
}

.dashboard__card-icon .fa-screwdriver-wrench {
  color: #CE1126;
  background: rgba(206, 17, 38, 0.07);
}

/* Sección de datos */
.dashboard__data-section {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  margin-bottom: 30px;
}

/* Gráfico */
.dashboard__chart-container {
  border-radius: 8px;
  border: 1px solid #DEE2E6;
  background: #fff;
  overflow: hidden;
}

.dashboard__chart-card {
  width: 100%;
}

.dashboard__chart-header {
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 1.5rem;
}

.dashboard__chart-header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.dashboard__chart-title {
  font-size: 1.125rem;
  font-weight: 600;
}

.dashboard__chart-legend {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #4b5563;
}

.dashboard__legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dashboard__legend-dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}

.dashboard__legend-dot--equipos {
  background-color: #002d62;
}

.dashboard__legend-dot--mantenimientos {
  background-color: #ce1126;
}

.dashboard__chart-content {
  padding: 1.5rem;
}

/* Actividades recientes */
.dashboard__activities {
  border-radius: 8px;
  border: 1px solid #DEE2E6;
  background: #fff;
  overflow: hidden;
}

.dashboard__activities-title {
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #DEE2E6;
  font-weight: 400;
  font-size: 1rem;
}

.dashboard__activities-content {
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.dashboard__activity-item {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.dashboard__activity-indicator {
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #CE1126;
  margin-top: 10px;
  flex-shrink: 0;
}

.dashboard__activity {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.dashboard__activity-title {
  font-weight: 500;
  font-size: 0.9rem;
}

.dashboard__activity-description {
  font-weight: 400;
  font-size: 0.8rem;
  color: #888;
}

.dashboard__activity-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.8rem;
}

.dashboard__activity-separator {
  display: block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #888;
}

.dashboard__activity-footer i {
  color: #888;
}

/* Tabla de equipos */
.dashboard__recent-equipment {
  margin-top: 20px;
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
}

.dashboard__table-container {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.dashboard__table-header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dashboard__table-title {
  font-size: 1rem;
  font-weight: 400;
}

.dashboard__table-link {
  color: #002d62;
  text-decoration: none;
  font-size: 0.9rem;
}

.dashboard__table-link:hover {
  color: #A10E1E;
}

.dashboard__table-headers {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f8f9fa;
  padding: 15px 20px;
  border-bottom: 1px solid #dee2e6;
}

.dashboard__table-header-item {
  font-size: 0.75rem;
  font-weight: 400;
  color: #444;
  text-align: start;
}

.dashboard__table-row {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid #f1f1f1;
  transition: background-color 0.3s;
}

.dashboard__table-row:hover {
  background-color: #f9fafb;
}

.dashboard__table-cell {
  font-size: 0.9rem;
  text-align: start;
}

.dashboard__table-cell--bold {
  font-weight: 600;
  color: #333;
}

.dashboard__table-cell--muted {
  color: #666;
}

.dashboard__table-cell i {
  color: #002d62;
  margin-right: 6px;
}

/* Estados */
.dashboard__status {
  width: fit-content;
  padding: 4px 12px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.75rem;
}

.dashboard__status--active {
  background-color: #DBFCE7;
  color: #1E5D8C;
}

.dashboard__status--maintenance {
  background-color: #FFEDD4;
  color: #9F2D22;
}

/* Acciones */
.dashboard__actions {
  display: flex;
  gap: 15px;
}

.dashboard__action-button {
  background: none;
  border: none;
  cursor: pointer;
  transition: color 0.3s;
  font-size: 1rem;
  padding: 5px;
}

.dashboard__action-button .fa-eye {
  color: #002d62;
}

.dashboard__action-button .fa-pen-to-square {
  color: #666;
}

.dashboard__action-button .fa-trash {
  color: #CE1126;
}

</style>