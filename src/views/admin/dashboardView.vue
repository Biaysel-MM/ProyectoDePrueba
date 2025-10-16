<script setup>
import VueApexCharts from 'vue3-apexcharts'
import navbarView from '../iu/navbarView.vue'

// Registrar componente global localmente
const apexchart = VueApexCharts

const series = [
  {
    name: 'Equipos',
    data: [40, 30, 20, 27, 18, 23, 34],
  },
  {
    name: 'Mantenimientos',
    data: [24, 13, 28, 39, 48, 35, 43],
  },
]

const chartOptions = {
  chart: {
    toolbar: { show: false },
    foreColor: '#6b7280',
  },
  xaxis: {
    categories: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  },
  stroke: {
    curve: 'smooth',
    width: 3,
  },
  colors: ['#002D62', '#CE1126'],
  markers: {
    size: 5,
  },
  grid: {
    borderColor: '#e5e7eb',
  },
  tooltip: {
    theme: 'light',
  },
}
</script>

<template>
  <main id="main">
    <navbar-view />
    <section id="sectionDashboard">
      <div class="containerRetringido">
        <!-- el encabezado  -->
        <header class="sectionDashboard__encabezado">
          <div class="encabezado__titulos">
            <h1>Dashboard Principal</h1>
            <p>Resumen general del inventario de equipos TI</p>
          </div>
          <div class="encabezado__buttons">
            <button class="btnExportar" btn><i class="fa-solid fa-download"></i>Exportar</button>
            <button class="btnAdd" btn><i class="fa-solid fa-plus"></i>Nuevo Equipo</button>
          </div>
        </header>
        <div class="sectionDashboard__encabezadoCards">
          <!-- Todas las cards principales  -->
          <article class="encabezadoCards__article">
            <div class="encabezadoCards__content">
              <h3>Total Equipos</h3>
              <h4>1,243</h4>
              <p><span class="article__spanGreen">+12%</span> vs mes anterior</p>
            </div>
            <div class="encabezadoCards__icon">
              <i class="fa-solid fa-desktop"></i>
            </div>
          </article>
          <article class="encabezadoCards__article">
            <div class="encabezadoCards__content">
              <h3>En Uso</h3>
              <h4>987</h4>
              <p><span class="article__spanGreen">+8%</span> vs mes anterior</p>
            </div>
            <div class="encabezadoCards__icon">
              <i class="fa-solid fa-circle-check"></i>
            </div>
          </article>
          <article class="encabezadoCards__article">
            <div class="encabezadoCards__content">
              <h3>En Almacén</h3>
              <h4>156</h4>
              <p><span class="article__spanRed">-5%</span> vs mes anterior</p>
            </div>
            <div class="encabezadoCards__icon">
              <i class="fa-solid fa-warehouse"></i>
            </div>
          </article>
          <article class="encabezadoCards__article">
            <div class="encabezadoCards__content">
              <h3>Mantenimientos</h3>
              <h4>43</h4>
              <p><span class="article__spanGreen">+15%</span> vs mes anterior</p>
            </div>
            <div class="encabezadoCards__icon">
              <i class="fa-solid fa-screwdriver-wrench"></i>
            </div>
          </article>
        </div>
        <!-- evolucion de equipos -->
        <section id="sectionDashboardDatos">
          <div class="sectionDashboardDatos__evolucionDeEquipos">
            <div class="charts-section">
              <div class="chart-grid">
                <div class="card">
                  <div class="card-header">
                    <div class="header-top">
                      <h2 class="card-title">Evolución de Equipos</h2>
                      <div class="legend">
                        <div class="legend-item">
                          <div class="dot dot-equipos"></div>
                          <span>Equipos</span>
                        </div>
                        <div class="legend-item">
                          <div class="dot dot-mantenimientos"></div>
                          <span>Mantenimientos</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card-content">
                    <apexchart type="line" height="300" :options="chartOptions" :series="series" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- actividades recientes -->
          <div class="sectionDashboardDatos__actividadesRecientes">
            <h3>Actividades Recientes</h3>
            <div class="actividadesRecientes__content">
              <div class="containerArticles">
                <span class="content__punto"></span>
                <article class="contentArticle">
                  <h4>Nuevo equipo registrado</h4>
                  <p>CPU Dell Optiplex 7090</p>
                  <div class="pieDeCard">
                    <i class="fa-solid fa-user"></i>
                    <p>Sopoerte TI</p>
                    <span class="puntoNegro"></span>
                    <p>Hace 6 horas</p>
                  </div>
                </article>
              </div>
              <div class="containerArticles">
                <span class="content__punto"></span>
                <article class="contentArticle">
                  <h4>Movimiento de equipo</h4>
                  <p>BN-2024-001 → Depto. Sistemas</p>
                  <div class="pieDeCard">
                    <i class="fa-solid fa-user"></i>
                    <p>Sopoerte TI</p>
                    <span class="puntoNegro"></span>
                    <p>Hace 4 horas</p>
                  </div>
                </article>
              </div>
              <div class="containerArticles">
                <span class="content__punto"></span>
                <article class="contentArticle">
                  <h4>Mantenimiento completado</h4>
                  <p>Proyector Epson EB-X41</p>
                  <div class="pieDeCard">
                    <i class="fa-solid fa-user"></i>
                    <p>Técnico #1</p>
                    <span class="puntoNegro"></span>
                    <p>Hace 6 horas</p>
                  </div>
                </article>
              </div>
              <div class="containerArticles">
                <span class="content__punto"></span>
                <article class="contentArticle">
                  <h4>Nuevo equipo registrado</h4>
                  <p>CPU Dell Optiplex 7090</p>
                  <div class="pieDeCard">
                    <i class="fa-solid fa-user"></i>
                    <p>Sopoerte TI</p>
                    <span class="puntoNegro"></span>
                    <p>Hace 6 horas</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
        <!-- los equipos registrados recientemente aqui  -->
        <div class="equiposRegistradosRecientemente">
          <div class="equiposRegistradosRecientemente__containerTabla">
            <div class="containerTabla__titulo">
              <h3>Equipos Registrados Recientemente</h3>
              <a href="#">Ver todos -></a>
            </div>

            <div class="containerTabla__encabezados">
              <span>BIEN NACIONAL</span>
              <span>TIPO</span>
              <span>USUARIO</span>
              <span>DEPARTAMENTO</span>
              <span>ESTADO</span>
              <span>FECHA</span>
              <span>ACCIONES</span>
            </div>
            <!-- primera fila  -->
            <div class="containerTabla__fila">
              <span class="fila__bien">BN-2024-001</span>
              <span class="fila__tipo"><i class="fa-solid fa-laptop"></i> CPU</span>
              <span>Juan Pérez</span>
              <span class="spanOpaco">Sistemas</span>
              <span class="estado activo">Activo</span>
              <span class="spanOpaco">10/10/2025</span>
              <div class="acciones">
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>

            <!-- Segunda fila -->
            <div class="containerTabla__fila">
              <span class="fila__bien">BN-2024-002</span>
              <span class="fila__tipo"><i class="fa-solid fa-computer"></i> Monitor</span>
              <span>Ana Gómez</span>
              <span class="spanOpaco">Contabilidad</span>
              <span class="estado mantenimiento">En Mantenimiento</span>
              <span class="spanOpaco">11/10/2025</span>
              <div class="acciones">
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>
            <!-- Tercera fila -->
            <div class="containerTabla__fila">
              <span class="fila__bien">BN-2024-003</span>
              <span class="fila__tipo"><i class="fa-solid fa-video"></i> Proyector</span>
              <span>Carlos Ramírez</span>
              <span class="spanOpaco">Capacitación</span>
              <span class="estado mantenimiento">En Mantenimiento</span>
              <span class="spanOpaco">08/10/2025</span>
              <div class="acciones">
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>

            <!-- Cuarta fila -->
            <div class="containerTabla__fila">
              <span class="fila__bien">BN-2024-004</span>
              <span class="fila__tipo"><i class="fa-solid fa-print"></i>Escáner</span>
              <span>Ana Martínez</span>
              <span class="spanOpaco">Archivo</span>
              <span class="estado activo">Activo</span>
              <span class="spanOpaco">07/10/2025</span>
              <div class="acciones">
                <i class="fa-solid fa-eye"></i>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* estilos se la seccion completa del dashboard */
