<template>
  <div class="datos">
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
        margin-left: 500px;
        grid-template-columns: repeat(2, 1fr);
        width: 30%;
    }
    button{
        
        margin-top: 10px;
    }
</style>