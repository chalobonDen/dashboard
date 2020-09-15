<template>
  <div style="padding-top:80px; margin:0px 18px 0px 18px">
    <table align="center" style="width:100%">
      <tr>
        <td>
          <div class="card" style="margin-right:15px;">
            <!-- style="margin-right:15px" คือระยะห่างระหว่างช่อง Project และ Paticipants -->
            <span
              class="iconify"
              data-inline="false"
              data-icon="ant-design:fund-projection-screen-outlined"
              style="color: #0036c7; font-size: 22px;"
            ></span>
            <div class="container">
              <b id="number">{{ numProject }}</b>
              <p>Projects</p>
            </div>
          </div>
        </td>
        <td>
          <div class="card">
            <span
              class="iconify"
              data-inline="false"
              data-icon="clarity:users-line"
              style="color: #0036c7; font-size: 22px;"
            ></span>
            <div class="container">
              <b id="number">{{ numPaticipants }}</b>
              <p>Paticipants</p>
            </div>
          </div>
        </td>
      </tr>
    </table>
    <table align="center" style="width:100%">
      <tr>
        <td>
          <div class="card" style="margin-top:15px">
            <span
              class="iconify"
              data-inline="false"
              data-icon="gg:list"
              style="color: #0036c7; font-size: 22px;"
            ></span>
            <div class="container">
              <b id="number">{{numTaskToday}}</b>
              <p>Today’s Tasks</p>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'MenuContent',
  data() {
    return {
      numProject: 6,
      numPaticipants: 16,
      numTaskToday: 13,
    }
  },
}
</script>

<style  scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  padding-top: 20px;
  margin-right: none;
  /* width: 150px; */
  border-radius: 5px;
  font-family: 'Roboto';
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

#number {
  font-size: 16px;
}
</style>
