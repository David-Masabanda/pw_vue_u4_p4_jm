<template>
  <div class="datos">
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
    },
  },
};
</script>

<style>
</style>