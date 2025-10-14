<template>
  <main id="mainLogin">
    <!-- primera seccion del login lado izquierdo para dispositivos grandes -->
    <section id="primeraSection">
      <div class="containerGeneralUno">
        <i class="fa-solid fa-laptop-code"></i>
        <h1 class="primeraSection__tituloPrincipal">Sistema de Inventario TI</h1>
        <span class="primeraSection__linea"></span>
        <p class="primeraSection__parrafo">Gestión Inteligente de equipos tecnológicos</p>
        <div class="primeraSection__checksContainer">
          <article class="primeraSection__checksContainer">
            <i class="fa-solid fa-check"></i>
            <div class="primeraSection__checksContent">
              <h3>Control Total</h3>
              <p>Administra todo tu inventario desde un solo lugar</p>
            </div>
          </article>
          <article class="primeraSection__checksContainer">
            <i class="fa-solid fa-check"></i>
            <div class="primeraSection__checksContent">
              <h3>Historial Completo</h3>
              <p>Rastrea movimientos y mantenimientos en tiempo real</p>
            </div>
          </article>
          <article class="primeraSection__checksContainer">
            <i class="fa-solid fa-check"></i>
            <div class="primeraSection__checksContent">
              <h3>Reportes Inteligentes</h3>
              <p>Genera reportes personalizados al instante</p>
            </div>
          </article>
        </div>
      </div>
    </section>
    
    <!-- segunda seccion del login lado izquierdo para dispositivos grandes -->
    <section id="segundaSection">
      <div class="containerGeneralDos">
        <img src="../../assets/Logo-Login.png" alt="logo de la contraloria" class="segundaSection__img">
        <div class="segundaSection__titulosPrincipales">
          <h2>Bienvenido</h2>
          <p>Ingresa tus credenciales para acceder</p>
        </div>
        <form class="segundaSection__formulario" @submit.prevent="">
          <div class="formulario__inputContainer">
            <label for="usuario" class="inputContainer__label">Usuario</label>
            <div class="inputContainer__content">
              <i class="fa-solid fa-user form-fa"></i>
              <input type="text" placeholder="Ingresa tu usuario" id="usuario">
            </div>
          </div>
          <div class="formulario__inputContainer">
            <label for="contraseña" class="inputContainer__label">Contraseña</label>
            <div class="inputContainer__content">
              <i class="fa-solid fa-lock form-fa"></i>
              <input type="password" placeholder="Ingresa tu contraseña" id="contraseña">
              <i class="fa-solid fa-eye form-fa"></i>
            </div>
          </div>
         <router-link to="/admin/dashboard"> <button class="formulario__button"><i class="fa-solid fa-arrow-right-to-bracket"></i> Iniciar Sesión</button></router-link>
        </form>
        <span class="lineaNegra"></span>
        <p class="segundaSection__pie-parrafo pie-parrafo1"><i class="fa-solid fa-shield-halved"></i> Acceso seguro y protegido</p>
        <p class="segundaSection__pie-parrafo pie-parrafo2">© 2025 Contraloría General de la República Dominicana</p>
      </div>
    </section>
  </main>
</template>

<script></script>
<style scoped>
  #mainLogin{
    display: flex;
  }
  .containerGeneralUno{
    max-width: 450px;
  }
  /* primera seccion del login lado izquierdo para dispositivos grandes */
  #primeraSection, #segundaSection{
    width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #primeraSection{
    background: #023670;
    color: #fff;
  }
  .fa-laptop-code{
    align-self: flex-start;
    padding: 25px 20px;
    border-radius: 20px;
    background-color: #CE1126;
    font-size: 35px;
    margin-bottom: 30px;
  }
  .primeraSection__tituloPrincipal{
    font-size: 50px;
    line-height: 50px;
  }
  .primeraSection__linea{
    display: block;
    width: 100px;
    height: 5px;
    background: #CE1126;
    border-radius: 20px;
    margin-top: 10px;
  }
  .primeraSection__parrafo{
    margin: 30px 0;
    font-size: 20px;
  }
  /* codigo de los articles de checks  */
  .primeraSection__checksContainer{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 5px 0;
  }
  .fa-check{
    align-self: center;
    color: #06CC7A;
    background: #fff2;
    padding: 15px 15px;
    border-radius: 10px;
  }
  .primeraSection__checksContent h3{
    font-weight: 500;
    font-size: 16px;
  }
  .primeraSection__checksContent p{
    font-size: 14px;
    color: #BDF;
  }

  /* segunda seccion del login lado izquierdo para dispositivos grandes */
  .containerGeneralDos{
    text-align: center;
    width: 450px;
  }
  .segundaSection__img{
    width: 200px;
  }
  .segundaSection__titulosPrincipales{
    margin: 20px;
  }
  .segundaSection__titulosPrincipales h2{
    font-size: 35px;
    font-weight: 700;
  }
  .segundaSection__titulosPrincipales p{
    color: #000a;
  }
  /* estilso para los inputs aqui  */
  .formulario__inputContainer{
    text-align: start;
  }
  .inputContainer__label{
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #333;
  }
  .inputContainer__content {
    width: 100%;
    display: flex;
    align-items: center; /* Centra verticalmente */
    border: 1.5px solid #bbb;
    padding: 10px 15px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .inputContainer__content input {
    outline: none;
    border: none;
    font-size: 15px;
    flex: 1;
    padding-left: 15px;
  }

  .form-fa {
    color: #bbb;
  }

  .fa-eye {
    cursor: pointer;
    margin-left: auto;
  }
  .formulario__button{
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 15px 0;
    border-radius: 8px;
    background: linear-gradient(to right, #CC1126, #A10E1E);
    color: #fff;
    font-size: 16px;
    transition: all .5s;
  }
  .formulario__button i{
    margin-right: 10px;
  }
  .formulario__button:hover{
    background: linear-gradient(to right, #A10E1E, #CC1126);
    transform: translateY(-5px);
    transition: all .5s;
  }
  /* pie del login  */
  .lineaNegra{
    display: block;
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 15px 0;
  }
  .segundaSection__pie-parrafo{
    font-size: 14px;
  }
  .segundaSection__pie-parrafo i{
    color: #023670;
  }
  .pie-parrafo1{
    color: #333;
    margin-bottom: 5px;
  }
  .pie-parrafo2{
    color: #666;
    font-size: 13px;
  }
/* 
  @media (min-width: 1200px) {
    #mainLogin{
      display: flex;
      flex-direction: column;
    }

  } */
</style>
