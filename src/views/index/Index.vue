<template>
    <div>
        <Content :style="{'padding':'20px'}">
            <Card>
                <h1>我是首页</h1>  
                <Button @click="showModel">按我显示弹出层</Button>
            </Card>
        </Content>
      
    </div>
</template>

<script>
    export default {

            methods:{
                showModel(){
                    this.$changeAvatarModel.show(); 
                }
            }
    }
</script>

<style lang="less" scoped>

</style>