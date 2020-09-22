<template>
  <div style="position: fixed; z-index:2; width:100%">
    <md-toolbar class="toolbar" md-elevation="1">
      <table style="border:none; width:100% ">
        <tr>
          <td align="left">
            <!-- style="width:30%" -->
            <img class="logo" src="../assets/logo4.png" />
            <!-- style="width:18%;" -->
          </td>

          <td align="right">
            <div class="profile">
              <img
                id="pictureUrl"
                :src="profileStore.pictureUrl || '../assets/teenyicons_user-circle-solid.svg'"
              />
              &nbsp;&nbsp;&nbsp;
              <h3 id="displayName" style="display:inline">{{ profileStore.displayName }}</h3>
            </div>
          </td>
        </tr>
      </table>

      <!-- <md-button class="md-primary">Create</md-button> -->
    </md-toolbar>
  </div>
</template>
<script src="https://static.line-scdn.net/liff/edge/versions/2.4.0/sdk.js"></script>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'Toolbar',
  computed: {
    ...mapState({
      profileStore: store => store.profile,
    }),
  },
  async mounted() {
    await liff.init({ liffId: '1654900324-lDYAE146' })
    if (!liff.isLoggedIn()) {
      liff.login()
      this.getEnvironment()
      this.getUserProfile()
    }
    // liff.login({ redirectUri: 'https://localhost:8080' })
    // await liff.init({ liffId: '1654900324-lDYAE146' })
  },
  methods: {
    async getUserProfile() {
      console.log('Logger : ', await liff.getProfile())
      const profile = await liff.getProfile()
      this.$store.commit('setUserId', profile.userId)
      this.$store.commit('setPicProfile', profile.pictureUrl)
      this.$store.commit('setDisplayName', profile.displayName)
      this.$store.commit('setStatusMessage', profile.statusMessage)
    },
  },
}
</script>

<style scoped>
/* button {
  display: block;
  width: 100%;
  padding: 8px 0;
  margin: 8px auto;
}
p {
  border-bottom: 1px dashed #ddd;
} */
#displayName {
  color: white;
  margin-top: 1em;
  margin-bottom: 0.5em;
}
#pictureUrl {
  /* display: block; */
  /* margin: 0 auto; */
  /* margin-left: 10%; */
  margin: 10px 15px 10px 10px;
  /* width: 18%; */
  width: 40px;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  border-radius: 100px;
  /* margin-left: 40%; */
}
.logo {
  margin: 0px 10px 0px 15px;
  width: 22.5px;
}
.toolbar {
  background-color: black;
  height: 50px;
}
.profile {
  margin: 0px 10px 0px 10px;
}
#accessToken,
#utouId {
  display: block;
  overflow: auto;
}
/* #accessToken,
#utouId {
  display: block;
  overflow: auto;
} */
</style>
