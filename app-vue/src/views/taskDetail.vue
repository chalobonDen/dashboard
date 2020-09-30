<template>
  <div>
    <ToolbarBack />
    <br />
    <div style="margin :60px 18px 0 18px">
      <!-- Done button -->
      <!-- เดี๋ยวต้องใส้ v-if เพื่อ check status ของ task -->
      <v-btn
        style="width:100%; text-transform: capitalize; color: #000000;"
        elevation="6"
        color="#F77B72"
      >
        <svg
          style="margin-right:3px"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
        </svg>
        Make as Done
      </v-btn>
    </div>
    <!-- Dashboard -->
    <v-row style="margin-left:6px; margin-right:6px;">
      <v-col>
        <v-card elevation="6">
          <div style="padding-top:10px">
            <span
              class="iconify"
              data-inline="false"
              data-icon="ant-design:fund-projection-screen-outlined"
              style="color: #0036c7; font-size: 22px;"
            ></span>
          </div>
          <div><b>Project #1</b></div>
          <div id="position" style="padding-bottom:10px">Project name</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="6">
          <div style="padding-top:10px">
            <a-icon type="clock-circle" style="color:#0036c7; font-size: 22px;" />
          </div>
          <div><b>10/09/2020</b></div>
          <div id="position" style="padding-bottom:10px">Due date</div>
        </v-card>
      </v-col>
    </v-row>
    <v-row style="margin-left:6px; margin-right:6px;">
      <v-col>
        <v-card>
          <div style="padding-top:10px">
            <span
              class="iconify"
              data-inline="false"
              data-icon="clarity:users-line"
              style="color: #0036c7; font-size: 22px;"
            ></span>
          </div>
          <div>
            <b>pic of member</b>
          </div>
          <div id="position" style="padding-bottom:10px">Team</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Detail of Task -->
    <v-row style="margin-left:6px; margin-right:6px;">
      <v-col
        ><span style="float:left; font-size:20px; font-weight:550">{{
          taskFunc.taskName
        }}</span></v-col
      >
    </v-row>

    <div class="detailTask">
      {{ taskFunc.descriptonTask }}
    </div>

    <BarRouter />
  </div>
</template>

<script>
import ToolbarBack from '@/components/ToolbarBack.vue'
import BarRouter from '@/components/BarRouter.vue'
import store from '../store/index.js'
export default {
  name: 'taskDetail',
  components: {
    ToolbarBack,
    BarRouter,
  },
  data() {
    return {
      project: store.state.projects,
    }
  },
  computed: {
    taskFunc() {
      return this.$store.getters.task(parseInt(this.$route.params.id))
    },
  },
}
</script>

<style>
div {
  font-family: 'Roboto';
}
.detailTask {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding: 15px 15px 15px 15px;
  text-align: left;
}
#position {
  color: #8f8f8f;
  font-size: 12px;
  margin-top: 0px;
  padding-bottom: 0px;
}
</style>