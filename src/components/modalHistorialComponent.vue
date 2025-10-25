<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({ 
  show: Boolean,
  equipmentData: {
    type: Object,
    default: () => ({
      name: "Monitor LG UltraWide",
      code: "BN-2024-002",
      user: "Juan Pérez",
      department: "Sistemas"
    })
  }
});

const emit = defineEmits(["close"]);

// Estado para controlar la vista activa
const activeView = ref("mantenimientos"); // "mantenimientos", "usuarios", "movimientos"

// Datos de ejemplo
const mantenimientos = ref([
  {
    id: 1,
    title: "Limpieza General",
    status: "Completado",
    date: "2025-10-10",
    duration: "2 horas",
    description: "Limpieza completa de componentes internos",
    technician: "Pedro Sánchez"
  },
  {
    id: 2,
    title: "Actualización de RAM",
    status: "Completado",
    date: "2025-09-15",
    duration: "1.5 horas",
    description: "Actualización de 8GB a 16GB DDR4",
    technician: "Laura García"
  },
  {
    id: 3,
    title: "Mantenimiento Preventivo",
    status: "Completado",
    date: "2025-09-15",
    duration: "2 horas",
    description: "Revisión general del sistema",
    technician: "Pedro Sánchez"
  },
  {
    id: 4,
    title: "Reparación",
    status: "Completado",
    date: "2025-08-20",
    duration: "3 horas",
    description: "Cambio de disco duro defectuoso",
    technician: "Carlos Méndez"
  }
]);

const usuarios = ref([
  {
    id: 1,
    name: "Juan Pérez",
    department: "Sistemas",
    assignmentDate: "2025-10-01",
    withdrawalDate: "Actual",
    daysOfUse: "9 días",
    isCurrent: true,
    initial: "J"
  },
  {
    id: 2,
    name: "María González",
    department: "Contabilidad",
    assignmentDate: "2025-08-15",
    withdrawalDate: "2025-09-30",
    daysOfUse: "46 días",
    isCurrent: false,
    initial: "M"
  },
  {
    id: 3,
    name: "Pedro López",
    department: "Recursos Humanos",
    assignmentDate: "2025-06-01",
    withdrawalDate: "2025-08-14",
    daysOfUse: "74 días",
    isCurrent: false,
    initial: "P"
  }
]);

const movimientos = ref([
  {
    id: 1,
    title: "Asignación de Usuario",
    date: "2025-10-01T10:30",
    from: "Almacén",
    to: "Sistema",
    note: "Asignación a nuevo empleado",
    responsible: "Admin TI"
  },
  {
    id: 2,
    title: "Cambio de Departamento",
    date: "2025-10-01T10:30",
    from: "Contabilidad",
    to: "Almacén",
    note: "Usuario cambió de posición",
    responsible: "Soporte TI"
  },
  {
    id: 3,
    title: "Cambio de Usuario",
    date: "2025-10-01T10:30",
    from: "Recursos Humanos",
    to: "Contabilidad",
    note: "Reorganización departamental",
    responsible: "Admin TI"
  },
  {
    id: 4,
    title: "Asignación Inicial",
    date: "2025-10-01T10:30",
    from: "almacen",
    to: "Recursos Humanos",
    note: "Primera asignación del equipo",
    responsible: "Admin TI"
  }
]);

// Computed para total de días de uso
const totalDiasUso = computed(() => {
  return usuarios.value.reduce((total, usuario) => {
    const dias = parseInt(usuario.daysOfUse) || 0;
    return total + dias;
  }, 0);
});

// Métodos
const closeModal = () => {
  emit("close");
};

const changeView = (view) => {
  activeView.value = view;
};

// Formatear fecha
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('es-ES');
};

// Formatear fecha y hora
const formatDateTime = (dateTimeString) => {
  const date = new Date(dateTimeString);
  return `${date.toLocaleDateString('es-ES')} ${date.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' })}`;
};

// Sincronizar con la prop show
watch(() => props.show, (newVal) => {
  if (newVal) {
    activeView.value = "mantenimientos";
  }
});
</script>

