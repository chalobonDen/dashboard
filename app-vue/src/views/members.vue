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
                <a-input-search
                  v-model="search"
                  type="search"
                  placeholder="input search text"
                  style="width: 50%"
                  @search="onSearch"
                />

                <!-- <a-input-search
                  v-model="search"
                  type="search"
                  placeholder="search"
                  style="width: 50%"
                  enter-button
                  @search="onSearch"
                /> -->
              </td>
            </table>
            <!-- end search button -->
            <!-- list member Admin -->
            <table style="width:100%;">
              <div v-for="member in memberFilter" :key="member.id">
                <div class="listmembers" v-if="member.department === 'HR/Admin'">
                  <v-card id="card" :to="{ name: 'profileMember', params: { id: member.id } }">
                    <td id="card-media">
                      <md-card-media>
                        <div id="circle">
                          <img id="imgProfile" v-bind:src="member.image" />
                        </div>
                      </md-card-media>
                    </td>
                    <td id="information" align="left">
                      <div>
                        <b id="displayname">{{ member.displayName }}</b>
                      </div>
                      <div id="memberposition">
                        {{ member.position }}
                      </div>
                      <br />
                      <div id="department">
                        Full-time/Intern :
                        <span style="opacity: 0.75;">{{ member.type }}</span>
                      </div>
                      <div id="department">
                        Department:
                        <span style="opacity: 0.75;">{{ member.department }}</span>
                      </div>
                    </td>
                  </v-card>
                </div>
              </div>
            </table>
            <!-- end list member Admin -->
          </a-tab-pane>

          <a-tab-pane key="2" tab="Development">
            <!-- search button -->
            <table style="width:100%; margin-bottom:10px">
              <td align="right" style="padding-right:18px">
                <a-input-search
                  v-model="search"
                  type="search"
                  placeholder="input search text"
                  style="width: 50%"
                  @search="onSearch"
                />
              </td>
            </table>
            <!-- end search button -->
            <div v-for="member in memberFilter" :key="member.id">
              <div class="listmembers" v-if="member.department === 'Development'">
                <v-card id="card" :to="{ name: 'profileMember', params: { id: member.id } }">
                  <td id="card-media">
                    <md-card-media>
                      <div id="circle">
                        <img id="imgProfile" v-bind:src="member.image" />
                      </div>
                    </md-card-media>
                  </td>
                  <td id="information" align="left">
                    <div>
                      <b id="displayname">{{ member.displayName }}</b>
                    </div>
                    <div id="memberposition">
                      {{ member.position }}
                    </div>
                    <br />
                    <div id="department">
                      Full-time/Intern :
                      <span style="opacity: 0.75;">{{ member.type }}</span>
                    </div>
                    <div id="department">
                      Department:
                      <span style="opacity: 0.75;">{{ member.department }}</span>
                    </div>
                  </td>
                </v-card>
              </div>
            </div>
          </a-tab-pane>

          <a-tab-pane key="3" tab="Design" force-render>
            <!-- search button -->
            <table style="width:100%; margin-bottom:10px">
              <td align="right" style="padding-right:18px">
                <a-input-search
                  v-model="search"
                  type="search"
                  placeholder="input search text"
                  style="width: 50%"
                  @search="onSearch"
                />
              </td>
            </table>
            <!-- end search button -->
            <div v-for="member in memberFilter" :key="member.id">
              <div class="listmembers" v-if="member.department === 'Design'">
                <v-card id="card" :to="{ name: 'profileMember', params: { id: member.id } }">
                  <td id="card-media">
                    <md-card-media>
                      <div id="circle">
                        <img id="imgProfile" v-bind:src="member.image" />
                      </div>
                    </md-card-media>
                  </td>
                  <td id="information" align="left">
                    <div>
                      <b id="displayname">{{ member.displayName }}</b>
                    </div>
                    <div id="memberposition">
                      {{ member.position }}
                    </div>
                    <br />
                    <div id="department">
                      Full-time/Intern :
                      <span style="opacity: 0.75;">{{ member.type }}</span>
                    </div>
                    <div id="department">
                      Department:
                      <span style="opacity: 0.75;">{{ member.department }}</span>
                    </div>
                  </td>
                </v-card>
                <!-- <br />
                <br />-->
              </div>
            </div>
          </a-tab-pane>

          <a-tab-pane key="4" tab="Digital Marketing">
            <!-- search button -->
            <table style="width:100%; margin-bottom:10px">
              <td align="right" style="padding-right:18px">
                <a-input-search
                  v-model="search"
                  type="search"
                  placeholder="input search text"
                  style="width: 50%"
                  @search="onSearch"
                />
              </td>
            </table>
            <!-- end search button -->
            <div v-for="member in memberFilter" :key="member.id">
              <div class="listmembers" v-if="member.department === 'Marketing'">
                <v-card id="card" :to="{ name: 'profileMember', params: { id: member.id } }">
                  <td id="card-media">
                    <md-card-media>
                      <div id="circle">
                        <img id="imgProfile" v-bind:src="member.image" />
                      </div>
                    </md-card-media>
                  </td>
                  <td id="information" align="left">
                    <div>
                      <b id="displayname">{{ member.displayName }}</b>
                    </div>
                    <div id="memberposition">{{ member.position }}</div>
                    <br />
                    <div id="department">
                      Full-time/Intern :
                      <span style="opacity: 0.75;">{{ member.type }}</span>
                    </div>
                    <div id="department">
                      Department:
                      <span style="opacity: 0.75;">{{ member.department }}</span>
                    </div>
                  </td>
                </v-card>
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
import store from '../store/index.js'
export default {
  name: 'member1',
  components: {
    Toolbar,
    BarRouter,
  },
  data() {
    return {
      members: store.state.members,
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
  padding-left: 0px;
  padding-right: 0px;
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
  margin-left: 15px;
  margin-right: 15px;
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
#displayname {
  color: #0036c7;
  font-size: 18px;
}
#memberposition {
  color: #000000;
  opacity: 0.85;
  font-weight: 500;
}
#department {
  color: #000000;
  opacity: 0.85;
  font-size: 12px;
}
#des {
}
</style>
