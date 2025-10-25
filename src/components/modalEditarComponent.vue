<script setup>
import { ref } from "vue";

const props = defineProps({ show: Boolean });
const emit = defineEmits(["close"]);

// Estados reactivos para los selects
const tipoEquipo = ref("Seleccionar tipo");
const departamento = ref("Seleccionar departamento");
const estado = ref("Seleccionar estado");

const closeModal = () => emit("close");
</script>

<template>
  <div v-if="show" class="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle" @click.self="closeModal">
    <div class="modal__content">
      <button class="modal__close" @click="closeModal" aria-label="Cerrar modal">
        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
      </button>

      <header class="modal__header">
        <h2 id="modalTitle" class="modal__title">
          <i class="fas fa-desktop" aria-hidden="true"></i>
          Editar Equipo
        </h2>
      </header>

      <form class="modal__form" aria-describedby="editarDescripcion">
        <p id="editarDescripcion" class="sr-only">
          Modifica los datos del equipo seleccionado.
        </p>

        <fieldset class="modal__form-container">
          <legend class="sr-only">Información del equipo</legend>

          <!-- Primer lado -->
          <div class="modal__form-side modal__form-side--first">
            <div class="form__group">
              <label for="bienNacional" class="form__label">Bien Nacional</label>
              <input type="text" id="bienNacional" name="bienNacional" placeholder="BN-2024-xxx" class="form__input" />
            </div>

            <div class="form__group">
              <label for="tipoEquipo" class="form__label">Tipo de Equipo</label>
              <select v-model="tipoEquipo" class="form__select" id="tipoEquipo">
                <option disabled value="Seleccionar tipo">Seleccionar tipo</option>
                <option>CPU</option>
                <option>Monitor</option>
                <option>Proyector</option>
                <option>Escáner</option>
                <option>Triturador</option>
              </select>
            </div>

            <div class="form__group">
              <label for="serial" class="form__label">Serial</label>
              <input type="text" id="serial" name="serial" placeholder="Número de serie" class="form__input" />
            </div>

            <div class="form__group">
              <label for="usuarioAsignado" class="form__label">Usuario Asignado</label>
              <input type="text" id="usuarioAsignado" name="usuarioAsignado" placeholder="Nombre del usuario" class="form__input" />
            </div>

            <div class="form__group">
              <label for="procesador" class="form__label">Procesador</label>
              <input type="text" id="procesador" name="procesador" placeholder="Ej: Intel Core i7-12700" class="form__input" />
            </div>

            <div class="form__group">
              <label for="discoDuro" class="form__label">Disco Duro</label>
              <input type="text" id="discoDuro" name="discoDuro" placeholder="Ej: 256GB SSD" class="form__input" />
            </div>

            <div class="form__group">
              <label for="antivirus" class="form__label">Antivirus</label>
              <input type="text" id="antivirus" name="antivirus" placeholder="Ej: Windows Defender" class="form__input" />
            </div>
          </div>

          <!-- Segundo lado -->
          <div class="modal__form-side modal__form-side--second">
            <div class="form__group">
              <label for="nombreEquipo" class="form__label">Nombre del Equipo</label>
              <input type="text" id="nombreEquipo" name="nombreEquipo" placeholder="CPU Dell Optiplex 7090" class="form__input" />
            </div>

            <div class="form__group">
              <label for="sistemaOperativo" class="form__label">Sistema Operativo</label>
              <input type="text" id="sistemaOperativo" name="sistemaOperativo" placeholder="Ej: Windows 11 Pro" class="form__input" />
            </div>

            <div class="form__group">
              <label for="placa" class="form__label">Placa</label>
              <input type="text" id="placa" name="placa" placeholder="Número de placa" class="form__input" />
            </div>

            <div class="form__group">
              <label for="departamento" class="form__label">Departamento</label>
              <select v-model="departamento" class="form__select" id="departamento">
                <option disabled value="Seleccionar departamento">Seleccionar departamento</option>
                <option>Sistemas</option>
                <option>Contabilidad</option>
                <option>Recursos Humanos</option>
                <option>Almacén</option>
              </select>
            </div>

            <div class="form__group">
              <label for="memoriaRam" class="form__label">Memoria RAM</label>
              <input type="text" id="memoriaRam" name="memoriaRam" placeholder="Ej: 16GB DDR4" class="form__input" />
            </div>

            <div class="form__group">
              <label for="versionOffice" class="form__label">Versión Office</label>
              <input type="text" id="versionOffice" name="versionOffice" placeholder="Ej: Office 2021" class="form__input" />
            </div>

            <div class="form__group">
              <label for="estado" class="form__label">Estado</label>
              <select v-model="estado" class="form__select" id="estado">
                <option disabled value="Seleccionar estado">Seleccionar estado</option>
                <option>Activo</option>
                <option>En Mantenimiento</option>
                <option>En Almacén</option>
                <option>Dado de baja</option>
              </select>
            </div>
          </div>
        </fieldset>

        <div class="modal__actions">
          <button type="button" class="modal__btn modal__btn--cancel" @click="closeModal" aria-label="Cancelar edición">
            Cancelar
          </button>
          <button type="submit" class="modal__btn modal__btn--save" aria-label="Guardar cambios del equipo">
            <i class="fas fa-save" aria-hidden="true"></i>
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Estilos generales del modal */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal__content {
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 24px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.modal__close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
  transition: color 0.3s;
}

.modal__close:hover {
  color: #333;
}

.modal__header {
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid #eee;
}

.modal__title {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  color: #333;
  margin: 0;
}

/* Estructura del formulario */
.modal__form-container {
  display: flex;
  gap: 20px;
  border: none;
  margin: 0;
  padding: 0;
}

.modal__form-side {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* Grupos de formulario */
.form__group {
  display: flex;
  flex-direction: column;
}

.form__label {
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 6px;
  color: #333;
  position: relative;
  width: fit-content;
}

.form__label::after {
  content: '*';
  position: absolute;
  top: -2px;
  right: -8px;
  color: #CE1126;
}

/* Inputs */
.form__input {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: all 0.3s;
  font-family: inherit;
  box-sizing: border-box;
}

.form__input:focus {
  border-color: #023670;
  box-shadow: 0 0 0 3px rgba(2, 54, 112, 0.2);
}

/* Selects nativos con estilo mejorado */
.form__select {
  width: 100%;
  padding: 10px 12px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  padding-right: 40px;
  box-sizing: border-box;
}

.form__select:focus {
  outline: none;
  border-color: #023670;
  box-shadow: 0 0 0 3px rgba(2, 54, 112, 0.2);
}

/* Botones de acción */
.modal__actions {
  display: flex;
  gap: 16px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  margin-top: 20px;
}

.modal__btn {
  flex: 1;
  padding: 15px;
  border: 1px solid #ddd;
  background-color: #fff;
  border-radius: 8px;
  font-size: 14px;
  text-align: start;
  cursor: pointer;
}

.modal__btn--cancel {
  background: #f8f9fa;
  color: #333;
  border: 1px solid #ddd;
}

.modal__btn--cancel:hover {
  background: #e9ecef;
}

.modal__btn--save {
  background: #CE1126;
  color: #fff;
}

.modal__btn--save:hover {
  background: #A10E1E;
}

/* Accesibilidad */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .modal__form-container {
    flex-direction: column;
    gap: 0;
  }
  
  .modal__content {
    width: 95%;
    padding: 16px;
  }
  
  .modal__actions {
    flex-direction: column-reverse;
    gap: 12px;
  }
  
  .modal__btn {
    width: 100%;
    justify-content: center;
  }
}
</style>