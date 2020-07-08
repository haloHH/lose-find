<template>
   <div class="about">
    <h1>失物列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
           <!-- <el-table-column prop="parent.name" label="上级分类"></el-table-column> -->
      <el-table-column prop="name" label="名称"></el-table-column>
     <el-table-column prop="contact" label="联系人"></el-table-column>
          <el-table-column prop="iphone" label="联系方式"></el-table-column>
           <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="$router.push(`/jobs/create/${scope.row._id}`)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
    data(){
        return{
            items:[]
        }
    },
    methods:{
       async fetch(){
           const res = await this.$http.get(`/rest/jobs`)
           this.items = res.data
           console.log(this.items)
        },
        async remove(row){
            this.$confirm(`是否确定删除分类"${row.name}"`, '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(async () => {
							const res = await this.$http.delete(`rest/jobs/${row._id}`)
				          this.$message({
				            type: 'success',
				            message: '删除成功!'
				          });
						  this.fetch();
				        })        

        }
    },
    created(){
        this.fetch()
    }
}
</script>