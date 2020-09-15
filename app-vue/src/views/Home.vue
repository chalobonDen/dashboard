<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <footer>
      <BarRouter />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import BarRouter from '@/components/BarRouter.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    BarRouter,
  },
}
</script>
