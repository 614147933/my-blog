<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
<template>
    <h1>hello 小熊</h1>
    <div class="introduce-backgroundgreen"></div>
</template>
<style lang="less" scoped>
.introduce-backgroundgreen{
    background-image: url('../../assets/images/bg-green.png');
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: -1;
}
</style>
