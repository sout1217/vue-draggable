<template>
    <div class="list-wrapper">

        <div class="row">

            <!-- 추가, 제거, 체크 -->
            <div class="col-2">
                <div class="form-group">

                    <div class="btn-group-vertical buttons" role="group" aria-label="Basic example">
                        <button class="btn btn-sm btn-primary" @click="add">추가</button>
                        <button class="btn btn-sm btn-danger" @click="replace">비우기</button>
                    </div>

                    <div class="form-check">
                        <input id="disabled" type="checkbox" v-model="enabled" class="form-check-input">
                        <label for="disabled" class="form-check-label">드래그&드롭 enabled</label>
                    </div>
                </div>
            </div>

            <!-- 드래깅 이벤트  -->
            <!-- :disabled, :ghost-class, :move, @start, @end -->
            <div class="col-6">
                <h3>Draggable {{ draggingInfo }}</h3>
                <draggable :list="list"
                           :disabled="!enabled"
                           class="list-group"
                           ghost-class="ghost"
                           :move="checkMove"
                           @start="draggingCatch = true"
                           @end="draggingCatch = false">

                    <div class="list-group-item" v-for="element in list" :key="element.name">
                        {{ element.name }}
                    </div>
                </draggable>
            </div>

            <!-- JSON 뷰 -->
            <json-viewer :expand-depth=2 :value="list" sort />

        </div>

    </div>
</template>
<script>
    import draggable from 'vuedraggable'

    let id = 1

    export default {
        name: 'card-list-2',
        components: {
            draggable
        },
        data() {
            return {
                enabled: true,
                list: [
                    { name: '데이빗', id: 0 },
                    { name: '마틴', id: 1 },
                    { name: '토니', id: 2 },
                ],
                draggingCatch: false
            }
        },
        computed: {
            /** */
            draggingInfo() {
                return this.draggingCatch ? "드래그 중" : ""
            }
        },
        methods: {
            /** 추가 하기 */
            add() {
                let list = [].concat(this.list)
                list.push({
                    name: "Juan" + id,
                    id: id++
                })
                this.list = list
            },
            /** 비우기 */
            replace() {
                this.list = []
            },
            /** 드래깅하여 최종적으로 이동되는 인덱스를 리턴 */
            checkMove(event) {
                console.log("Future index: " + event.draggedContext.futureIndex)
            }
        }
    }
</script>

<style scoped>

    .buttons {
        margin-top: 2.5rem;
    }

    /* 위 에서 ghost-class="ghost" 로 설정하여 드래깅 엔드 되는 지점에 색을 지정한다 */
    .ghost {
        opacity: 0.5;
        background-color: #c8ebfb;
    }

</style>