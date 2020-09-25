<template>
    <div class="list-wrapper">
        <div class="row">

            <div class="col">
                <button class="button btn btn-primary btn-sm" @click="sort">재정렬</button>
            </div>

            <div class="col">
                <h4>Transition</h4>

                <!-- transition -->
                <!-- v-bind 를 이용해 options 을 설정할 수 있으며, 기본적으로 :options 를 사용한다 -->
                <draggable tag="ul"
                           v-model="list"
                           v-bind:="dragOptions"
                           class="list-group"
                           @start="isDragging=true"
                           @end="isDragging=false"
                >

                    <!-- 트랜지션을 적용할 클래스명을 지정하기 위해 name 을 사용한다  -->
                    <!-- name="custom-list" 라고 적을 시, 이동되는 요소들은 custom-list-move 클래스가 추가되었다가 사라진다 -->
                    <!-- 기본값은 v-move 이다 -->
                    <!-- type 은 안적어도 된다 -->
                    <transition-group type="transition" name="flip-list">
                        <li class="list-group-item" v-for="elem in list" :key="elem.id">
                            {{ elem.name }} {{ elem.id }}
                        </li>
                    </transition-group>

                </draggable>
            </div>

            <div class="col">
                <json-viewer :value="list" :expand-depth=0 />
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "transition-example",
        display: "Transition",
        order: 6,
        components: {
            draggable
        },
        data() {
            return {
                list: [
                    { name: '데이빗', id: 0 },
                    { name: '마틴', id: 1 },
                    { name: '토니', id: 2 },
                    { name: '스칼렛', id: 3 },
                    { name: '그린', id: 4 },
                    { name: '탈리야', id: 5 },
                ]
            }
        },
        computed: {
            dragOptions() {
                return {
                    animation: 0,
                    group: "description",
                    disabled: false,
                    ghostClass: "ghost"
                }
            }
        },
        methods: {
            sort() {
                this.list = this.list.sort(((a, b) => a.id - b.id))
            }
        }
    }
</script>

<style scoped>

    .button {
        margin-top: 2.1875rem;
    }

    /* transition-group 태그에서 transform 이 일어나는 경우 0.5 */
    .flip-list-move {
        transition: transform 0.5s;
    }

    /* name 미 설정 시 기본값 */
    /*.v-move {*/
    /*    transition: 0.5s;*/
    /*}*/

    .no-move {
        transition: transform 0s;
    }

    .ghost {
        opacity: 0.5;
        background-color: #c8ebfb;
    }

    .list-group-item {
        cursor: move;
    }



</style>