<template>
  <div class="rutas">
    <router-link to="/consultar"> Consultar </router-link>
    <router-link to="/guardar"> Guardar </router-link>
    <router-link to="/actualizar"> Actualizar </router-link>
    <router-link to="/eliminar"> Eliminar </router-link>
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
  background-color: rgb(137, 151, 220);
}

</style>