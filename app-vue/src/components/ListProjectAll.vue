<template>
  <div class="listProject">
    <table style="width:100%; margin: 0px 18px 0px 18px;">
      <td align="left">Project</td>
      <td align="right">
        <input type="search" name id />
        <select name="task" id="task" v-model="task">
          <option value="All">All</option>
          <option value="WIP">WIP</option>
          <option value="closed">closed</option>
        </select>
      </td>
    </table>
    <md-card id="card" align="left" v-for="list in lists" :key="list.id">
      <table id="listTask">
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
  name: 'ListProjectAll',
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
  margin: 0px 15px 15px 15px;
  border-radius: 5px;
}

.md-title {
  font-size: 16px;
  margin-bottom: -1px; /* ระยะห่างระหว่างชื่อโปรเจคกับตำแหน่งงาน */
  line-height: 20px; /* ระยะห่างระหว่างบรรทัดของชื่อโปรเจค เวลาขึ้นบรรทัดใหม่ */
}

/* search button */
body {
  background: #fff;
  color: #666;
  font: 90%/180% Arial, Helvetica, sans-serif;
  width: 800px;
  max-width: 96%;
  margin: 0 auto;
}
a {
  color: #69c;
  text-decoration: none;
}
a:hover {
  color: #f60;
}
h1 {
  font: 1.7em;
  line-height: 110%;
  color: #000;
}
p {
  margin: 0 0 20px;
}

input {
  outline: none;
}
input[type='search'] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}

input[type='search'] {
  background: url(../assets/carbon_search.svg) no-repeat 9px center;
  border: none;
  padding: 9px 10px 9px 32px;
  width: 55px;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
input[type='search']:focus {
  width: 130px;
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
  width: 130px;
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
