<script setup>
import {ref, watchEffect} from "vue";
import Modal from "@/components/Modal.vue";
import {useFetch} from "@/fetch";
import CustomButton from "@/components/CustomButton.vue";

const props = defineProps({
  data: Object
})

const cafe = ref(null)

const getRandomCafe = () => {
  watchEffect(() => {
    const randomId = ref(Math.floor(Math.random() * 23 + 1))
    const url = `https://bandaumnikov.ru/api/test/site/get-view?id=${randomId.value}`
    const response = useFetch(url)
    cafe.value = response.data
  })
}

const showModal = ref(false)

const openModel = () => {
  getRandomCafe()
  showModal.value = !showModal.value
}

</script>

<template>
  <div class="flex flex-row flex-wrap gap-10 justify-between mt-3">
    <div
        class="w-80 border-2 border-r-2 p-3 box-content flex flex-col justify-between" v-for="item in data"
        :key="item.id">
      <div>
        <RouterLink v-if="item.photo" :to="{name: 'about', params:{id: item.id}}">
          <img
              class="flex w-fit h-[300px] object-cover m-auto"
              :src="item.photo"
              :alt="item.name">
          <h1 class="text-2xl mt-4">{{ item.name }}</h1>
        </RouterLink>
        <RouterLink v-else :to="{name: 'about', params:{id: item.id}}">
          <img
              class="flex w-fit h-[300px] object-contain m-auto"
              src="../assets/no-photos.svg"
              alt="Фотографии нет">
          <h1 class="text-2xl mt-4">{{ item.name }}</h1>
        </RouterLink>
      </div>
      <div class="flex flex-row gap-2 mb-8">
        <p v-if="item.cuisine"><span class="font-bold">Кухня:</span> {{ item.cuisine }}.</p>
        <p v-if="item.price"><span class="font-bold">От:</span> {{ item.price }}₽.</p>
      </div>
      <div class="flex gap-3 justify-between">
        <RouterLink :to="{name: 'about', params:{id: item.id}}">
          <CustomButton>Подробнее</CustomButton>
        </RouterLink>
      </div>
    </div>
  </div>
  <button id="show-modal" @click="openModel" class="random__btn">Мне повезет</button>
  <Teleport to="body">
    <Modal :cafe="cafe" :show="showModal" @close="openModel"/>
  </Teleport>
</template>

<style scoped>
.random__btn {
  color: #ffffff;
  background: #3B82F6;
  border: 1px solid #3B82F6;
  padding: 0.75rem 1.25rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 6px;
  position: fixed;
  right: 15px;
  bottom: 30px;
}
</style>