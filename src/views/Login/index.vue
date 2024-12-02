<script setup>
import { ref } from "vue";

import { useRouter } from "vue-router";
//使用ELMESSAGE
import "element-plus/theme-chalk/el-message.css";
import { ElMessage } from "element-plus";

import { signupAPI } from "@/apis/user";

import { userUserStore } from "@/stores/user";
//登录与注册界面切换
const login = ref(true);
const signup = ref(false);
const change = () => {
  login.value = !login.value;
  signup.value = !signup.value;
};
//表单验证
//1.准备表单对象
const form = ref({
  username: "",
  password: "",
  agree: false,
});
//清空表单的函数
const clear = () => {
  form.value.username = "";
  form.value.password = "";
  form.value.agree = false;
};
//2.准备规则对象
const rules = {
  username: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
  password: [
    { required: true, message: "密码不能为空", trigger: "blur" },
    { min: 6, max: 14, message: "密码长度为6-14个字符", trigger: "blur" },
  ],
  agree: [
    {
      validator: (rule, value, callback) => {
        //自定义校验逻辑
        //勾选通过 不勾选就不通过
        if (value) {
          callback();
        } else {
          callback(new Error("请勾选协议"));
        }
      },
    },
  ],
};
//3.获取form实例做统一校验
const formRef = ref(null);
//实现注册功能
const doSignup = () => {
  const { username, password } = form.value;
  formRef.value.validate(async (valid) => {
    if (valid) {
      const res = await signupAPI({ username, password });
      if (res.code == 1) {
        ElMessage({ type: "success", message: "注册成功" });
        change();
        clear();
      } else {
        ElMessage({ type: "failure", message: "账户已存在" });
        clear();
      }
    }
  });
};
//实现登录功能
const userStore = userUserStore();
const router = useRouter();
const doLogin = () => {
  const { username, password } = form.value;
  formRef.value.validate(async (valid) => {
    if (valid) {
      await userStore.getUserInfo({ username, password });
      console.log(userStore.userInfo);
      if (userStore.userInfo.code == 1) {
        ElMessage({ type: "success", message: "登录成功" });
        router.replace({ path: "/" });
      } else {
        ElMessage({ type: "failure", message: "账号或密码错误" });
        clear();
        userStore.clearUserInfo();
      }
    }
  });
};
</script>
<template>
  <div>
    <header class="app-header">
      <div class="logo"></div>
      <RouterLink class="entry" to="/">
        进入网站首页
        <i class="iconfont icon-xiangyoujiantou"></i>
        <i class="iconfont icon-xiangyoujiantou"></i>
      </RouterLink>
    </header>
    <template v-if="login">
      <section class="login-section">
        <div class="wrapper">
          <nav>
            <a href="javascript:;">账户登录</a>
          </nav>
          <div class="account-box">
            <div class="form">
              <!-- 绑定表单对象和规则对象 -->
              <el-form
                :model="form"
                :rules="rules"
                label-position="right"
                label-width="60px"
                status-icon
                ref="formRef"
              >
                <!-- 绑定使用的规则字段 -->
                <el-form-item prop="username" label="账户">
                  <!-- 双向绑定表单数据 -->
                  <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item prop="password" label="密码">
                  <el-input v-model="form.password" />
                </el-form-item>
                <el-form-item label-width="22px" prop="agree" class="agree">
                  <el-checkbox size="large" v-model="form.agree">
                    我已同意隐私条款和服务条款
                  </el-checkbox>
                </el-form-item>
                <el-button type="info" link class="change" @click="change">
                  新用户?点击注册
                </el-button>
                <el-button size="large" class="subBtn" @click="doLogin"
                  >点击登录</el-button
                >
              </el-form>
            </div>
          </div>
        </div>
      </section>
    </template>
    <template v-if="signup">
      <section class="login-section">
        <div class="wrapper">
          <nav>
            <a href="javascript:;">账户注册</a>
          </nav>
          <div class="account-box">
            <div class="form">
              <!-- 绑定表单对象和规则对象 -->
              <el-form
                :model="form"
                :rules="rules"
                label-position="right"
                label-width="60px"
                status-icon
                ref="formRef"
              >
                <!-- 绑定使用的规则字段 -->
                <el-form-item prop="username" label="账户">
                  <!-- 双向绑定表单数据 -->
                  <el-input v-model="form.username" />
                </el-form-item>
                <el-form-item prop="password" label="密码">
                  <el-input v-model="form.password" />
                </el-form-item>
                <el-form-item label-width="22px" prop="agree">
                  <el-checkbox size="large" v-model="form.agree">
                    我已同意隐私条款和服务条款
                  </el-checkbox>
                </el-form-item>
                <el-button type="info" link class="change" @click="change">
                  已有帐号?点击登录
                </el-button>
                <el-button size="large" class="subBtn" @click="doSignup"
                  >立即注册</el-button
                >
              </el-form>
            </div>
          </div>
        </div>
      </section>
    </template>
    <footer class="login-footer">
      <div class="container">
        <p>
          <a href="javascript:;">关于我们</a>
          <a href="javascript:;">帮助中心</a>
          <a href="javascript:;">商务合作</a>
          <a href="javascript:;">技术支持</a>
        </p>
        <p>CopyRight © 银杏果项目小组</p>
      </div>
    </footer>
  </div>
