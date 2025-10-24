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

          <article class="modal__article modal__article--active" aria-labelledby="user-name">
            <header class="modal__article-header">
              <div class="modal__article-user">
                <span class="modal__article-user-avatar" aria-hidden="true">M</span>
                <div class="modal__article-user-info">
                  <h4 id="user-name" class="modal__article-user-name">Juan Pérez</h4>
                  <div class="modal__article-user-department">
                    <i class="fas fa-building" aria-hidden="true"></i>
                    <p>Sistema</p>
                  </div>
                </div>
              </div>

              <span class="modal__article-status estado activo" aria-label="Estado del usuario">
                Usuario Actual
              </span>
            </header>

            <footer class="modal__article-fecha">
              <div class="modal__article-fecha-item">
                <h5>Fecha de Asignación</h5>
                <time datetime="2025-10-01">01/10/2025</time>
              </div>

              <div class="modal__article-fecha-item">
                <h5>Fecha de Retiro</h5>
                <time>Actual</time>
              </div>

              <div class="modal__article-fecha-item">
                <h5>Días de Uso</h5>
                <time>9 días.</time>
              </div>
            </footer>
          </article>

          <article class="modal__article" aria-labelledby="user-name">
            <header class="modal__article-header">
              <div class="modal__article-user">
                <span class="modal__article-user-avatar" aria-hidden="true">J</span>
                <div class="modal__article-user-info">
                  <h4 id="user-name" class="modal__article-user-name">María González</h4>
                  <div class="modal__article-user-department">
                    <i class="fas fa-building" aria-hidden="true"></i>
                    <p>Contabilidad</p>
                  </div>
                </div>
              </div>
            </header>

            <footer class="modal__article-fecha">
              <div class="modal__article-fecha-item">
                <h5>Fecha de Asignación</h5>
                <time datetime="2025-10-01">15/08/2025</time>
              </div>

              <div class="modal__article-fecha-item">
                <h5>Fecha de Retiro</h5>
                <time datetime="30/09/2025">30/09/2025</time>
              </div>

              <div class="modal__article-fecha-item">
                <h5>Días de Uso</h5>
                <time>46 días.</time>
              </div>
            </footer>
          </article>


          <article class="modal__article" aria-labelledby="user-name">
            <header class="modal__article-header">
              <div class="modal__article-user">
                <span class="modal__article-user-avatar" aria-hidden="true">P</span>
                <div class="modal__article-user-info">
                  <h4 id="user-name" class="modal__article-user-name">Pedro López</h4>
                  <div class="modal__article-user-department">
                    <i class="fas fa-building" aria-hidden="true"></i>
                    <p>Recursos Humanos</p>
                  </div>
                </div>
              </div>
            </header>

            <footer class="modal__article-fecha">
              <div class="modal__article-fecha-item">
                <h5>Fecha de Asignación</h5>
                <time datetime="01/06/2025">01/06/2025</time>
              </div>

              <div class="modal__article-fecha-item">
                <h5>Fecha de Retiro</h5>
                <time>14/08/2025</time>
              </div>

              <div class="modal__article-fecha-item">
                <h5>Días de Uso</h5>
                <time>74 días.</time>
              </div>
            </footer>
          </article>

          <div class="modal__msj-de-info">
            <i class="fas fa-info-circle text-[#002D62]"></i>
            <p>Total de días en uso: 129 días</p>
          </div>

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
.modal__article--active{
  border-left-color: #00C950;
}

.modal__article-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__article-user-avatar {
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
}

.modal__article-user h4 {
  font-size: 16px;
  font-weight: 600;
  color: #222;
}

.modal__article-user {
  display: flex;
  gap: 5px;
  align-items: center;
  margin-left: 5px;
}
.modal__article-user-department{
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
}

/* fechas  */
.modal__article-fecha{
  display: flex;
  border-top: 1px solid #ddd;
  margin-top: 5px;
  padding: 10px;
}
.modal__article-fecha-item{
  flex: 1;
}
.modal__article-fecha-item h5{
  font-weight: 500;
  font-size: 12px;
  color: #666;
}
.modal__article-fecha-item time{
  font-size: 14px;
  font-weight: 500;
  color: #000;
}

/* mensaje de informacion  */
.modal__msj-de-info{
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #c7e1ff;
  background-color: #EFF6FF;
  gap: 5px;
}
.modal__msj-de-info i{
  color: #023670;
}
.modal__msj-de-info p{
  font-size: 14px;
  color: #666;
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
