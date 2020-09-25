<template>
    <div class="list-wrapper">
        <div class="row">
            <div class="col">
                <h4>Draggable with footer</h4>

                <!-- tag & transition-group, draggable -->
                <draggable tag="transition-group" class="list-group" animation="400" draggable=".item">

                    <div class="list-group-item item" v-for="elem in list" :key="elem.id">
                        {{ elem.name }}
                    </div>

                    <!-- slot 선택, key 필수(draggable 태그에 tag="transition-group" 때문) -->
                    <button slot="header" key="delete" class="btn btn-sm btn-danger" @click="replace">비우기</button>

                    <!-- slot 선택, key 필수 (draggable 태그에 tag="transition-group" 때문) -->
                    <button slot="footer" key="add" class="btn btn-sm btn-primary" @click="add">추가</button>

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
    export default {
        name: "HeaderAndFooterSlot",
        components: {
            draggable
        },
        data() {
            return {
                list: [
                    { name: '데이빗', id: 0 },
                    { name: '마틴', id: 1 },
                    { name: '토니', id: 2 },
                ]

            }
        },
        methods: {
            add() {
                this.list.push({
                    id: this.list.length,
                    name: '샘플' + this.list.length
                })
            },
            replace() {
                this.list = []
            }
        }
    }
</script>

<style scoped>
    .v-move {
        transition: transform 0.5s;
    }

</style>