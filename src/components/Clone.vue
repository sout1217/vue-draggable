<template>
    <div class="list-wrapper">

        <div class="row">

            <!-- col 1 -->
            <div class="col">
                <h3>Draggable 1</h3>

                <!-- 1.다른 리스트로 영역으로 이동해야 하기 때문에 그룹을 설정 -->
                <!-- 2. pull (드래깅 시작 시) clone 생성 -->
                <!-- :group -->
                <draggable
                        class="list-group"
                        :list="list1"
                        :group="{ name: 'people', pull: 'clone', put: false}"
                        @change="log"
                >
                    <div class="list-group-item" v-for="list in list1" :key="list.id">
                        {{ list.name }} {{ list.id }}
                    </div>
                </draggable>
            </div>

            <!-- col 2 -->
            <div class="col">
                <h3>Draggable 2</h3>

                <draggable
                        class="dragArea list-group"
                        :list="list2"
                        group="people"
                        @change="log"
                >
                    <!-- :key 는 인덱스를 사용해야 키 중복이 발생하지 않는다 -->
                    <div class="list-group-item" v-for="(list, index) in list2" :key="index">
                        {{ list.name }} {{ list.id }}
                    </div>
                </draggable>
            </div>

            <!-- col 3 -->
            <div class="col">
                <json-viewer :value="list1" :expand-depth=2 />
            </div>

            <!-- col 4 -->
            <div class="col">
                <json-viewer :value="list2" :expand-depth=2 />
            </div>
        </div>

    </div>
</template>
<script>
    import draggable from 'vuedraggable'

    export default {
        name: 'clone',
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
            }
        }
    }
</script>
<style scoped>

</style>