<template>
  <div class="datos">
    <h1>Consultar estudiante</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/3176/3176238.png" alt="">
    <input v-model="cedula" type="text">
    <button @click="consultarEstudiante">Consultar</button>
    <label for="">Nombre</label>
    <input v-model="nombre" type="text">
    <label for="">Apellido</label>
    <input v-model="apellido" type="text">
    
  </div>
</template>

<script>
import { obtenerEstudianteFachada, obtenerEstudianteFachadaAXIOS } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null
    };
  },

  methods: {
    async consultarEstudiante() {
      const data=await obtenerEstudianteFachada(this.cedula);
      this.nombre=data.nombre;
      this.apellido=data.apellido;
      console.log(data);
    },
  },
};
</script>

<style scoped>
    .datos{
        display: grid;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin-left: 500px;
        grid-template-columns: repeat(2, 1fr);
        width: 30%;
    }

    button{
        margin-top: 10px;
        margin-bottom: 10px;
    }
    img{
      grid-column: span 2;
      max-width: 50%;
      margin-bottom: 10px;
      margin-left: auto;
      margin-right: auto;

    }
    h1{
      grid-column: span 2;
      text-align: center;
    }
</style>