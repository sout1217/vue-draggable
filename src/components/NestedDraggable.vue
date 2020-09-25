<template>
    <div class="list-wrapper">
        <div class="row">
            <div class="col">
                <nested-draggable-child :list="list" />
            </div>
        </div>
    </div>

</template>

<script>
    import NestedDraggableChild from './NestedDraggableChild'
    export default {
        name: "NestedDraggable",
        components: {
            NestedDraggableChild
        },
        data() {
            return {
                list: [
                    {
                        name: 'task 1',
                        tasks: [],
                    },
                    {
                        name: 'task 2',
                        tasks: [],
                    },
                    {
                        name: 'task 3',
                        tasks: [],
                    },
                    {
                        name: 'task 4',
                        tasks: [],
                    },
                    {
                        name: 'task 5',
                        tasks: [],
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>