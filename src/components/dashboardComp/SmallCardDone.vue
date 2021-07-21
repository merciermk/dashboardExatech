<template>
  <div class="small-card-done">
    <!-- Regular and progress bar -->
    <router-link
      :to="link"
      class="small-card-regular"
      v-if="
        cardType.toUpperCase() === 'REGULAR' ||
        cardType.toUpperCase() === 'PROGRESSBAR' ||
        cardType.toUpperCase() === 'THREEINFORMATIONS'
      "
    >
    <!-- title -->
      <div class="card-title-done">
        <p class="card-title-text-done">{{ title.toUpperCase() }}</p>
       <hr class="card-title-line-done" />
      </div>
      <!-- Milieu de carte  -->
      <div class="card-middle-done">
        <font-awesome-icon icon="check" class="card-middle-done-icon" />
        <div class="test" v-if="false">
        <p class="card-middle-number">5/5</p>
        <p class="card-middle-done-text">DONE</p>
        </div>
        <div class="test" v-else>
           <p class="card-middle-done-text">Tous les intervenants séléctionnés</p>
        </div>
      </div>
      <!-- bottom avec progress-bar -->
      <div class="card-bottom-progress-bar-done" v-if="cardType.toUpperCase() === 'PROGRESSBAR'">
        <div
          class="card-bottom-progress-bar-done"
        >
         <div class="bar-wrap">
           <span class="bar-fill"  :style="'width: 100%;'"></span>
        </div>
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
  @Prop() readonly textShowSingular!: string | undefined;
  @Prop() readonly textShowPlural!: string | undefined;
  @Prop() readonly link!: string;
  @Prop() readonly bottomText!: string | undefined;

  /* Progress Bar type de carte : progressBar */
  @Prop() readonly progressBar!: number | undefined

  percentageCalculation (number1: number, number2: number): number {
    return number1 * 100 / number2
  }
}
</script>

<style lang="scss">
@font-face {
    font-family: 'Product Sans';
    src:url("../../fonts/ProductSans-Regular.ttf");
}
.small-card-done{
  font-style: 'Product Sans';
}

$small-card-title-height: 36px;
$card-width: 250px;
$card-height: 250px;
$middle-number-size: 42px;
$font-size: 14px;
$small-card-done-background-color: #ffffff;
$progress-bar-color: #6bbeb7;
$progress-bar-color-background: #F6f7fa;
$small-card-done-text-color: #909090;
$small-card-done-hr-color: #585F60;
 $small-card-done-title-height: 36px;
 $small-card-hr-color: #293F41;
 $middle-done-icon-size: 42px;

 .test{
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
 }

.small-card-done {
  background-color: $small-card-done-background-color;
  width: $card-width;
  min-height: $card-height;
  max-height: $card-height;
  box-shadow: 0px 0px 15px rgba(128, 128, 128, 0.445);
  margin: 10px 10px 10px 10px;
  border-radius: 15px;
  overflow: hidden;
}
.small-card-done a,
.small-card-done a:visited,
.small-card-done a:hover {
  color: $small-card-done-text-color;
  text-decoration: none;
}

/* title carte */
.card-title-done {
  position: absolute;
  width: 100%;
  margin: 0 !important;
  line-height: 1rem;
  min-height: $small-card-done-title-height;

  font-size: $font-size;
}
.card-title-line-done {
 position: absolute;
  top: $small-card-title-height;
  left: 10px;
  width: 230px !important;
  min-height: 1px;
  margin: auto !important;
  background-color: $small-card-hr-color;
}
.card-title-text-done {
  text-align: center;
  margin: 0;
  padding: 10px 5px 5px 5px;
}

/* Milieu de la carte */
.card-middle-done {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  min-height: 170px +  $small-card-done-title-height;
  max-height: 170px +  $small-card-done-title-height;
  overflow: hidden;
}
.card-middle-done-icon{
   margin: 0;
  font-size: $middle-done-icon-size;
}

.card-middle-done-text{
  text-align: center;
  max-width: 70%;
  margin: 0;
  padding: 10px 5px 5px 5px;
}

/* milieu carte de type threeInformation */

/* pied de la carte */
.card-bottom-done {
  position:absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 44px;
  max-height: 44px;
  overflow: hidden;
  p {
    color: $progress-bar-color;
    margin: auto;
    padding-top: 5px;
  }
}

.card-done-bottom-hr {
  margin: 0;
  background-color: $progress-bar-color;
}

/* progress bar */
/* Pied de carte progressBar */
.card-done-bottom-progress-bar {
  display: flex;
  align-items: flex-end;
  min-height: 44px;
  max-height: 44px;
  overflow: hidden;
}

@mixin prefix ($property, $value,
                 $moz:    true,
                 $webkit: true,
                 $o:      false,
                 $ms:     true,
                 $spec:   true) {
    @if $moz    {    -moz-#{$property}: $value; }
    @if $webkit { -webkit-#{$property}: $value; }
    @if $o      {      -o-#{$property}: $value; }
    @if $ms     {     -ms-#{$property}: $value; }
    @if $spec   {         #{$property}: $value; }
}

// Animations

@keyframes bar-fill {
   0% { width: 0; }
}
@-webkit-keyframes bar-fill {
   0% { width: 0; }
}
@-moz-keyframes bar-fill {
   0% { width: 0; }
}
@-o-keyframes bar-fill {
   0% { width: 0; }
}

// Graph stuff

.bar-graph {
  list-style: none;
}

.bar-wrap {
  width: $card-width;
  height: 20px;
  background-color: $progress-bar-color-background

}

.bar-fill {
  @include prefix(animation, bar-fill 1s);
  background-color: $progress-bar-color;
  display: block;
  height: 100%;

}

</style>
