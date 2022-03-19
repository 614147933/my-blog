<script lang="ts">
import { defineComponent } from 'vue'
import { useWindowScroll, useWindowResize } from "../../../utils/hooks/useWindowResize";
export default defineComponent({
    setup() {
        // 屏幕高度，宽度hook
        const { height } = useWindowResize();
        const { scrollTop } = useWindowScroll();
        return {
            scrollTop,
            height
        }
    },
})
</script>

<template>
    <div id="header" :class="[scrollTop > 150 ? 'reveal' : 'alt']">
        <div class="header-logo">
            <img src="../../../assets/logo/logo.png" />
        </div>
        <div class="nav">
            <div>首页</div>
            <div>记录</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
#header {
    background: #fff;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 8%);
    color: inherit;
    cursor: default;
    font-size: 0.8em;
    left: 0;
    padding: 0.5em 2.5em;
    top: 0;
    z-index: 1000;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    &.reveal {
        position: sticky;
        animation: reveal-header 0.5s;
    }

    &.alt {
        background: transparent;
        box-shadow: none;
        color: #fff;
    }

    @keyframes reveal-header {
        0% {
            top: -5em;
        }

        100% {
            top: 0;
        }
    }
    .header-logo {
        img {
            widows: 50px;
            height: 50px;
        }
    }
}
</style>