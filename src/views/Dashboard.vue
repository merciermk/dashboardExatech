<template>
  <div class="dashboard">
    <DashboardDossiersAcademiques></DashboardDossiersAcademiques>
    <DashboardDossiersAcademiques></DashboardDossiersAcademiques>
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

/* Variables */
$dashboard-margin-top: 5rem;
$dashboard-margin-left: 5rem;
$dashboard-margin-bottom: 20px;
$dashboard-margin-right: 20px;

.big-card-icon{
  z-index: 1;
  left: 10px;
  top: 20px;
  position: absolute;
  font-size: 200px;
  color: rgba(179, 175, 175, 0.13);
}
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

.big-card{
  border-radius: 10px;
  position: relative;
  padding-left: 5%;
  margin: 0 0px 20px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: -5px 5px 15px rgba(173, 173, 173, 0.411);
  width: 100%;
  min-height: 350px;
}

</style>
