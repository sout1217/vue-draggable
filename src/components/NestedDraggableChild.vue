<template>
    <draggable class="dragArea py-3 " animation="400"  tag="ul" :group="{name: 'g1'}">
        <li  v-for="elem in list" :key="elem.id">
            {{ elem.name }}
            <nested-draggable-child :list="elem.tasks"/>
        </li>

    </draggable>
</template>

<script>
    import draggable from 'vuedraggable'

    export default {
        name: "NestedDraggableChild",
        components: {
            draggable
        },
        props: [ 'list' ]
    }
</script>

<style scoped>
    .dragArea {
        min-height: 100px;
        outline: 1px dashed;
    }
</style>