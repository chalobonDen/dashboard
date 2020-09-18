<template>
  <div style="  
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  fixed; z-index:1;">
    <md-bottom-bar md-sync-route>
      <md-bottom-bar-item style="min-width: 10px" to="/">
        <!-- to="/components/bottom-bar" -->
        <span
          class="iconify"
          data-inline="false"
          data-icon="ion:home-outline"
          style="color: #8f8f8f; font-size: 20px;"
        ></span>
        <div id="menuBar">Home</div>
      </md-bottom-bar-item>

      <md-bottom-bar-item style="min-width: 10px" to="/project">
        <span
          class="iconify"
          data-inline="false"
          data-icon="system-uicons:projector"
          style="color: #8f8f8f; font-size: 20px;"
        ></span>
        <div id="menuBar">Projects</div>
      </md-bottom-bar-item>

      <md-bottom-bar-item style="min-width: 10px" to="/news">
        <span
          class="iconify"
          data-inline="false"
          data-icon="ion:newspaper-outline"
          style="color: #8f8f8f; font-size: 20px;"
        ></span>
        <div id="menuBar">News</div>
      </md-bottom-bar-item>

      <md-bottom-bar-item style="min-width: 10px" to="/members">
        <span
          class="iconify"
          data-inline="false"
          data-icon="ic:baseline-people-outline"
          style="color: #8f8f8f; font-size: 20px;"
        ></span>
        <div id="menuBar">Members</div>
      </md-bottom-bar-item>

      <md-bottom-bar-item style="min-width: 10px" to="/profile">
        <span
          class="iconify"
          data-inline="false"
          data-icon="clarity:user-line"
          style="color: #8f8f8f; font-size: 20px;"
        ></span>
        <div id="menuBar">Profile</div>
      </md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
export default {
  name: 'BarRouter',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
// .phone-viewport {
//   width: 322px;
//   height: 100px;
//   display: inline-flex;
//   align-items: flex-end;
//   overflow: hidden;
//   border: 1px solid rgba(#000, 0.26);
//   background: rgba(#000, 0.06);
// }

.iconify {
  margin-top: 0.5em;
}

#menuBar {
  font-family: Roboto;
  color: #8f8f8f;
  font-size: 11px;
  margin-top: 1px;
  margin-bottom: 1em;
}
</style>
