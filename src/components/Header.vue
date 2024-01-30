<template>
    <header class="h-[48px] px-2 border-b flex items-center justify-between">
        <div class="flex gap-3 md:gap-8 items-center">
            <span @click="openSidebarHandler(!openSidebar)"
                class="material-icons bg-clr-blue-light text-clr-primary w-9 h-9 leading-9 text-center rounded-full cursor-pointer select-none text-2xl active:bg-blue-100">menu</span>
            <img class="h-8" src="../assets/images/nipro-logo.png" alt="">
            <h1 class="font-medium text-clr-primary text-2xl font-primary hidden lg:block">NIPRO JMI Pharma Ltd.</h1>
        </div>
        <div @click="openMenu = !openMenu" ref="myDiv" v-click-outside="handleClickOutside"
            class="flex items-center gap-3 cursor-pointer">
            <img class="w-10 h-10 object-fit border rounded-full border-clr-primary" src="../assets/images/user.jpg" alt="">
            <div>
                <div class="flex items-center gap-1">
                    <h5 class="text-clr-primary font-primary font-medium text-sm leading-none">Md. Lokman Hossain</h5>
                    <span class="material-icons text-clr-primary">expand_more</span>
                </div>
                <p class="font-primary text-xs leading-none text-clr-text">Sr. E-I as DIC (DHK)</p>
            </div>
        </div>
    </header>
    <ul v-if="openMenu" class="w-[250px] border-t border-r border-l absolute right-1 top-[48px] shadow-md">
        <li class="flex items-center gap-3 cursor-pointer border-b p-2">
            <img class="w-12 h-12 object-fit border rounded-full border-clr-primary" src="../assets/images/user.jpg" alt="">
            <div>
                <h5 class="text-clr-primary font-primary font-medium text-sm leading-2">Md. Lokman Hossain
                </h5>
                <p class="font-primary text-xs text-clr-text">Depot In-Charge</p>
            </div>
        </li>
        <li v-for="user in userInfo" :key="user.label"
            class="flex items-center gap-3 border-b p-2 cursor-pointer transition-colors group hover:bg-clr-blue-light">
            <span
                class="material-icons bg-clr-blue-light transition-colors group-hover:bg-clr-white text-clr-primary w-8 h-8 leading-8 text-center rounded-full cursor-pointer select-none text-xl active:bg-blue-100">{{
                    user.icon }}</span>
            <p class="font-primary text-sm text-clr-text group-hover:text-clr-primary transition-colors">{{ user.label
            }}</p>
        </li>
    </ul>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineEmits } from 'vue';
let openSidebar = ref(false)
let openMenu = ref(false)
const emit = defineEmits(['openSidebar'])
const myDiv = ref(null);
const userInfo = ref([
    { icon: 'swap_horiz', label: 'Switch Role' },
    { icon: 'settings', label: 'Settings' },
    { icon: 'help', label: 'Help' },
    { icon: 'password', label: 'Change Password' },
    { icon: 'lock', label: 'Lock Screen' },
    { icon: 'logout', label: 'Logout' },
])

const handleClickOutside = (event) => {
    if (myDiv.value && !myDiv.value.contains(event.target)) {
        openMenu.value = false;
    }
};

const openSidebarHandler = (value) => {
    openSidebar = value;
    emit('openSidebar', value);

}

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener('click', handleClickOutside);
});


</script>

<style lang="scss" scoped></style>