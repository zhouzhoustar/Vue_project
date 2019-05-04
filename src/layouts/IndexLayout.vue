<template>
    <div class="layout">
        
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <img src="../../public/images/logo.png"/>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="1">
                            <Icon type="ios-navigate"></Icon>
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-keypad"></Icon>
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
            <router-view></router-view>
            <Footer class="layout-footer-center">2011-2016 &copy; 老虎伍兹俱乐部</Footer>
        </Layout>
        
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less"  scoped>
    .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 221px;
    height: 30px;
    background: none;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 8px;
    left: 20px;
    img{
        width:100%;
    }
}
.ivu-layout-header{
    background-image:-webkit-linear-gradient(left, #51a551, #3d9e5b);
}
.ivu-menu{
    background:none;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>



