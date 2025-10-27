<script setup>
import { ref } from "vue";
import NavbarView from "../iu/navbarView.vue";
import ModalDetalle from "../../components/modalDetallesComponent.vue";
import ModalEditar from '../../components/modalEditarComponent.vue';

// Estados para modales
const showModalDetalle = ref(false);
const showModalEditar = ref(false);

// Funciones para manejar modales
const openModalDetalle = () => (showModalDetalle.value = true);
const closeModalDetalle = () => (showModalDetalle.value = false);
const openModalEditar = () => (showModalEditar.value = true);
const closeModalEditar = () => (showModalEditar.value = false);

// Datos para mejor mantenibilidad y performance
const stats = ref([
  { 
    title: 'Total Equipos', 
    value: '1,243', 
    icon: 'fa-solid fa-desktop' 
  },
  { 
    title: 'CPU/Laptops', 
    value: '56', 
    icon: 'fa-solid fa-laptop' 
  },
  { 
    title: 'Monitores', 
    value: '523', 
    icon: 'fas fa-tv' 
  },
  { 
    title: 'Otros', 
    value: '264', 
    icon: 'fas fa-box' 
  }
]);

const equipments = ref([
  { 
    title: 'CPU Dell Optiplex', 
    code: 'BN-2024-001', 
    user: 'Juan Pérez', 
    department: 'Sistemas', 
    specs: 'Intel Core i7-12700',
    icon: 'fas fa-desktop',
    status: 'activo',
    statusText: 'Activo'
  },
  { 
    title: 'Monitor LG UltraWide', 
    code: 'BN-2024-002', 
    user: 'María González', 
    department: 'Contabilidad', 
    specs: null,
    icon: 'fas fa-tv',
    status: 'activo',
    statusText: 'Activo'
  },
  { 
    title: 'Proyector Epson', 
    code: 'BN-2024-003', 
    user: 'Carlos Ramírez', 
    department: 'Capacitación', 
    specs: null,
    icon: 'fas fa-box',
    status: 'mantenimiento',
    statusText: 'En Mantenimiento'
  },
  { 
    title: 'Escáner HP ScanJet', 
    code: 'BN-2024-004', 
    user: 'Ana Martínez', 
    department: 'Archivo', 
    specs: null,
    icon: 'fas fa-box',
    status: 'almacen',
    statusText: 'Almacén'
  },
  { 
    title: 'Monitor LG UltraWide', 
    code: 'BN-2024-005', 
    user: 'Jose Martinez', 
    department: 'Archivo', 
    specs: null,
    icon: 'fas fa-tv',
    status: 'activo',
    statusText: 'Activo'
  },
  { 
    title: 'CPU Dell Optiplex', 
    code: 'BN-2024-006', 
    user: 'José Castillo', 
    department: 'Sistemas', 
    specs: 'Intel Core i7-12700',
    icon: 'fas fa-desktop',
    status: 'activo',
    statusText: 'Activo'
  }
]);
</script>

