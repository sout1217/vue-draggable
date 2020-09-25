<template>
    <div class="list-wrapper">
        <div class="row">
            <div class="col-7">
                <h3>
                    Integration with
                    <a href="https://element.eleme.io/#/en-US/component/collapse#collapse" target="_blank">
                        Element collapse
                    </a>
                </h3>

                <draggable
                        tag="el-collapse"
                        :list="list"
                        :component-data="collapseComponentData"
                >
                    <el-collapse-item
                            v-for="item in list"
                            :key="item.id"
                            :title="item.title"
                            :name="item.id"
                    >
                        <div v-for="(lign, idx) in item.text" :key="idx">{{ lign }}</div>
                    </el-collapse-item>
                </draggable>
            </div>
        </div>
    </div>
</template>

<script>

    import draggable from 'vuedraggable'

    export default {
        name: "ThirdParty",
        components: {
            draggable
        },
        data() {
            return {
                list: [
                    {
                        id: 1,
                        title: 'Consistency',
                        text: [
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A at eum exercitationem, impedit iusto maiores nulla officiis quaerat quas veniam! Accusamus beatae blanditiis est minima quam sed sequi sunt tempore?",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda commodi culpa dolor doloremque dolores, ducimus facere iste itaque laboriosam, minima modi nobis omnis, repellat sequi ullam voluptas voluptatibus voluptatum."
                        ],
                    },
                    {
                        id: 2,
                        title: 'Feedback',
                        text: [
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dolor exercitationem fugit illum ipsa ipsum iste magni nam, similique, suscipit veniam voluptatum? Dicta in iste quis quod sit vel.",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem deserunt dolorum enim error est eveniet expedita, facere ipsam maiores minus officia praesentium quibusdam reiciendis sed sit ullam veritatis voluptatum? Modi.",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur at dolores laborum maiores. Doloremque error laborum omnis placeat. Alias assumenda cum incidunt mollitia nostrum quia quo repellat rerum ullam."
                        ],
                    },
                    {
                        id: 3,
                        title: 'Efficiency',
                        text: [
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias explicabo laborum quibusdam voluptas. Blanditiis commodi cum cumque debitis dolorum ducimus eligendi eos eum, inventore nam nemo nihil possimus quo tempora.",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolores rem saepe unde voluptatibus. Accusamus alias autem culpa, dolores et ex ipsam laudantium molestias omnis, reiciendis repudiandae temporibus! Facilis, natus.",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda dignissimos doloremque eaque eligendi sint suscipit ullam. Est excepturi fuga inventore modi molestiae pariatur, quas vel! Culpa dicta qui veritatis?",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequuntur dolor fugit illo itaque minus sequi similique. A accusantium ad architecto cum itaque molestiae, necessitatibus neque non quod, tenetur voluptatum."
                        ],
                    },
                    {
                        id: 4,
                        title: 'Controllability',
                        text: [
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad consequatur consequuntur illum inventore, iusto nobis obcaecati possimus, quisquam recusandae repellat sint tenetur! Adipisci dolore fugit ipsam, odit recusandae suscipit tenetur!",
                            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda beatae distinctio esse exercitationem explicabo fugiat fugit ipsa natus neque nisi possimus quam, qui, rem sapiente suscipit tempora ullam voluptate."
                        ],
                    },

                ],
                activeNames: [ 1 ],
                collapseComponentData: {
                    on: {
                        input: this.inputChanged
                    },
                    props: {
                        value: this.activeNames
                    }
                }
            }
        },
        methods: {
            inputChanged(val) {
                this.activeNames = val;
            }
        }
    }
</script>

<style scoped>

</style>