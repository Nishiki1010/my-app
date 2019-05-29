<template>
  <div id="app">
    <form action="">
    <div>
      名前<input type ="text" name="name" v-model="form.name">
      <div v-if="error.name">名前を入力してください</div>
    </div>
    <input type="submit"  value="送信" @click="submit">

    </form>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form: {
        name: ""
      },
    error: {
      name: false
      }
    }
  },
  methods: {
    submit(e){
      if(this.form.name.lenght == 0){
        this.error.name = true
      e.preventDefault()
    }else{
        this.error.name = false
      }
    }
  }
}
</script>

<style>
</style>
