<script setup>
const props = defineProps({
  cafe: Object,
  show: Boolean
})
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <slot name="header">{{ cafe?.value?.name }}</slot>
        </div>

        <div class="modal-body">
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
        </div>

        <div class="modal-footer">
          <slot name="footer">
            <button
                class="modal-default-button"
                @click="$emit('close')"
            >OK
            </button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>