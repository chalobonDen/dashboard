<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <Toolbar />

    <md-content>
      <MenuContent />
      <br />
      <ListProject />
      <div style="padding-bottom:30px">
        <!-- ระยะห่าง manu ข้างล่างกับ content -->
      </div>
    </md-content>
    <BarRouter />
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import BarRouter from '@/components/BarRouter.vue'
import MenuContent from '@/components/MenuContent.vue'
import ListProject from '@/components/ListProject.vue'

export default {
  name: 'HomeDashboard',
  components: {
    Toolbar,
    BarRouter,
    MenuContent,
    ListProject,
  },
}
</script>
