<template>
  <footer class="app_footer">
    <!-- 其它 -->
    <div class="extra">
      <div class="container">
        <div class="slogan">
          <a href="javascript:;">
            <i class="iconfont icon-keji"></i>
            <span>因地制宜</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-wuguan"></i>
            <span>AI预测</span>
          </a>
          <a href="javascript:;">
            <i class="iconfont icon-nongye"></i>
            <span>科技助农</span>
          </a>
        </div>
        <!-- 版权信息 -->
        <div class="copyright">
          <p>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">帮助中心</a>
            <a href="javascript:;">商务合作</a>
            <a href="javascript:;">技术支持</a>
          </p>
          <p>CopyRight © 银杏果项目小组</p>
        </div>
      </div>
    </div>
  </footer>
</template>
 
<style scoped lang='scss'>
.app_footer {
  overflow: hidden;
  background-color: #f5f5f5;

  .extra {
    background-color: #333;
  }

  .slogan {
    height: 178px;
    line-height: 58px;
    padding: 60px 100px;
    border-bottom: 1px solid #434343;
    display: flex;
    justify-content: space-between;

    a {
      height: 58px;
      line-height: 58px;
      color: #bd9e70;
      font-size: 28px;

      i {
        font-size: 50px;
        vertical-align: middle;
        margin-right: 10px;
        font-weight: 100;
      }

      span {
        vertical-align: middle;
        text-shadow: 0 0 1px #333;
      }
    }
  }

  .copyright {
    height: 120px;
    padding-top: 40px;
    text-align: center;
    color: #999;
    font-size: 15px;

    p {
      line-height: 1;
      margin-bottom: 20px;
    }

    a {
      color: #999;
      line-height: 1;
      padding: 0 10px;
      border-right: 1px solid #999;

      &:last-child {
        border-right: none;
      }
    }
  }
}
</style>
