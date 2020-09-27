<template>
  <div>
    <div class="listProject">
      <md-card id="card" align="left" v-for="list in lists" :key="list.id">
        <table>
          <td align="left" style="width:75% ">
            <md-card-header id="title">
              <div class="md-title">
                <b style="line-height: 0px;">{{ list.name }}</b>
              </div>
            </md-card-header>
            <md-card-content id="position">{{ list.position }}</md-card-content>
          </td>
          <td id="status" align="right">
            <md-chip
              class="md-accent"
              md-clickable
              v-if="list.status == 'WIP'"
              style="background-color:#F77B72; color:black; font-size: 11px; width:60.27px; text-align:center; font-weight:500;"
            >
              <span
                id="iconStatus"
                class="iconify"
                data-inline="false"
                data-icon="carbon:warning"
              ></span>
              {{ list.status }}
            </md-chip>
            <md-chip
              v-if="list.status == 'Done'"
              style="background-color:#4DD987; color:black; font-size: 11px; font-weight:500;"
            >
              <span
                id="iconStatus"
                class="iconify"
                data-inline="false"
                data-icon="octicon:check-circle-24"
              ></span>
              {{ list.status }}
            </md-chip>
          </td>
        </table>
        <md-card-content style="padding-top: 8px;">
          <table>
            <tr>
              <div>{{ list.description }}</div>
            </tr>

            <!-- <tr>
            <div style="float:right;">
              <td v-for="member in members" :key="member.id">
                <img
                  v-bind:src="member.image"
                  style="width:33px; border-radius: 100px; margin-left:4px"
                />
              </td>
            </div>
          </tr> -->

            <vs-avatar-group float max="4" style="float:right; margin-top:10px;">
              <vs-avatar
                v-for="member in members"
                :key="member.id"
                style="border-radius: 100%; margin-left:3px; width:33px; height:33px;"
              >
                <img v-bind:src="member.image" />
              </vs-avatar>
            </vs-avatar-group>
          </table>
        </md-card-content>
      </md-card>
    </div>

    <div style="padding-bottom:60px">
      <!-- ระยะห่าง manu ข้างล่างกับ content -->
    </div>
  </div>
</template>

<script>
import store from '../store/index.js'
export default {
  name: 'ListProject',
  data() {
    return {
      lists: store.state.lists,
      members: store.state.members,
    }
  },

  methods: {},
}
</script>

<style scoped>
.listProject {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 2px;
  font-family: 'Roboto';
}
table {
  border: none;
  width: 100%;
  padding-bottom: 0px;
}
#title {
  padding-bottom: 0px;
  font-size: 16px;
}
#position {
  color: #8f8f8f;
  font-size: 12px;
  margin-top: 0px;
  padding-bottom: 0px;
}
#status {
  font-size: 10.5px;
  padding-right: 16px;
  width: 25%;
}
#iconStatus {
  font-size: 10px;
  vertical-align: -4.57%;
}
#card {
  margin: 3px 15px 24px 15px; /* ระยะห่างรอบๆ card */
  border-radius: 5px;
}
.md-title {
  font-size: 16px;
  margin-bottom: -1px; /* ระยะห่างระหว่างชื่อโปรเจคกับตำแหน่งงาน */
  line-height: 20px; /* ระยะห่างระหว่างบรรทัดของชื่อโปรเจค เวลาขึ้นบรรทัดใหม่ */
}
</style>
