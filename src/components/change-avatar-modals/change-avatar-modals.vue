<template>
   
     <div> 
        <Modal 
            :value="true" 
            title="更改您的头像" 
            @on-ok="ok"
            @on-cancel="cancel"
            
        >

            <Step1 v-if="step==1" :changeFile="changeFile" :changeStep="changeStep"/>
            <Step2 v-if="step==2" :file='file' :changeFile="changeFile" :changeStep="changeStep"/>
            <Step3 v-if="step==3"/>
        <div slot="footer">
            <Button @click="cancel">取消</Button>
        </div>
                   
        </Modal>
     </div>
    
</template>

<script>
    import Step1 from "./Step1.vue"
    import Step2 from "./Step2.vue"
    import Step3 from "./Step3.vue"
    export default {
       data () {
            return {
                step:1,
                file:null
            }
        },
        methods: {
            ok () {
                
                this.$changeAvatarModel.hide()
            },
            cancel () {
                this.$changeAvatarModel.hide()
                
            },
            changeFile(file){
                this.file = file
            },
            changeStep(step){
                this.step = step
            }
        },
        components:{
            Step1,
            Step2,
            Step3

        }
        
    }
</script>

<style lang="scss" scoped>

</style>