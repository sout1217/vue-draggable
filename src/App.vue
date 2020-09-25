<template>
    <div id="app">

        <div class="container mt-3">

            <h4>1. 트랜지션 X</h4>

            <!-- list group 1 -->
            <div class="list-wrapper">

                <draggable v-model="cardList" draggable=".card-list" @start="start" @end="end">
                    <!--   options="{handle: '.card-list'}" 와 draggable=".card-list" 는 같은 기능이다 -->

                    <div class="card-list" v-for="card in cardList" :key="card.id">

                        <div class="list">
                            {{ card.name }} - {{ card.id }}
                        </div>

                    </div>
                    <div class="add-card-form-wrapper">
                        <button class="btn btn-primary btn-block" @click="alert">클릭</button>
                    </div>

                </draggable>

            </div>

            <h4>2. 트랜지션 O</h4>

            <!-- list group 2 -->
            <div class="list-wrapper">

                <draggable v-model="cardList" animation="400" draggable=".card-list" @start="drag=true"
                           @end="drag=false">

                    <div class="card-list" v-for="card in cardList" :key="card.id">

                        <div class="list">
                            {{ card.name }} - {{ card.id }}
                        </div>

                    </div>
                    <div class="add-card-form-wrapper">
                        <button class="btn btn-primary btn-block" @click="alert">클릭</button>
                    </div>

                </draggable>

            </div>

            <h4>3. Handle </h4>

            <!-- Handle -->
            <div class="list-wrapper">
                <draggable :list="cardList" animation="400" handle=".handle" @start="drag=true" @end="drag=false">

                    <div class="card-list" v-for="card in cardList" :key="card.id">
                        <h3 class="handle mr-3 d-inline-block" draggable="true">≡</h3>
                        <div class="list d-inline-block">
                            {{ card.name }} - {{ card.id }}
                        </div>

                    </div>

                    <div class="add-card-form-wrapper">
                        <button class="btn btn-primary btn-block" @click="alert">클릭</button>
                    </div>

                </draggable>
            </div>

            <h4>4. Slot</h4>
            <div class="list-wrapper">
                <draggable v-model="cardList" animation="400">
                    <div class="card-list" v-for="card in cardList" :key="card.id">
                        <div class="list">
                            {{ card.name }} - {{ card.id }}
                        </div>

                    </div>
                    <div class="btn-form-wrapper">
                        <button slot="footer" class="btn btn-primary btn-block" @click="alert">버튼</button>
                    </div>
                </draggable>
            </div>

            <!-- 이 방식은 부모 컴포넌트 data.cardList 에 영향을 준다 -->
            <h4>5. Component 1</h4>
            <card-list :cardList="cardList" @change="childChange"  />


            <h4>6. Draggable - 체크를 여부를 이용한 드래깅 사용여부 </h4>
            <simple />


            <h4>7. Draggable - 2개의 리스트 드래깅 </h4>
            <two-lists />

            <h4>8. Clone - 드래깅 복사</h4>
            <clone />


            <h4>9. Custom Clone - 드래깅 복사, 커스텀 클론</h4>
            <custom-clone/>

            <h4>10. Handle - 드래깅 요소 설정</h4>
            <handle />

            <h4>11. &lt;transition-group&gt; - 트랜지션 활용</h4>

            <ul class="pl-3 pb-3" style="list-style: '- '">
                <li><small>
                    리스트가 위로 왔다가 움직이는 현상은 json-viewr 를 다시 그리는 과정에서 지워진 높이에서 생긴 높이로 변하기 때문이니 신경쓰지 않아도 됩니다
                </small></li>
                <li><small>
                    :expand-depth=5 에서 :expand-depth=0 으로 변경하시면 해결
                </small></li>
            </ul>
            <transition />

            <h4>11. Table - 테이블에서 드래깅</h4>
            <table-draggable />

            <h4>12. Table - 테이블 컬럼 드래깅</h4>
            <table-column />

            <!-- Element Framework 필요 -->
<!--            <h4>13. Collapse 드래깅 - Element Framework 의존성 필요</h4>-->
<!--            <collapse />-->

            <h4>14. Header 와 Footer 고정</h4>
            <header-and-footer-slot />

            <h4>15. 2개 리스트들 Header 와 Footer 고정</h4>
            <two-list-header-and-footer-slot />

            <h4>16. 중첩 리스트에 드래깅</h4>
            <nested-draggable />
            
            <h4>17 Vuex 와 v-model 을 이용한 중첩 리스트 </h4>
            <p><a href="https://sortablejs.github.io/Vue.Draggable/#/nested-with-vmodel">깃 허브</a></p>

            <h4>18. Functional Draggable </h4>
            <functional-draggable />


       </div>

    </div>
</template>

<script>
    import 'bootstrap/dist/css/bootstrap.min.css'
    import draggable from 'vuedraggable'
    import CardList from "./components/CardList";
    import simple from "./components/Simple";
    import TwoLists from "./components/TwoLists";
    import Clone from "./components/Clone";
    import CustomClone from "./components/CustomClone";
    import handle from "./components/Handle";
    import transition from "./components/Transition";
    import TableDraggable from "./components/Table";
    import TableColumn from "./components/TableColumn";
    // import collapse from "./components/ThirdParty";
    import HeaderAndFooterSlot from "./components/HeaderAndFooterSlot";
    import TwoListHeaderAndFooterSlot from "./components/TwoListHeaderAndFooterSlot";
    import NestedDraggable from "./components/NestedDraggable";
    import FunctionalDraggable from "./components/FunctionalDraggable";

    export default {
        name: 'App',
        components: {
            CustomClone,
            Clone,
            draggable,
            CardList,
            simple,
            TwoLists,
            handle,
            transition,
            TableDraggable,
            TableColumn,
            // collapse,
            HeaderAndFooterSlot,
            TwoListHeaderAndFooterSlot,
            NestedDraggable,
            FunctionalDraggable
        },
        data() {
            return {
                cardList: [
                    { id: 1, name: '카드', description: '내용' },
                    { id: 2, name: '카드', description: '내용' },
                    { id: 3, name: '카드', description: '내용' },
                    { id: 4, name: '카드', description: '내용' },
                    { id: 5, name: '카드', description: '내용' },
                    { id: 6, name: '카드', description: '내용' },
                    { id: 7, name: '카드', description: '내용' },
                    { id: 8, name: '카드', description: '내용' },
                    { id: 9, name: '카드', description: '내용' },
                    { id: 10, name: '카드', description: '내용' },
                ]
            }
        },
        methods: {
            start(event) {
                console.log(event)
                console.log('드래그 스타트')
            },
            end(event) {
                console.log(event)
                console.log('드래그 엔드')
            },
            alert() {
                alert('알림')
            },
            childChange(value) {
                this.cardList = value
            }
        }
    }
</script>

<style>
    @import 'https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Jua&display=swap';

    * {
        font-family: Jua, serif;
    }

    .container {
        margin-bottom: 10rem;
    }

    .list-wrapper, .card-list, .list {
        outline: 1px solid #ff0000;
        padding: 1rem;
    }

    .list-wrapper {
        margin-bottom: 3rem;
    }

    .list-wrapper:nth-last-child(1) {
        margin-bottom: 0;
    }

    .list {
        background-color: rgba(255, 255, 0, .3);
    }

    .card-list {
        margin-bottom: 2.3rem;
    }

    .card-list:nth-last-child(1) {
        margin-bottom: 0;
    }

    /* vuedraggable 에서 제공하는 기본 고스트 클래스명  */
    .sortable-ghost {
        background-color: #c8ebfb;
        opacity: 0.5;
    }

</style>
