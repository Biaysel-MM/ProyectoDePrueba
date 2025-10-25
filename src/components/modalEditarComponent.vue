<script setup>
import { onMounted, ref, watch, nextTick } from "vue";

const props = defineProps({ show: Boolean });
const emit = defineEmits(["close"]);

// Estados reactivos para los selects
const tipoEquipo = ref("Seleccionar tipo");
const departamento = ref("Seleccionar departamento");
const estado = ref("Seleccionar estado");

const closeModal = () => emit("close");

// Función para inicializar los selects personalizados
const initCustomSelects = () => {
  const selects = document.querySelectorAll('.form__select');
  
  selects.forEach(select => {
    const summary = select.querySelector('summary');
    const options = select.querySelectorAll('li');
    
    // Remover event listeners anteriores para evitar duplicados
    options.forEach(option => {
      const newOption = option.cloneNode(true);
      option.parentNode.replaceChild(newOption, option);
    });

    // Re-obtener las opciones después del clone
    const freshOptions = select.querySelectorAll('li');
    
    // Manejar clic en cada opción
    freshOptions.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Remover clase selected de todas las opciones
        freshOptions.forEach(o => o.classList.remove('selected'));
        
        // Agregar clase selected a la opción clickeada
        option.classList.add('selected');
        
        // Actualizar el texto del summary
        summary.textContent = option.textContent;
        
        // Actualizar el estado reactivo correspondiente
        if (select.id === 'tipoEquipo') {
          tipoEquipo.value = option.textContent;
        } else if (select.id === 'departamento') {
          departamento.value = option.textContent;
        } else if (select.id === 'estado') {
          estado.value = option.textContent;
        }
        
        // Cerrar el details
        select.removeAttribute('open');
      });
    });
  });

  // Cerrar selects al hacer clic fuera
  document.addEventListener('click', (e) => {
    selects.forEach(select => {
      if (!select.contains(e.target)) {
        select.removeAttribute('open');
      }
    });
  });
};

// Watcher para cuando el modal se muestra
watch(() => props.show, (newVal) => {
  if (newVal) {
    nextTick(() => {
      initCustomSelects();
    });
  }
});

// También inicializar en onMounted por si acaso
onMounted(() => {
  if (props.show) {
    nextTick(() => {
      initCustomSelects();
    });
  }
});
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

      <form class="modal__editar" aria-describedby="editarDescripcion">
        <p id="editarDescripcion" class="sr-only">
          Modifica los datos del equipo seleccionado.
        </p>

        <fieldset class="modal__editar-container">
          <legend class="sr-only">Información del equipo</legend>

          <!-- Primer lado -->
          <div class="modal__editar-lado modal__editar-lado--primero">
            <div class="form__group">
              <label for="bienNacional" class="form__label">Bien Nacional</label>
              <input type="text" id="bienNacional" name="bienNacional" placeholder="BN-2024-xxx" class="form__input" />
            </div>

            <div class="form__group">
              <label for="tipoEquipo" class="form__label">Tipo de Equipo</label>
              <details class="form__select" id="tipoEquipo">
                <summary>{{ tipoEquipo }}</summary>
                <ul>
                  <li>CPU</li>
                  <li>Monitor</li>
                  <li>Proyector</li>
                  <li>Escáner</li>
                  <li>Triturador</li>
                </ul>
              </details>
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
          <div class="modal__editar-lado modal__editar-lado--segundo">
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
              <details class="form__select" id="departamento">
                <summary>{{ departamento }}</summary>
                <ul>
                  <li>Sistemas</li>
                  <li>Contabilidad</li>
                  <li>Recursos Humanos</li>
                  <li>Almacén</li>
                </ul>
              </details>
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
              <details class="form__select" id="estado">
                <summary>{{ estado }}</summary>
                <ul>
                  <li>Activo</li>
                  <li>En Mantenimiento</li>
                  <li>En Almacén</li>
                  <li>Dado de baja</li>
                </ul>
              </details>
            </div>
          </div>
        </fieldset>

        <div class="modal__actions">
          <button type="button" class="modal__btn modal__btn--cancelar" @click="closeModal" aria-label="Cancelar edición">
            Cancelar
          </button>
          <button type="submit" class="modal__btn modal__btn--registrar" aria-label="Guardar cambios del equipo">
            <i class="fas fa-save" aria-hidden="true"></i>
            Guardar Cambios
          </button>
        </div>
      </form>
    </div>
  </div>
</template>


<style scoped>
.modal__editar-lado{
  flex: 1;
}
.modal__editar-container{
  display: flex;
  gap: 10px;
  border: none;
}

.modal__editar-item {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
}

.modal__editar-item label{
  position: relative;
  width: fit-content;
  font-weight: 500;
  font-size: 14px;
  margin-bottom: 5px;
}
.modal__editar-item label::after{
  content: '*';
  position: absolute;
  top: -2px;
  right: -8px;
}

/* Inputs igual que details */
.modal__editar-item input {
  padding: 10px;
  font-size: 14px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  transition: 0.3s all;
}
.modal__editar-item input:focus {
  border-color: #023670;
  box-shadow: 0 0 0 3px #2064b1aa;
}

.modal__actions{
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid #ddd;
  margin-top: 20px;
}

.modal__btn{
  padding: 10px 15px;
  border: none;
  background: none;
  border: 1px solid #ddd;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}
.modal__btn--registrar{
  background: #CE1126;
  color: #fff;
}
.modal__btn--registrar:hover{
  background: #A10E1E;
}
</style>
