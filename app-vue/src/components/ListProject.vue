<template>
  <div class="listProject">
    <md-card id="card" align="left" v-for="list in lists" :key="list.id">
      <table>
        <td align="left" style="width:75% ">
          <md-card-header id="title">
            <div class="md-title">
              <b style="line-height: 0px;">{{list.name}}</b>
            </div>
          </md-card-header>
          <md-card-content id="position">{{list.position}}</md-card-content>
        </td>
        <td id="status" align="right">
          <md-chip
            class="md-accent"
            md-clickable
            v-if="list.status == 'WIP'"
            style="background-color:#F77B72; color:black; font-size: 11px; width:60.27px; text-align:center; font-weight:500;"
          >
            <span id="iconStatus" class="iconify" data-inline="false" data-icon="carbon:warning"></span>
            {{list.status}}
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
            {{list.status}}
          </md-chip>
        </td>
      </table>
      <md-card-content style="padding-top: 8px;">
        <div>{{list.description}}</div>
        <div style="margin-bottom:18px">
          <img
            align="right"
            src="https://ca.slack-edge.com/T03EKL88Y-UTMUCNH1P-557445587bf1-512"
            style="width:33px; border-radius: 100px; margin-left:4px"
          />

          <img
            align="right"
            src="https://ca.slack-edge.com/T03EKL88Y-U01858A1810-7eaef9c3165e-512"
            style="width:33px; border-radius: 100px; margin-left:4px"
          />
        </div>
      </md-card-content>
      {{user.userPic}}
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'ListProject',
  data() {
    return {
      lists: [
        {
          id: 1,
          name: 'Project #1',
          position: 'Web Design',
          description: 'Commodo adipiscing ornare sit lorem sit tempus urna, vestibulum, neque.',
          status: 'WIP',
        },
        {
          id: 2,
          name: 'Artisan’ Dashboard Project',
          position: 'Mobile App',
          description: 'The Dashboard that show the flow of work in the project.',
          status: 'WIP',
        },
        {
          id: 3,
          name: 'Project #2',
          position: 'Marketing',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
          status: 'Done',
        },
        {
          id: 4,
          name: 'Project #3',
          position: 'Mobile App',
          description: 'Consequat tempus nisi, orci, ligula duis.',
          status: 'Done',
        },
      ],
      user: [
        {
          userId: 1,
          username: 'jayjay',
          userPic: 'https://ca.slack-edge.com/T03EKL88Y-UTMUCNH1P-557445587bf1-512',
        },
      ],
    }
  },
}
</script>

<style  scoped>
.listProject {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 50px;
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
