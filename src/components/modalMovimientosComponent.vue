<script setup>
import { ref, watch } from "vue";
import ModalUsuarios from "./modalUsuariosComponent.vue";
import ModalHistorial from "./modalHistorialComponent.vue";

const props = defineProps({ show: Boolean });
const emit = defineEmits(["close"]);

const isVisible = ref(true);
const activeChild = ref(null); // 'historial' | 'movimientos' | null

watch(
  () => props.show,
  (newVal) => {
    if (newVal) {
      isVisible.value = true;
      activeChild.value = null;
    } else {
      activeChild.value = null;
      isVisible.value = false;
    }
  }
);

function openOnly(modal) {
  activeChild.value = modal;
  isVisible.value = false;
}

function onChildClose() {
  activeChild.value = null;
  if (props.show) isVisible.value = true;
}

function handleClose() {
  activeChild.value = null;
  isVisible.value = false;
  emit("close");
}

</script>


<template>
  <div v-if="show" class="modal" @click.self="handleClose">
    <div class="modal__content">
      <button class="modal__close" @click="handleClose">
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

          <button class="modal__links-item" type="button" @click="openOnly('usuarios')">
            <i class="fas fa-users modal__links-icon" aria-hidden="true"></i>
            <span class="modal__links-label">Usuarios</span>
            <span class="modal__links-count">(3)</span>
          </button>

          <button class="modal__links-item modal__links-item--active" type="button">
            <i class="fas fa-exchange-alt modal__links-icon" aria-hidden="true"></i>
            <span class="modal__links-label">Movimientos</span>
            <span class="modal__links-count">(4)</span>
          </button>
        </nav>

        <!-- contenido -->
        <div class="modal__container-articles">
          <header class="modal__container-articles-header">
            <h3>Historial de Movimientos</h3>
            <p>Total: <span>4 movimientos</span></p>
          </header>

          <article class="modal__article" aria-labelledby="assignment-title">
            <div class="modal__article-line">
              <i class="fas fa-exchange-alt" aria-hidden="true"></i>
              <span class="modal__article-line-separator" aria-hidden="true"></span>
            </div>

            <div class="modal__article-content">
              <header class="modal__article-header">
                <h5 id="assignment-title" class="modal__article-title">Asignación de Usuario</h5>
                <time datetime="2025-10-01T10:30">01/10/2025 10:30 AM</time>
              </header>

              <section class="modal__article-transfer">
                <div class="modal__article-transfer-group">
                  <div class="modal__article-transfer-item">
                    <i class="fas fa-arrow-right text-[#CE1126] itemRojo" aria-hidden="true"></i>
                    <p>De:</p>
                    <span>Almacén</span>
                  </div>

                  <div class="modal__article-transfer-item">
                    <i class="fas fa-arrow-right text-[#CE1126] itemVerde" aria-hidden="true"></i>
                    <p>A:</p>
                    <span>Sistema</span>
                  </div>
                </div>

                <p class="modal__article-transfer-note">
                  “Asignación a nuevo empleado”
                </p>

                <div class="modal__article-user">
                  <i class="fas fa-user text-[#002D62]" aria-hidden="true"></i>
                  <p><strong>Responsable:</strong> Admin TI</p>
                </div>
              </section>
            </div>
          </article>

          <article class="modal__article" aria-labelledby="assignment-title">
            <div class="modal__article-line">
              <i class="fas fa-exchange-alt" aria-hidden="true"></i>
              <span class="modal__article-line-separator" aria-hidden="true"></span>
            </div>

            <div class="modal__article-content">
              <header class="modal__article-header">
                <h5 id="assignment-title" class="modal__article-title">Cambio de Departamento</h5>
                <time datetime="2025-10-01T10:30">01/10/2025 10:30 AM</time>
              </header>

              <section class="modal__article-transfer">
                <div class="modal__article-transfer-group">
                  <div class="modal__article-transfer-item">
                    <i class="fas fa-arrow-right text-[#CE1126] itemRojo" aria-hidden="true"></i>
                    <p>De:</p>
                    <span>Contabilidad</span>
                  </div>

                  <div class="modal__article-transfer-item">
                    <i class="fas fa-arrow-right text-[#CE1126] itemVerde" aria-hidden="true"></i>
                    <p>A:</p>
                    <span>Almacén</span>
                  </div>
                </div>

                <p class="modal__article-transfer-note">
                  "Usuario cambió de posición"
                </p>

                <div class="modal__article-user">
                  <i class="fas fa-user text-[#002D62]" aria-hidden="true"></i>
                  <p><strong>Responsable:</strong>  Soporte TI</p>
                </div>
              </section>
            </div>
          </article>

          <article class="modal__article" aria-labelledby="assignment-title">
            <div class="modal__article-line">
              <i class="fas fa-exchange-alt" aria-hidden="true"></i>
              <span class="modal__article-line-separator" aria-hidden="true"></span>
            </div>

            <div class="modal__article-content">
              <header class="modal__article-header">
                <h5 id="assignment-title" class="modal__article-title">Cambio de Usuario</h5>
                <time datetime="2025-10-01T10:30">01/10/2025 10:30 AM</time>
              </header>

              <section class="modal__article-transfer">
                <div class="modal__article-transfer-group">
                  <div class="modal__article-transfer-item">
                    <i class="fas fa-arrow-right text-[#CE1126] itemRojo" aria-hidden="true"></i>
                    <p>De:</p>
                    <span>Recursos Humanos</span>
                  </div>

                  <div class="modal__article-transfer-item">
                    <i class="fas fa-arrow-right text-[#CE1126] itemVerde" aria-hidden="true"></i>
                    <p>A:</p>
                    <span>Contabilidad</span>
                  </div>
                </div>

                <p class="modal__article-transfer-note">
                  "Reorganización departamental"
                </p>

                <div class="modal__article-user">
                  <i class="fas fa-user text-[#002D62]" aria-hidden="true"></i>
                  <p><strong>Responsable:</strong> Admin TI</p>
                </div>
              </section>
            </div>
          </article>

          <article class="modal__article" aria-labelledby="assignment-title">
            <div class="modal__article-line">
              <i class="fas fa-exchange-alt" aria-hidden="true"></i>
              <span class="modal__article-line-separator" aria-hidden="true"></span>
            </div>

            <div class="modal__article-content">
              <header class="modal__article-header">
                <h5 id="assignment-title" class="modal__article-title">Asignación Inicial</h5>
                <time datetime="2025-10-01T10:30">01/10/2025 10:30 AM</time>
              </header>

              <section class="modal__article-transfer">
                <div class="modal__article-transfer-group">
                  <div class="modal__article-transfer-item">
                    <i class="fas fa-arrow-right text-[#CE1126] itemRojo" aria-hidden="true"></i>
                    <p>De:</p>
                    <span>almacen</span>
                  </div>

                  <div class="modal__article-transfer-item">
                    <i class="fas fa-arrow-right text-[#CE1126] itemVerde" aria-hidden="true"></i>
                    <p>A:</p>
                    <span>Recursos Humanos</span>
                  </div>
                </div>

                <p class="modal__article-transfer-note">
                  "Primera asignación del equipo"
                </p>

                <div class="modal__article-user">
                  <i class="fas fa-user text-[#002D62]" aria-hidden="true"></i>
                  <p><strong>Responsable:</strong> Admin TI</p>
                </div>
              </section>
            </div>
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

      <!-- submodales -->
      <ModalHistorial v-if="activeChild === 'historial'" :show="true" @close="onChildClose" />
      <ModalUsuarios v-if="activeChild === 'usuarios'" :show="true" @close="onChildClose" />
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
  display: flex;
  gap: 10px;
}

