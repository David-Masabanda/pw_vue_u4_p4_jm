<template>
  <div class="datos">
    <h1> Eliminar Estudiante </h1>
    <img src="https://cdn-icons-png.flarun ticon.com/512/6301/6301508.png" alt="">
    <input v-model="id" type="text" />
    <button @click="eliminarEstudiante">Eliminar</button>
  </div>
</template>

<script>
import { eliminarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      id: null,
    };
  },

  methods: {
    async eliminarEstudiante() {
      await eliminarEstudianteFachada(this.id);
      console.log("Estudiante eliminado")
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
    button{
      width: 50%;
    }
    input{
      margin-left: 80px;
      margin-right: 8px;
    }
</style>