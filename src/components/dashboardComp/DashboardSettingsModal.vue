<template>
  <div class="dashboard-modal">
    <div class="modal-card">
      <div class="upperModal">
        <button
          type="button modal-button"
          @click.prevent="uploadLocalStorage"
          data-bs-dismiss="modal"
          aria-label="Close"
          class="btn-close modal-button"
        ></button>
        <div class="slot-modal">
          <ul v-for="(eachData, index) in modalData" :key="'dashboardModal' + index">
            <li>
              <input type="checkbox" id="checkbox" :value="eachData.show" v-model="eachData.show" >
<label for="checkbox">{{ eachData.auth[0] }}</label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class DashboardModal extends Vue {
  @Prop() data!: any;

  modalData = this.$props.data

  uploadLocalStorage () {
    console.log('uploadLocalStorage')
    console.log(window.localStorage.setItem('dashboardElements', JSON.stringify(this.modalData)))
    window.localStorage.setItem('dashboardElements', JSON.stringify(this.modalData))
    this.$emit('close')
  }
}
</script>

<style lang="scss">
@import "./dashboardGlobalStyle.scss";
$modal-card-height: 20%;

.dashboard-modal {
  color: $small-card-done-text-color;
  font-size: 20px;
  z-index: 999999;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  min-height: 100%;
  background-color: rgba(130, 133, 133, 0.397);
}
.modal-card {
  border-radius: 20px;
  background-color: rgb(253, 253, 253);
  min-width: 30%;
  max-width: 30%;
  height: $modal-card-height;
}
.modal-button {
  position: relative;
  top: 0;
  right: 15px;
  float: right;
}

.chartModal {
  margin-top: 10vh;
  width: 100%;
  height: 70%;
  text-align: center;
}
.slot-modal {
  margin: 15px;
  text-align: center;
  height: auto;
  width: auto;
  ul > li {
    list-style: none;
  }
}

</style>
