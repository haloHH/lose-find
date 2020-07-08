<template>
 <div>
     <send-card title="校园兼职"></send-card>
     <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm form">
  <el-form-item label="兼职名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="手动地点" prop="area">
    <el-input v-model="ruleForm.area"></el-input>
  </el-form-item>
  <el-form-item label="兼职时间" required>
    <el-col :span="11">
      <el-form-item prop="time">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.time" style="width: 100%;"></el-date-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
    <el-form-item label="联系人" prop="contact">
    <el-input v-model="ruleForm.contact"></el-input>
  </el-form-item>
  <el-form-item label="联系方式" prop="iphone">
    <el-input v-model="ruleForm.iphone"></el-input>
  </el-form-item>
  <el-form-item label="职位描述" prop="description">
    <el-input type="textarea" v-model="ruleForm.description"></el-input>
  </el-form-item>
  <el-form-item label="酬金" prop="pay">
    <el-input type="textarea" v-model="ruleForm.pay"></el-input>
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
          { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
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
          const res = this.$http.post('/jobs', this.ruleForm)
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
    }
  }
}
</script>
