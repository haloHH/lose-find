<template>
  <div>
    <div class="swiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide class="swiper-item" v-for="item of swiperList" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="去哪儿门票" />
        </swiper-slide>
        <!-- Optional controls ,显示小点-->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div class="list">
    <div class="list-container">
      <m-card title="失物招领" slogin="THE LOST THING">
        <div v-for="(item,index) in losemodel" :key="index">
          <el-tag size="mini" type="danger" effect="dark">{{index+1}}</el-tag>
          <span class="nav-link">{{item.name | ellipsis}}</span>
        </div>
         <el-button round class="more"><router-link to="/morelose" tag="div">查看更多</router-link></el-button>
      </m-card>
      <m-card title="寻物启事"  slogin="LOOKING FOR SOMETHING">
        <div v-for="(item,index) in findmodel" :key="index">
          <el-tag size="mini" type="danger" effect="dark">{{index+1}}</el-tag>
          <span class="nav-link">{{item.name | ellipsis}}</span>
        </div>
         <el-button round class="more"><router-link to="/morefind" tag="div">查看更多</router-link></el-button>
      </m-card>
            </div>
     <div class="list-container">

      <m-card title="兼职招聘" slogin="LOOKING FOR Job">
        <div v-for="(item,index) in jobmodel" :key="index">
          <el-tag size="mini" type="danger" effect="dark">{{index+1}}</el-tag>
          <span class="nav-link">{{item.name | ellipsis}}</span>
        </div>
         <el-button round class="more"><router-link to="/morejob" tag="div">查看更多</router-link></el-button>
      </m-card>
      <m-card title="匿名表白" slogin="LOOKING FOR Lover">
        <div v-for="(item,index) in lovemodel" :key="index">
          <el-tag size="mini" type="danger" effect="dark">{{index+1}}</el-tag>
          <span class="nav-link">{{item.name | ellipsis}}</span>
        </div>
         <el-button round class="more"><router-link to="/morelove" tag="div">查看更多</router-link></el-button>
              </m-card>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  filters: {
    ellipsis (value) {
      if (!value) return ''
      if (value.length > 20) {
        return value.slice(0, 20) + '...'
      }
      return value
    }
  },
  data () {
    return {
      swiperOption: {
        // 参数选项,显示小点
        pagination: '.swiper-pagination',
        // 循环
        loop: true,
        // 每张播放时长3秒，自动播放
        autoplay: { delay: 1000 },

        // 滑动速度
        speed: 1000
        // delay:1000
      },
      swiperList: [
        {
          id: '001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1805/d4/d41d77b6ba8aca02.jpg_750x200_ac3d9a73.jpg'
        },
        {
          id: '002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1805/f1/e57bc93226317102.jpg_750x200_9ab37bd0.jpg'
        },
        {
          id: '003',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/c4/1cdd28811593b802.jpg_750x200_5fbb7c91.jpg'
        }
      ],
      model: [],
      losemodel: [],
      lovemodel: [],
      jobmodel: [],
      findmodel: []
    }
  },
  methods: {
    async fetchCat () {
      const res = await this.$http.get('/categories')
      this.model = res.data
      console.log(this.model)
    },
    async fetchLos () {
      const res = await this.$http.get('/loseitemes/list')
      this.losemodel = res.data
      console.log(this.losemodel)
    },
    async fetchFind () {
      const res = await this.$http.get('/finditemes/list')
      this.findmodel = res.data
    },
    async fetchLove () {
      const res = await this.$http.get('/loves/list')
      this.lovemodel = res.data
      console.log(this.lovemodel)
    },
    async fetchJob () {
      const res = await this.$http.get('/jobs/list')
      this.jobmodel = res.data
      console.log(this.jobmodel)
    },
    async fetchAd () { // 获取广告，目前未使用
      // eslint-disable-next-line no-unused-vars
      const res = await this.$http.get('/ads/list')
      this.swiperList = res.data
    }
  },
  created () {
    this.fetchCat()
    this.fetchLos()
    this.fetchLove()
    this.fetchFind()
    this.fetchJob()
  }
}
</script>

<style>
* {
  color: #000000;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.list-container {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.7692rem;
  justify-content: center;
  /* align-items: center; */
  padding-top: 1rem;
  margin-left: 200px;
  line-height: 1.5385rem;
}
.list-container span{
font-size: 1.2308rem;
/* color: black; */
}
.nav-link{
   color: #333;
    font-size: 16px;
    height: 38px;
}
.swiper {
  width: 100%;
  text-align: center;
}
.nav-link router-link{
  list-style: none;
   color: #333;
    font-size: 16px;
    height: 38px;
}
.nav-link router-link:hover{
  color: blue;
}
</style>
