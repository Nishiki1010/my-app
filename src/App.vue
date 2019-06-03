<template>
  <div>
    hoge
      <app-btn @click="scroll" />
  </div>
</template>

<script>
  import AppBtn from './Button.vue'
  export default {
    components: {
      AppBtn
    },
    methods: {
      scroll() {
        window.scrollTo(0,0)
      }
    }
  }
</script>
<style>
  .content {
    height: 3000px;
  }
  #scrollToTop {
    position: fixed;
    bottom: 0;
  }
</style>