<template>
    <div class="login-wrap">
       
        <div class="inner">
            <h1>iGolf高尔夫俱乐部智慧管理平台</h1>
            <Row>
                <Col span="24">
                    <Form ref="formInline" :model="form">
                        <FormItem prop="username">
                            <Input type="text" v-model="form.username" placeholder="请输入用户名">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <Icon type="ios-lock-outline" slot="prepend"></Icon>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="loginHandler">登录</Button>
                        </FormItem>
                    </Form>
                </Col>
            </Row>
        </div>
    </div>
</template>

<script>
    import router from "../../router.js"
    export default {
        data(){
            return {
                form:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            async loginHandler(){
                // console.log(this.form.username)
                // console.log(this.form.password)
                //发出post请求到login接口，将username和password带向服务器
                const {result} = await this.$http.post("/login",{
                    'username':this.form.username,
                    'password':this.form.password
                }).then(data=>data.data)
               console.log(result)
            if(result == 1){
                //登陆成功
                router.push({'name':'index'})
            }else{
                this.$Message.error('用户名或密码错误')
            }
                
            }
        }
    }
</script>

<style lang="less" scoped>
    .login-wrap{
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-image:-webkit-linear-gradient(top,#157d4c, #36d082);
        @w:400px;
        @h:260px;
        .inner{
            position:absolute;
            left:50%;
            top:50%;
            margin-left:-@w/2;
            margin-top:-@h/2;
            width:@w;
            height:@h;
            background:#fff; 
            padding:20px;
            border-radius:8px;
            box-shadow:1px 1px 1px rgba(0,0,0,.5);
            h1{
                margin-bottom:20px;
            }
        }
    }
</style>