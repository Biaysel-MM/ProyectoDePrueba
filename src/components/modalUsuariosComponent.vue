<script setup>
import { ref, watch } from "vue";
import ModalMovimientos from "./modalMovimientosComponent.vue";
import ModalHistorial from "./modalHistorialComponent.vue";

const props = defineProps({ show: Boolean });
const emit = defineEmits(["close"]);
const closeModal = () => emit("close");

const isVisible = ref(true);
const showMovimientos = ref(false);
const showHistorial = ref(false);

// Sincroniza la visibilidad del modal principal con la prop 'show'
watch(() => props.show, (newVal) => {
  if (newVal) {
    isVisible.value = true;
    showMovimientos.value = false;
    showHistorial.value = false;
  }
});

function openOnly(modal) {
  isVisible.value = false;
  if (modal === "movimientos") showMovimientos.value = true;
  if (modal === "historial") showHistorial.value = true;
}

function reopenParent() {
  isVisible.value = true;
  showMovimientos.value = false;
  showHistorial.value = false;
}
</script>
<template>
  <div v-if="show" class="modal" @click.self="closeModal">
    <div class="modal__content">
      <button class="modal__close" @click="closeModal">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <slot>
        <!-- título -->
        <h2 class="modal__title">
          <i class="fas fa-history"></i> Historial Completo del Equipo
        </h2>

        <!-- subtítulo -->
        <div class="modal__subtitle">
          <i class="fas fa-desktop modal__subtitle-icon"></i>
          <div class="modal__subtitle-text">
            <h2 class="modal__subtitle-name">Monitor LG UltraWide</h2>
            <p class="modal__subtitle-code">BN-2024-002</p>
            <div class="modal__subtitle-data">
              <span class="modal__subtitle-data-item">
                <i class="fas fa-user mr-1" aria-hidden="true"></i>
                <span class="sr-only">Usuario:</span> Juan Pérez
              </span>

              <span class="modal__subtitle-data-item">
                <i class="fas fa-building mr-1" aria-hidden="true"></i>
                <span class="sr-only">Departamento:</span> Sistemas
              </span>
            </div>
          </div>
        </div>

        <!-- navegación -->
        <nav class="modal__links">
          <button class="modal__links-item" type="button" @click="openOnly('historial')">
            <i class="fas fa-tools modal__links-icon" aria-hidden="true"></i>
            <span class="modal__links-label">Mantenimiento</span>
            <span class="modal__links-count">(4)</span>
          </button>

          <button class="modal__links-item modal__links-item--active" type="button">
            <i class="fas fa-users modal__links-icon" aria-hidden="true"></i>
            <span class="modal__links-label">Usuarios</span>
            <span class="modal__links-count">(3)</span>
          </button>

          <button class="modal__links-item" type="button" @click="openOnly('movimientos')">
            <i class="fas fa-exchange-alt modal__links-icon" aria-hidden="true"></i>
            <span class="modal__links-label">Movimientos</span>
            <span class="modal__links-count">(4)</span>
          </button>
        </nav>

        <!-- contenido -->
        <div class="modal__container-articles">
          <header class="modal__container-articles-header">
            <h3>Lista de Usuarios</h3>
            <p>Total: <span>3 usuarios</span></p>
          </header>

          <article class="modal__article">
            <header class="modal__article-header">
              <h4>Juan Pérez</h4>
              <span class="modal__article-status estado activo">Activo</span>
            </header>
            <p>Departamento: Sistemas</p>
          </article>

          <article class="modal__article">
            <header class="modal__article-header">
              <h4>Laura García</h4>
              <span class="modal__article-status estado activo">Activo</span>
            </header>
            <p>Departamento: Mantenimiento</p>
          </article>

          <article class="modal__article">
            <header class="modal__article-header">
              <h4>Carlos Méndez</h4>
              <span class="modal__article-status estado inactivo">Inactivo</span>
            </header>
            <p>Departamento: Soporte Técnico</p>
          </article>

          <div class="modal__footer">
            <article class="modal__footer-card">
              <span>4</span>
              <p>Mantenimientos</p>
            </article>
            <article class="modal__footer-card">
              <span>3</span>
              <p>Usuarios</p>
            </article>
            <article class="modal__footer-card">
              <span>4</span>
              <p>Movimientos</p>
            </article>
          </div>
        </div>
      </slot>

      <!-- MODALES SECUNDARIOS -->
      <ModalMovimientos :show="showMovimientos" @close="reopenParent" />
      <ModalHistorial :show="showHistorial" @close="reopenParent" />
    </div>
  </div>
</template>


<style scoped>
/* estilos del encabezado del modal  */
.modal__subtitle {
  background: linear-gradient(to right, #EFF6FF, #fff);
  border: 1px solid #c4deff;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.modal__subtitle-icon {
  background: #023670;
  color: #fff;
  padding: 20px;
  font-size: 25px;
  border-radius: 8px;
}

.modal__subtitle-name {
  font-weight: 600;
  font-size: 18px;
}

.modal__subtitle-code {
  color: #023670;
  font-weight: 600;
}

.modal__subtitle-data {
  color: #666;
  font-size: 14px;
  display: flex;
  gap: 10px;
}

.modal__subtitle-data-item i {
  margin-right: 2px;
}

/* aqui estan los links para dirigir a otros modales */
.modal__links {
  display: flex;
  justify-content: space-between;
  border-radius: 20px;
  background-color: #ddd;
  padding: 5px;
}

.modal__links-item {
  padding: 5px 10px;
  border-radius: 20px;
  border: none;
  background: none;
  display: flex;
  gap: 5px;
}

.modal__links-item--active {
  background: #fff;
}

/* aqui estan el encabezado y los articles (mantenientos)  */
/* encabezado  */
.modal__container-articles {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.modal__container-articles-header {
  display: flex;
  justify-content: space-between;
}

.modal__container-articles-header h3 {
  font-size: 16px;
  font-weight: 500;
  color: #222;
}

.modal__container-articles-header p {
  font-size: 14px;
  color: #666;
}

/* articles  */
.modal__article {
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
  border-left: 4px solid #023670;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.modal__article-header {
  display: flex;
  justify-content: space-between;
}

.modal__article-header h4 {
  font-size: 16px;
  font-weight: 600;
  color: #222;
}

.modal__article-info {
  display: flex;
  gap: 10px;
  align-items: center;
  color: #666;
  font-size: 14px;
}

.modal__article p {
  color: #666;
  font-size: 15px;
}

.modal__article-info-user {
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: 5px;
}

.modal__article-info-user i {
  color: #023670;
  font-size: 14px;
}

.modal__article-info-user p {
  font-size: 14px;
}

/* pie de pagina del article  */
.modal__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-top: 1px solid #ddd;
  padding-top: 20px;
}

.modal__footer-card span {
  font-size: 20px;
  color: #023670;
  font-weight: 600;
}

.modal__footer-card p {
  font-size: 14px;
  color: #666;
}
</style>