.modal__article-line {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.modal__article-line i {
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
  z-index: 20;
}

.modal__article-line span {
  z-index: 10;
  height: 100%;
  width: 2px;
  background-color: #ddd;
  flex: 1;
  position: relative;
}

.modal__article-line span::after {
  content: '';
  height: 30px;
  width: 2px;
  background-color: #ddd;
  position: absolute;
  bottom: -20px;
}



.modal__article-content {
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 100%;
  padding: 20px;
}

.modal__article-header {
  display: flex;
  justify-content: space-between;
}

.modal__article-header h5 {
  font-size: 16px;
  color: #222;
  font-weight: 500;
}

.modal__article-header time {
  font-size: 14px;
  color: #666;
}

.modal__article-transfer{
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}

.modal__article-transfer-group, .modal__article-transfer-item {
  display: flex;
  gap: 10px;
  align-items: center;
}
.modal__article-transfer-item{
  flex: 1;
  font-size: 15px;
}

.modal__article-transfer-item .itemRojo{
  color: #CE1126;
}

.modal__article-transfer-item .itemVerde{
  color: #00C950;
}
.modal__article-transfer-item span{
  font-weight: 500;
}
.modal__article-transfer-item p{
  color: #666;
}
.modal__article-transfer-note{
  font-style: italic;
  font-size: 15px;
  color: #666;
}
.modal__article-user{
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  color: #666;
  font-weight: 400;
}
.modal__article-user i{
  color: #023670;
}
.modal__article-user p strong{
  font-weight: 400;
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
