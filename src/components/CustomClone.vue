<template>
    <div class="list-wrapper">

        <div class="row">
            <div class="col">
                <h3>Draggable 1</h3>

                <!-- :group, :clone -->
                <draggable
                        class="list-group"
                        :list="list1"
                        :group="{name: 'people', pull:'clone', put: false}"
                        :clone="customClone"
                        @change="log"
                >
                    <div class="list-group-item" v-for="elem in list1" :key="elem.id">
                        {{ elem.name }} {{ elem.id }}

                    </div>
                </draggable>
            </div>
            <div class="col">
                <h3>Draggable 2</h3>

                <draggable
                        class="dragArea list-group"
                        :list="list2"
                        group="people"
                        @change="log"
                >
                    <div class="list-group-item" v-for="elem in list2" :key="elem.id">
                        {{ elem.name }} {{ elem.id }}

                    </div>
                </draggable>
            </div>
            <div class="col">
                <json-viewer :value="list1" :expand-depth=5 />
            </div>
            <div class="col">
                <json-viewer :value="list2" :expand-depth=5 />
            </div>
        </div>

    </div>
</template>
<script>
    import draggable from 'vuedraggable'
    export default {
        name: 'custom-clone',
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
        },
        methods: {
            log(event) {
                console.log(event)
            },
            customClone(elem) {
                console.log('cloneDog -> ', elem)
                /** 커스텀 클론 객체를 리턴 */
                return {
                    id: this.list2.length, // index
                    name: elem.name + ' - clone'
                }
            }
        }
    }
</script>
<style scoped>

</style>