<template>

    <div class="list-wrapper">
        <div class="row">
            <div class="col-8">
                <table class="table table-striped">
                    <thead class="thead-light">
                        <tr>
                            <th scope="col">아이디</th>
                            <th scope="col">이름</th>
                            <th scope="col">스포츠</th>
                        </tr>
                    </thead>
                    <!-- tag -->
                    <draggable :list="list" tag="tbody" >
                        <tr v-for="item in list" :key="item.name">
                            <td>{{ item.id }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.sport }}</td>
                        </tr>
                    </draggable>
                </table>
            </div>
            <div class="col">
                <json-viewer :value="list" :expand-depth=2 />
            </div>
        </div>
    </div>

</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "Table",
        components: {
            draggable
        },
        data() {
            return {
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