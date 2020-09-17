<template>
  <div class="project">
    <!-- <h1>This is an about page</h1> -->
    <Toolbar />

    <md-content>
      <br />
      <br />
      <br />
      <br />
      <div>
        <table style="width:100%; margin-bottom:10px">
          <div style="margin-left:18px">
            <td align="left" style="font-size:20px; font-weight:550">
              <input type="search" name id v-model="search" />
            </td>
          </div>

          <!-- <div align="right" style="margin-right:18px;"> -->
          <td align="right">
            &nbsp;
            <div style="margin-right:18px; border:none;">
              <button>
                <div>
                  <span
                    class="iconify"
                    id="back"
                    data-inline="false"
                    data-icon="eva:arrow-ios-back-fill"
                    style="font-size: 15px;"
                  ></span>
                </div>
              </button>
              <span style="margin-left:8px;"></span>
              <!-- ระยะห่างระหว่าง back กับ next -->

              <button>
                <div style="-webkit-transform: scaleX(-1); transform: scaleX(-1);">
                  <!-- กลับด้าน icons -->
                  <span
                    class="iconify"
                    id="next"
                    data-inline="false"
                    data-icon="eva:arrow-ios-back-fill"
                    style="font-size: 15px; "
                  ></span>
                </div>
              </button>
            </div>
          </td>
        </table>
      </div>

      <div class="listmembers"></div>
    </md-content>
    <BarRouter />
  </div>
</template>

<script>
// @ is an alias to /src
import Toolbar from '@/components/Toolbar.vue'
import BarRouter from '@/components/BarRouter.vue'

export default {
  name: 'about',
  components: {
    Toolbar,
    BarRouter,
  },
}
</script>

<style scoped>
div {
  font-family: 'Roboto';
}

/* search button */
input {
  outline: none;
}
input[type='search'] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}

input[type='search'] {
  background: url(../assets/carbon_search.svg) no-repeat 9px center;
  border: none;
  padding: 2px 10px 2px; /* ขนาดกรอบของปุ่ม search */

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
input[type='search']:focus {
  /* width: 130px; */
  background-color: #fff;
  border-color: #66cc75;

  -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  -moz-box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
  box-shadow: 0 0 5px rgba(109, 207, 246, 0.5);
}

input:-moz-placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}

input[type='search'] {
  width: 15px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
}
input[type='search']:hover {
  background-color: #fff;
}
input[type='search']:focus {
  width: 50%; /* ความกว้างเวลาปุ่ม search ขยาย */
  padding-left: 32px;
  color: #000;
  background-color: #fff;
  cursor: auto;
}
input:-moz-placeholder {
  color: transparent;
}
input::-webkit-input-placeholder {
  color: transparent;
}

#back,
#next {
  vertical-align: -10%;
}
button {
  background-color: white;
  border-radius: 3px;
  border: none;
  border: 1px solid #8f8f8f;
}
.listmembers {
  margin: 0px 18px 0px 18px;
  background-color: #e9f0ff;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>

