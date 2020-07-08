<template>
  <div class="about">
    <div class="header">
      <img class="logo" src="../assets/logo.png" width="170rem" height="50rem" />
      <div class="slogin">
        <p class="ll"></p>
        <span>halo失物招领，做你的校园猎犬</span>
        <p class="rl"></p>
      </div>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/" class="ro">首页</router-link>
          </li>
          <li>
            <router-link to="/morelose" class="ro">失物招领</router-link>
          </li>
          <li>
            <router-link to="/morefind" class="ro">寻物启事</router-link>
          </li>
            <li>
            <router-link to="/morejob" class="ro">校园兼职</router-link>
          </li>
            <li>
            <router-link to="/morelove" class="ro">匿名表白</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="navs">
      <router-link to='/send/lostitems'>
        <el-button class="btn">
          <i class="iconfont icon-hero">发布寻物</i>
        </el-button>
      </router-link>
      <router-link to="/send/finditems">
        <el-button class="btn">
          <i class="iconfont icon-icon-test">发布招领</i>
        </el-button>
      </router-link>
      <router-link to="/send/jobs">
        <el-button class="btn">
          <i class="iconfont icon-news">发布兼职</i>
        </el-button>
      </router-link>
      <router-link to="/send/loves">
        <el-button class="btn">
          <i class="iconfont icon-icon-test1">发布表白</i>
        </el-button>
      </router-link>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class="sticky">
      <span>版权归halo所有</span>
      <br />
      <span>Copyright © 2020-至今</span>
    </footer>
  </div>
</template>
<style>
html,body{
  width: 100%;
     height: 100%;
}
* {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
}

.about {
  color: white;
   min-height:100%;
     height: auto !important;
  position:relative;
}

.header {
  width: 100%;
  height: 12rem;
  background: #c82b3a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.nav ul {
  display: flex;
  flex-wrap: wrap;
}

.nav ul li .ro{
  padding-left: 1rem;
  font-size: 1.4rem;
  color: white;
  text-decoration: none;
}

.logo {
  margin: 1rem auto;
  align-items: center;
}

.slogin {
  width: 100%;
  height: 26px;
  color: #fff;
  position: relative;
  text-align: center;
  font-size: 0.7rem;
}

.ll,
.rl {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  width: 100px;
  height: 1px;
  background: #fff;
  opacity: 0.5;
  font-size: 0;
  line-height: 0;
  vertical-align: middle;
}
.container {
  min-height:100%;
  padding-bottom: 100px;
}
.sticky {
  position: absolute;
    bottom: 0;
  height: 60px;
  background: #f0f0f0;
  text-align: center;
  color: grey;
  padding: 1rem 0;
  width: 100%;
}
.sticky span {
  display: inline-block;
}
.navs {
  display: flex;
  justify-content: center;
  margin: 10px;
  padding: 0 50px;
}
.navs .btn {
  background: #c82b3a;
  width: 200px;
  height: 60px;
}
.navs .btn i {
  color: white;
  font-size: 1.5rem;
}
</style>
<script>
export default {}
</script>
