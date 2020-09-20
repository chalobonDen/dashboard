<template>
  <div>
    <div>
      <table style="width:100%; margin-bottom:10px">
        <div style="margin-left:18px">
          <td align="left" style="font-size:20px; font-weight:550">Project</td>
        </div>

        <!-- <div align="right" style="margin-right:18px;"> -->
        <td align="right">
          <input type="search" name id v-model="search" />
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
      <md-card id="card" align="left" v-for="list in listFilter" :key="list.id">
        <table id="listTask">
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
          <div>{{ list.description }}</div>
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
        {{ user.userPic }}
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListProjectAll',
  data() {
    return {
      currentFilter: 'all',
      status: [
        {
          statusId: 1,
          statusName: 'Done',
          statusBoolean: true,
        },
        {
          statusId: 2,
          statusName: 'WIP',
          statusBoolean: false,
        },
      ],
      lists: [
        {
          id: 1,
          name: 'Project #1',
          position: 'Web Design',
          description: 'Commodo adipiscing ornare sit lorem sit tempus urna, vestibulum, neque.',
          status: 'WIP',
          statusBoolean: false,
        },
        {
          id: 2,
          name: 'Artisan’ Dashboard Project',
          position: 'Mobile App',
          description: 'The Dashboard that show the flow of work in the project.',
          status: 'WIP',
          statusBoolean: false,
        },
        {
          id: 3,
          name: 'Project #2',
          position: 'Marketing',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
          status: 'Done',
          statusBoolean: true,
        },
        {
          id: 4,
          name: 'Project #3',
          position: 'Mobile App',
          description: 'Consequat tempus nisi, orci, ligula duis.',
          status: 'Done',
          statusBoolean: true,
        },
      ],
      search: '',
      name: '',
      position: '',
      description: '',
      user: [
        {
          userId: 1,
          username: 'jayjay',
          userPic: 'https://ca.slack-edge.com/T03EKL88Y-UTMUCNH1P-557445587bf1-512',
        },
      ],
    }
  },
  computed: {
    listFilter() {
      let text = this.search.trim()
      return this.lists.filter(item => {
        return item.name.indexOf(text) > -1
      })
    },
    selectFilter() {
      const self = this
      if (self.currentFilter === 'all') {
        return self.lists
      } else {
        return self.currentFilter.filter(function(sta) {
          return self.currentFilter === sta.status
        })
      }
    },
  },
}
</script>

<style scoped>
div {
  font-family: 'Roboto';
}
.listProject {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 50px;
}
#listTask {
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

/* search button */
input {
  outline: none;
}
input[type='search'] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}

input[type='search'] {
  background: url(../assets/carbon_search.svg) no-repeat 9px center;
  border: none;
  padding: 2px 10px 2px; /* ขนาดกรอบของปุ่ม search */

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
input[type='search']:focus {
  /* width: 130px; */
  background-color: #fff;
  border-color: #66cc75;

  -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
}

input:-moz-placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}

input[type='search'] {
  width: 15px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
}
input[type='search']:hover {
  background-color: #fff;
}
input[type='search']:focus {
  width: 43.5%; /* ความกว้างเวลาปุ่ม search ขยาย */
  padding-left: 32px;
  color: #000;
  background-color: #fff;
  cursor: auto;
}
input:-moz-placeholder {
  color: transparent;
}
input::-webkit-input-placeholder {
  color: transparent;
}
</style>