#sectionDashboard {
  margin-left: 250px;
  padding: 20px;
  display: flex;
  justify-content: center;
}

/* estilos del encabezado del dashboard  */
.sectionDashboard__encabezado {
  display: flex;
  justify-content: space-between;
}

.encabezado__titulos h1 {
  font-weight: 500;
}

.encabezado__buttons {
  display: flex;
  gap: 20px;
  height: fit-content;
}

.encabezado__buttons .btnExportar {
  color: #023670;
  border: 2px solid #023670;
  padding: 10px 20px;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;
}

.encabezado__buttons .btnExportar:hover {
  color: #fff;
  background: #023670;
}

.encabezado__buttons .btnExportar i,
.encabezado__buttons .btnAdd i {
  margin-right: 5px;
}

.encabezado__buttons .btnAdd {
  background: #CE1126;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
}

.encabezado__buttons .btnAdd:hover {
  background: #A10E1E;
}

/* estilos de las cards principales del dashboard  */
.sectionDashboard__encabezadoCards {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
}

.encabezadoCards__article {
  display: flex;
  justify-content: space-between;
  width: 250px;
  padding: 20px;
  border: 1px solid #DEE2E6;
  border-radius: 8px;
}

.encabezadoCards__article:hover {
  box-shadow: 0 2px 4px #aaa;
}

.encabezadoCards__article h3 {
  font-weight: 400;
  font-size: 14px;
  color: #666;
}

