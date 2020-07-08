<template>
 <div>
     <send-card title="发布寻物"></send-card>
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm form">
  <el-form-item label="寻物名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="地点" prop="area">
    <el-select v-model="ruleForm.area" placeholder="请选择丢失地点">
      <el-option label="宿舍楼" value="宿舍楼"></el-option>
      <el-option label="教师公寓" value="教师公寓"></el-option>
      <el-option label="教学楼A区" value="教学楼A区"></el-option>
      <el-option label="教学楼B区" value="教学楼B区"></el-option>
      <el-option label="饭一" value="饭一"></el-option>
      <el-option label="饭二" value="饭二"></el-option>
      <el-option label="公交车站" value="公交车站"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="手动地点" prop="area">
    <el-input v-model="ruleForm.area"></el-input>
  </el-form-item>
  <el-form-item label="寻物时间" required>
    <el-col :span="11">
      <el-form-item prop="time">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.time" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
    <el-form-item label="寻物人" prop="contact">
    <el-input v-model="ruleForm.contact"></el-input>
  </el-form-item>
    <el-form-item label="图片">
          <el-upload class="avatar-uploader"
          :action="$http.defaults.baseURL+'/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
          >
            <img v-if="ruleForm.icon" :src="ruleForm.icon" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      </el-form-item>
  <el-form-item label="联系方式" prop="iphone">
    <el-input v-model="ruleForm.iphone"></el-input>
  </el-form-item>
  <el-form-item label="详情信息" prop="description">
    <el-input type="textarea" v-model="ruleForm.description"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" class="btn" @click="submitForm('ruleForm')">立即上传</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
 </div>
</template>
<style>
.form{
    margin-top: 2rem;
}
.btn{
  color: white;
}
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        area: '',
        time: '',
        contact: '',
        description: '',
        iphone: '',
        icon: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入物品名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20个字符', trigger: 'blur' }
        ],
        area: [
          { required: true, message: '请选择地点', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        contact: [
          { required: true, message: '请填写联系方式', trigger: 'blur' }
        ],
        icon: [
          { type: String, trigger: 'blur' }
        ],
        iphone: [
          { required: true, message: '请填写联系方式', trigger: 'blur' }
        ],
        description: [
          { message: '请填写详情信息', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // eslint-disable-next-line no-unused-vars
          const res = this.$http.post('/lostitemes', this.ruleForm)
          this.$router.push('/')
          this.$message({
            type: 'success',
            message: '保存成功'
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    },
    afterUpload (res) {
      this.$set(this.ruleForm, 'icon', res.url)
    }
  }
}
</script>
