<script setup>
import { useRouter } from "vue-router";
import { userUserStore } from "@/stores/user";
const router = useRouter();
const userStore = userUserStore();
const confirm = () => {
  //1.清除用户信息
  userStore.clearUserInfo();
  //2.跳转登录页
  router.push("/login");
};
</script>
<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <template v-if="userStore.userInfo.data">
          <li>
            <a href="javascript:;"
              ><i class="iconfont icon-gerentouxiang"></i
              >{{ userStore.name }}</a
            >
          </li>
          <li>
            <el-popconfirm
              title="确认退出吗?"
              confirm-button-text="确认"
              cancel-button-text="取消"
              @confirm="confirm"
            >
              <template #reference>
                <a href="javascript:;">退出登录</a>
              </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">个人信息</a></li>
          <li><a href="javascript:;">使用指南</a></li>
        </template>
        <template v-else>
          <li>
            <a href="javascript:;" @click="$router.push('/login')">请先登录</a>
          </li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>
<style scoped lang="scss">
.app-topnav {
  background: #333;

  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;

    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 18px;
          margin-right: 2px;
        }

        &:hover {
          color: #d86316;
        }
      }

      ~ li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
