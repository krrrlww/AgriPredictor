<script setup>
import {
  ArrowLeft,
  Compass,
  Location,
  ArrowDown,
} from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { adviceAPI } from "@/apis/predictor";
import { ElMessage } from "element-plus";
//const region = "beijing";
const getAdvice = async () => {
  //const res = await adviceAPI(region);
  //console.log(res);
  if (form.value.region != "") {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      if (form.value.region == "北京") {
        form.value.advice = "白菜-包菜-花椰菜-西兰花-油菜";
      }
      if (form.value.region == "重庆") {
        form.value.advice = "水稻-玉米-油菜-大豆-柑橘";
      }
      if (form.value.region == "上海") {
        form.value.advice = "小麦-玉米-棉花-黄桃-油菜";
      }
      if (form.value.region == "天津") {
        form.value.advice = "海水稻-西瓜-小枣-水稻-油菜";
      }
    }, 3000);
  } else {
    ElMessage({ type: "warning", message: "请选择地区" });
  }
};
const getSuggestion = async () => {
  //const res = await adviceAPI(region);
  //console.log(res);
  if (form1.value.information != "") {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      if (form1.value.information == "萝卜-重庆-1000m²") {
        form1.value.suggestion =
          "在重庆种植萝卜，应选择适应当地气候和土壤的优良品种，如“秋雪”系列，进行科学种植。注重田间管理，包括土壤准备、合理施肥、病虫害防治和适时采收，以确保萝卜的品质和产量。同时，利用地理标志产品的优势，打造品牌，拓展市场销售渠道，增加产品附加值。";
      }
      if (form1.value.information == "白菜-四川-2000m²") {
        form1.value.suggestion =
          "在四川种植白菜，建议选择适合当地湿润气候和肥沃土壤的高产优质品种，如“京秋3号”和“京秋4号”。这些品种抗根肿病，耐抽薹，且便于码菜、包装与搬运，不易脱帮和腐烂，适合四川的气候和市场需求。同时，注意田间管理，包括适时播种、合理施肥和病虫害防治。四川盆地的气候特点为全年温暖湿润，日照时间较短，适宜白菜生长。";
      }
      if (form1.value.information == "土豆-北京-1000m²") {
        form1.value.suggestion =
          "在北京种植土豆，建议选择春季3月下旬至4月上旬进行播种，这是北京地区适宜的土豆种植时间  。应选择土层深厚、排水良好、富含有机质的土壤，如北京地区主要以黄绵土、黄砂土和红黏土为主  。种植前需深翻土地，施足底肥，保持土壤湿润。可选择优质、抗病品种，如“鲁花”、“夏波蒂”等，并在种植前对种薯进行消毒处理。生长期间注意合理浇水，避免过湿，及时施肥和防治病虫害  。土豆生长周期一般为3-4个月，北京地区一般在7月中下旬至8月中旬收获。";
      }
    }, 3000);
  } else {
    ElMessage({ type: "warning", message: "请选择作物信息" });
  }
};
const router = useRouter();
const form = ref({
  region: "",
  advice: "",
});
const form1 = ref({
  information: "",
  suggestion: "",
});
const loading = ref(false);
</script>
<template>
  <div class="nav">
    <el-button-group>
      <el-button
        type="primary"
        :icon="ArrowLeft"
        style="width: 200px; height: 50px; font-size: 15px; color: #fffffb"
        round
        color="#fab27b"
        @click="$router.push('/')"
        >返回主页</el-button
      >
      <el-button
        type="primary"
        style="width: 200px; height: 50px; font-size: 15px; color: white"
        color="#faa755"
        round
      >
        AI使用说明
        <el-icon class="el-icon--right"><Compass /></el-icon>
      </el-button>
    </el-button-group>
  </div>
  <div class="function" v-loading="loading">
    <div class="f1">
      <nav>作物推荐</nav>
      <p>种植区域选择:</p>
      <el-select
        v-model="form.region"
        placeholder="选择您的种植区域"
        :suffix-icon="Location"
      >
        <el-option label="重庆" value="重庆" />
        <el-option label="北京" value="北京" />
        <el-option label="上海" value="上海" />
        <el-option label="天津" value="天津" />
        <el-option label="河北" value="河北" />
        <el-option label="山西" value="山西" />
        <el-option label="辽宁" value="辽宁" />
        <el-option label="吉林" value="吉林" />
        <el-option label="黑龙江" value="黑龙江" />
        <el-option label="江苏" value="江苏" />
        <el-option label="浙江" value="浙江" />
        <el-option label="安徽" value="安徽" />
        <el-option label="福建" value="福建" />
        <el-option label="江西" value="江西" />
      </el-select>
      <p>AI推荐作物:</p>
      <el-input v-model="form.advice" type="textarea" class="input" />
      <el-button
        style="width: 200px; height: 50px; font-size: 15px; color: white"
        color="#faa755"
        round
        @click="getAdvice"
      >
        开始推荐
      </el-button>
    </div>
    <div class="f2">
      <nav>种植建议</nav>
      <p>作物信息选择:</p>
      <el-select
        v-model="form1.information"
        placeholder="选择您的作物信息"
        :suffix-icon="ArrowDown"
      >
        <el-option label="萝卜-重庆-1000m²" value="萝卜-重庆-1000m²" />
        <el-option label="白菜-四川-2000m²" value="白菜-四川-2000m²" />
        <el-option label="土豆-北京-1000m²" value="土豆-北京-1000m²" />
        <el-option label="茄子-湖南-3000m²" value="茄子-湖南-3000m²" />
        <el-option label="香菜-海南-1000m²" value="香菜-海南-1000m²" />
      </el-select>
      <p>AI种植建议:</p>
      <el-input v-model="form1.suggestion" class="input" type="textarea" />
      <el-button
        style="width: 200px; height: 50px; font-size: 15px; color: white"
        color="#faa755"
        round
        @click="getSuggestion"
      >
        开始建议
      </el-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav {
  height: 50px;
  background-color: rgb(255, 255, 255);
  margin-bottom: 10px;
}
.function {
  height: 500px;
  background-color: rgba(221, 190, 98, 0.259);
  position: relative;
  border-radius: 20px 20px 20px 20px;
  margin-bottom: 10px;

  .f1 {
    width: 500px;
    height: 350px;
    background-color: rgba(192, 139, 70, 0.352);
    position: absolute;
    left: 200px;
    top: 20px;
    border-radius: 50px 50px 50px 50px;
    box-shadow: 0 8px 8px rgba(230, 105, 22, 0.2);

    nav {
      height: 50px;
      background-color: #fab27b;
      border-radius: 50px 50px 0px 0px;
      border-bottom: 1px solid #f5f5f5;
      line-height: 50px;
      text-align: center;
      font-size: 22px;
      color: #feeeed;
    }

    p {
      height: 50px;
      line-height: 50px;
      margin-left: 20px;
      font-size: 20px;
      color: #563203;
    }

    .el-select {
      width: 200px;
      padding-left: 20px;
    }

    .el-option {
      width: 200px;
    }

    .input {
      width: 300px;
      padding-left: 20px;
    }

    .el-button {
      display: block;
      margin-left: 150px;
      margin-top: 50px;
    }
  }

  .f2 {
    width: 500px;
    height: 350px;
    background-color: rgba(192, 139, 70, 0.352);
    position: absolute;
    right: 200px;
    bottom: 20px;
    border-radius: 50px 50px 50px 50px;
    box-shadow: 0 8px 8px rgba(230, 105, 22, 0.2);

    nav {
      height: 50px;
      background-color: #fab27b;
      border-radius: 50px 50px 0px 0px;
      border-bottom: 1px solid #f5f5f5;
      line-height: 50px;
      text-align: center;
      font-size: 22px;
      color: #feeeed;
    }

    p {
      height: 50px;
      line-height: 50px;
      margin-left: 20px;
      font-size: 20px;
      color: #563203;
    }

    .el-select {
      width: 200px;
      padding-left: 20px;
    }

    .el-option {
      width: 200px;
    }

    .input {
      width: 450px;
      padding-left: 20px;
    }

    .el-button {
      display: block;
      margin-left: 150px;
      margin-top: 50px;
    }
  }
}
</style>