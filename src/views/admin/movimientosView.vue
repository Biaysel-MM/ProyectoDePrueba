<script setup>
import { ref } from "vue";
import NavbarView from "../iu/navbarView.vue";

// Datos para estadísticas
const stats = ref([
  {
    title: 'Total Movimientos',
    value: '342',
    icon: 'fas fa-exchange-alt',
    color: 'blue'
  },
  {
    title: 'Este Mes',
    value: '45',
    icon: 'fas fa-calendar-alt',
    color: 'green'
  },
  {
    title: 'Pendientes',
    value: '8',
    icon: 'fas fa-clock',
    color: 'orange'
  },
  {
    title: 'Completados Hoy',
    value: '12',
    icon: 'fas fa-check-circle',
    color: 'red'
  }
]);

// Datos para movimientos
const movements = ref([
  {
    id: 1,
    type: 'Cambio de Departamento',
    equipmentName: 'CPU Dell Optiplex',
    equipmentCode: 'BN-2024-001',
    status: 'completed',
    statusText: 'Completado',
    from: 'Almacén',
    to: 'Sistemas',
    user: 'Admin TI',
    date: '10/10/2025 10:30 AM',
    note: 'Asignación a nuevo empleado',
    icon: 'fas fa-exchange-alt'
  },
  {
    id: 2,
    type: 'Mantenimiento Preventivo',
    equipmentName: 'Monitor LG UltraWide',
    equipmentCode: 'BN-2024-002',
    status: 'completed',
    statusText: 'Completado',
    from: 'Contabilidad',
    to: 'Taller de Mantenimiento',
    user: 'Técnico Juan Pérez',
    date: '09/10/2025 02:15 PM',
    note: 'Limpieza y calibración de monitor',
    icon: 'fas fa-tools'
  },
  {
    id: 3,
    type: 'Asignación de Equipo',
    equipmentName: 'Laptop HP EliteBook',
    equipmentCode: 'BN-2024-003',
    status: 'pending',
    statusText: 'Pendiente',
    from: 'Almacén',
    to: 'Recursos Humanos',
    user: 'Coordinador TI',
    date: '11/10/2025 09:00 AM',
    note: 'Nuevo ingreso - María González',
    icon: 'fas fa-laptop'
  },
  {
    id: 4,
    type: 'Reparación Correctiva',
    equipmentName: 'Impresora Epson',
    equipmentCode: 'BN-2024-004',
    status: 'in-progress',
    statusText: 'En Proceso',
    from: 'Administración',
    to: 'Taller de Reparación',
    user: 'Técnico Carlos López',
    date: '08/10/2025 11:45 AM',
    note: 'Cambio de cartuchos y limpieza de cabezales',
    icon: 'fas fa-wrench'
  }
]);
</script>

