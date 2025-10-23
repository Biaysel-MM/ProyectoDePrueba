<script setup>
const props = defineProps({ show: Boolean });
const emit = defineEmits(["close"]);
const closeModal = () => emit("close");
</script>

<template>
  <div v-if="show" class="modal" @click.self="closeModal">
    <div class="modal__content">
      <button class="modal__close" @click="closeModal">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <h2 class="modal__title">Editar Detalles del Equipo</h2>
    </div>
  </div>
</template>

