import { onMounted, onUnmounted, ref } from "vue";

export function useWindowResize() {
    const width = ref(0);
    const height = ref(0);


    function onResize() {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
    }

    onMounted(() => {
        window.addEventListener("resize", onResize);
        onResize();
    });

    onUnmounted(() => {
        window.removeEventListener("resize", onResize);
    });

    return {
        width,
        height
    };
}
export function useWindowScroll() {
    const scrollTop = ref(0);
    // 通用逻辑: 基于scroll事件得到当前距离顶部的滚动距离 然后返回
    window.addEventListener('scroll', () => {
        scrollTop.value = document.documentElement.scrollTop
    })
    return {
        scrollTop
    };
}