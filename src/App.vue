<template>

  <div> 
          <router-view></router-view> 
          <changeAvatarModals v-if="$changeAvatarModel.isShow"/> 
         
  </div>
     
</template>

<script>
import changeAvatarModals from "./components/change-avatar-modals/change-avatar-modals.vue"
 

export default {
  data(){
    return {

    }
  },
   components:{
     changeAvatarModals
   }
}
</script>

<style lang="less" scoped>
  @color:red;
    h1{
      color:@color;
    }
</style>
