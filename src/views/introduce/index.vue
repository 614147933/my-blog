<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import useWindowResize from "../../utils/hooks/useWindowResize";
export default defineComponent({
    setup() {
        // 屏幕高度，宽度hook
        const { width, height } = useWindowResize();
        return {
            height
        }
    },
})
</script>
<template>
    <div class="page-wrapper">
        <div class="banner" :style="{ height: height + 'px' }">
            <div class="banner-img">
                <img src="../../assets/images/bar.png" />
            </div>
            <div class="banner-backgroundgreen" :style="{ height: height + 'px' }"></div>
        </div>
    </div>
    <div class="bottom"></div>
</template>
<style lang="less" scoped>
.page-wrapper {
    display: block;

    .banner-img {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-40%) translateY(-50%);
        z-index: 99;
        img {
            height: 500px;
            width: 500px;
        }
    }
    .banner-backgroundgreen {
        background-image: url("../../assets/images/bg-green.png");
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
    }

    .second {
        height: 200px;
        width: 100%;
        background: red;
        position: relative;
    }
}
.bottom {
    height: 150px;
    background: #303358;
    position: relative;
}
</style>
