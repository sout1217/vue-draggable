<template>
    <div class="list-wrapper">

        <div class="row">

            <div class="col">

                <h4>TwoList 1</h4>

                <!-- 같은 group 으로 설정해주어야만 드래깅이 가능하다 -->
                <!-- group -->
                <draggable class="list-group" :list="list1" group="people">
                    <div class="list-group-item" v-for="elem in list1" :key="elem.name">
                        {{ elem.name }} {{ elem.id }}
                    </div>
                </draggable>

            </div>

            <div class="col">

                <h4>TwoList 2</h4>

                <draggable class="list-group" :list="list2" group="people">
                    <div class="list-group-item" v-for="elem in list2" :key="elem.name">
                        {{ elem.name }} {{ elem.id }}
                    </div>
                </draggable>

            </div>

            <div class="col">
                <json-viewer :value="list1" :expand-depth=5 boxed />
            </div>
            <div class="col">
                <json-viewer :value="list2" :expand-depth=5 boxed />
            </div>

        </div>

    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "TwoLists",
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