<template>
  <div class="dashboard">
    <big-card
    v-for="(dashboardElement, index) in dashboardElements" :key="index"
      :cardIcon="dashboardElement.cardIcon"
      :allCards="dashboardElement.allCards"
      class="dashboard-element"
    >
    </big-card>

  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import BigCard from '@/components/dashboardComp/DashboardCard.vue'
import { functionsForDashboard } from '@/types/dashboard'

@Component({
  components: {
    BigCard
  }
})
export default class Dashboard extends Vue {
  dashboardElements = functionsForDashboard.dashboardFiltered(functionsForDashboard.dashboardElements)
}
</script>

<style lang="scss">
@font-face {
  font-family: "Product Sans";
  src: local("/fonts/ProductSans-Regular.ttf") format("truetype");
}

.dashboard {
  font-family: "Product Sans", sans-serif;
}
/* Variables */
$dashboard-margin-top: 5rem;
$dashboard-margin-left: 4rem;
$dashboard-margin-bottom: 20px;
$dashboard-margin-right: 20px;

.dashboard {
  position: absolute;
  width: 95%;
  font-size: 14px;
  min-height: calc(100vh - 50px - 50px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin: $dashboard-margin-top $dashboard-margin-right $dashboard-margin-bottom
    $dashboard-margin-left;
}

.dashboard-element:nth-child(even) {
  background-color: rgba(163, 163, 163, 0.116);
}
</style>
