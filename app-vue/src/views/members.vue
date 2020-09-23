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
        <!-- filter department -->
        <a-tabs default-active-key="1">
          <a-tab-pane key="1" tab="HR/Admin">
            <!-- search button -->
            <table style="width:100%; margin-bottom:10px">
              <td align="right" style="padding-right:18px">
                <input type="search" name id v-model="search" />
              </td>
            </table>
            <!-- end search button -->
            <!-- list member Admin -->
            <table style="width:100%;">
              <div v-for="member in memberFilter" :key="member.id">
                <div class="listmembers" v-if="member.department === 'HR/Admin'">
                  <md-card id="card">
                    <td id="card-media">
                      <md-card-media>
                        <div id="circle">
                          <img id="imgProfile" v-bind:src="member.image" />
                        </div>
                      </md-card-media>
                    </td>
                    <td id="information" align="left">
                      <div>
                        <b style="color:#0036C7; font-size:18px">{{ member.displayName }}</b>
                      </div>
                      <div style="font-weight:500">{{ member.position }}</div>
                      <br />
                      <div style="font-size:12px">
                        Full-time/Intern :
                        <span style="font-weight:500;">{{ member.type }}</span>
                      </div>
                      <div style="font-size:12px">
                        Department:
                        <span style="font-weight:500">{{ member.department }}</span>
                      </div>
                    </td>
                  </md-card>
                </div>
              </div>
            </table>
            <!-- end list member Admin -->
          </a-tab-pane>

          <a-tab-pane key="2" tab="Development">
            <!-- search button -->
            <table style="width:100%; margin-bottom:10px">
              <td align="right" style="padding-right:18px">
                <input type="search" name id v-model="search" />
              </td>
            </table>
            <!-- end search button -->
            <div v-for="member in memberFilter" :key="member.id">
              <div class="listmembers" v-if="member.department === 'Development'">
                <md-card id="card">
                  <td id="card-media">
                    <md-card-media>
                      <div id="circle">
                        <img id="imgProfile" v-bind:src="member.image" />
                      </div>
                    </md-card-media>
                  </td>
                  <td id="information" align="left">
                    <div>
                      <b style="color:#0036C7; font-size:18px">{{ member.displayName }}</b>
                    </div>
                    <div style="font-weight:500">{{ member.position }}</div>
                    <br />
                    <div style="font-size:12px">
                      Full-time/Intern :
                      <span style="font-weight:500;">{{ member.type }}</span>
                    </div>
                    <div style="font-size:12px">
                      Department:
                      <span style="font-weight:500">{{ member.department }}</span>
                    </div>
                  </td>
                </md-card>
              </div>
            </div>
          </a-tab-pane>

          <a-tab-pane key="3" tab="Design" force-render>
            <!-- search button -->
            <table style="width:100%; margin-bottom:10px">
              <td align="right" style="padding-right:18px">
                <input type="search" name id v-model="search" />
              </td>
            </table>
            <!-- end search button -->
            <div v-for="member in memberFilter" :key="member.id">
              <div class="listmembers" v-if="member.department === 'Design'">
                <md-card id="card">
                  <td id="card-media">
                    <md-card-media>
                      <div id="circle">
                        <img id="imgProfile" v-bind:src="member.image" />
                      </div>
                    </md-card-media>
                  </td>
                  <td id="information" align="left">
                    <div>
                      <b style="color:#0036C7; font-size:18px">{{ member.displayName }}</b>
                    </div>
                    <div style="font-weight:500">{{ member.position }}</div>
                    <br />
                    <div style="font-size:12px">
                      Full-time/Intern :
                      <span style="font-weight:500;">{{ member.type }}</span>
                    </div>
                    <div style="font-size:12px">
                      Department:
                      <span style="font-weight:500">{{ member.department }}</span>
                    </div>
                  </td>
                </md-card>
                <!-- <br />
                <br />-->
              </div>
            </div>
          </a-tab-pane>

          <a-tab-pane key="4" tab="Digital Marketing">
            <!-- search button -->
            <table style="width:100%; margin-bottom:10px">
              <td align="right" style="padding-right:18px">
                <input type="search" name id v-model="search" />
              </td>
            </table>
            <!-- end search button -->
            <div v-for="member in memberFilter" :key="member.id">
              <div class="listmembers" v-if="member.department === 'Marketing'">
                <md-card id="card">
                  <td id="card-media">
                    <md-card-media>
                      <div id="circle">
                        <img id="imgProfile" v-bind:src="member.image" />
                      </div>
                    </md-card-media>
                  </td>
                  <td id="information" align="left">
                    <div>
                      <b style="color:#0036C7; font-size:18px">{{ member.displayName }}</b>
                    </div>
                    <div style="font-weight:500">{{ member.position }}</div>
                    <br />
                    <div style="font-size:12px">
                      Full-time/Intern :
                      <span style="font-weight:500;">{{ member.type }}</span>
                    </div>
                    <div style="font-size:12px">
                      Department:
                      <span style="font-weight:500">{{ member.department }}</span>
                    </div>
                  </td>
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
          image: 'https://ca.slack-edge.com/T03EKL88Y-U03EKL89A-61874a193769-512',
          name: 'Cholathit Khueankaew',
          displayName: 'Cholathit',
          department: 'HR/Admin',
          position: 'Managing Director/CEO',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
        {
          id: 2,
          image: 'https://ca.slack-edge.com/T03EKL88Y-U9HRS33LH-aaf90ffd0fca-512',
          name: 'Apichaya Hongsapak',
          displayName: 'pim',
          department: 'HR/Admin',
          position: 'HR/Admin',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
        {
          id: 3,
          image: 'https://ca.slack-edge.com/T03EKL88Y-UJHQAR5GB-13cee788d1c2-512',
          name: 'Wisan Nakagawa',
          displayName: 'arm wisan',
          department: 'HR/Admin',
          position: 'Community Manager',
          skill: '',
          projects: null,
          type: 'Full-time',
        },

        {
          id: 4,
          image: 'https://ca.slack-edge.com/T03EKL88Y-UPX5YQEDU-3f1c55434773-512',
          name: 'Thanwimol Manopen',
          displayName: 'Mint Thanwimol',
          department: 'Development',
          position: 'Senior Project Manager',
          skill: '',
          projects: null,
          type: 'Full-time',
        },

        {
          id: 5,
          image: 'https://ca.slack-edge.com/T03EKL88Y-U016R3WAQ4U-0e8e2de8e11e-512',
          name: 'Surakarn Samkaew',
          displayName: 'Tonkla',
          department: 'Development',
          position: 'Developer',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
        {
          id: 6,
          image: 'https://ca.slack-edge.com/T03EKL88Y-UNGSE8TPH-g4cf4f9cc0af-512',
          name: 'Nat W',
          displayName: 'Nat W',
          department: 'Development',
          position: 'Developer',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
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
          department: 'Development',
          position: 'Business Analysis',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
        {
          id: 10,
          image: 'https://ca.slack-edge.com/T03EKL88Y-U5VNS1XE1-d67dc521b341-512',
          name: 'J A N G',
          displayName: 'J A N G',
          department: 'Design',
          position: 'UX/UI Designer',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
        {
          id: 11,
          image: 'https://ca.slack-edge.com/T03EKL88Y-UB1TJHGFR-c242e7741d3d-512',
          name: 'Phitshayapa Wiangwat',
          displayName: 'Patti is Happy',
          department: 'Design',
          position: 'UX/UI Designer',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
        {
          id: 12,
          image: 'https://ca.slack-edge.com/T03EKL88Y-UDRN3RWAJ-b8a538630c17-512',
          name: 'Pawiness Boonyothayan',
          displayName: 'Gin',
          department: 'Marketing',
          position: 'Marketing Strategic Planner',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
        {
          id: 13,
          image: 'https://ca.slack-edge.com/T03EKL88Y-US202147N-17595e2b2c00-512',
          name: 'Khomsun Chaiwong',
          displayName: 'Mooyai',
          department: 'Design',
          position: 'Designer',
          skill: '',
          projects: null,
          type: 'Full-time',
        },
      ],
      search: '',
      displayName: '',
    }
  },
  computed: {
    memberFilter() {
      let text = this.search.trim()
      return this.members.filter(item => {
        return item.displayName.indexOf(text) > -1
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
  /* padding: 15px 15px 15px 15px; */
  border-radius: 5px;
  /* เงากรอบขาว ระยะเงาด้านขวากับกรอบ ระยะเงาด้านล่างกับกรอบ ความฟุ่งของเงา สีของเงา*/
  box-shadow: 1.5px 1.5px 5px #b1b1b1;
  margin-bottom: 0px; /* ระยะห่างระหว่าง card */
  margin-top: 3px;
}
#card-media {
  background-color: #9daace;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  padding-top: 8%;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
}
#information {
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-top: 8%;
  vertical-align: middle;
}
#imgProfile {
  /* margin-top: 17px; */
  margin-top: 2px;
  border-radius: 100%;
  height: 80px;
  width: 80px;
  object-fit: cover;
  border: 4px solid #9daace;
}
#circle {
  width: 84px;
  height: 84px;
  background: rgb(255, 255, 255);
  -moz-border-radius: 70px;
  -webkit-border-radius: 70px;
  border-radius: 70px;
}
</style>