<template>
  <main class="main" role="main">
    <NavbarView />
    <section class="movements-section" aria-labelledby="movements-title">
      <div class="movements-section__container">
        <!-- Encabezado -->
        <header class="movements-section__header">
          <div class="movements-section__header-titles">
            <h1 id="movements-title" class="movements-section__title">Historial de Movimientos</h1>
            <p class="movements-section__description">Registro completo de movimientos de equipos</p>
          </div>
          <div class="movements-section__header-actions">
            <button class="button button--export" aria-label="Exportar historial de movimientos">
              <i class="fa-solid fa-download button__icon" aria-hidden="true"></i>
              Exportar Historial
            </button>
            <button class="button button--primary" aria-label="Registrar nuevo movimiento">
              <i class="fa-solid fa-plus button__icon" aria-hidden="true"></i>
              Registrar Movimiento
            </button>
          </div>
        </header>

        <!-- Cards de estadísticas -->
        <div class="stats-cards">
          <article 
            v-for="(stat, index) in stats" 
            :key="index" 
            class="stats-card"
          >
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
              aria-label="Buscar movimientos por bien nacional"
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
          
          <select class="filters__select" aria-label="Filtrar por estado del movimiento">
            <option value="">Todos los estados</option>
            <option value="Completado">Completado</option>
            <option value="Pendiente">Pendiente</option>
            <option value="En proceso">En proceso</option>
          </select>
          
          <input 
            type="date" 
            class="filters__select" 
            aria-label="Filtrar por fecha"
          >
        </div>

        <!-- Área para lista de movimientos -->
        <div class="movements-list" role="grid" aria-label="Lista de movimientos">
          <header class="movements-list__header">
            <h4 class="movements-list__title">Línea de Tiempo de Movimientos</h4>
          </header>

          <div class="movements-list__container">
            <article 
              v-for="movement in movements" 
              :key="movement.id"
              class="movement-article movement-article--movement"
            >
              <div class="movement-article__line">
                <i :class="movement.icon" aria-hidden="true"></i>
                <span 
                  class="movement-article__line-separator" 
                  aria-hidden="true"
                ></span>
              </div>

              <div class="movement-article__content">
                <header class="movement-article__header">
                  <h5 class="movement-article__title">{{ movement.type }}</h5>
                  <span :class="`movement-article__status movement-article__status--${movement.status}`">
                    {{ movement.statusText }}
                  </span>
                </header>

                <section class="movement-article__transfer">
                  <div class="movement-article__equipment-info">
                    <span class="movement-article__equipment-name">{{ movement.equipmentName }}</span>
                    <span class="movement-article__separator circleGris" aria-hidden="true"></span>
                    <span class="movement-article__equipment-code">{{ movement.equipmentCode }}</span>
                  </div>
                  
                  <div class="movement-article__transfer-group">
                    <div class="movement-article__transfer-item">
                      <i class="fas fa-arrow-right itemRojo" aria-hidden="true"></i>
                      <p>De:</p>
                      <span>{{ movement.from }}</span>
                    </div>

                    <div class="movement-article__transfer-item">
                      <i class="fas fa-arrow-right itemVerde" aria-hidden="true"></i>
                      <p>A:</p>
                      <span>{{ movement.to }}</span>
                    </div>
                  </div>

                  <div class="movement-article__user">
                    <i class="fas fa-user" aria-hidden="true"></i>
                    <p><strong>{{ movement.user }}</strong></p>
                    <span class="movement-article__separator circleGris" aria-hidden="true"></span>
                    <i class="fas fa-clock" aria-hidden="true"></i>
                    <time class="movement-article__date">{{ movement.date }}</time>
                  </div>
                  
                  <p class="movement-article__transfer-note">
                    "{{ movement.note }}"
                  </p>
                </section>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main {
  min-height: 100vh;
}

.movements-section {
  margin-left: 250px;
  padding: 1.25rem;
  display: flex;
  justify-content: center;
}

.movements-section__container {
  width: 100%;
  max-width: 1200px;
}

/* Header Styles */
.movements-section__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.movements-section__title {
  font-weight: 500;
  font-size: 1.5rem;
  color: #1a1a1a;
  margin: 0 0 0.5rem 0;
}

.movements-section__description {
  color: #666;
  margin: 0;
}

