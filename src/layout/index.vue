<script lang="ts">
import { defineComponent } from 'vue'
import Header from './components/Header/index.vue'
import AppMain from './components/AppMain.vue'
export default defineComponent({
    components: {
        Header,
        AppMain
    },
    setup() {

    },
})
</script>
<template>
    <div class="app-wrapper">
        <Header />
        <div class="main-container">
            <AppMain />
        </div>
    </div>
</template>
<style scoped>
.app-wrapper {
    /* display: flex; */
    height: 100%;
    width: 100%;
}
.main-container {
    width: 100%;
    height: 100%;
}
</style>
