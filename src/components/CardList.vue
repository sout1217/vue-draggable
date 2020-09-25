<template>
    <div class="list-wrapper">
        <draggable v-model="listJson" animation="400">
            <div class="card-list" v-for="card in listJson" :key="card.id">
                <div class="list">
                    {{ card.name }} - {{ card.id }}
                </div>
            </div>

            <div class="add-card-form-wrapper">
                <button class="btn btn-primary btn-block" @click="alert">클릭</button>
            </div>

        </draggable>
    </div>
</template>

<script>
    import Draggable from 'vuedraggable'

    export default {
        name: "CardList",
        components: {
            Draggable
        },
        props: ['cardList'],
        computed: {
            listJson: {
                /** getter 시 */
                get() {
                    return this.cardList
                },
                /** setter 시 */
                set(value) {
                    this.$emit('change', value)
                }
            }
        },
        methods: {
            alert() {
                alert('자식 알림')
            }
        },
    }
</script>

<style scoped>

</style>