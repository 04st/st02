<template>
    <div class="b">
        <div></div>
        <!-- rules:验证规则 -->
        <el-from :model="ruleform" :rules='ruless'>
            <el-form-item label="用户名" prop="user">
                <el-input v-model="ruleform.user"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
                <el-input v-model="ruleform.pass"></el-input>
            </el-form-item>
            <el-form-item label="">
                <el-input></el-input>
            </el-form-item>
        </el-from>
    </div>
</template>
<script>
export default {
    data() {
        let validatorpass = (rul, value, cllback) => {
            console.log(rul, value, cllback)
        }
        return {
            ruleform: {
                user: '',
                pass: '',
            }, ruless: {
                // rules 对象里的字段是根据prop写的
                user: [{ validator: validatorpass, trigger: 'blur' }],
                pass: []
            }
        }
    },
    created() { },
}
</script>
<style>
</style>