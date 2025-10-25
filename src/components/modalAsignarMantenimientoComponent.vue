<script setup>
const props = defineProps({ show: Boolean });
const emit = defineEmits(["close"]);
const closeModal = () => emit("close");
</script>

<template>
  <!-- MODAL ASIGNAR MANTENIMIENTO -->
  <div v-if="show" class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" @click.self="closeModal">
    <div class="modal__content">
      <!-- Botón de cierre -->
      <button class="modal__close" @click="closeModal" aria-label="Cerrar modal">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>

      <!-- Contenido del modal -->
      <slot>
        <header class="modal__header">
          <h2 id="modalTitle" class="modal__title">
            <i class="fas fa-clipboard-list" aria-hidden="true"></i>
            Asignar Mantenimiento a Técnico
          </h2>
        </header>

        <!-- Información del equipo -->
        <section class="modal__section modal__section--info">
          <h3 class="modal__section-title modal__section-title--info">
            <i class="fas fa-desktop" aria-hidden="true"></i>
            Información del Equipo
          </h3>

          <div class="modal__fields">
            <div class="modal__field">
              <label for="bienNacional">Bien Nacional</label>
              <input type="text" id="bienNacional" name="bienNacional" placeholder="BN-2024-xxx" />
            </div>

            <div class="modal__field">
              <label for="tipoMantenimiento">Tipo de Mantenimiento</label>
              <select id="tipoMantenimiento" name="tipoMantenimiento">
                <option value="Limpieza General">Limpieza General</option>
                <option value="Reparación">Reparación</option>
                <option value="Cambio de Mantenimiento">
                  Cambio de Mantenimiento
                </option>
                <option value="Actualización">Actualización</option>
                <option value="Cambio de Componente">Cambio de Componente</option>
              </select>
            </div>
          </div>
        </section>

        <!-- Asignación de técnico -->
        <section class="modal__section modal__section--asignacion">
          <h3 class="modal__section-title modal__section-title--asignacion">
            <i class="fas fa-user-cog" aria-hidden="true"></i>
            Asignación de Técnico
          </h3>

          <div class="modal__fields">
            <div class="modal__field modal__field-first">
              <label for="tecnicoResponsable">Técnico Responsable</label>
              <select id="tecnicoResponsable" name="tecnicoResponsable">
                <option value="Patricia Martinez">Patricia Martínez</option>
                <option value="Sanson Arquimidez">Sanson Arquimidez</option>
              </select>
            </div>

            <div class="modal__field">
              <label for="prioridad">Prioridad</label>
              <select id="prioridad" name="prioridad">
                <option value="Alta">Alta</option>
                <option value="Media">Media</option>
                <option value="Baja">Baja</option>
                <option value="Urgente">Urgente</option>
              </select>
            </div>

            <div class="modal__field">
              <label for="fechaProgramada">Fecha Programada</label>
              <input type="date" id="fechaProgramada" name="fechaProgramada" />
            </div>
          </div>
        </section>

        <!-- Descripción -->
        <section class="modal__section modal__section--descripcion">
          <label for="descripcion">Descripción del Trabajo Requerido</label>
          <textarea id="descripcion" name="descripcion"
            placeholder="Escribe la descripción del trabajo aquí..."></textarea>
        </section>

        <!-- Información importante -->
        <section class="modal__section modal__section--info-extra">
          <h4 class="modal__note-title">
            <i class="fas fa-info-circle" aria-hidden="true"></i>
            El Técnico Asignado Recibirá:
          </h4>
          <ul class="modal__note-list">
            <li>Notificación de la tarea asignada</li>
            <li>Detalles del equipo y trabajo a realizar</li>
            <li>Podrá actualizar el estado del trabajo</li>
          </ul>
        </section>

        <!-- Botones de acción -->
        <div class="modal__actions">
          <button type="button" class="modal__btn modal__btn--cancelar">
            Cancelar
          </button>
          <button type="submit" class="modal__btn modal__btn--confirmar">
            <i class="fas fa-check" aria-hidden="true"></i>
            Asignar Mantenimiento
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>


<style scoped>
.modal__section {
  border-radius: 8px;
  padding: 15px;
}
.modal__section--info{
  background-color: #EFF6FF;
  border: 1px solid #add1ff;
}
.modal__section--asignacion{
  background-color: #F0FDF4;
  border: 1px solid #a4ffc0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.modal__section-title{
  font-size: 18px;
  font-weight: 600;
  display: flex;
  gap: 8px;
  align-items: center;
}
.modal__section-title--info i{
  color: #023670;
}
.modal__section-title--asignacion i{
  color: #008236;
}
.modal__fields {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.modal__field {
  flex: 1 1 calc(50% - 10px);
}
.modal__field label, .modal__section--descripcion label{
  position: relative;
  width: fit-content;
}
.modal__field label::after, .modal__section--descripcion label::after{
  content: '*';
  position: absolute;
  top: -2px;
  right: -8px;
}
.modal__field select, .modal__field input{
  width: 100%;
  border: 1px solid #DEE2E6;
  outline: none;
  padding: 10px;
  border-radius: 8px;
  background: transparent;
}
.modal__field-first {
  flex: 1 1 100%;
}
.modal__section--descripcion{
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.modal__section--descripcion textarea{
  width: 100%;
  height: 100px;
  border-radius: 8px;
  resize: none;
  border: none;
  outline: 0.5px solid #ddd;
  padding: 10px 15px;
}
.modal__section--descripcion textarea:focus{
  border: none;
  outline: 3px solid #81bcff;
}
.modal__section--descripcion textarea::placeholder{
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
}
.modal__section--descripcion, .modal__actions{
  padding: 0;
}
.modal__section--info-extra{
  background-color: #FFF7ED;
  border: 1px solid #FDE3C7;
  color: #666;
}
.modal__note-title{
  font-size: 14px;
  font-weight: 500;
}
.modal__note-title i{
  color: #F54A00;
  font-size: 16px;
  margin-right: 5px;
}
.modal__note-list{
  margin-left: 27px;
}
.modal__note-list li{
  list-style: inside;
  font-size: 12px;
}
.modal__actions{
  display: flex;
  gap: 10px;
}
.modal__btn{
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  font-size: 16px;
  text-align: start;
  cursor: pointer;
}
.modal__btn--confirmar{
  background: #CE1126;
  color: #fff;
}
.modal__btn--confirmar:hover{
  background: #A10E1E;
}
</style>
