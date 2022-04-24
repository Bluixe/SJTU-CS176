<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="debounce(add,2000)()">count is: {{ count }}</button>
    <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    add: function(){
      this.count++
    },
    debounce: function(fn, delay){
      return ()=>{
        if(this.timer !== null){
          console.log("clear")
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(fn, delay)
      }
    }
  },
  data() {
    return {
      timer: null,
      count: 0
    }
  }
}
</script>
