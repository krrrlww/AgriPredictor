<template>
  <ul class="goods-list">
    <li>
      <RouterLink to="/information">
        <img src="@/assets/images/function1.png" alt="" />
        <p class="name">登记种植信息</p>
        <div>
          &emsp;&emsp;根据自身情况，登记种植地点、种植面积、种植作物等相关种植信息，为其它功能提供数据源
        </div>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/predictor">
        <img src="@/assets/images/function2.png" alt="" />
        <p class="name">AI预测建议</p>
        <div>
          &emsp;&emsp;利用人工智能技术分析实时数据，预测未来的种植情况,为种植者提供有针对性的种植建议，帮助种植者更好应对种植风险
        </div>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/">
        <img src="@/assets/images/function3.png" alt="" />
        <p class="name">人工智能专家</p>
        <div>
          &emsp;&emsp;提供人工智能“专家”在线答疑服务，解答种植者在种植过程中遇到的各种问题,大大提高种植者的种植技能
        </div>
      </RouterLink>
    </li>
    <li>
      <RouterLink to="/">
        <img src="@/assets/images/function4.png" alt="" />
        <p class="name">种植论坛讨论</p>
        <div>
          &emsp;&emsp;建立种植者论坛，为种植者提供在线交流的平台,种植者可以在论坛上分享种植经验，同时邀请农业专家定期在线解答种植者的问题
        </div>
      </RouterLink>
    </li>
  </ul>
</template>
<style scoped lang="scss">
.goods-list {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  height: 500px;

  li {
    width: 20%;
    height: 70%;
    background: #f0f9f4;
    transition: all 0.5s;
    border-radius: 50px 50px 50px 50px;

    &:hover {
      transform: translate3d(0, -20px, 0);
      box-shadow: 0 8px 8px rgba(230, 105, 22, 0.2);
    }

    img {
      width: 100%;
      height: 100%;
      border-radius: 50px 50px 50px 50px;
    }

    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    div {
      margin-top: 15px;
      border-top: 2px solid #dfa07c;
      padding: 5px;
      color: #999;
    }
  }
}
</style>