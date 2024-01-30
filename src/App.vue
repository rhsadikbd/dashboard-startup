<template>
    <div id="master-layout">
        <div id="header">
            <div class="h-[48px] border-b border-clr-border bg-clr-ice flex items-center pl-2">
                <button @click="toggleMenu">
                    <span
                        class="material-icons bg-clr-blue-light w-[35px] h-[35px] rounded-full text-center leading-[35px] text-clr-blue text-2xl select-none active:bg-blue-200">{{
                            menuIcon
                        }}</span>
                </button>
            </div>
        </div>
        <main class="flex">
            <aside id="sidebar">
                <div class="w-[60px] border-r border-clr-border bg-clr-ice fixed left-0 top-[48px]"
                    :class="{ '!w-[300px]': menuIcon == 'close' }"
                    style="height: calc(100vh - 76px);transition: .3s ease-in-out;">

                </div>
            </aside>
            <div id="content" class="ml-[60px]">
                <div id="breadcrumb">
                    <div class="h-[30px] bg-[#b8daff14] border-b border-clr-border">

                    </div>
                </div>
                <div class="border border-clr-border m-3 shadow-[0_0_8px_rgba(2,108,209,.10196078431372549)] rounded-lg"
                    style="height: calc(100vh - 130px); width: calc(100vw - 84px);">
                    <!-- Your content goes from here ... -->
                </div>
            </div>
        </main>
        <footer id="footer">
            <div class="h-[28px] bg-clr-red leading-[28px]">Footer</div>
        </footer>
    </div>
</template>


<script setup>
import { ref } from 'vue';

const menuIcon = ref('menu')
const toggleMenu = () => {
    menuIcon.value = menuIcon.value === 'menu' ? 'close' : 'menu'
}

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
}

html {
    overflow: hidden !important;
}
</style>