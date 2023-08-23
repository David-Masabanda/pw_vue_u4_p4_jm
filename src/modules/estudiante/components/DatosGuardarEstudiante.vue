<template>
  <div class="datos">
    <h1> Guardar Estudiante</h1>
    <img src="https://cdn-icons-png.flaticon.com/512/3286/3286269.png" alt="">
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
    <label for="">Fecha</label>
    <input v-model="fecha" type="text" />
    <label for="">Provincia</label>
    <input v-model="provincia" type="text" />
    <button type="button" class="btn btn-outline-primary" @click="guardarEstudiante">Guardar</button>
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
      fecha: null,
    };
  },

  methods: {
    async guardarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: this.provincia,
        fechaNacimiento: this.fecha
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
        text-align: center;
        margin-left: 500px;
        grid-template-columns: repeat(2, 1fr);
        width: 30%;
    }

    button{
        margin-top: 10px;
        margin-bottom: 10px;
        grid-column: span 2;
        width: 50%;
        margin-left: auto;
        margin-right: auto;    
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