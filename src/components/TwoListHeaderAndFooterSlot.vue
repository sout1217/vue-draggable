<template>
    <div class="list-wrapper">
        <div class="row">
            <div class="col">
                <h4>list 1</h4>

                <!-- group, draggable -->
                <draggable :list="list1" class="list-group" group="people" draggable=".item">
                    <div class="list-group-item item" v-for="elem in list1" :key="elem.id">
                        {{ elem.name }} {{ elem.id }}
                    </div>
                    <!-- slot -->
                    <div slot="footer" class="btn-group">
                        <button class="btn btn-sm btn-primary">추가</button>
                        <button class="btn btn-sm btn-danger">제거</button>
                    </div>
                </draggable>
            </div>
            <div class="col">
                <h4>list 2</h4>
                <!-- group, draggable -->
                <draggable :list="list2" class="list-group" group="people" draggable=".item">
                    <div class="list-group-item item" v-for="elem in list2" :key="elem.id">
                        {{ elem.name }} {{ elem.id }}
                    </div>
                    <!-- slot -->
                    <div slot="footer" class="btn-group">
                        <button class="btn btn-sm btn-primary">추가</button>
                        <button class="btn btn-sm btn-danger">제거</button>
                    </div>
                </draggable>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <json-viewer :value="list1" :expand-depth=2 />
            </div>
            <div class="col">
                <json-viewer :value="list2" :expand-depth=2 />
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'
    export default {
        name: "TwoListHeaderAndFooterSlot",
        components: {
            draggable
        },
        data() {
            return {
                list1: [
                    { name: '데이빗', id: 0 },
                    { name: '마틴', id: 1 },
                    { name: '토니', id: 2 },
                ],
                list2: [
                    { name: '스칼렛', id: 0 },
                    { name: '그린', id: 1 },
                    { name: '탈리야', id: 2 },
                ]
            }
        }
    }
</script>

<style scoped>

</style>