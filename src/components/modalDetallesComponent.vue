<script setup>
import { defineProps, defineEmits } from "vue";

// Props
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

// Emits
const emit = defineEmits(["close"]);

const closeModalDetalle = () => {
  emit("close");
};
</script>

<template>
  <div v-if="show" class="modal" @click.self="closeModalDetalle">
    <div class="modal__content">
      <button class="modal__close" @click="closeModalDetalle">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <slot>
        <h2 class="modal__title">Detalles del Equipo</h2>
        <div class="modal__subtitle">
          <i class="fas fa-desktop modal__subtitle-icon"></i>
          <div class="modal__subtitle-text">
            <h2 class="modal__subtitle-name">Monitor LG UltraWide</h2>
            <p class="modal__subtitle-code">BN-2024-002</p>
          </div>
        </div>

        <article class="modal__info">
          <div class="modal__info-section">
            <div class="modal__info-item">
              <h4 class="modal__info-label">Tipo de Equipo</h4>
              <p class="modal__info-value">Monitor</p>
            </div>
            <div class="modal__info-item">
              <h4 class="modal__info-label">Usuario Asignado</h4>
              <p class="modal__info-value">María González</p>
            </div>
            <div class="modal__info-item">
              <h4 class="modal__info-label">Serial</h4>
              <p class="modal__info-value">LG789012</p>
            </div>
          </div>

          <div class="modal__info-section">
            <div class="modal__info-item">
              <h4 class="modal__info-label">Estado</h4>
              <p class="modal__info-value estado activo">Activo</p>
            </div>
            <div class="modal__info-item">
              <h4 class="modal__info-label">Departamento</h4>
              <p class="modal__info-value">Contabilidad</p>
            </div>
            <div class="modal__info-item">
              <h4 class="modal__info-label">Placa</h4>
              <p class="modal__info-value">PL-002</p>
            </div>
          </div>
        </article>

        <div class="modal__actions">
          <button class="modal__button modal__button-historial">
            <i class="fa-solid fa-clock-rotate-left"></i> Ver Historial
          </button>
          <button class="modal__button modal__button-mantenimiento">
            <i class="fas fa-clipboard-list"></i> Asignar Mantenimiento
          </button>
          <button class="modal__button modal__button-editar">
            <i class="fas fa-edit"></i> Editar
          </button>
          <button class="modal__button modal__button--icon-only">
            <i class="fas fa-print"></i>
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>



<style scoped>
.modal {
    position: fixed;
    inset: 0;
    background-color: #0009;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
}

.modal__content {
    background: #fff;
    border-radius: 12px;
    padding: 2rem;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 5px 15px #0009;
    position: relative;
    animation: pop 0.25s ease;
    gap: 20px;
    display: flex;
    flex-direction: column;
}

.modal__close {
    position: absolute;
    top: 10px;
    right: 12px;
    background: none;
    border: none;
    cursor: pointer;
}

.modal__close i {
    font-size: 16px;
    color: #666;
    margin: 5px 5px 0 0;
}

.modal__title {
    font-weight: 500;
    color: #023670;
}

.modal__subtitle {
    display: flex;
    align-items: center;
    margin-left: 10px;
    gap: 15px;
}

.modal__subtitle-icon {
    padding: 15px;
    background: #023670;
    color: #fff;
    border-radius: 8px;
    font-size: 25px;
}

.modal__subtitle-name {
    font-weight: 600;
    font-size: 18px;
}

.modal__subtitle-code {
    color: #023670;
    font-weight: 600;
}
.modal__info{
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.modal__info-section{
    display: grid;
    gap: 15px;
}
.modal__info-item .modal__info-label{
    font-weight: 400;
    color: #666;
    font-size: 14px;
}
.modal__info-item .modal__info-value{
    font-weight: 600;
}
.modal__actions{
    display: flex;
    gap: 10px;
}
.modal__button{
    background: #fff;
    color: #fff;
    outline: none;
    border: none;
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
    text-align: start;
    width: auto;
    cursor: pointer;
    flex: 1;
}
.modal__button i{
    margin-right: 5px;
}
.modal__button--icon-only{
    width: auto;
    border: 1px solid #dee2e6;
    color: #000;
    flex: 0;
}
.modal__button-historial{
    background: #9810FA;
}
.modal__button-mantenimiento{
    background: #008236;
}
.modal__button-editar{
    background: #023670;
}

/* animación simple para el modal*/
@keyframes pop {
    from {
        transform: scale(0.9);
        opacity: 0;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
