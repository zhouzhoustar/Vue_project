<template>

  <div>
      <h1>======我是公共部分========</h1>
            <router-view></router-view>
      <h1>======我是公共部分========</h1>
  </div>
     
</template>

<script>
 

export default {
    created(){
      this.$http.get("/adf").then(data=>{
        alert(data.data.a)
      })
      
    }
}
</script>

<style lang="less" scoped>
  @color:red;
    h1{
      color:@color;
    }
</style>
