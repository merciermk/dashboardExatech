<template>
  <div class="small-card-percentage">
    <router-link :to="smallCardPercentageValues.link">
      <div class="small-card-percentage-header">
        <font-awesome-icon
          :icon="smallCardPercentageValues.cardIcon"
          class="small-card-percentage-icon-one"
        />
        <h4 class="small-card-percentage-title">
          {{ smallCardPercentageValues.titre }}
        </h4>
      </div>
      <div class="small-card-percentage-middle">
        <div id="small-card-percentage-middle-progress">
          <div class="progress">
            <div class="progress-bar" :style="progressBarLoaded"></div>
          </div>
        </div>
      </div>
      <div class="small-card-percentage-bottom">
        <div
          v-for="(info, index) in smallCardPercentageValues.informations"
          :key="index"
        >
          <div class="information" :style="'color:' + info.color">
            <div class="" :style="'background-color:' + info.color"></div>
            <p
              class="small-card-percentage-button-text"
              v-if="info.numberToShow <= 1"
            >
              {{ info.textSingular }}
            </p>
            <p class="small-card-percentage-button-text" v-else>
              {{ info.textPlural }}
            </p>
            <p class="small-card-percentage-button-number">
              {{ info.numberToShow }}
            </p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface SmallCardPercentageInterface {
  titre: string,
  cardIcon: string,
  link: string,
  percentageToShow: number
  informations: [
     info1 : {
    textSingular: string
    textPlural: string
    numberToShow : number | string
    color: string
  },
  info2? : {
    textSingular: string
    textPlural: string
    numberToShow : number
    color: string
  },
  info3?: {
    textSingular: string
    textPlural: string
    numberToShow : number
    color: string
  }
  ]

}

@Component({
  components: {}
})
export default class SmallCardPercentage extends Vue {
  @Prop() smallCardPercentageValues!: SmallCardPercentageInterface
  progressBarLoaded = ''
  mounted () {
    this.progressBarLoaded = 'width: 80%'
  }
}
</script>

<style lang="scss">
$small-card-percentage-color: rgba(156, 156, 158, 0.534);
$small-card-percentage-icon-size: 30px;
$small-card-percentage-width: 400px;

.small-card-percentage a,
.small-card-percentage a:hover,
.small-card-percentage:visited,
.small-card-percentage {
  color: $small-card-percentage-color;
  text-decoration: none;
}

.small-card-percentage:hover {
  box-shadow: -10px 10px 20px rgba(173, 173, 173, 0.411);
}

.small-card-percentage {
  z-index: 2;
  background-color: white;
  box-shadow: -5px 5px 15px rgba(173, 173, 173, 0.411);
  border-radius: 10px;
  margin: 10px;
  width: $small-card-percentage-width;
  height: 250px;
}

.small-card-percentage-header {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 40%;
}

.small-card-percentage-icon-one {
  margin: 15px;
  font-size: $small-card-percentage-icon-size;
}

.small-card-percentage-title {
  color: grey;
  font-size: 16px;
  flex: 1;
  text-align: center;
}

.small-card-percentage-hr {
  margin: 20px auto 0 auto;
}

.small-card-percentage-middle {
  text-align: center;
  width: 100%;
}

.small-card-percentage-bottom {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.information {
  min-width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.small-card-percentage-button-number {
  font-size: 30px;
  text-align: center;
}

.small-card-percentage-button-text {
    display: flex;
    height: 40px;
    width: 140px;
    justify-content: center;
    align-items: center;
    text-align: center;
}

/* progress bar */

.progress {
  margin: 0 auto;
   width: 150px;

  height: 20px;
  padding: 0px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.25),
    0 1px rgba(255, 255, 255, 0.08);
}

.progress-bar {
  border-radius: 4px;
  background-image: rgba(255, 255, 255, 0.05);
  -webkit-transition: 0.4s linear;
  -moz-transition: 0.4s linear;
  -o-transition: 0.4s linear;
  transition: 0.4s linear;
  -webkit-transition-property: width, background-color;
  -moz-transition-property: width, background-color;
  -o-transition-property: width, background-color;
  transition-property: width, background-color;
  -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25),
    inset 0 1px rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.25),
    inset 0 1px rgba(255, 255, 255, 0.1);
}

.progress > .progress-bar {
  background-color: #27c9df;
}
</style>
