<template>
  <div>
    <div>
      <table style="width:100%; margin-bottom:10px">
        <div style="margin-left:18px">
          <td align="left" style="font-size:20px; font-weight:550">Content</td>
        </div>
        <td align="right"></td>
      </table>
    </div>

    <div class="news">
      <md-card id="card" v-for="content in contents" :key="content.id">
        <md-card-media>
          <img
            v-bind:src="content.imageUrl"
            v-bind:alt="content.imageAlt"
            style="border-radius: 5px; box-shadow: 1.5px 1.5px 10px #b1b1b1;   height:153.47px; object-fit:cover;"
          />
        </md-card-media>

        <md-card-header align="left">
          <div class="md-title" style="font-size:16px">{{ content.imageAlt }}</div>
          <div class="md-subhead" style="font-size:14px; color:black">{{ content.data }}</div>
        </md-card-header>

        <md-card-expand>
          <md-card-actions md-alignment="space-between">
            <div></div>

            <md-card-expand-trigger>
              <md-button style="color:#0036C7">Read more</md-button>
            </md-card-expand-trigger>
          </md-card-actions>

          <md-card-expand-content>
            <md-card-content
              >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum
              odio. Dolores, sed accusantium quasi non, voluptas eius illo quas, saepe voluptate
              pariatur in deleniti minus sint. Excepturi.</md-card-content
            >
          </md-card-expand-content>
        </md-card-expand>
      </md-card>
    </div>
    <div style="padding-bottom:80px">
      <!-- ระยะห่าง manu ข้างล่างกับ content -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Centent',

  data() {
    return {
      contents: [
        {
          id: 1,
          imageUrl: 'https://i.pinimg.com/564x/84/23/98/842398fa38b695f1b52bae9b02012057.jpg',
          imageAlt: 'White bear',
          data:
            '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        },
        {
          id: 2,
          imageUrl: 'https://i.pinimg.com/originals/ea/49/54/ea4954c07586167e1e1d87bc6344ad7e.jpg',
          imageAlt: 'Cat',
          data:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
        },
        {
          id: 3,
          imageUrl: 'https://kawaiicase.files.wordpress.com/2012/03/cute-baby-polar-bear.jpg?w=880',
          imageAlt: 'White bear',
          data:
            '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        },
        {
          id: 4,
          imageUrl: 'https://kawaiicase.files.wordpress.com/2012/03/cute-baby-polar-bear.jpg?w=880',
          imageAlt: 'White bear',
          data:
            '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
        },
      ],
    }
  },
}
</script>

<style scoped>
template {
  font-style: 'Roboto';
}
.news {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 0.5px;
}
#card {
  padding: 15px 15px 0 15px;
  border-radius: 5px;
  /* เงากรอบขาว ระยะเงาด้านขวากับกรอบ ระยะเงาด้านล่างกับกรอบ ความฟุ่งของเงา สีของเงา*/
  box-shadow: 1.5px 1.5px 5px #b1b1b1;
  margin-bottom: 24px;
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
