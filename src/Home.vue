<template>
  <div>
    <div>Edad:{{ age }} años</div>
    <button @click="incEdad">incremento</button>
    <button @click="descEdad">decremento</button>

    <!--Component-->
    <Information :fullName="fullName" />
  </div>
  
</template>

<script setup>
import Information from "./components/Information.vue";
import {ref} from "vue";
 
  //Variables
  const age = ref(18);
  const fullName = "Andrea Castro";

  //Functions
  function descEdad() {
      age.value--;
    }

  function incEdad() {
      age.value++;
    }
</script>

<style></style>
