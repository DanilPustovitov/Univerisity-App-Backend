
<script>
import {defineComponent} from 'vue'
import Header_ from './components/layouts/Header.vue'
import Footer_ from './components/layouts/Footer.vue'
import Body_ from './components/layouts/Body.vue'
import "bootstrap/dist/js/bootstrap.js"

export default defineComponent({
  components:{
    Header_,
    Footer_,
    Body_,
    
  }
})
</script>

<template>

  <div >
    <Header_ />
    <Body_ />
    <Footer_ />
  </div>
</template>

