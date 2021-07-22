<template>
  <div>
    <!-- Regular progress bar -->
    <div class="small-card" v-if="
          cardType.toUpperCase() === 'PROGRESSBAR'
        "
         :class="fractionNumber1 === fractionNumber2 ? 'doneMode' : ''"
        >
      <router-link
        :to="link"
        class="small-card-regular"
      >
      <!-- title -->
        <div class="card-title">
          <p class="card-title-text">{{ title.toUpperCase() }}</p>
         <hr class="card-title-line" />
        </div>
        <!-- Milieu de carte  -->
        <!-- Milieu carte pour regular / progressBar -->
        <div class="card-middle" v-if="fractionNumber1 && fractionNumber1 != fractionNumber2">
          <p class="card-middle-number" v-if="fractionNumber1">{{ fractionNumber1 }}/{{ fractionNumber2 }}</p>
          <p class="card-middle-text" v-if="fractionNumber1 <= 1">
            {{ textShowSingular }}
          </p>
          <p class="card-middle-text" v-else>{{ textShowPlural }}</p>
        </div>
        <div class="card-middle" v-if="fractionNumber1 === fractionNumber2">
                 <font-awesome-icon icon="check" class="card-middle-done-icon" />
        <div>
           <p class="card-middle-done-text">{{ doneText }}</p>
        </div>
        </div>
        <!-- bottom avec progress-bar -->
        <div class="card-bottom-progress-bar" v-if="cardType.toUpperCase() === 'PROGRESSBAR'">
          <div
            class="card-bottom-progress-bar"
          >
           <div class="bar-wrap">
             <span class="bar-fill"  :style="'width:' + percentageCalculation (fractionNumber1, fractionNumber2) + '%;'"></span>
          </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class SmallCardProgressBar extends Vue {
  /* Communes a toutes les cartes */
  @Prop() readonly cardType!: string; // type de carte
  @Prop() readonly title!: string;
  @Prop() readonly textShowSingular!: string;
  @Prop() readonly textShowPlural!: string | undefined;
  @Prop() readonly link!: string;

  @Prop() readonly fractionNumber1! : number
  @Prop() readonly fractionNumber2! : number

  @Prop() readonly doneText!: string

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
.small-card{
  font-style: 'Product Sans';
}

$card-width: 250px;
$card-height: 250px;
$middle-number-size: 42px;
$font-size: 14px;
$small-card-background-color: #5F6b6d;
$progress-bar-color: #6bbeb7;
$progress-bar-color-background: #F6f7fa;
$small-card-text-color: #FFFFFF;
$small-card-hr-color: #293F41;
 $small-card-title-height: 36px;
 $font-size-number-duo-threeinfos: 25px;

.small-card {
  background-color: $small-card-background-color;
  width: $card-width;
  min-height: $card-height;
  max-height: $card-height;
  box-shadow: 0px 0px 15px rgba(128, 128, 128, 0.445);
  margin: 10px 10px 10px 10px;
  border-radius: 15px;
  overflow: hidden;
}
.small-card a,
.small-card a:visited,
.small-card
{
  color: $small-card-text-color;
  text-decoration: none;
}

.small-card:hover
 {
  box-shadow: 0px 0px 15px 3px rgba(128, 128, 128, 0.74);
}

/* title carte */
.card-title {
  padding-top: 1px;
  position: absolute;
  width: $card-width;
  margin: 0 !important;
  line-height: 1rem;
  min-height: $small-card-title-height;

  font-size: $font-size;
}
.card-title-line {
  position: absolute;
  top: $small-card-title-height;
  left: 10px;
  width: 230px !important;
  min-height: 1px;
  margin: auto !important;
  background-color: $small-card-hr-color;
}
.card-title-text {
  text-align: center;
  margin: 0;
  padding: 10px 5px 5px 5px;
}

/* Milieu de la carte */
.card-middle {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  min-height: 170px +  $small-card-title-height;
  max-height: 170px +  $small-card-title-height;
  overflow: hidden;
}
.card-middle-number {
  margin: 0;
  font-size: $middle-number-size;
}
/* progress bar */
/* Pied de carte progressBar */
.card-bottom-progress-bar {
  padding-top: 12px;
  min-height: 100%;
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
