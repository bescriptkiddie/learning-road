<template>
    <div id="main">
        
       <div id="login" class="panel">
           <h2>登录</h2>
           <form action="">
                <div class="form-item">
                    <label>
                        <span class="txt">姓名：</span>
                        <!-- <input type="text" class="form-input" ref="username"> -->
                        <input type="text" class="form-input" v-model="submitData.username" >
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        <span class="txt">密码：</span>
                        <!-- <input type="password" class="form-input" ref="password"> -->
                        <input type="password" class="form-input" v-model="submitData.password" >
                    </label>
                </div>
                <div class="form-item">
                    <label>
                        <button class="form-button primary" @click.prevent="doLogin">登录</button>
                        <button class="form-button">注册</button>
                    </label>
                </div>
                <div class="txt">{{message}}</div>
           </form>
       </div>    

    </div>
</template>

<script>
import {login} from '@/api';

export default {
    name: 'Login',

    data() {
        return {
            submitData: {
                username: '',
                password: ''
            },
            message: ''
        }
    },

    methods: {
        async doLogin() {
            // 收集用户填入的信息
            
            // console.log('收集到的用户填入数据', this.$refs.username.value, this.$refs.password.value);
            // console.log('收集到的用户填入数据', this.submitData);

            // 发送ajax请求
            try {
                let rs = await login({
                    name: this.submitData.username,
                    password: this.submitData.password
                });
                this.message = '登陆成功';

                // 把当前登陆的用户信息记录到localStorage里面
                localStorage.setItem('user', JSON.stringify(rs.data));
                localStorage.setItem('token', rs.headers.authorization);

                // console.log(rs);

                this.$router.push({
                    name: 'Main'
                });
            } catch(e) {
                // console.dir(e);
                this.message = e.response.data;
            }
        }
    }
}
</script>