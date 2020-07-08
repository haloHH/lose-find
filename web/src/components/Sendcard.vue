<template>
    <div class="s-header">
        <div><p class="ll"></p>
            <span>{{title}}</span>
            <p class="rl"></p></div>
         
    </div>
</template>
<style>
    .s-header{
         width: 100%;
        height: 5rem;
  background: #c82b3a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
    }
    .s-header span{
        font-size: 22px;
        color: white;
    }
</style>
<script>
export default {
  props: {
    title: String
  }
}
</script>
