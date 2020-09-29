<template>
  <div>
    <ToolbarBack />
    <br />
    <table style="margin: 60px 18px 30px 18px">
      <td style="width:80px">
        <img id="imgProject" v-bind:src="projectFunc.urlProject" alt="" />
      </td>
      <td>
        <div style="margin-left:10px"></div>
      </td>
      <td style="vertical-align: middle; font-size:16px" align="left">
        <div>
          <b>{{ projectFunc.name }}</b>
        </div>
        <div id="position" style="">
          {{ projectFunc.position }}
        </div>
        <div style="padding-top: 8px; font-size:14px">
          {{ projectFunc.description }}
        </div>
      </td>
    </table>
    <v-row style="margin-left:6px; margin-right:6px;">
      <v-col>
        <v-card elevation="6">
          <div style="padding-top:10px"><a-icon type="carry-out" style="color:#105EFB" /></div>
          <div><b>2</b></div>
          <div id="position" style="padding-bottom:10px">Done Task</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="6">
          <div style="padding-top:10px"><a-icon type="smile" style="color:#105EFB" /></div>
          <div><b>3</b></div>
          <div id="position" style="padding-bottom:10px">Developer</div>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="6">
          <div style="padding-top:10px"><a-icon type="profile" style="color:#105EFB" /></div>
          <div><b>2</b></div>
          <div id="position" style="padding-bottom:10px">Today's Task</div>
        </v-card>
      </v-col>
    </v-row>

    <v-row style="margin-left:6px; margin-right:6px;">
      <v-col>
        <v-card>
          <div style="padding-top:10px"><a-icon type="calendar" style="color:#105EFB" /></div>
          <div><b>10 Sep 2023</b></div>
          <div id="position" style="padding-bottom:10px">Release Date</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tasks -->
    <div style="margin-left:18px; margin-right:18px;">
      <v-row>
        <v-col><span style="float:left; font-size:20px; font-weight:550">Task</span></v-col>
        <v-col
          ><v-btn
            :to="{ name: 'createTask', params: { id: projectFunc.id } }"
            color="primary"
            style="float:right; text-transform: capitalize; background-color: #105EFB; border-radius: 15px;"
            ><a-icon type="plus-circle" style="margin-right:2.5px" />Create</v-btn
          ></v-col
        >
      </v-row>
      <div v-if="project">
        <!-- check ว่า มี project มั้ย -->
        <v-card
          align="left"
          style="padding:10px 10px 10px 10px; margin-bottom: 20px"
          v-for="task in project.tasks"
          :key="task.tasksId"
        >
          <div style="padding-left:15px">
            <v-row>
              <v-col>
                <v-row>
                  <b>
                    {{ task.taskName }} <a-icon style="color:#105EFB" type="paper-clip" /><a-icon
                      style="color:#105EFB"
                      type="message"
                    />
                  </b>
                </v-row>
                <v-row id="position">
                  {{ task.taskTime }}
                </v-row>
              </v-col>
              <v-col align="right" id="status">
                <md-chip
                  class="md-accent"
                  md-clickable
                  v-if="task.status == 'WIP'"
                  style="background-color:#F77B72; color:black; font-size: 11px; width:60.27px; text-align:center; font-weight:500;"
                >
                  <span
                    id="iconStatus"
                    class="iconify"
                    data-inline="false"
                    data-icon="carbon:warning"
                  ></span>
                  {{ task.status }}
                </md-chip>
                <md-chip
                  v-if="task.status == 'Done'"
                  style="background-color:#4DD987; color:black; font-size: 11px; font-weight:500;"
                >
                  <span
                    id="iconStatus"
                    class="iconify"
                    data-inline="false"
                    data-icon="octicon:check-circle-24"
                  ></span>
                  {{ task.status }}
                </md-chip>
              </v-col>
            </v-row>
            <v-row>
              <div>{{ task.descriptonTask }}</div>
            </v-row>

            <!-- list members -->
            <v-row>
              <v-col align="right" style="padding-right: 16px;">
                <vs-avatar-group float max="4" style="float:right; margin-top:10px;">
                  <vs-avatar
                    v-for="member in members"
                    :key="member.id"
                    style="border-radius: 100%; margin-left:3px; width:33px; height:33px;"
                  >
                    <img v-bind:src="member.image" />
                  </vs-avatar>
                </vs-avatar-group>
              </v-col>
            </v-row>
          </div>
        </v-card>
        <!-- </div> -->
      </div>
    </div>
    <div style="padding-bottom:90px">
      <!-- ระยะห่าง manu ข้างล่างกับ content -->
    </div>
    <BarRouter />
  </div>
</template>

<script>
import store from '../store/index.js'
import ToolbarBack from '@/components/ToolbarBack.vue'
import BarRouter from '@/components/BarRouter.vue'
export default {
  name: 'project',
  components: {
    ToolbarBack,
    BarRouter,
  },
  data() {
    const projectId = this.$route.params.id
    return {
      project: store.state.projects.find(p => p.id === projectId),
      members: store.state.members,
    }
  },
  computed: {
    projectFunc() {
      return this.$store.getters.project(parseInt(this.$route.params.id))
    },
  },
  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    },
  },
}
</script>

<style>
div {
  font-family: 'Roboto';
}
#imgProject {
  margin-top: 2px;
  border-radius: 100%;
  height: 80px;
  width: 80px;
  object-fit: cover;
}
#position {
  color: #8f8f8f;
  font-size: 12px;
  margin-top: 0px;
  padding-bottom: 0px;
}
.listTask {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 2px;
  font-family: 'Roboto';
}
#card {
  margin: 3px 15px 24px 15px; /* ระยะห่างรอบๆ card */
  border-radius: 5px;
}

#status {
  font-size: 10.5px;
  padding-right: 16px;
  width: 25%;
}
</style>