.encabezadoCards__article h4 {
  font-weight: 600;
  font-size: 25px;
}

.article__spanGreen {
  color: #00A63E;
}

.article__spanRed {
  color: #CE1126;
}

.encabezadoCards__icon i {
  font-size: 18px;
  padding: 10px 12px;
  border-radius: 8px;
}

.encabezadoCards__icon .fa-desktop {
  color: #023670;
  background: #02367011;
}

.encabezadoCards__icon .fa-circle-check {
  color: #00A63E;
  background: #00A63E11;
}

.encabezadoCards__icon .fa-warehouse {
  color: #F54A00;
  background: #F54A0011;
}

.encabezadoCards__icon .fa-screwdriver-wrench {
  color: #CE1126;
  background: #CE112611;
}

/* seccion de los datos  */
#sectionDashboardDatos {
  display: flex;
  justify-content: space-between;
  min-height: 400px;
  gap: 20px;
}

/* estilos del grafico de actividades de equipos  */
.sectionDashboardDatos__evolucionDeEquipos {
  width: 700px;
  border-radius: 8px;
  border: 1px solid #DEE2E6;
}

/* estilos de actividades recientes  */
.sectionDashboardDatos__actividadesRecientes {
  width: 350px;
  border-radius: 8px;
  border: 1px solid #DEE2E6;
}

.sectionDashboardDatos__actividadesRecientes h3 {
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid #DEE2E6;
  font-weight: 400;
  font-size: 16px;
}

.actividadesRecientes__content {
  padding: 30px 20px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.containerArticles {
  display: flex;
  align-items: center;
  gap: 10px;
}

.containerArticles .content__punto {
  padding: 5px;
  border-radius: 100%;
  background: #CE1126;
  height: fit-content;
  align-self: self-start;
  margin: 10px 0 0 0;
}

.contentArticle {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.contentArticle h4 {
  font-weight: 500;
  font-size: 14px;
}

.contentArticle p {
  font-weight: 400;
  font-size: 12px;
  color: #888;
}

.pieDeCard {
  display: flex;
  align-items: center;
  gap: 10px;
}

.puntoNegro {
  padding: 2px;
  border-radius: 100%;
  background: #888;
  height: fit-content;

}

.pieDeCard i {
  color: #888;
}

/* estilos del grafico   */
.charts-section {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.chart-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 1024px) {
  .chart-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.card {
  grid-column: span 3;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.card-header {
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem 1.5rem;
}

.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
}

.legend {
  display: flex;
  gap: 1rem;
  font-size: 0.875rem;
  color: #4b5563;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dot {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
}

.dot-equipos {
  background-color: #002d62;
}

.dot-mantenimientos {
  background-color: #ce1126;
}

.card-content {
  padding: 1.5rem;
}

/* los estilos de los equipos usados recientementes  */
.equiposRegistradosRecientemente {
  margin-top: 20px;
  width: 100%;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  font-family: 'Poppins', sans-serif;
}

.equiposRegistradosRecientemente__containerTabla {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.containerTabla__titulo{
  padding: 20px;
  display: flex;
  justify-content: space-between;
}
.containerTabla__titulo h3, .containerTabla__titulo a{
  font-size: 16px;
  font-weight: 400;
}
.containerTabla__titulo a{
  color: #002d62;
}
.containerTabla__titulo a:hover{
  color: #A10E1E;
}

.containerTabla__encabezados {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: #f8f9fa;
  font-weight: 600;
  text-align: center;
  padding: 20px;
  border-bottom: 1px solid #dee2e6;
  text-align: start;
}

.containerTabla__encabezados span {
  font-size: 12px;
  font-weight: 400;
  color: #444;
}

.containerTabla__fila {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  align-items: center;
  text-align: start;
  padding: 20px;
  border-bottom: 1px solid #f1f1f1;
  transition: background-color 0.3s;
}

.containerTabla__fila:hover {
  background-color: #f9fafb;
}

.containerTabla__fila .fila__bien {
  font-size: 15px;
  font-weight: 600;
  color: #333;
}

.containerTabla__fila .fila__tipo i {
  color: #002d62;
  margin-right: 6px;
}

.estado {
  width: fit-content;
  padding: 4px 12px;
  border-radius: 100px;
  font-weight: 600;
  font-size: 12px;
}

.estado.activo {
  background-color: #DBFCE7;
  color: #1E5D8C;
}

.estado.mantenimiento {
  background-color: #FFEDD4;
  color: #9F2D22;
}

.acciones {
  display: flex;
  gap: 20px;
  font-size: 1.1rem;
}
.spanOpaco{
  color: #666;
  font-size: 16px;
}

.acciones i {
  cursor: pointer;
  transition: color 0.3s;
}

.acciones .fa-eye {
  color: #002d62;
}

.acciones .fa-pen-to-square {
  color: #666;
}

.acciones .fa-trash {
  color: #CE1126;
}
</style>