<template>
  <!-- MODAL PRINCIPAL -->
  <div v-if="show" class="modal" @click.self="closeModal">
    <div class="modal__content">
      <button class="modal__close" @click="closeModal">
        <i class="fa-solid fa-xmark"></i>
      </button>

      <!-- título -->
      <h2 class="modal__title">
        <i class="fas fa-history"></i> Historial Completo del Equipo
      </h2>

      <!-- subtítulo -->
      <div class="modal__subtitle">
        <i class="fas fa-desktop modal__subtitle-icon"></i>
        <div class="modal__subtitle-text">
          <h2 class="modal__subtitle-name">{{ equipmentData.name }}</h2>
          <p class="modal__subtitle-code">{{ equipmentData.code }}</p>
          <div class="modal__subtitle-data">
            <span class="modal__subtitle-data-item">
              <i class="fas fa-user mr-1" aria-hidden="true"></i>
              <span class="sr-only">Usuario:</span> {{ equipmentData.user }}
            </span>

            <span class="modal__subtitle-data-item">
              <i class="fas fa-building mr-1" aria-hidden="true"></i>
              <span class="sr-only">Departamento:</span> {{ equipmentData.department }}
            </span>
          </div>
        </div>
      </div>

      <!-- navegación -->
      <nav class="modal__links">
        <button 
          class="modal__links-item" 
          :class="{ 'modal__links-item--active': activeView === 'mantenimientos' }"
          type="button" 
          @click="changeView('mantenimientos')"
        >
          <i class="fas fa-tools modal__links-icon" aria-hidden="true"></i>
          <span class="modal__links-label">Mantenimiento</span>
          <span class="modal__links-count">({{ mantenimientos.length }})</span>
        </button>

        <button 
          class="modal__links-item" 
          :class="{ 'modal__links-item--active': activeView === 'usuarios' }"
          type="button" 
          @click="changeView('usuarios')"
        >
          <i class="fas fa-users modal__links-icon" aria-hidden="true"></i>
          <span class="modal__links-label">Usuarios</span>
          <span class="modal__links-count">({{ usuarios.length }})</span>
        </button>

        <button 
          class="modal__links-item" 
          :class="{ 'modal__links-item--active': activeView === 'movimientos' }"
          type="button" 
          @click="changeView('movimientos')"
        >
          <i class="fas fa-exchange-alt modal__links-icon" aria-hidden="true"></i>
          <span class="modal__links-label">Movimientos</span>
          <span class="modal__links-count">({{ movimientos.length }})</span>
        </button>
      </nav>

      <!-- CONTENIDO DINÁMICO SEGÚN VISTA ACTIVA -->

      <!-- VISTA MANTENIMIENTOS -->
      <div v-if="activeView === 'mantenimientos'" class="modal__container-articles">
        <header class="modal__container-articles-header">
          <h3>Historial de Mantenimientos</h3>
          <p>Total: <span>{{ mantenimientos.length }} mantenimientos</span></p>
        </header>

        <article v-for="mantenimiento in mantenimientos" :key="mantenimiento.id" class="modal__article">
          <header class="modal__article-header">
            <h4>{{ mantenimiento.title }}</h4>
            <span class="modal__article-status estado activo">{{ mantenimiento.status }}</span>
          </header>

          <div class="modal__article-info">
            <i class="fas fa-calendar mr-2"></i>
            <time :datetime="mantenimiento.date">{{ formatDate(mantenimiento.date) }}</time>
            <span class="modal__article-separator circleGris"></span>
            <i class="fas fa-clock mr-2"></i>
            <span>{{ mantenimiento.duration }}</span>
          </div>

          <p>{{ mantenimiento.description }}</p>

          <div class="modal__article-info-user">
            <i class="fas fa-user-cog text-[#002D62]"></i>
            <p>Técnico: <span>{{ mantenimiento.technician }}</span></p>
          </div>
        </article>
      </div>

      <!-- VISTA USUARIOS -->
      <div v-if="activeView === 'usuarios'" class="modal__container-articles">
        <header class="modal__container-articles-header">
          <h3>Lista de Usuarios</h3>
          <p>Total: <span>{{ usuarios.length }} usuarios</span></p>
        </header>

        <article 
          v-for="usuario in usuarios" 
          :key="usuario.id" 
          class="modal__article" 
          :class="{ 'modal__article--active': usuario.isCurrent }"
          aria-labelledby="'user-name-' + usuario.id"
        >
          <header class="modal__article-header">
            <div class="modal__article-user">
              <span class="modal__article-user-avatar" aria-hidden="true">{{ usuario.initial }}</span>
              <div class="modal__article-user-info">
                <h4 :id="'user-name-' + usuario.id" class="modal__article-user-name">{{ usuario.name }}</h4>
                <div class="modal__article-user-department">
                  <i class="fas fa-building" aria-hidden="true"></i>
                  <p>{{ usuario.department }}</p>
                </div>
              </div>
            </div>

            <span v-if="usuario.isCurrent" class="modal__article-status estado activo" aria-label="Estado del usuario">
              Usuario Actual
            </span>
          </header>

          <footer class="modal__article-fecha">
            <div class="modal__article-fecha-item">
              <h5>Fecha de Asignación</h5>
              <time :datetime="usuario.assignmentDate">{{ formatDate(usuario.assignmentDate) }}</time>
            </div>

            <div class="modal__article-fecha-item">
              <h5>Fecha de Retiro</h5>
              <time>{{ usuario.withdrawalDate }}</time>
            </div>

            <div class="modal__article-fecha-item">
              <h5>Días de Uso</h5>
              <time>{{ usuario.daysOfUse }}</time>
            </div>
          </footer>
        </article>

        <div class="modal__msj-de-info">
          <i class="fas fa-info-circle text-[#002D62]"></i>
          <p>Total de días en uso: {{ totalDiasUso }} días</p>
        </div>
      </div>

      <!-- VISTA MOVIMIENTOS -->
      <div v-if="activeView === 'movimientos'" class="modal__container-articles">
        <header class="modal__container-articles-header">
          <h3>Historial de Movimientos</h3>
          <p>Total: <span>{{ movimientos.length }} movimientos</span></p>
        </header>
        <article 
          v-for="(mantenimiento, index) in mantenimientos" 
          :key="mantenimiento.id" 
          class="modal__article modal__article--movement"
          :aria-labelledby="'maintenance-title-' + mantenimiento.id"
        >
          <div class="modal__article-line">
            <i class="fas fa-tools" aria-hidden="true"></i>
            <span v-if="index < mantenimientos.length" class="modal__article-line-separator" aria-hidden="true"></span>
          </div>

          <div class="modal__article-content">
            <header class="modal__article-header modal__article-header--movement">
              <h5 :id="'maintenance-title-' + mantenimiento.id" class="modal__article-title">{{ mantenimiento.title }}</h5>
              <time :datetime="mantenimiento.date">{{ formatDate(mantenimiento.date) }}</time>
            </header>

            <section class="modal__article-transfer">
              <div class="modal__article-transfer-group">
                <div class="modal__article-transfer-item">
                  <i class="fas fa-arrow-right text-[#CE1126] itemRojo" aria-hidden="true"></i>
                  <p>De:</p>
                  <span>{{ mantenimiento.estado_anterior || 'Operativo' }}</span>
                </div>

                <div class="modal__article-transfer-item">
                  <i class="fas fa-arrow-right text-[#CE1126] itemVerde" aria-hidden="true"></i>
                  <p>A:</p>
                  <span>{{ mantenimiento.status }}</span>
                </div>
              </div>

              <p class="modal__article-transfer-note">
                "{{ mantenimiento.description }}"
              </p>

              <div class="modal__article-user modal__article-user--movement">
                <i class="fas fa-user-cog text-[#002D62]" aria-hidden="true"></i>
                <p><strong>Técnico:</strong> {{ mantenimiento.technician }}</p>
              </div>
            </section>
          </div>
        </article>
      </div>

      <!-- PIE DE PÁGINA COMÚN -->
      <div class="modal__footer">
        <article class="modal__footer-card">
          <span>{{ mantenimientos.length }}</span>
          <p>Mantenimientos</p>
        </article>
        <article class="modal__footer-card">
          <span>{{ usuarios.length }}</span>
          <p>Usuarios</p>
        </article>
        <article class="modal__footer-card">
          <span>{{ movimientos.length }}</span>
          <p>Movimientos</p>
        </article>
      </div>
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
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal__content {
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal__close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #666;
}

