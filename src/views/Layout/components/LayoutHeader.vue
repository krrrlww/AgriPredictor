<template>
  <header class="app-header">
    <div class="logo"></div>
    <el-carousel class="banner">
      <el-carousel-item>
        <img src="@/assets/images/1.png" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/2.png" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/3.png" alt="" />
      </el-carousel-item>
      <el-carousel-item>
        <img src="@/assets/images/4.png" alt="" />
      </el-carousel-item>
    </el-carousel>
  </header>
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

  .banner {
    height: 135px;
    display: inline-block;
    width: 65%;
    background: #fff;
    position: absolute;
    right: 0;
    border-radius: 50px 0px 50px 50px;

    img {
      width: 100%;
      height: 135px;
    }
  }
}
</style>
