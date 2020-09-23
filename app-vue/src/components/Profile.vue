<template>
  <div>
    <table style="border:none; width:100% ">
      <tr>
        <td align="left">
          <div class="profile">
            <img
              id="pictureUrl"
              :src="
                profileStore.pictureUrl ||
                  'https://www.iconfinder.com/data/icons/facebook-51/32/FACEBOOK_LINE-01-512.png'
              "
            />&nbsp;&nbsp;&nbsp;
            <h3 id="displayName" style="display:inline"></h3>
          </div>
        </td>
        <td>
          <a-button class="edit-button" @click="showPicProfile">
            <span
              class="iconify"
              data-inline="false"
              data-icon="clarity:edit-line"
              style="color: #ffffff; font-size: 14px;"
            ></span>
            Edit profile
          </a-button>
        </td>
      </tr>
    </table>
  </div>
</template>
<script src="https://static.line-scdn.net/liff/edge/versions/2.4.0/sdk.js"></script>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'Profile',
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
#pictureUrl {
  /* display: block; */
  /* margin: 0 auto; */
  /* margin-left: 10%; */
  margin: 10px 15px 10px 10px;
  /* width: 18%; */
  width: 50%;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  border-radius: 100px;
  /* margin-left: 40%; */
}

.edit-button {
  background-color: #0036c7;
  color: rgb(255, 255, 255);
  border-radius: 10px;
}

#accessToken,
#utouId {
  display: block;
  overflow: auto;
}
</style>
