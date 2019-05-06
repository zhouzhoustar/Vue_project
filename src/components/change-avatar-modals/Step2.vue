<template>
    <div>
        <h1>我是第二步</h1>
        <h6>正在上传，请稍后</h6>
        <Progress :percent="percent" status="active" hide-info/>
    </div>
</template>

<script>
    export default {
        props:['file','changeFile','changeStep'],
        data(){
            return{
                percent:0
            }
        },
        created(){   //生命周期创建之后
                //创建虚拟表单
                var form = new FormData();
                //追加文件
                form.append('file',this.file);
                //Ajax语法
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function(){
                    if(xhr.readyState==4){
                        // console.log(xhr.responseText)
                    }
                }
                var self = this; //备份
                xhr.upload.onprogress = function(e){
                    // console.log(e)
                    self.percent = e.loaded/e.total*100
                }
                xhr.open('POST','/api/uploadavatar',true)
                xhr.send(form);
            
        }
    }
</script>

<style lang="scss" scoped>

</style>