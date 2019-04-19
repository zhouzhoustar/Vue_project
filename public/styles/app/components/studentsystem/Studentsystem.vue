<template>
    <div> 
         
        <Row v-for="k in bars" :key="k"> 
            <Col :span="4">
                {{filtersR[k].chinese}}
            </Col>
            <Col :span="20">
                <!-- 下面的:k 传给子组件一个k -->
                <div :is="filtersR[k].type" :k="k"></div> 
            </Col>
        </Row>
        <Table 
            :columns="getCols(sort,order)" 
            :data="arr" 
            @on-sort-change="changeSort"
        ></Table>
        <Page 
        :total="total" 
        :page-size-opts=[5,10,15,20] 
        :current=page
        :page-size=pagesize
        @on-change="changePage"
        @on-page-size-change="changePagesize"
        show-sizer
        show-total
        />
        <h1></h1>
    </div>
</template>

<script>
    import MULTIPLECHOISE from "./filter_bar/MULTIPLECHOISE.vue";
    import RANGE from "./filter_bar/RANGE.vue";
    import SINGLEOPTION from "./filter_bar/SINGLEOPTION.vue";
    import getCols from "./getCols.js";
    import filtersR from "./filters.R"
    export default {
        beforeCreate(){
                this.$store.dispatch("studentsystem/getData")
            },
        // data(){
        //     return {
        //          cols:getCols(sort,order) //这里不能放函数，因为data只计算一次
        //     }
        // },
        data(){
            return{
                //筛选条顺序
                bars:["age","nation","blood","weight","education","constellation"],
                // 这里将引用的仓库写一下，如果不写<template>里面看不见它
                filtersR
            }
        },
        components:{
            MULTIPLECHOISE,
            RANGE,
            SINGLEOPTION
        },
        computed:{
            arr(){
                return this.$store.state.studentsystem.arr
            },
            total(){
                return this.$store.state.studentsystem.total
            },
            page(){
                return this.$store.state.studentsystem.page
            },
            pagesize(){
                return this.$store.state.studentsystem.pagesize
            },
            sort(){
                return this.$store.state.studentsystem.sort
            },
            order(){
                return this.$store.state.studentsystem.order
            }

        },
        methods:{
            changePage(v){
                // alert(v) //弹出你当前点击的页码：1,2,3.....
                this.$store.dispatch("studentsystem/changePage",{"page":v})
            },
            changePagesize(v){
                this.$store.dispatch("studentsystem/changePagesize",{"pagesize":v})
                
            },
            //下面是k/v一致，省略v
            getCols,
            changeSort({column,key,order}){
                // console.log(column,key,order)
                this.$store.dispatch("studentsystem/changeSort",{"sort":key,order})
            } 
             
        }
    }
</script>

<style lang="less" scoped>
        h1{
            height:100px;
        }
        .ivu-row{
            padding:6px 0;
        }
</style>