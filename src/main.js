import Vue from 'vue'
import VuwScrollTo from  "vue-scrollto"

Vue.use(VueScrollTo);

Vue.config.productionTip = false;

New Vue({
  render: h => h(App),
}).$mount('#app')

export  default  {
  method: {
    scroll(){
      this.$scrollTo("body",500)
    }
  }
}
