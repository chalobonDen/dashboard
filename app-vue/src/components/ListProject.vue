<template>
  <div class="listProject">
    <md-card id="card" align="left" v-for="list in lists" :key="list.id">
      <table>
        <td align="left" style="width:70% ">
          <md-card-header id="title">
            <div class="md-title">
              <b style="line-height: 0px;">{{list.name}}</b>
            </div>
          </md-card-header>
          <md-card-content id="position">{{list.position}}</md-card-content>
        </td>
        <td id="status" align="right">{{list.status}}</td>
      </table>
      <md-card-content style="padding-top: 8px;">{{list.description}}</md-card-content>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'ListProject',
  data() {
    return {
      lists: [
        {
          id: 1,
          name: 'Project #1',
          position: 'Web Design',
          description: 'Commodo adipiscing ornare sit lorem sit tempus urna, vestibulum, neque.',
          status: 'In progress',
        },
        {
          id: 2,
          name: 'Artisan’ Dashboard Project',
          position: 'Mobile App',
          description: 'The Dashboard that show the flow of work in the project.',
          status: 'In progress',
        },
        {
          id: 3,
          name: 'Project #2',
          position: 'Marketing',
          description: 'Contrary to popular belief, Lorem Ipsum is not simply random text.',
          status: 'Done',
        },
        {
          id: 4,
          name: 'Project #3',
          position: 'Mobile App',
          description: 'Consequat tempus nisi, orci, ligula duis.',
          status: 'Done',
        },
      ],
    }
  },
}
</script>

<style  scoped>
.listProject {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 50px;
  font-family: 'Roboto';
}
table {
  border: none;
  width: 100%;
  padding-bottom: 0px;
}

#title {
  padding-bottom: 0px;
  font-size: 16px;
}
#position {
  color: #8f8f8f;
  font-size: 12px;
  margin-top: 0px;
  padding-bottom: 0px;
}
#status {
  font-size: 10.5px;
  padding-right: 16px;
  width: 30%;
}
#card {
  margin: 0px 15px 15px 15px;
  border-radius: 5px;
}

.md-title {
  font-size: 16px;
  margin-bottom: -1px; /* ระยะห่างระหว่างชื่อโปรเจคกับตำแหน่งงาน */
  line-height: 20px; /* ระยะห่างระหว่างบรรทัดของชื่อโปรเจค เวลาขึ้นบรรทัดใหม่ */
}
</style>
