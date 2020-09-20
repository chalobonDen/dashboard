<template>
  <div class="project">
    <Toolbar />

    <md-content>
      <br />
      <br />
      <br />
      <br />
    </md-content>
    <Profile />
    <BarRouter />
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import BarRouter from '@/components/BarRouter.vue'
import Profile from '@/components/Profile.vue'

export default {
  name: 'profile',
  components: {
    Toolbar,
    BarRouter,
    Profile,
  },
}
</script>

<style scoped>
div {
  font-family: 'Roboto';
}
</style>
