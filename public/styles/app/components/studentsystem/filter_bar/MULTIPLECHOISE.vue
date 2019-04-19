<template>
    <div>
         <!-- <h1>{{filtersR[k].options}}</h1> -->
         <CheckboxGroup :value="getV(k)">
             <Checkbox 
             :label="item" 
             v-for="item in filtersR[k].options" 
             :key="item"
             >
             </Checkbox>
         </CheckboxGroup>
    </div>
</template>

<script>
    //引包
    import filtersR from "../filters.R.js"
    export default {
        // 迎接父组件的k
        props:["k"],
        data(){
            return {
                filtersR
            }
        },
        methods:{
            getV(k){
                return this.$store.state.studentsystem.filters[k]||[]
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>