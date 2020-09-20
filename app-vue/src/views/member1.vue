<template>
  <div class="project">
    <!-- <h1>This is an about page</h1> -->
    <Toolbar />

    <md-content id="content">
      <br />
      <br />
      <br />
      <br />
      <div>
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="Developer">
            <div v-for="member in members" :key="member.id">
              <div class="listmembers" v-if="member.department === 'Developer'">
                <md-card id="card" align="center">
                  <md-card-media>
                    <img id="imgProfile" v-bind:src="member.image" />
                  </md-card-media>
                  <div>{{ member.position }}</div>
                  <div style="color:#0036C7; font-size:18px">
                    <b>{{ member.name }}</b>
                  </div>
                  <br />
                  <div>Skill(s): {{ member.skill }}</div>
                  <div>Project(s): {{ member.projects }}</div>
                </md-card>
              </div>
            </div>
          </a-tab-pane>

          <a-tab-pane key="2" tab="Design" force-render>
            <div v-for="member in members" :key="member.id">
              <div class="listmembers" v-if="member.department === 'Design'">
                <md-card id="card" align="center">
                  <md-card-media>
                    <img id="imgProfile" v-bind:src="member.image" />
                  </md-card-media>
                  <div>{{ member.position }}</div>
                  <div style="color:#0036C7; font-size:18px">
                    <b>{{ member.name }}</b>
                  </div>
                  <br />
                  <div>Skill(s): {{ member.skill }}</div>
                  <div>Project(s): {{ member.projects }}</div>
                </md-card>
                <!-- <br />
                <br />-->
              </div>
            </div>
          </a-tab-pane>

          <a-tab-pane key="3" tab="Marketing">
            <div v-for="member in members" :key="member.id">
              <div class="listmembers" v-if="member.department === 'Marketing'">
                <md-card id="card" align="center">
                  <md-card-media>
                    <img id="imgProfile" v-bind:src="member.image" />
                  </md-card-media>
                  <div>{{ member.position }}</div>
                  <div style="color:#0036C7; font-size:18px">
                    <b>{{ member.name }}</b>
                  </div>
                  <br />
                  <div>Skill(s): {{ member.skill }}</div>
                  <div>Project(s): {{ member.projects }}</div>
                </md-card>
                <!-- <br />
                <br />-->
              </div>
            </div>
          </a-tab-pane>
        </a-tabs>
      </div>
      <div id="bottom-content">
        <!-- พื้นที่ข้างล่างของ content  -->
      </div>
    </md-content>
    <div style="padding-bottom:5px">
      <!-- ระยะห่าง manu ข้างล่างกับ content -->
    </div>
    <BarRouter />
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import BarRouter from '@/components/BarRouter.vue'

export default {
  name: 'member1',
  components: {
    Toolbar,
    BarRouter,
  },
  data() {
    return {
      members: [
        {
          id: 1,
          image: 'https://i.pinimg.com/564x/c4/23/85/c423853659015145795100c6006b554d.jpg',
          name: 'Linda Lee',
          department: 'Developer',
          position: 'Programmers',
          skill: 'React, Redux, UI/UX',
          projects: 1,
        },
        {
          id: 2,
          image:
            'https://cdn.univ20.com/wp-content/uploads/2019/02/57ca91f8fe785156dad662f7ff80104a.png',
          name: 'Jihoon Park',
          department: 'Developer',
          position: 'Front End',
          skill: 'HTML, JavaScript, CSS, React',
          projects: 2,
        },
        {
          id: 3,
          image: 'https://i.pinimg.com/564x/11/b5/77/11b5772556b0e717289456a352c3c706.jpg',
          name: 'Mina Kung',
          department: 'Developer',
          position: 'Analysis',
          skill: 'HTML',
          projects: 2,
        },

        {
          id: 4,
          image: 'https://i.pinimg.com/564x/6b/7c/a9/6b7ca905c1f4aa885676037ef2170e0c.jpg',
          name: 'Yerim Kim',
          department: 'Design',
          position: 'UI Design',
          skill: 'UX/UI',
          projects: 2,
        },
        {
          id: 5,
          image: 'https://i.pinimg.com/564x/bd/ab/95/bdab95494771065bda8921a73cdd2d82.jpg',
          name: 'Linda Lee',
          department: 'Design',
          position: 'Designers',
          skill: 'UI/UX',
          projects: 1,
        },
        {
          id: 6,
          image: 'https://i.pinimg.com/originals/bf/1b/09/bf1b0918374d5e3357d5b1175825a4ca.jpg',
          name: 'Sakura Miyawaki',
          department: 'Design',
          position: 'UI Design',
          skill: 'Photoshop, Figma',
          projects: 2,
        },
        {
          id: 7,
          image: 'https://i.pinimg.com/564x/c2/e2/b0/c2e2b0a893d23cff68c8dbfbbef0b1b1.jpg',
          name: 'Minnie',
          department: 'Marketing',
          position: 'Marketing',
          skill: 'Marketing',
          projects: 2,
        },
        {
          id: 8,
          image: 'https://pbs.twimg.com/media/EX1DCbCUMAEqjxm?format=jpg&name=900x900',
          name: 'Joy',
          department: 'Marketing',
          position: 'Marketing',
          skill: 'Marketing',
          projects: 2,
        },
        {
          id: 9,
          image: 'https://i.pinimg.com/564x/74/b7/67/74b7679b7ca4ab9594c3c65c227c0f47.jpg',
          name: 'Jenny Kim',
          department: 'Marketing',
          position: 'Marketing',
          skill: 'Marketing',
          projects: 2,
        },
        {
          id: 10,
          image: 'https://i.pinimg.com/564x/e9/79/da/e979da662d08e2776d240bba2abfc4b8.jpg',
          name: 'Jinyoung Bae',
          department: 'Developer',
          position: 'Back End',
          skill: 'Node.js, PHP',
          projects: 2,
        },
      ],
      search: '',
      name: '',
    }
  },
  computed: {
    memberFilter() {
      let text = this.search.trim()
      return this.members.filter(item => {
        return item.name.indexOf(text) > -1
      })
    },
  },
}
</script>

<style scoped>
div {
  font-family: 'Roboto';
}

#content {
  margin-bottom: 80px;
  /* ระยะห่างระหว่าง content กับแถบ menu ข้างล่าง */
}

#bottom-content {
  /* พื้นที่ข้างล่างของ content */
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 5px;
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
  width: 50%; /* ความกว้างเวลาปุ่ม search ขยาย */
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

#back,
#next {
  vertical-align: -10%;
}
button {
  background-color: white;
  border-radius: 3px;
  border: none;
  border: 1px solid #8f8f8f;
}
.listmembers {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
  padding-bottom: 5px; /* ระยะห่างระหว่าง card */
}
#card {
  padding: 15px 15px 15px 15px;
  border-radius: 5px;
  /* เงากรอบขาว ระยะเงาด้านขวากับกรอบ ระยะเงาด้านล่างกับกรอบ ความฟุ่งของเงา สีของเงา*/
  box-shadow: 1.5px 1.5px 5px #b1b1b1;
  margin-bottom: 0px; /* ระยะห่างระหว่าง card */
  margin-top: 3px;
}
#imgProfile {
  /* margin-top: 17px; */
  border-radius: 100%;
  box-shadow: 1.5px 1.5px 10px #b1b1b1;
  height: 120px;
  width: 120px;
  margin-bottom: 20px;
  object-fit: cover;
}
</style>
