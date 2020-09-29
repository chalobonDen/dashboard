<template>
  <div>
    <ToolbarBack />
    <br /><br /><br />
    {{ member.name }}
    <BarRouter />
  </div>
</template>

<script>
import store from '../store/index.js'
import ToolbarBack from '@/components/ToolbarBack.vue'
import BarRouter from '@/components/BarRouter.vue'
export default {
  name: 'profileMember',
  components: {
    ToolbarBack,
    BarRouter,
  },
  data() {
    const memberId = this.$route.params.id
    return {
      member: store.state.members.find(m => m.id === memberId),
    }
  },
}
</script>

<style>
</style>