.movements-section__header-actions {
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

/* Colores específicos para iconos de estadísticas */
.stats-card__icon .fa-exchange-alt {
  color: #023670;
  background: #02367011;
}

.stats-card__icon .fa-calendar-alt {
  color: #00A63E;
  background: #00A63E11;
}

.stats-card__icon .fa-clock {
  color: #F54A00;
  background: #F54A0011;
}

.stats-card__icon .fa-check-circle {
  color: #CE1126;
  background: #CE112611;
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

/* Movements List */
.movements-list {
  margin: 20px 0;
  padding: 20px;
  padding-bottom: 40px;
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  background: #fff;
}

.movements-list__header {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #DEE2E6;
}

.movements-list__title {
  font-size: 1.25rem;
  font-weight: 500;
  color: #222;
  margin: 0;
}

.movements-list__container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

/* Movement Article */
.movement-article {
  display: flex;
  gap: 15px;
}

.movement-article--movement {
  display: flex;
  flex-direction: row;
  border: none;
  padding: 0;
}

.movement-article__line {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.movement-article__line i {
    color: #fff;
    background-color: #023670;
    border-radius: 100%;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 5px;
    font-size: 18px;
    font-weight: 600;
    z-index: 10;
}

.movement-article__line-separator {
    z-index: 10;
    height: 100%;
    width: 2px;
    background-color: #ddd;
    flex: 1;
    position: relative;
}

.movement-article__line-separator::after {
    content: '';
    height: 40px;
    width: 2px;
    background-color: #ddd;
    position: absolute;
    bottom: -40px;
}

.movement-article__content {
  border: 1px solid #DEE2E6;
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  background: #fff;
}

.movement-article__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  border-bottom: 1px solid #f1f3f4;
}

.movement-article__title {
  font-size: 16px;
  color: #222;
  font-weight: 600;
  margin: 0;
}

.movement-article__status {
  padding: 4px 12px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 12px;
  text-transform: capitalize;
}

.movement-article__status--completed {
  background-color: #DBFCE7;
  color: #016630;
}
/* Estados de movimiento */
.movement-article__status--pending {
  background-color: #FFEDD4;
  color: #9F2D22;
}

.movement-article__status--in-progress {
  background-color: #E0F2FE;
  color: #0369A1;
}
/* Equipment Info */
.movement-article__equipment-info {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;
}

.movement-article__equipment-name {
  font-weight: 500;
  color: #222;
}

.movement-article__equipment-code {
  color: #023670;
  font-weight: 500;
}

.movement-article__separator.circleGris {
  width: 4px;
  height: 4px;
  background-color: #666;
  border-radius: 50%;
}

/* Transfer Section */
.movement-article__transfer {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.movement-article__transfer-group {
  display: flex;
  gap: 20px;
}

.movement-article__transfer-item {
  display: flex;
  gap: 8px;
  align-items: center;
  flex: 1;
  font-size: 14px;
}

.movement-article__transfer-item .itemRojo {
  color: #CE1126;
}

.movement-article__transfer-item .itemVerde {
  color: #00C950;
}

.movement-article__transfer-item span {
  font-weight: 500;
  color: #222;
}

.movement-article__transfer-item p {
  color: #666;
  margin: 0;
  min-width: 25px;
}

/* User Info */
.movement-article__user {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #666;
  margin: 10px 0;
}

.movement-article__user i {
  color: #023670;
}

.movement-article__user p {
  margin: 0;
}

.movement-article__user p strong {
  font-weight: 500;
}

.movement-article__date {
  color: #666;
  font-size: 14px;
}

/* Note */
.movement-article__transfer-note {
  font-style: italic;
  font-size: 14px;
  color: #666;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
}

/* Responsive */
@media (max-width: 768px) {
  .movements-list {
    padding: 15px;
    margin: 15px 0;
  }

  .movement-article {
    flex-direction: column;
  }

  .movement-article__line {
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 10px;
  }

  .movement-article__line-separator {
    width: 100%;
    height: 100%;
  }

  .movement-article__header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .movement-article__transfer-group {
    flex-direction: column;
    gap: 10px;
  }

  .movement-article__user {
    flex-wrap: wrap;
  }
}

/* Responsive */
@media (max-width: 768px) {
  .movements-section {
    margin-left: 0;
    padding: 1rem;
  }

  .movements-section__header {
    flex-direction: column;
  }

  .movements-section__header-actions {
    width: 100%;
  }

  .movements-section__header-actions .button {
    flex: 1;
    justify-content: center;
  }

  .filters {
    flex-direction: column;
  }

  .filters__search,
  .filters__select {
    width: 100%;
  }

  .stats-cards {
    grid-template-columns: 1fr;
  }
}
</style>