<template>
  <!-- Regular progress bar -->
  <div>
  <div @click="showModal" class="double-card">
    <div class="double-card-regular">
      <!-- title -->
      <div class="card-title" @click="showModal">
        <p class="card-title-text">{{ title.toUpperCase() }}</p>
        <hr class="card-title-line" />
      </div>
      <!-- Milieu de carte  -->
      <div class="double-card-middle">
        <v-chart class="chart" :option="chartOption" />
      </div>
    </div>
  </div>
    <dashboard-modal
  v-if="isModalVisible"
  @close="closeModal"

  >
    <template v-slot:title>
      <p>{{ modalDash.title }}</p>
    </template>
     <template v-slot:body>
       <v-chart class="chartModal" :option="chartOption" autoresize/>
    </template>
  </dashboard-modal>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import DashboardModal from '@/components/dashboardComp/DashboardModal.vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, LineChart, BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'

use([
  CanvasRenderer,
  GridComponent,
  PieChart,
  LineChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
])

@Component({
  components: {
    VChart,
    DashboardModal
  },
  provide: {
    [THEME_KEY]: 'light'
  }
})
export default class DoubleCardGraph extends Vue {
  @Prop() readonly cardType!: string; // type de carte
  @Prop() readonly title!: string;
  @Prop() readonly link!: string;
  @Prop() readonly chartOption!: any

  modalDash = {
    title: this.title,
    chartOption: this.chartOption
  }

  mounted (): void {
    console.log('this chartOption')
    console.log(this.chartOption)
  }

  isModalVisible = false
  showModal (): void {
    this.isModalVisible = true
  }

  closeModal (): void {
    console.log('close modal')
    this.isModalVisible = false
  }
}

</script>

<style lang="scss">
@import "./dashboardGlobalStyle.scss";
@font-face {
  font-family: "Product Sans";
  src: url("../../fonts/ProductSans-Regular.ttf");
}
.double-card,
.doneMode {
  font-style: "Product Sans";
}

.double-card:hover,
.duo-card-one:hover,
.duo-card-two:hover {
  box-shadow: 0px 0px 15px 3px rgba(177, 175, 175, 0.74);
}

.double-card-middle{
  margin-top: 10px;
}

.chart {
  width: 100%;
  height: 220px;
}

</style>
