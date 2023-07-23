<script setup>
import {ref, watchEffect} from "vue";
import {useFetch} from "@/fetch";
import {useRoute} from "vue-router";
import CustomButton from "@/components/CustomButton.vue";


const cafeId = ref(useRoute().params.id)
const cafe = ref(null)

watchEffect(() => {
  const response = useFetch(`https://bandaumnikov.ru/api/test/site/get-view?id=${cafeId.value}`)
  cafe.value = response.data
})

</script>

<template>
  <div class="container mx-auto">
    <div class="flex justify-center ">
      <div class="shadow-lg p-4 m-5">
        <div v-if="cafe?.value?.photo">
          <img
              class="flex w-fit h-[500px] object-cover m-auto"
              :src="cafe?.value?.photo"
              :alt="cafe?.value?.name">
        </div>
        <div v-else>
          <img
              class="flex w-fit h-[500px] object-contain m-auto"
              src="../assets/no-photos.svg"
              alt="Фотографии нет">
        </div>
        <div class="flex items-center mt-4 gap-5">
          <h1 class="text-lg">{{ cafe?.value?.name }}</h1>
          <p v-if="cafe?.value?.cuisine" class="text-base"><span class="font-medium">Кухня:</span> {{
              cafe?.value?.cuisine
            }}</p>
          <p v-if="cafe?.value?.business_lunch">Бизнес-ланч: от {{ cafe?.value?.price }}₽.</p>
        </div>
        <div class="flex flex-col">
          <p v-if="cafe?.value?.address">Адрес: {{ cafe?.value?.address }}</p>
          <p v-if="cafe?.value?.landmark">Ориентир: {{ cafe?.value?.landmark }}</p>
          <p v-if="cafe?.value?.distance">А как далеко? Всего {{ cafe?.value?.distance }}м. от метро</p>
          <p v-if="cafe?.value?.time">А сколько идти? Всего {{ cafe?.value?.time }} минут</p>
        </div>
        <RouterLink :to="{name: 'home'}">
          <CustomButton class="mt-3">На главную</CustomButton>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<style>

</style>
