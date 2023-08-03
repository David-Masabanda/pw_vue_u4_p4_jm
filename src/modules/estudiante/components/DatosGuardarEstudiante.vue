<template>
  <div class="datos">
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
    <label for="">Provincia</label>
    <input v-model="provincia" type="text" />
    <button @click="guardarEstudiante">Guardar</button>
  </div>
</template>

<script>
import { ingresarEstudianteFachada } from "../helpers/EstudianteCliente.js";

export default {

  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      provincia: null,
    };
  },

  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: this.provincia,
      };
      await ingresarEstudianteFachada(data);
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