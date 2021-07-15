<template>
  <div class="dashboard">
    <DashboardDossiersAcademiques></DashboardDossiersAcademiques>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import DashboardDossiersAcademiques from '@/components/dashboardComp/DashboardDossiersAcademiques.vue'
@Component({
  components: {
    DashboardDossiersAcademiques
  }
})

export default class Dashboard extends Vue {

}
</script>

<style lang="scss">
@font-face {
  font-family: 'Product Sans';
  src: local('/fonts/ProductSans-Regular.ttf') format('truetype');
}

.dashboard{
  font-family: 'Product Sans', sans-serif;
}
/* Variables */
$dashboard-margin-top: 5rem;
$dashboard-margin-left: 5rem;
$dashboard-margin-bottom: 20px;
$dashboard-margin-right: 20px;

.dashboard{
  position: absolute;
  width: 95%;
  font-size: 14px;
  min-height: calc(100vh - 50px - 50px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin:$dashboard-margin-top  $dashboard-margin-right $dashboard-margin-bottom $dashboard-margin-left;
}

</style>
