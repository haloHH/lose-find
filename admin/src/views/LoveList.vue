<template>
   <div class="about">
    <h1>表白墙列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID" width="230"></el-table-column>
           <!-- <el-table-column prop="parent.name" label="上级分类"></el-table-column> -->
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="icon" label="图片">
          <!-- vue中的插槽  slot-scope="scope" 
          其实就是 template 通过scope/slot-scope 属性 调用组件 slot 的属性，以达到可以调用组件属性实现复杂的嵌套；
          -->
          <template slot-scope="scope">
                <img :src="scope.row.icon"  style="height: 3rem;" >
          </template>
      </el-table-column>
     <el-table-column prop="toname" label="被表白者"></el-table-column>
          
           <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="$router.push(`/loves/create/${scope.row._id}`)" type="text" size="small">编辑</el-button>
        <el-button @click="remove(scope.row)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
    data(){
      const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
        return{
            items:[],
            tableData: Array(20).fill(item)
        }
    },
    methods:{
       async fetch(){
           const res = await this.$http.get(`/rest/loves`)
           this.items = res.data
           console.log(this.items)
        },
        async remove(row){
            this.$confirm(`是否确定删除分类"${row.name}"`, '提示', {
				          confirmButtonText: '确定',
				          cancelButtonText: '取消',
				          type: 'warning'
				        }).then(async () => {
							const res = await this.$http.delete(`rest/loves/${row._id}`)
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