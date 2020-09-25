<template>
    <div class="list-wrapper">
        <div class="row">
            <div class="col-2">
                <button class="btn btn-sm btn-primary" @click="add">추가</button>
            </div>
            <div class="col-8">
                <h3>Draggable {{ draggingInfo }}</h3>

                <!-- handle -->
                <draggable animation="400" class="list-group" tag="ul" :list="list" handle=".handle">

                    <li class="list-group-item" v-for="(elem, index) in list" :key="elem.id">
                        <h3 class="handle">≡</h3>

                        {{ elem.name }} {{ elem.id }}

                        <div class="input-group align-middle">
                            <input type="text" class="form-control">
                            <div class="input-group-append">
                                <span class="input-group-text bg-white close text-danger" style="cursor: pointer" @click="removeAt(index)">x</span>
                            </div>
                        </div>

                    </li>

                </draggable>
            </div>
            <div class="col">
                <json-viewer :value="list" :expand-depth=5 />
            </div>
        </div>
    </div>

</template>

<script>
    import draggable from 'vuedraggable'
    let id = 2
    export default {
        name: "Handle",
        components: {
            draggable
        },
        data() {
            return {
                list: [
                    { name: '데이빗', id: 0 },
                    { name: '마틴', id: 1 },
                    { name: '토니', id: 2 },
                ],
                dragging: false
            }
        },
        computed: {
            draggingInfo() {
                return this.dragging ? '드래그 중' : ''
            }
        },
        methods: {
            removeAt(index) {
                // 잘라내기
                return this.list.splice(index, 1)
            },
            add() {
                this.list.push({ id: ++id, name: 'sample' })
            }
        }

    }
</script>

<style scoped>

</style>