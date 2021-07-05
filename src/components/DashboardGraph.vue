/* eslint-disable no-tabs */
<template>
  <div id="dashbaordGraph">
<div class="flex-wrapper">
  <div class="single-chart">
    <svg viewBox="0 0 36 36" class="circular-chart orange">
      <path class="circle-bg"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path class="circle"
        :stroke-dasharray="graphPercentage + ',' + 100"
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <text x="18" y="20.35" class="percentage">{{ graphPercentage }}</text>
    </svg>
  </div>
</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})
export default class DashboardGraph extends Vue {
 @Prop() graphPercentage! : number
 strokeDash = this.graphPercentage
}
</script>

<style scoped lang="scss">
.flex-wrapper {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}

.single-chart {
  width: 53%;
  justify-content: space-around ;
}

.circular-chart {
  display: block;
  margin: 10px auto;
  max-width: 80%;
  max-height: 250px;
}

.circle-bg {
  fill: none;
  stroke: rgba(238, 238, 238, 0.479);
  stroke-width: 3.8;
}

.circle {
  fill: none;
  stroke-width: 2.8;
  stroke-linecap: round;
  animation: progress 2s ease-out forwards;
}

@keyframes progress {
  0% {
    stroke-dasharray: 0 100;
  }
}

.circular-chart.orange .circle {
  stroke: #ff0000;
}

.percentage {
  fill: rgb(102, 102, 102);
  font-family: sans-serif;
  font-size: 0.5em;
  text-anchor: middle;
}
</style>