<template>
  <main class="main" role="main">
    <NavbarView />
    
    <section class="equipment-section" aria-labelledby="equipment-title">
      <div class="equipment-section__container">
        <!-- Encabezado -->
        <header class="equipment-section__header">
          <div class="equipment-section__header-titles">
            <h1 id="equipment-title" class="equipment-section__title">Gestión de Equipos</h1>
            <p class="equipment-section__description">Administra todos los equipos del inventario TI</p>
          </div>
          
          <div class="equipment-section__header-actions">
            <button class="button button--export" aria-label="Exportar lista de equipos">
              <i class="fa-solid fa-download button__icon" aria-hidden="true"></i>
              Exportar
            </button>
            <button class="button button--primary" aria-label="Registrar nuevo equipo">
              <i class="fa-solid fa-plus button__icon" aria-hidden="true"></i>
              Registrar Equipo
            </button>
          </div>
        </header>

        <!-- Cards de estadísticas -->
        <div class="stats-cards">
          <article class="stats-card" v-for="(stat, index) in stats" :key="index">
            <div class="stats-card__content">
              <h3 class="stats-card__title">{{ stat.title }}</h3>
              <p class="stats-card__value">{{ stat.value }}</p>
            </div>
            <div class="stats-card__icon">
              <i :class="stat.icon" :aria-label="stat.title" aria-hidden="true"></i>
            </div>
          </article>
        </div>

        <!-- Filtros y búsqueda -->
        <div class="filters">
          <div class="filters__search">
            <i class="fa-solid fa-magnifying-glass filters__search-icon" aria-hidden="true"></i>
            <input 
              type="search" 
              class="filters__search-input" 
              placeholder="Buscar Bien Nacional"
              aria-label="Buscar equipos por bien nacional"
            >
          </div>
          
          <select class="filters__select" aria-label="Filtrar por tipo de equipo">
            <option value="">Todos los tipos</option>
            <option value="CPU">CPU</option>
            <option value="Monitor">Monitor</option>
            <option value="Proyector">Proyector</option>
            <option value="Escáner">Escáner</option>
            <option value="Triturador">Triturador</option>
          </select>
          
          <select class="filters__select" aria-label="Filtrar por departamento">
            <option value="">Todos los departamentos</option>
            <option value="Sistema">Sistema</option>
            <option value="Contabilidad">Contabilidad</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
          </select>
          
          <select class="filters__select" aria-label="Filtrar por estado del equipo">
            <option value="">Todos los estados</option>
            <option value="Activo">Activo</option>
            <option value="En Mantenimiento">En Mantenimiento</option>
            <option value="En Almacén">En Almacén</option>
            <option value="Dado de baja">Dado de baja</option>
          </select>
        </div>

        <!-- Grid de equipos -->
        <div class="equipment-grid" role="grid" aria-label="Lista de equipos">
          <article 
            v-for="(equipment, index) in equipments" 
            :key="index"
            class="equipment-card"
            role="gridcell"
          >
            <header class="equipment-card__header">
              <i :class="equipment.icon" class="equipment-card__type-icon" aria-hidden="true"></i>
              <span :class="`equipment-card__status equipment-card__status--${equipment.status}`">
                {{ equipment.statusText }}
              </span>
            </header>

            <div class="equipment-card__content">
              <h4 class="equipment-card__title">{{ equipment.title }}</h4>
              <p class="equipment-card__code">{{ equipment.code }}</p>
              <p class="equipment-card__info">
                <i class="fas fa-user equipment-card__info-icon" aria-hidden="true"></i>
                {{ equipment.user }}
              </p>
              <p class="equipment-card__info">
                <i class="fas fa-building equipment-card__info-icon" aria-hidden="true"></i>
                {{ equipment.department }}
              </p>
              <p v-if="equipment.specs" class="equipment-card__info">
                <i class="fas fa-microchip equipment-card__info-icon" aria-hidden="true"></i>
                {{ equipment.specs }}
              </p>
            </div>

            <footer class="equipment-card__footer">
              <button 
                @click="openModalDetalle" 
                class="button button--secondary equipment-card__action"
                aria-label="Ver detalles del equipo"
              >
                Ver detalles
              </button>
              <button 
                @click="openModalEditar"
                class="equipment-card__edit"
                aria-label="Editar equipo"
              >
                <i class="fas fa-edit" aria-hidden="true"></i>
              </button>
            </footer>
          </article>
        </div>

        <!-- Modales -->
        <ModalDetalle :show="showModalDetalle" @close="closeModalDetalle" />
        <ModalEditar :show="showModalEditar" @close="closeModalEditar" />
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  min-height: 100vh;
}

.equipment-section {
  margin-left: 250px;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
}

.equipment-section__container {
  width: 100%;
  max-width: 1200px;
}

