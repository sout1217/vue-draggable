<template>
    <div class="list-wrapper">
        <div class="row">
            <div class="col-6">
                <table class="table table-striped">
                    <thead class="thead-dark">
                        <draggable :list="headers" tag="tr" animation="400">
                            <th v-for="header in headers" :key="header">
                                {{ header.name }}
                            </th>
                        </draggable>
                    </thead>
                    <tbody>
                        <!-- 2중 v-for문, item[key] 를 이용 --> <!-- 오류해결 하려면 headers: ['id','name','sport'] 로 변경 -->
                        <tr v-for="item in list" :key="item.name">
                            <td v-for="header in headers" :key="header.id">
                                {{ item[header.id] }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col">
                <json-viewer :value="headers" :expand-depth=5 />
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
        name: "TableColumn",
        components: {
            draggable
        },
        data() {
            return {
                headers: [
                    { id: 'id', name: '아이디'},
                    { id: 'name', name: '이름'},
                    { id: 'sport', name: '스포츠'},
                ],
                list: [
                    { id:1, name: 'Abby', sport: 'basket'},
                    { id:2, name: 'Brooke', sport: 'foot'},
                    { id:3, name: 'Courtenay', sport: 'volley'},
                    { id:4, name: 'David', sport: 'rugby'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>