<template>
    <div class="card">
        <div class="card-header">
            <h1>{{title}}</h1>
            <p class="down">
            <span>{{slogin}} </span>
            </p>
        </div>
        <div class="card-body">
            <slot></slot>
        </div>
               
    </div>
</template>
<style>
h1{

font-weight:normal;

}
span{
    color: grey;
}
.card{
    width: 28rem;
}
.card-body{
    font-size: 40px;
}
.more{
    display: block;
      margin: 1.5385rem 6rem;
}
</style>
<script>
export default {
  props: {
    title: {type: String, required: true},
    slogin: {type: String, required: true}},
  data () {
    return {}
  },
  methods: {
  }
}
</script>
