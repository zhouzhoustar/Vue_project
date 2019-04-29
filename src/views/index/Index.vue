<template>
    <div>
        <h1>我是首页</h1>
        <p>{{$store.state.me.nickname}}</p>
        <p>{{$store.state.me.username}}</p>

        <h1>234234</h1>
    </div>
</template>

<script>
    export default {
        //     created(){
        //     this.$http.get("/mingan").then(data=>{
        //     alert(data.data.a)
        // })
      
        // }
    }
</script>

<style lang="less" scoped>

</style>