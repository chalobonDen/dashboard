<template>
  <div
    style="  
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  fixed; z-index:10;"
  >
    <md-bottom-bar md-sync-route>
      <md-bottom-bar-item style="min-width: 10px;" to="/">
        <div style="margin-top:10px">
          <a-icon type="home" id="homeIcon" />
          <div id="home">Home</div>
        </div>
      </md-bottom-bar-item>

      <md-bottom-bar-item style="min-width: 10px;" to="/projects">
        <div style="margin-top:10px">
          <a-icon type="fund" id="projectIcon" />
          <div id="project">Projects</div>
        </div>
      </md-bottom-bar-item>

      <md-bottom-bar-item style="min-width: 10px;" to="/news">
        <div style="margin-top:10px">
          <a-icon type="read" id="newsIcon" />
          <div id="news">News</div>
        </div>
      </md-bottom-bar-item>

      <md-bottom-bar-item style="min-width: 10px;" to="/members">
        <div style="margin-top:10px">
          <a-icon type="usergroup-add" id="memberIcon" />
          <div id="member">Members</div>
        </div>
      </md-bottom-bar-item>

      <md-bottom-bar-item style="min-width: 10px;" to="/profile">
        <div style="margin-top:10px">
          <a-icon type="user" id="profileIcon" />
          <div id="profile">Profile</div>
        </div>
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'BarRouter',
  data() {
    return {
      // isActive: false,
    }
  },
  methods: {
    // onClick() {
    //   this.isActive = true
    // },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.iconify {
  margin-top: 0.5em;
  color: #8f8f8f;
  // font-size: 35px;
}

.md-button.md-theme-default {
  color: rgba(0, 0, 0, 0.87);
  color: var(--md-theme-default-text-primary-on-background, #8f8f8f);
}

.anticon.anticon-home,
.anticon.anticon-fund,
.anticon.anticon-read,
.anticon.anticon-usergroup-add,
.anticon.anticon-user {
  // ขนาด icon
  font-size: 15px;
}

.md-ripple {
  padding-top: 20px;
  color: #8f8f8f;
}

.md-bottom-bar.md-theme-default.md-type-fixed .md-bottom-bar-item.md-active,
.md-bottom-bar.md-theme-default.md-type-fixed .md-bottom-bar-item.md-active .md-icon {
  color: #0036c7;
  color: var(--md-theme-default-primary-on-background, #0036c7);
}

#home,
#project,
#news,
#member,
#profile {
  font-family: Roboto;
  color: #8f8f8f;
  font-size: 11px;
  margin-top: 1px;
  margin-bottom: 1em;
}

.md-bottom-bar-item.iconify {
  transition: background-color 0.25s;
}
</style>
