<script setup>

</script>

<template>
  <button class="submit__btn">
    <slot></slot>
  </button>
</template>

<style scoped>
.submit__btn {
  color: #ffffff;
  background: #3B82F6;
  border: 1px solid #3B82F6;
  padding: 0.75rem 1.25rem;
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
  border-radius: 6px;
}

.submit__btn:hover {
  background: #2563eb;
  color: #ffffff;
  border-color: #2563eb;
}

.submit__btn:focus {
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #9dc1fb, 0 1px 2px 0 black;
}
</style>