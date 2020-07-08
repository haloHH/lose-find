<template>
    
<el-container style="height: 1000px; border: 1px solid #eee">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1']" unique-opened :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>常用</template>
        <el-menu-item-group>
          <template slot="title">失物</template>
          <el-menu-item index="/loseitems/create">增加失物</el-menu-item>
          <el-menu-item index="/loseitems/list">失物列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="拾物">
          <el-menu-item index="/finditems/create">增加拾物</el-menu-item>
             <el-menu-item index="/finditems/list">拾物列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="广告">
          <el-menu-item index="/ads/create">新增广告</el-menu-item>
             <el-menu-item index="/ads/list">广告列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>二级管理</template>
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="/categories/create">增加分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="管理员">
          <el-menu-item index="/admin_users/create">增加管理员</el-menu-item>
           <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>多余</template>
        <el-menu-item-group>
          <template slot="title">表白墙</template>
          <el-menu-item index="/loves/create">新增表白</el-menu-item>
          <el-menu-item index="/loves/list">表白列表</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="兼职">
          <el-menu-item index="/jobs/create">发布兼职</el-menu-item>
           <el-menu-item index="/jobs/list">兼职列表</el-menu-item>
        </el-menu-item-group>
      
      </el-submenu>
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
           <el-dropdown-item ><router-link tag="span" to="/login">退出</router-link></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>{{username}}</span>
    </el-header>
    
    <el-main>
     <router-view :key="$route.path"></router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>
<script>
export default {
  data(){
    return{
     username:''
    }
  },
  methods:{
        async fetch(){
          this.username = localStorage.getItem('username')
          console.log(this.username)
        },
        exit(){
          localStorage.clear()
        }
  },
  created(){
    this.fetch()
  }
}
</script>
