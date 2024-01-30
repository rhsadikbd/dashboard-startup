<template>
    <div class="ml-20">
        <button @mouseup="open" class="bg-green-600 text-white px-3">Hover me</button>
        <div v-if="menu" class="bg-red-600 w-[300px] h-[300px] mt-5"></div>
    </div>
</template>



<script setup>
import { ref } from 'vue';
let menu = ref(false)
const open = () => {
    menu.value = !menu.value
}
</script>