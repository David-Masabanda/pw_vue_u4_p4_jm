<template>
  <div class="datos">
    <input v-model="id" type="text" />
    <button @click="eliminarEstudiante2">Eliminar</button>
  </div>
</template>

<script>
import { eliminarEstudianteFachada, eliminarPresentarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
  data() {
    return {
      id: null,
    };
  },

  methods: {
    async eliminarEstudiante() {
      await eliminarEstudianteFachada(this.id);
    },
     async eliminarEstudiante2() {
      await eliminarEstudianteFachada(this.id);
    },
  },
};
</script>

<style>
</style>