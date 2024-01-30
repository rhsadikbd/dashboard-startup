<template>
    <div>
        <ul :class="{ 'w-[60px]': !sideIsOpen }"
            class="absolute w-[300px] top-[48px] bg-clr-white left-0 transition-all border-r pt-20">
            <li v-for="(menu, index) in menus" :key="index">
                <a href="#" class="flex items-center py-3 rounded-sm pl-0 transition-colors hover:bg-clr-blue-light">
                    <span class="material-icons text-clr-icon w-[60px] text-center text-md">{{ menu.icon }}</span>
                    <h5 v-if="sideIsOpen" class="text-sm text-clr-icon font-medium uppercase">{{ menu.title }}</h5>
                    <span v-if="sideIsOpen" class="material-icons ml-auto pr-2">expand_more</span>
                    <!-- <span class="material-icons">expand_less</span> -->
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    sideIsOpen: () => { }
});

let hide = ref(true)
const menus = ref([
    { icon: 'dashboard', title: 'dashboard' },
    { icon: 'build', title: 'configuration' },
    { icon: 'inventory', title: 'inventory' },
    { icon: 'groups', title: 'stakeholders' },
    { icon: 'flag', title: 'sales' },
    { icon: 'account_tree', title: 'operations' },
    { icon: 'real_estate_agent', title: 'procurement' },
    { icon: 'library_books', title: 'reports' }
])
</script>

<style lang="scss" scoped></style>