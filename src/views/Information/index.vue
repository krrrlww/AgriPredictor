<script lang="ts" setup>
import { ArrowLeft, CirclePlus } from "@element-plus/icons-vue";
import { ref } from "vue";
import { Apple, Location, Place } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter();
const tableData = ref([
  {
    description: "无",
    cropName: "萝卜",
    plantingLocation: "重庆",
    plantingArea: "1000",
    plantingTimeBegin: "2024-10-10",
  },
  {
    description: "无",
    cropName: "白菜",
    plantingLocation: "四川",
    plantingArea: "2000",
    plantingTimeBegin: "2024-10-20",
  },
  {
    description: "无",
    cropName: "土豆",
    plantingLocation: "北京",
    plantingArea: "1500",
    plantingTimeBegin: "2024-11-10",
  },
  {
    description: "无",
    cropName: "茄子",
    plantingLocation: "湖南",
    plantingArea: "3000",
    plantingTimeBegin: "2024-12-10",
  },
  {
    description: "无",
    cropName: "香菜",
    plantingLocation: "海南",
    plantingArea: "1000",
    plantingTimeBegin: "2024-10-10",
  },
  {
    description: "无",
    cropName: "辣椒",
    plantingLocation: "福建",
    plantingArea: "2300",
    plantingTimeBegin: "2024-10-20",
  },
  {
    description: "无",
    cropName: "小麦",
    plantingLocation: "黑龙江",
    plantingArea: "1500",
    plantingTimeBegin: "2024-11-10",
  },
  {
    description: "无",
    cropName: "水稻",
    plantingLocation: "安徽",
    plantingArea: "3000",
    plantingTimeBegin: "2024-12-10",
  },
]);
const dialogVisible = ref(false);
const form = ref({
  description: "",
  cropName: "",
  plantingLocation: "",
  plantingArea: "",
  plantingTimeBegin: "",
});
const formLabelWidth = ref("120px");
const resetForm = () => {
  form.value.cropName = "";
  form.value.plantingArea = "";
  form.value.plantingLocation = "";
  form.value.plantingTimeBegin = "";
  form.value.description = "";
};
const submitForm = () => {
  //格式化日期
  const date = new Date(form.value.plantingTimeBegin);
  console.log(date);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  //最终得到的格式化字符串
  const date1 = `${year}-${month}-${day}`;
  //给信息列表中加入新成员
  tableData.value.push({
    description: form.value.description,
    cropName: form.value.cropName,
    plantingLocation: form.value.plantingLocation,
    plantingArea: form.value.plantingArea,
    plantingTimeBegin: date1,
  });
  //关闭弹窗
  ElMessage({ type: "success", message: "添加成功" });
  dialogVisible.value = false;
};
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
        @click="dialogVisible = true"
      >
        添加作物信息
        <el-icon class="el-icon--right"><CirclePlus /></el-icon>
      </el-button>
    </el-button-group>
    <el-dialog
      title="作物信息登记"
      v-model="dialogVisible"
      width="30%"
      @close="resetForm"
      style="background-color: rgba(255, 255, 240, 1)"
    >
      <el-form :model="form">
        <el-form-item label="作物名称" :label-width="formLabelWidth">
          <el-input
            v-model="form.cropName"
            autocomplete="off"
            placeholder="萝卜"
            :suffix-icon="Apple"
          ></el-input>
        </el-form-item>
        <el-form-item label="种植面积(m²)" :label-width="formLabelWidth">
          <el-input
            v-model="form.plantingArea"
            autocomplete="off"
            placeholder="1500"
            :suffix-icon="Place"
          ></el-input>
        </el-form-item>
        <el-form-item label="种植地点" :label-width="formLabelWidth">
          <el-select
            v-model="form.plantingLocation"
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
        </el-form-item>
        <el-form-item label="开始时间" :label-width="formLabelWidth">
          <el-col :span="11">
            <el-date-picker
              type="date"
              v-model="form.plantingTimeBegin"
              placeholder="预计开始时间"
              style="width: 100%"
            />
          </el-col>
        </el-form-item>
        <el-form-item label="备注" :label-width="formLabelWidth">
          <el-input
            v-model="form.description"
            style="width: 100%"
            autosize
            type="textarea"
            placeholder="添加备注信息"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <el-button
          @click="dialogVisible = false"
          round
          color="#ffce7b"
          style="color: #fffffb"
          >取消</el-button
        >
        <el-button
          @click="submitForm"
          round
          color="#fcaf17"
          style="color: #feeeed"
          >提交</el-button
        >
      </template>
    </el-dialog>
  </div>
  <div class="form">
    <el-table :data="tableData" stripe style="width: 100%" height="330">
      <el-table-column prop="cropName" label="作物名称" width="220" />
      <el-table-column prop="plantingLocation" label="种植地点" width="220" />
      <el-table-column prop="plantingArea" label="种植面积(m²)" width="220" />
      <el-table-column prop="description" label="备注" width="220" />
      <el-table-column
        prop="plantingTimeBegin"
        label="种植开始时间"
        width="220"
      />
      <el-table-column label="操作">
        <el-button round color="#ffce7b" style="color: #fffffb">编辑</el-button>
        <el-button round color="#fcaf17" style="color: #feeeed">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<style scoped lang="scss">
.nav {
  height: 50px;
  background-color: rgb(255, 255, 255);
}

.form {
  height: 330px;
}
</style>
