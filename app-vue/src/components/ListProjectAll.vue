<template>
  <div>
    <div>
      <table style="width:100%; margin-bottom:10px">
        <div style="margin-left:18px">
          <td align="left" style="font-size:20px; font-weight:550">Project</td>
        </div>

        <!-- <div align="right" style="margin-right:18px;"> -->
        <td align="right">
          <a-input-search
            v-model="search"
            type="search"
            placeholder="input search text"
            style="width: 50%"
            @search="onSearch"
          />
          &nbsp;
          <a-select v-model="currentFilter" style="width: 28%; margin-right:18px;">
            <a-select-option value="all">
              <span style="font-size:10px">All</span>
            </a-select-option>
            <a-select-option value="WIP">
              <span style="font-size:10px">WIP</span>
            </a-select-option>
            <a-select-option value="done">
              <span style="font-size:10px">Done</span>
            </a-select-option>
          </a-select>
        </td>
      </table>
    </div>
    <div class="listProject">
      <md-card id="card" align="left" v-for="list in searchFilter" :key="list.id">
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

            <tr>
              <div style="float:right;">
                <td v-for="member in members" :key="member.id">
                  <img
                    v-bind:src="member.image"
                    style="width:33px; border-radius: 100px; margin-left:4px"
                  />
                </td>
              </div>
            </tr>
          </table>
        </md-card-content>
      </md-card>
    </div>
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
      members: [
        {
          id: 7,
          image: 'https://ca.slack-edge.com/T03EKL88Y-UN1SYFAAW-9d0ac330ef89-512',
          name: 'ampere',
          displayName: 'ampere',
          department: 'Development',
          position: 'Developer',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
        {
          id: 8,
          image: 'https://ca.slack-edge.com/T03EKL88Y-U0115EHAW73-5b10f51251f9-512',
          name: 'duke',
          displayName: 'duke',
          department: 'Development',
          position: 'Developer',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
        {
          id: 9,
          image: 'https://ca.slack-edge.com/T03EKL88Y-UR7G91LAH-5f30317a29ec-512',
          name: 'Kittayanee Khuankaew',
          displayName: 'Angie',
          department: 'Marketing',
          position: 'Business Analysis',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
      ],
      search: '',
    }
  },
  computed: {
    searchFilter() {
      let text = this.search.trim()
      return this.lists.filter(item => {
        return item.name.indexOf(text) > -1
      })
    },
  },
}
</script>

<style scoped>
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