.modal__title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #023670;
  display: flex;
  align-items: center;
  gap: 10px;
}

/* estilos del encabezado del modal  */
.modal__subtitle{
    background: linear-gradient(to right, #EFF6FF,#fff);
    border: 1px solid #c4deff;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 20px;
}
.modal__subtitle-icon{
    background: #023670;
    color: #fff;
    padding: 20px;
    font-size: 25px;
    border-radius: 8px;
}
.modal__subtitle-name{
    font-weight: 600;
    font-size: 18px;
}
.modal__subtitle-code{
    color: #023670;
    font-weight: 600;
}
.modal__subtitle-data{
    color: #666;
    font-size: 14px;
    display: flex;
    gap: 10px;
}
.modal__subtitle-data-item i{
    margin-right: 2px;
}

/* aqui estan los links para dirigir a otros modales */
.modal__links{
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    background-color: #ddd;
    padding: 5px;
    margin: 20px 0;
}
.modal__links-item{
    padding: 5px 10px;
    border-radius: 20px;
    border: none;
    background: none;
    display: flex;
    gap: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}
.modal__links-item--active{
    background: #fff;
}

/* aqui estan el encabezado y los articles (mantenientos)  */
/* encabezado  */
.modal__container-articles{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.modal__container-articles-header{
    display: flex;
    justify-content: space-between;
}
.modal__container-articles-header h3{
    font-size: 16px;
    font-weight: 500;
    color: #222;
}
.modal__container-articles-header p{
    font-size: 14px;
    color: #666;
}

/* articles de mantenimientos */

.modal__article{
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #ddd;
    border-left: 4px solid #023670;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.modal__article--movement{
  display: flex;
  flex-direction: row;
  border: none;
  padding: 0;
}
.modal__article--active{
    border-left-color: #00C950;
}

.modal__article-header{
    display: flex;
    justify-content: space-between;
}
.modal__article-header h4{
    font-size: 16px;
    font-weight: 600;
    color: #222;
}
.modal__article-info{
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
.modal__article-info-user{
    display: flex;
    gap: 5px;
    align-items: center;
    margin-left: 5px;
}
.modal__article-info-user i{
    color: #023670;
    font-size: 14px;
}
.modal__article-info-user p{
    font-size: 14px;
}

/* articles de usuarios */
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

/* articles de movimientos */
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
    height: 40px;
    width: 2px;
    background-color: #ddd;
    position: absolute;
    bottom: -40px;
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
    align-items: center;
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
.modal__article-status{
  width: fit-content;
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
.modal__footer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    border-top: 1px solid #ddd;
    padding-top: 20px;
    margin-top: 20px;
}
.modal__footer-card span{
    font-size: 20px;
    color: #023670;
    font-weight: 600;
}
.modal__footer-card p{
    font-size: 14px;
    color: #666;
}

/* separador */
.modal__article-separator.circleGris {
    width: 4px;
    height: 4px;
    background-color: #666;
    border-radius: 50%;
}

/* Responsive */
@media (max-width: 768px) {
    .modal__content {
        width: 95%;
        padding: 15px;
    }
    
    .modal__subtitle {
        flex-direction: column;
        text-align: center;
        gap: 10px;
    }
    
    .modal__links {
        flex-direction: column;
        gap: 5px;
    }
    
    .modal__article-fecha {
        flex-direction: column;
        gap: 10px;
    }
    
    .modal__footer {
        flex-direction: column;
        gap: 15px;
    }
}
</style>