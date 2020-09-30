<template>
  <div>
    <ToolbarBack />
    <br />
    <div style="margin :60px 18px 0 18px">
      <!-- Done button -->
      <v-btn
        id="buttonStatus"
        v-if="taskFunc.status == false"
        style="width:100%; text-transform: capitalize; color: #000000;"
        elevation="6"
        color="#F77B72"
        @click="changeStatus()"
      >
        <svg
          style="margin-right:3px"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
        </svg>
        Make as Done
      </v-btn>

      <!-- WIP button -->
      <v-btn
        id="buttonStatus"
        v-if="taskFunc.status == true"
        style="width:100%; text-transform: capitalize; color: #000000;"
        elevation="6"
        color="#4DD987"
        @click="changeStatus()"
      >
        <svg
          style="margin-right:3px"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-check-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
          />
          <path
            fill-rule="evenodd"
            d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.236.236 0 0 1 .02-.022z"
          />
        </svg>
        Make as Undone
      </v-btn>
    </div>

    <!-- Dashboard -->
    <div v-for="project in project" :key="project.id">
      <div v-if="project.id == taskFunc.projectId">
        <v-row style="margin-left:6px; margin-right:6px;">
          <v-col>
            <v-card elevation="6">
              <div style="padding-top:10px">
                <span
                  class="iconify"
                  data-inline="false"
                  data-icon="ant-design:fund-projection-screen-outlined"
                  style="color: #0036c7; font-size: 22px;"
                ></span>
              </div>
              <div>
                <b>{{ project.name }}</b>
              </div>
              <div id="position" style="padding-bottom:10px">Project name</div>
            </v-card>
          </v-col>
          <v-col>
            <v-card elevation="6">
              <div style="padding-top:10px">
                <a-icon type="clock-circle" style="color:#0036c7; font-size: 22px;" />
              </div>
              <div><b>10/09/2020</b></div>
              <div id="position" style="padding-bottom:10px">Due date</div>
            </v-card>
          </v-col>
        </v-row>
        <v-row style="margin-left:6px; margin-right:6px;">
          <v-col>
            <v-card>
              <div style="padding-top:10px">
                <span
                  class="iconify"
                  data-inline="false"
                  data-icon="clarity:users-line"
                  style="color: #0036c7; font-size: 22px;"
                ></span>
              </div>
              <div>
                <b>pic of member</b>
              </div>
              <div id="position" style="padding-bottom:10px">Team</div>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </div>

    <!-- Detail of Task -->
    <v-row style="margin-left:6px; margin-right:6px;">
      <v-col
        ><span style="float:left; font-size:20px; font-weight:550">{{
          taskFunc.taskName
        }}</span></v-col
      >
    </v-row>
    <div class="detailTask">
      {{ taskFunc.descriptonTask }}
    </div>

    <!-- Clipboard -->
    <v-row style="margin-left:6px; margin-right:6px; margin-top:12px">
      <v-col>
        <span
          class="iconify"
          data-inline="false"
          data-icon="ic:outline-attach-file"
          style="float: left; color: #105efb; font-size: 22px;"
        ></span>
        <b style="float: left; font-size:16px">Clipboard</b>
      </v-col>
      <v-col>
        <v-btn
          @click="onFileChange()"
          color="primary"
          style="float:right; text-transform: capitalize; background-color: #105EFB; border-radius: 15px;"
        >
          <span
            class="iconify"
            data-inline="false"
            data-icon="ant-design:upload-outlined"
            style="color: #ffffff; font-size: 14px; margin-right:3px;"
          ></span>
          Upload
        </v-btn>
      </v-col>
    </v-row>

    <!-- upload file -->
    <div class="clearfix">
      <v-row style="margin-left:18px; margin-right:18px; margin-top:12px;">
        <a-upload
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          list-type="picture-card"
          :file-list="fileList"
          @preview="handlePreview"
          @change="handleChange"
        >
          <div v-if="fileList.length < 8">
            <a-icon type="plus" />
            <div class="ant-upload-text">
              Upload
            </div>
          </div>
        </a-upload>
        <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
          <img alt="example" style="width: 100%" :src="previewImage" />
        </a-modal>
      </v-row>
    </div>

    <div style="padding-bottom:80px">
      <!-- ระยะห่าง manu ข้างล่างกับ content -->
    </div>
    <BarRouter />
  </div>
</template>

<script>
// function upload file
function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
import ToolbarBack from '@/components/ToolbarBack.vue'
import BarRouter from '@/components/BarRouter.vue'
import store from '../store/index.js'
export default {
  name: 'taskDetail',
  components: {
    ToolbarBack,
    BarRouter,
  },
  data() {
    return {
      project: store.state.projects,
      task: store.state.tasks,

      // upload file
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'image.png',
          status: 'done',
          url: 'https://i.pinimg.com/564x/d3/7c/33/d37c33b2921a5df2fc85040e32b28f6c.jpg',
        },
        {
          uid: '-2',
          name: 'image.png',
          status: 'done',
          url: 'https://i.pinimg.com/564x/c1/a5/31/c1a531fe6da91a99840858471f6e714f.jpg',
        },
        {
          uid: '-3',
          name: 'image.png',
          status: 'done',
          url: 'https://i.pinimg.com/564x/ff/79/6f/ff796f70a33c46b008e1b0ec24ec4b1b.jpg',
        },
        {
          uid: '-4',
          name: 'image.png',
          status: 'done',
          url: 'https://i.pinimg.com/564x/96/5c/95/965c95e230d9eefcb9e2a089a1544a1e.jpg',
        },
        {
          uid: '-5',
          name: 'image.png',
          status: 'error',
        },
      ],
    }
  },
  computed: {
    taskFunc() {
      return this.$store.getters.task(parseInt(this.$route.params.id))
    },
  },
  methods: {
    changeStatus() {
      console.log('ค่าเริ่มต้น ' + this.taskFunc.status)
      if (this.taskFunc.status == false) {
        this.taskFunc.status = true
        console.log(this.taskFunc.status)
      } else {
        this.taskFunc.status = false
        console.log(this.taskFunc.status)
      }
    },

    // Upload file
    handleCancel() {
      this.previewVisible = false
    },
    async handlePreview(file) {
      if (!file.url && !file.preview) {
        file.preview = await getBase64(file.originFileObj)
      }
      this.previewImage = file.url || file.preview
      this.previewVisible = true
    },
    handleChange({ fileList }) {
      this.fileList = fileList
    },
  },
}
</script>

<style>
div {
  font-family: 'Roboto';
}
.detailTask {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding: 15px 15px 15px 15px;
  text-align: left;
}
#position {
  color: #8f8f8f;
  font-size: 12px;
  margin-top: 0px;
  padding-bottom: 0px;
}
#buttonStatus {
  border-radius: 10px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>