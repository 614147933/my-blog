<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {
        
    },
})
</script>
<template>
    <div class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </div>
</template>
<style scoped>

</style>
