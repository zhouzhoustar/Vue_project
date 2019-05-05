<template>
    <div>
         <Row>
            <Col :span="8">
                <label >
                    <input type="file"  hidden ref="file" @change="changeHandler">
                    <div class="btnfile" >选择计算机中的图片...</div>
                    <!-- <Button type="primary" @click="chooseImageBtnHandler">选择计算机中的图片...</Button> -->
                </label>
            </Col>
            <Col :span="24 - 8">
                <h3>注意事项</h3>
                <p>
                    1) 上传图片要小于200kb
                </p>
                <p>
                    2) 支持jpg、png图片上传，不支持psd
                </p>
                <p>
                    3) 上传图片我们提供裁切功能
                </p>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        methods:{
            changeHandler(){
                alert("点我干嘛")
            },
            chooseImageBtnHandler(){
                 // 模拟鼠标事件对象
                const evt = document.createEvent("MouseEvents");
                // 初始化
                evt.initMouseEvent("click",false,false);
                // 派遣事件
                this.$refs.file.dispatchEvent(evt);
            }
        }
    }
</script>

<style lang="less" scoped>
    .btnfile{
        background:#2d8cf0;
        display:inline-block;
        border-radius:4px;
        padding:5px 8px;
        color:white;
          transition:all 0.5s linear;
        &:hover{
            opacity:0.8;
            transition:all 0.5s linear;
        }
    }

</style>