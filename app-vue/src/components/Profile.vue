<template>
  <div>
    <table style="border:none; width:100% ">
      <tr>
        <td align="left">
          <div class="profile">
            <img id="pictureUrl" src="../assets/userprofileBlack.svg" />
            &nbsp;&nbsp;&nbsp;
            <h3 id="displayName" style="display:inline"></h3>
          </div>
        </td>
        <td>
          <a-button class="edit-button">
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

    <div style="display: none">
      <p id="os">
        <b>OS:</b>
      </p>
      <p id="language">
        <b>Language:</b>
      </p>
      <p id="version">
        <b>Version:</b>
      </p>
      <p id="isInClient">
        <b>isInClient:</b>
      </p>
      <p id="accessToken">
        <b>AccessToken:</b>
      </p>
      <img id="pictureUrl" />
      <p id="userId">
        <b>userId:</b>
      </p>
      <p id="displayName">
        <b>displayName:</b>
      </p>
      <p id="statusMessage">
        <b>statusMessage:</b>
      </p>
    </div>
    <!-- <button id="btnMsg" onclick="sendMsg()">Send Message</button>
    <button id="btnShare" onclick="shareMsg()">Share Target Picker</button>
    <button onclick="openWindow()">Open Window</button>
    <button id="btnScanCode" onclick="scanCode()">Scan Code</button>
    <button id="btnLogOut" onclick="logOut()">Log Out</button>
    <button id="btnClose" onclick="closed()">Close</button>-->
  </div>
</template>
<script src="https://static.line-scdn.net/liff/edge/versions/2.4.0/sdk.js"></script>

<script>
// @ is an alias to /src

export default {
  name: 'Profile',
}

async function getUserProfile() {
  const profile = await liff.getProfile()
  document.getElementById('pictureUrl').src = profile.pictureUrl
  document.getElementById('userId').append(profile.userId)
  document.getElementById('statusMessage').append(profile.statusMessage)
  document.getElementById('displayName').append(profile.displayName)
}

function getEnvironment() {
  document.getElementById('os').append(liff.getOS()) // liff.getOS() ทำให้เราทราบว่า liff ที่เราเปิดตอนนี้เปิดด้วย device อะไรอยู่ ex. แอนดรอย ios web
  document.getElementById('language').append(liff.getLanguage()) // liff.getLanguage() รู้ว่า client นี้ defalt เขาใช้ภาษาอะไร
  document.getElementById('version').append(liff.getVersion()) // liff.getVersion() เว่อร์ชั่น liff
  document.getElementById('accessToken').append(liff.getAccessToken())
  document.getElementById('isInClient').append(liff.isInClient())
  // if (liff.isInClient()) {
  //   // เปิดใน line
  //   document.getElementById('btnLogOut').style.display = 'none'
  // } else {
  //   // เปิดข้างนอก line
  //   document.getElementById('btnMsg').style.display = 'none'
  //   document.getElementById('btnScanCode').style.display = 'none'
  //   document.getElementById('btnClose').style.display = 'none'
  // }
}

async function main() {
  await liff.init({ liffId: '1654900324-lDYAE146' })
  getEnvironment()
  getUserProfile()
  // getContext()
  // getFriendship()
  // createUniversalLink()
}
main()
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
