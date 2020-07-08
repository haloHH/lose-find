<template>
    <div>
        <h1>{{id ? '编辑' : '创建'}}广告</h1>
        <el-form label-width="120px" @submit.native.prevent="save">
          
            <el-form-item label="广告名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
        <el-form-item label="图片">
          <el-upload class="avatar-uploader"
          :action="$http.defaults.baseURL+'/upload'"
          :show-file-list="false"
          :on-success="afterUpload"
          >
            <img v-if="model.ima" :src="model.ima" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
      </el-form-item>
<el-form-item>
    <el-button type="primary" native-type="submit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    props:{
        id:{}
    },
    data(){
        return{
            model:{
                ima:''
            }
        }
    },
    methods:{
        async save(){
          let res
            if(this.id){
              res = await this.$http.put(`/rest/ads/${this.id}`,this.model)
            }else{
            res = await this.$http.post('/rest/ads',this.model)
            }

              this.$router.push('/ads/list')
            this.$message({
                type:'success',
                 message:'保存成功'
            })
        },
         async fetch(){
        const res = await this.$http.get(`rest/ads/${this.id}`)
       this.model = res.data
      },
      afterUpload(res){
        this.$set(this.model,'ima',res.url)
      }
    },
    
    created(){
      this.id&&this.fetch()
    }
}
</script>
<style>
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