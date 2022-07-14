<template>
    <div class="login">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form">
            <h3 class="title">东兴市智慧化管理平台</h3>
            <el-form-item prop="username">
                <el-input v-model="loginForm.username" type="text" auto-complete="off" placeholder="账号">
                    <!-- <svg-icon slot="prefix" icon-class="user" class="el-input__icon input-icon" /> -->
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="loginForm.password" type="password" auto-complete="off" placeholder="密码"
                    @keyup.enter.native="handleLogin">
                    <!-- <svg-icon slot="prefix" icon-class="password" class="el-input__icon input-icon" /> -->
                </el-input>
            </el-form-item>
            <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
            <el-form-item style="width:100%;">
                <el-button :loading="loading" size="medium" type="primary" style="width:100%;"
                    @click.native.prevent="handleLogin">
                    <span v-if="!loading">登 录</span>
                    <span v-else>登 录 中...</span>
                </el-button>
                <div style="float: right;" v-if="register">
                    <router-link class="link-type" :to="'/register'">立即注册</router-link>
                </div>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
import instance from '@/api/api'
import debounce from '@/debounce'
export default {
    data() {
        return {
            loginForm: {
                username: "",
                password: "",
                rememberMe: "",
            },
            // 正则验证
            loginRules: {
                username:[{
                    required:true,message:'请输入用户名',trigger:'blur'
                }],password:[{
                    required:true,message:'请输入密码',trigger:'blur'
                }],
            },
            loading: false,
            // 验证码开关
            captchaOnOff: true,
            // 注册开关
            register: false,
            redirect: undefined,
            debouncefn:null,  //防抖函数封装
        }
    },
    methods: {
        // 用户行为
        handleLogin(){
            // 把用户名&密码解构出来
            this.debouncefn()
        },
        // 业务函数
        async logfn(){
            let {username,password}= this.loginForm
            let {data} = await instance.post('/log',{username,password})
            let message=data.message 

            if(message=='success'){
                // 登录成功
                let token =data.data.token
                localStorage.setItem('token',token)
                this.$message({
                    message:'登录成功',
                    type:'success',
                    diration: 2000,
                    onClose:()=>{
                        this.$router.push('about')
                    }
                })
            }else{
                // 登录失败
                 this.$message({
                    message:'账号或密码不对',
                    type:"error",
                })
            }
        }
    },
    created(){
        // 把请求这个业务函数给防抖封装
        this.debouncefn = debounce(this.logfn)
    },
}
</script>
<style rel="stylesheet/scss" lang="scss">
.login {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-image: url("../assets/images/login-background.jpg");
    background-size: cover;
}

.title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
}

.login-form {
    border-radius: 6px;
    background: #ffffff;
    width: 400px;
    padding: 25px 25px 5px 25px;

    .el-input {
        height: 38px;

        input {
            height: 38px;
        }
    }

    .input-icon {
        height: 39px;
        width: 14px;
        margin-left: 2px;
    }
}

.login-tip {
    font-size: 13px;
    text-align: center;
    color: #bfbfbf;
}

.login-code {
    width: 33%;
    height: 38px;
    float: right;

    img {
        cursor: pointer;
        vertical-align: middle;
    }
}

.el-login-footer {
    height: 40px;
    line-height: 40px;
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: #fff;
    font-family: Arial;
    font-size: 12px;
    letter-spacing: 1px;
}

.login-code-img {
    height: 38px;
}
</style>