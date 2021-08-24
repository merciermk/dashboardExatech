<template>
  <div class="dashboard-modal">
    <div class="modal-card">
      <div class="upperModal">
      <button type="button modal-button" @click.prevent="$emit('close')" data-bs-dismiss="modal" aria-label="Close" class="btn-close modal-button"></button>
        <div class="slot-modal">
          <slot name="title" class="modal-title"></slot>
          <slot name="body"></slot>
        </div>
      </div>
    </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop } from 'vue-property-decorator'

export default class DashboardModal extends Vue {
@Prop() titre!: string
}
</script>

<style lang="scss">
@import "./dashboardGlobalStyle.scss";
$modal-card-height: 20%;

 .dashboard-modal{
   color: $small-card-done-text-color;
   font-size: 20px;
   z-index: 999999;
   display: flex;
   justify-content: center;
   align-items:center;
   position: fixed;
   top: 0;
   left: 0;
   min-width: 100%;
   max-width: 100%;
   min-height: 100%;
   min-height: 100%;
   background-color: rgba(130, 133, 133, 0.397);
 }
 .modal-card{

   border-radius: 20px;
   background-color: rgb(253, 253, 253);
   min-width: 80%;
   max-width: 80%;
   height: $modal-card-height;
 }
 .modal-button{
   position: relative;
   top: 0;
   right: 15px;
   float: right;
 }

 .chartModal {
   margin-top: 10vh;
  width: 100%;
  height: 70%;
  text-align: calc(center + 50px);
}
.slot-modal{
  margin: 15px;
  text-align: center;
  height: 60vh;
}

</style>
