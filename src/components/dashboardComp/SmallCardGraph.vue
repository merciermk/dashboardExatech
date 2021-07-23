<template>
  <!-- Regular progress bar -->
  <div class="small-card" :class="numberShow === 0 ? 'doneMode' : ''">
    <router-link :to="link" class="small-card-regular">
      <!-- title -->
      <div class="card-title">
        <p class="card-title-text">{{ title.toUpperCase() }}</p>
        <hr class="card-title-line" />
      </div>
      <!-- Milieu de carte  -->
      <div class="card-middle graph-area">
        <p class="theCamembertText">{{ textShowSingular }}</p>
        <div class="camenbertArea">
          <p class="camembert-text blue1">
            Test
          </p>
          <div class="theCamembert">
            <div class="svg-item">
              <svg
                width="100px"
                height="100px"
                viewBox="0 0 40 40"
                class="donut"
              >
                <circle
                  class="donut-ring"
                  cx="20"
                  cy="20"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke-width="6px"
                ></circle>
                <circle
                  class="donut-segment donut-segment-2"
                  cx="20"
                  cy="20"
                  r="15.91549430918954"
                  fill="transparent"
                  stroke-width="5.9px"
                  :stroke-dasharray="strokeDashCalc(300, 700)"
                  stroke-dashoffset="25"
                ></circle>
              </svg>
            </div>
          </div>
              <p class="camembert-text blue2">
                Test
              </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class SmallCard extends Vue {
  /* Communes a toutes les cartes */
  @Prop() readonly cardType!: string; // type de carte
  @Prop() readonly title!: string;
  @Prop() readonly textShowSingular!: string;
  @Prop() readonly textShowPlural!: string | undefined;
  @Prop() readonly link!: string;
  @Prop() readonly doneText!: string;
  @Prop() readonly doneBottomText!: string | undefined;

  /* ****************** */
  /* Milieu de la carte */
  /* ****************** */
  /* Affichage un seul chiffre */
  @Prop() readonly numberShow!: number | undefined;

  /* ************ */
  /* Bottom carte */
  /* ************ */
  /* regular card */
  @Prop() readonly bottomText!: string | undefined;

  percentageCalc (number1: number, number2: number): number {
    const numberCalc = (number1 / number2) * 100
    return numberCalc
  }

  strokeDashCalc (number1: number, number2: number): string {
    const firstNumber = this.percentageCalc(number1, number2)
    const secondNumber = 100 - firstNumber
    console.log(number1)
    console.log(number2)
    console.log(firstNumber + ' ' + secondNumber)
    return firstNumber + ' ' + (100 - firstNumber)
  }
}
</script>

<style lang="scss">
@import "./dashboardGlobalStyle.scss";
@font-face {
  font-family: "Product Sans";
  src: url("../../fonts/ProductSans-Regular.ttf");
}
.small-card,
.doneMode {
  font-style: "Product Sans";
}

.small-card:hover,
.duo-card-one:hover,
.duo-card-two:hover {
  box-shadow: 0px 0px 15px 3px rgba(128, 128, 128, 0.74);
}

.theCamembert {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 125px;
}

.svg-item {
  text-align: center;
  width: 100px;
  font-size: 16px;
  animation: donutfade 1s;
}

@keyframes donutfade {
  /* this applies to the whole svg item wrapper */
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

@media (min-width: 992px) {
  .svg-item {
    width: 90%;
  }
}

.donut-ring {
  stroke: #3a93ba;
}

.donut-segment-2 {
  stroke: #6bbeb7;
  animation: donut1 2s;
}

.segment-2 {
  fill: #6bbeb7;
}

.donut-percent {
  animation: donutfadelong 1s;
}

@keyframes donut1 {
  0% {
    stroke-dasharray: 0, 100;
  }
}

.donut-percent {
  font-size: 0.5em;
  line-height: 1;
  transform: translateY(0.5em);
  font-weight: bold;
}

.donut-data {
  font-size: 0.12em;
  line-height: 1;
  transform: translateY(0.5em);
  text-align: center;
  text-anchor: middle;
  color: #666;
  fill: #666;
  animation: donutfadelong 1s;
}

.camenbertArea {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 200px;
  justify-content: center;
  align-items: center;
}

.camembert-text{
  font-size: 22px;
}

.blue1{
  color: #3a93ba
}

.blue2{
  color: #6bbeb7
}

.graph-area{
  margin-top: 35px;
  line-height: 0.3rem
}

</style>
