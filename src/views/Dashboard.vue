<template>
  <div class="dashboard test">
    <div v-for="eachCard, index in filteredDashboard" :key="index" class="sousEl">
      <div class="dashboardGraph" v-if="eachCard.percentageToShow">
        <dashboardGraph  :graphPercentage="eachCard.percentageToShow"></dashboardGraph>
      </div>
      <div class="linkEl">
        <hr class="hrLink">
        <router-link :to="eachCard.path[0]">
          {{ eachCard.name}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import { functionsForAuth } from '@/types/AuthorisationMenu'
import { unfilteredDashboardElements } from '@/types/DashboardEl/dashboardEl'
import DashboardGraph from '@/components/DashboardGraph.vue'

@Component({
  components: {
    DashboardGraph
  }
})

export default class Dashboard extends Vue {
  elementsUnfiltered = unfilteredDashboardElements
  filteredDashboard = functionsForAuth.theFilterFunction(this.elementsUnfiltered)
}
</script>

<style lang="scss">

/* Variables */
$dashboard-margin-top: 5rem;
$dashboard-margin-left: 5rem;

.test{
  border: 2px solid black;
}
.dashboard{
  font-size: 14px;
  width: 92%;
  min-height: calc(100vh - 50px - 50px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  position: absolute;
  margin:$dashboard-margin-top  $dashboard-margin-left 0 $dashboard-margin-left;
}

.sousEl{
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 2px 2px 2px 2px rgba(128, 128, 128, 0.247);
  min-width: 350px;
  max-width: auto;
  height: 350px;
  margin: 10px 20px 20px 20px
}

.dataScreen{
  height: 80%;
}

.hrLink{
  margin-left: auto;
  margin-right: auto;
  width: 80%;
}

.linkEl{
  margin-bottom: 20px;
  margin-top: auto;
  text-align: right;
  padding-right: 25px
}

</style>
