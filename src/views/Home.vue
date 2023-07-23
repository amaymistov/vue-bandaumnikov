<script setup>
import {useFetch} from "@/fetch";
import {ref} from "vue";
import CardList from "@/components/CardList.vue";

const url = ref('https://bandaumnikov.ru/api/test/site/get-index')
const {data} = useFetch(url.value)

</script>

<template>
  <div class="container mx-auto">
    <CardList :data="data"/>
  </div>
</template>


<style>

</style>