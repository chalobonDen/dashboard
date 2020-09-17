<template>
  <div>
    <div>
      <table style="width:100%; margin-bottom:10px">
        <div style="margin-left:18px">
          <td align="left" style="font-size:20px; font-weight:550">Event</td>
        </div>
        <td align="right"></td>
      </table>
    </div>

    <div class="news">
      <md-card id="card" align="left" v-for="data in news" :key="data.id">
        <table style="width:100% ">
          <!-- Date -->
          <td style="width:25%" id="date">
            <center>
              <tr style="color:#8F8F8F">{{data.day}}</tr>
              <tr>
                <b>{{data.date}}</b>
              </tr>
              <tr style="color:#8F8F8F">{{data.month}}</tr>
            </center>
          </td>
          <!-- End Date -->

          <!-- vertical line -->
          <td class="vl"></td>

          <!-- Description -->
          <td style="width:60%; padding-left:10px">
            <tr>
              <b>{{data.name}}</b>
            </tr>
            <tr>{{data.description}}</tr>
          </td>
          <!-- End Description -->

          <!-- chip important and member -->
          <td style="width:15%">
            <div align="right">
              <md-chip
                class="md-accent"
                md-clickable
                v-if="data.status == 'Important'"
                style="margin:10px 10px 10px 10px ; background-color:#FFE24D; color:black; font-size: 11px; width:90px; text-align:center; font-weight:550;"
              >
                <span
                  id="iconStatus"
                  class="iconify"
                  data-inline="false"
                  data-icon="bi:bookmark"
                  style="font-size: 14px;"
                ></span>
                {{ data.status }}
              </md-chip>
              <br />
              <br />
              <md-card-content style="padding-top: 8px;">
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
            </div>
          </td>
          <!-- End chip important and member -->
        </table>
      </md-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event',

  data() {
    return {
      news: [
        {
          id: 1,
          date: '1',
          month: 'May',
          day: 'Fri',
          name: 'Intern | progress',
          description: 'In 2nd floor meeting room',
          status: 'Important',
        },
        {
          id: 2,
          date: '10',
          month: 'May',
          day: 'Sun',
          name: 'Intern | progress',
          description: 'In 2nd floor meeting room',
          status: 'Important',
        },
        {
          id: 3,
          date: '29',
          month: 'May',
          day: 'Fri',
          name: 'Intern | progress',
          description: 'In 2nd floor meeting room',
          status: 'Important',
        },
        {
          id: 4,
          date: '30',
          month: 'May',
          day: 'Fri',
          name: 'Intern | progress',
          description: 'In 2nd floor meeting room',
          status: 'Important',
        },
      ],
    }
  },
}
</script>

<style  scoped>
template {
  font-style: 'Roboto';
}
.news {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 15px;
}
#card {
  margin: 0px 15px 15px 15px;
  border-radius: 5px;
}
#iconStatus {
  font-size: 10px;
  vertical-align: -9%;
}
#date {
  vertical-align: middle;
}
.vl {
  border-left: 0.5px solid grey;
}
</style>
