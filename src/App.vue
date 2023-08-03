<template>
  <img alt="Vue logo" src="./assets/logo.png">
  
  <EliminarEstudiante/>
</template>

<script>
import ActualizarEstudiante from './modules/estudiante/pages/ActualizarEstudiante.vue'
import ConsultaEstudiante from './modules/estudiante/pages/ConsultaEstudiante.vue'
import EliminarEstudiante from './modules/estudiante/pages/EliminarEstudiante.vue'
import GuardarEstudiante from './modules/estudiante/pages/GuardarEstudiante.vue'



export default {
  name: 'App',
  components: {
    ConsultaEstudiante,
    GuardarEstudiante,
    ActualizarEstudiante,
    EliminarEstudiante
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
