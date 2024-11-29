<template>
  <div class="margin-top">
    <p class="text-weight-bold">Esto viene desde otro componente</p>

    <p>
      Hola soy <label class="text-weight-bold">{{ fullName }}</label> y vengo de
      las propiedades de un componente: <label>props</label>
    </p>
  </div>

  <!--Directiva de v-for-->

  <div class="margin-top text-weight-bold">V-FOR</div>
  <p class="">
    Estoy utilizando v-for para usarla como directiva para poder recorrer mi
    arreglo de colores
  </p>
  <div v-for="(color, index) in colors">
    <p>{{ color }}</p>
  </div>

  <!--Directiva de v-if-->
  <div class="margin-top text-weight-bold">V-IF</div>

  <div>
    Estoy usando la directa v-if para condicionar lo que quiero mostrar
    dependiendo del valor de mi variable
  </div>

  <div class="margin-top">Estoy haciendo mi tarea:</div>

  <div v-if="isDoingHomework">Si</div>

  <div v-else></div>

  <p class="margin-top text-weight-bold">SLOT</p>
  <InformationSlot>
    <p>Contenido del slot</p>
  </InformationSlot>


</template>

<script setup>
import { ref } from "vue";
import InformationSlot from "./InformationSlot.vue";
//Props
const props = defineProps({
  fullName: {
    type: String,
  },
});

//Variables
const colors = ["Rojo", "Azul", "Verde", "Morado", "Amarillo"];
const isDoingHomework = ref(true);
</script>

<style scoped>
.margin-top {
  margin-top: 30px;
}

.text-weight-bold {
  font-weight: bold;
}
</style>