/* Header Styles */
.equipment-section__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.equipment-section__title {
  font-weight: 500;
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.equipment-section__description {
  color: #666;
  margin: 0;
}

.equipment-section__header-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Button Styles */
.button {
  display: inline-flex;
  align-items: center;
  padding: 0.625rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  font-size: 0.875rem;
}

.button__icon {
  margin-right: 0.5rem;
}

.button--export {
  color: #023670;
  border-color: #023670;
  background: #fff;
}

.button--export:hover {
  color: #fff;
  background: #023670;
}

.button--primary {
  background: #CE1126;
  color: #fff;
  border: none;
}

.button--primary:hover {
  background: #A10E1E;
}

.button--secondary {
  background: #023670;
  color: #fff;
  border: none;
  flex: 1;
}

.button--secondary:hover {
  background: #012552;
}

/* Stats Cards */
.stats-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.stats-card {
  display: flex;
  justify-content: space-between;
  padding: 1.25rem;
  border: 1px solid #DEE2E6;
  border-radius: 0.5rem;
  transition: box-shadow 0.3s ease;
}

.stats-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.stats-card__title {
  font-weight: 400;
  font-size: 0.875rem;
  color: #666;
  margin: 0 0 0.5rem 0;
}

.stats-card__value {
  font-weight: 600;
  font-size: 1.5rem;
  margin: 0;
}

.stats-card__icon i {
  font-size: 1.125rem;
  padding: 0.625rem 0.75rem;
  border-radius: 0.5rem;
}

.stats-card__icon .fa-desktop {
  color: #023670;
  background: rgba(2, 54, 112, 0.07);
}

.stats-card__icon .fa-laptop {
  color: #00A63E;
  background: rgba(0, 166, 62, 0.07);
}

.stats-card__icon .fa-tv {
  color: #F54A00;
  background: rgba(245, 74, 0, 0.07);
}

.stats-card__icon .fa-box {
  color: #CE1126;
  background: rgba(206, 17, 38, 0.07);
}

/* Filters */
.filters {
  display: flex;
  align-items: center;
  padding: 1.25rem;
  gap: 1.25rem;
  border: 1px solid #DEE2E6;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-wrap: wrap;
}

.filters__search {
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 200px;
  padding: 0.625rem;
  border: 1px solid #DEE2E6;
  border-radius: 0.5rem;
  background: #fff;
}

.filters__search-icon {
  margin-right: 0.625rem;
  color: #666;
}

.filters__search-input {
  border: none;
  outline: none;
  width: 100%;
  background: transparent;
}

.filters__select {
  flex: 1;
  min-width: 150px;
  padding: 0.625rem;
  border: 1px solid #DEE2E6;
  border-radius: 0.5rem;
  background: #fff;
}

/* Equipment Grid */
.equipment-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.25rem;
  margin: 1.5rem 0;
}

.equipment-card {
  border: 1px solid #DEE2E6;
  border-radius: 0.5rem;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease;
}

.equipment-card:hover {
  transform: translateY(-2px);
}

.equipment-card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.equipment-card__type-icon {
  font-size: 1.5rem;
  padding: 0.875rem;
  border-radius: 0.5rem;
}

.equipment-card__type-icon.fa-desktop {
  color: #023670;
  background: #02367011;
}

.equipment-card__type-icon.fa-tv {
  color: #00A63E;
  background: #00A63E11;
}

.equipment-card__type-icon.fa-box {
  color: #F54A00;
  background: #F54A0011;
}

.equipment-card__type-icon.fa-laptop {
  color: #00A63E;
  background: #00A63E11;
}

.equipment-card__status {
  padding: 0.25rem 0.75rem;
  border-radius: 100px;
  font-weight: 600;
  font-size: 0.75rem;
  text-transform: capitalize;
}

.equipment-card__status--activo {
  background-color: #DBFCE7;
  color: #016630;
}

.equipment-card__status--mantenimiento {
  background-color: #FFEDD4;
  color: #9F2D22;
}

.equipment-card__status--almacen {
  background-color: rgba(2, 54, 112, 0.13);
  color: #023670;
}

.equipment-card__content {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  margin: 1rem 0;
  flex: 1;
}

.equipment-card__title {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
}

.equipment-card__code {
  font-size: 0.875rem;
  font-weight: 500;
  color: #023670;
  margin: 0;
}

.equipment-card__info {
  display: flex;
  align-items: center;
  color: #666;
  font-size: 0.875rem;
  margin: 0;
}

.equipment-card__info-icon {
  margin-right: 0.625rem;
  width: 1rem;
}

.equipment-card__footer {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.equipment-card__action {
  text-align: center;
  padding: 0.875rem;
}

.equipment-card__edit {
  padding: 0.875rem;
  border-radius: 0.5rem;
  border: 1px solid #DEE2E6;
  background: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.equipment-card__edit:hover {
  background: #023670;
  color: #fff;
  border-color: #023670;
}

/* Responsive */
@media (max-width: 768px) {
  .equipment-section {
    margin-left: 0;
    padding: 1rem;
  }
  
  .equipment-section__header {
    flex-direction: column;
  }
  
  .filters {
    flex-direction: column;
  }
  
  .filters__search,
  .filters__select {
    width: 100%;
  }
}
</style>
