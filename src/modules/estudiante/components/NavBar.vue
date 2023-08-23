<template>
  <div class="rutas">
    <router-link type="button" class="btn btn-outline-success" to="/consultar"> Consultar </router-link>
    <router-link type="button" class="btn btn-outline-secondary" to="/guardar"> Guardar </router-link>
    <router-link type="button" class="btn btn-outline-primary" to="/actualizar"> Actualizar </router-link>
    <router-link type="button" class="btn btn-outline-danger" to="/eliminar"> Eliminar </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.rutas{
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 500px;
  grid-template-columns: repeat(4, 2fr);
  width: 30%;
  font-size: 20px;
  font-weight: bold;
  background-color: white;
  margin-top: 15px;
  margin-bottom: 15px;
}

</style>