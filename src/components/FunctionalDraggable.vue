<template>
    <div class="list-wrapper">
        <div class="row">
            <div class="col">
                <!-- 2중 v-for 문, group -->
                <draggable animation="400" :list="rows">

                    <div class="list" v-for="row in rows" :key="row.index">

                        <p>{{ row.index }} 열</p>

                        <draggable animation="400" :list="rows.items" :group="{name: 'row'}">

                            <div class="item" v-for="item in row.items" :key="item.title">
                                {{ item.title }}
                            </div>

                        </draggable>

                    </div>

                </draggable>
            </div>
        </div>
    </div>
</template>

<script>

    import draggable from 'vuedraggable'
    export default {
        name: "FunctionalDraggable",
        components: {
            draggable
        },
        data() {
            return {
                rows: [
                    {
                        index: 1,
                        items: [
                            {title: 'item 1'},
                            {title: 'item 2'},
                        ]
                    },
                    {
                        index: 2,
                        items: [
                            {title: 'item 2'}
                        ]
                    },
                    {
                        index: 3,
                        items: [
                            {title: 'item 3'}
                        ]
                    },
                    {
                        index: 4,
                        items: [
                            {title: 'item 4'}
                        ]
                    },
                ]
            }
        }
    }
</script>

<style scoped>

    .item {
        min-height: 50px;
        outline: 1px dashed;
        margin-bottom: 1rem;
    }

</style>