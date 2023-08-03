<template>
    <div class="datos">
    <label for="">ID</label>
    <input v-model="id" type="text" />
    <label for="">Cedula</label>
    <input v-model="cedula" type="text" />
    <label for="">Nombre</label>
    <input v-model="nombre" type="text" />
    <label for="">Apellido</label>
    <input v-model="apellido" type="text" />
    <label for="">Provincia</label>
    <input v-model="provincia" type="text" />
    <button @click="actualizarEstudiante">Actualizar</button>
  </div>
</template>

<script>
import { actualizarEstudianteFachada } from "../helpers/EstudianteCliente.js";
export default {
    
  data() {
    return {
        id: null,
      cedula: null,
      nombre: null,
      apellido: null,
      provincia: null,
    };
  },

  methods: {
    async actualizarEstudiante() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido,
        provincia: this.provincia,
      };
      await actualizarEstudianteFachada(data,this.id);
    },
  },

}
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