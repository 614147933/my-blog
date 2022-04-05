<template>
    <div>
        <div class="drop-zone">
            <div v-for="item in listOne" :key="item.title" class="drag-el">{{ item.title }}</div>
        </div>
        <div class="drop-zone">
            <div
                v-for="item in listTwo"
                :key="item.title"
                class="drag-el"
                draggable
                @dragstart="startDrag($event, item)"
            >{{ item.title }}</div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue'

export default defineComponent({
    setup() {
        let items = reactive([
            {
                id: 0,
                title: 'Item A',
                list: 1
            },
            {
                id: 1,
                title: 'Item B',
                list: 1
            },
            {
                id: 2,
                title: 'Item C',
                list: 2
            }
        ])
        const listOne = computed(() => {
            return items.filter(item => item.list === 1)
        })

        const listTwo = computed(() => {
            return items.filter(item => item.list === 2)
        })

        const startDrag = (evt: any, item: any) => {
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
        }

        const onDrop = (evt: any, list: any) => {
            const itemID = evt.dataTransfer.getData('itemID')
            items.find(item => item.id == itemID)
        }


        return {
            listOne,
            listTwo,
            onDrop
        }
    },
    methods: {
        startDrag: (evt: any, item: any) => {
            console.log('触发了事件');
            evt.dataTransfer.dropEffect = 'move'
            evt.dataTransfer.effectAllowed = 'move'
            evt.dataTransfer.setData('itemID', item.id)
        },


    }
})
</script>
<style lang="less" scoped>
.drop-zone {
    background-color: #eee;
    margin-bottom: 10px;
    padding: 10px;
}

.drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
}
</style>
