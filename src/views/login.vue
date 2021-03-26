<template>
  <div>
    <el-form :model = "loginForm"  ref = "loginForm" :rules = "rules" class = "loginContainer">
      <h3>系统登陆</h3>

      <el-form-item  prop = "username">
        <el-input type = "text" v-model = "loginForm.username" autocomplete = "off" placeholder = "账号"></el-input>
      </el-form-item>

      <el-form-item prop = "password">
        <el-input type = "password" v-model = "loginForm.password" autocomplete = "off" placeholder = "密码"></el-input>
      </el-form-item>

      <el-form-item prop = "code" style="width: 100%;text-align: left;">
          <el-input type ="text" v-model = "loginForm.code" autocomplete = "off" style="width: 250px ; margin-right: 10px"
                    placeholder = "验证码">
          </el-input>
          <img :src="captchaUrl">
      </el-form-item>
      
      <el-button type = "primary" style = "width: 100%"  @click="submit">提交</el-button>
      

    </el-form>
  </div>
</template>

<script>
 
  export default {
    
    methods: {
      submit() {
        this.$refs.loginForm.validate((valid) => {
          if (valid) {
            this.$router.push('/home')
          } else {
            this.$message.error('登录失败');
            return false;
          }
        });
      }
    },
    data() {
      return {
        checked: false,
        captchaUrl: '123',
        loginForm: {
          username: '',
          password: '',
          code: ''
       },
       rules: {
         username:[{ required: true, message: '请输入账号', trigger: 'blur'}],
         password:[{ required: true, message: '请输入密码', trigger: 'blur'}],
         code:[{ required: true, message: '请输入验证码', trigger: 'blur'}]
       }
      }
    }
  }
</script>

<style scoped>
  .loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 15% auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border:  1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

</style>