</template>
 
<style scoped lang='scss'>
.app-header {
  background: #fff;
  height: 135px;
  position: relative;

  .logo {
    display: inline-block;
    background: url("@/assets/images/logo.png") no-repeat center;
    width: 30%;
    height: 135px;
    background-size: 100%, 100%;
    position: absolute;
    left: 40px;
  }

  .entry {
    position: absolute;
    right: 160px;
    top: 75px;
    font-size: 16px;

    i {
      font-size: 14px;
      color: rgb(214, 109, 10);
      letter-spacing: -5px;
    }
  }
}
.login-section {
  background: url("@/assets/images/4.png") no-repeat center / cover;
  height: 488px;
  position: relative;

  .wrapper {
    width: 380px;
    background: #fff;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

    nav {
      font-size: 14px;
      height: 55px;
      margin-bottom: 20px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      padding: 0 40px;
      text-align: right;
      align-items: center;

      a {
        flex: 1;
        line-height: 1;
        display: inline-block;
        font-size: 18px;
        position: relative;
        text-align: center;
      }
    }
  }
}

.login-footer {
  padding: 30px 0 50px;
  background: #fff;

  p {
    text-align: center;
    color: #999;
    padding-top: 20px;

    a {
      line-height: 1;
      padding: 0 10px;
      color: #999;
      display: inline-block;

      ~ a {
        border-left: 1px solid #ccc;
      }
    }
  }
}

.account-box {
  .toggle {
    padding: 15px 40px;
    text-align: right;

    a {
      color: rgb(153, 112, 0);

      i {
        font-size: 14px;
      }
    }
  }

  .form {
    padding: 0 20px 20px 20px;

    &-item {
      margin-bottom: 28px;

      .input {
        position: relative;
        height: 36px;

        > i {
          width: 34px;
          height: 34px;
          background: #cfcdcd;
          color: #fff;
          position: absolute;
          left: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 18px;
        }

        input {
          padding-left: 44px;
          border: 1px solid #cfcdcd;
          height: 36px;
          line-height: 36px;
          width: 100%;

          &.error {
            border-color: rgb(231, 145, 31);
          }

          &.active,
          &:focus {
            border-color: rgb(219, 139, 19);
          }
        }

        .code {
          position: absolute;
          right: 1px;
          top: 1px;
          text-align: center;
          line-height: 34px;
          font-size: 14px;
          background: #f5f5f5;
          color: #666;
          width: 90px;
          height: 34px;
          cursor: pointer;
        }
      }

      > .error {
        position: absolute;
        font-size: 12px;
        line-height: 28px;
        color: #069;

        i {
          font-size: 14px;
          margin-right: 2px;
        }
      }
    }

    .btn {
      display: block;
      width: 100%;
      height: 40px;
      color: #fff;
      text-align: center;
      line-height: 40px;
      background: rgb(221, 136, 39);

      &.disabled {
        background: #cfcdcd;
      }
    }
  }

  .action {
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .url {
      a {
        color: #999;
        margin-left: 10px;
      }
    }
  }
}

.subBtn {
  background: rgb(224, 126, 15);
  width: 100%;
  color: #fff;
}
.change {
  margin-bottom: 23px;
  margin-left: 12px;
}
</style>