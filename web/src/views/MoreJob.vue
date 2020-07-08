<template>
    <div class="about">
        <div v-for="(item,index) in jobmodel" :key="index" class="items">
           <div class="mess">
           <h2> {{item.name}}</h2>
            <p>所在城市 {{item.area}}</p>
            <p> 发布时间{{item.time}}</p>
           </div>
           <hr>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      jobmodel: []
    }
  },
  methods: {
    async fetchJob () {
      const res = await this.$http.get('/jobs/list')
      this.jobmodel = res.data
    }
  },
  created () {
    this.fetchJob()
  }
}
</script>
<style>
.items{
  display: flex;
  padding: 1.9231rem 0;
  /* justify-content: center; */
  align-items: flex-start;
  justify-content:flex-start;
    /* align-content: flex-start; */
    border-bottom: 1px solid #f0f0f0;

}
.items .icon{
  margin-left: 30rem ;
}
.items .mess{
  padding-left: 1.9231rem;
  align-items: center;
}
.items h2{
  color: black;
}
.items p{
  color: grey;
}
.items:hover{
  background: #f0f0f0;
}
</style>
