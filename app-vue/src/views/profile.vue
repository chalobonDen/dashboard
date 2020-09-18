<template>
  <div class="project">
    <!-- <h1>This is an about page</h1> -->
    <Toolbar />

    <md-content>
      <br />
      <br />
      <br />
      <br />
    </md-content>
    <BarRouter />
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import BarRouter from '@/components/BarRouter.vue'

export default {
  name: 'profile',
  components: {
    Toolbar,
    BarRouter,
  },
}
</script>

<style scoped>
div {
  font-family: 'Roboto';
}
#pictureUrl {
  /* display: block; */
  /* margin: 0 auto; */
  /* margin-left: 10%; */
  margin: 10px 15px 10px 10px;
  /* width: 18%; */
  width: 40px;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  border-radius: 100px;
  /* margin-left: 40%; */
}
</style>

