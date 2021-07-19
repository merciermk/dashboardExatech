<template>
  <div class="small-card">
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
      <div class="card-title">
        <p class="card-title-text">{{ title.toUpperCase() }}</p>
       <hr class="card-title-line" />
      </div>
      <!-- Milieu de carte  -->
      <!-- Milieu carte pour regular / progressBar -->
      <div class="card-middle" v-if="fractionNumber1 || numberShow">
        <p class="card-middle-number">{{ numberShow }}</p>
        <p class="card-middle-number" v-if="fractionNumber1 && !numberShow">{{ fractionNumber1 }}/{{ fractionNumber2 }}</p>
        <p class="card-middle-text" v-if="numberShow === 1 || fractionNumber1 === 1">
          {{ textShowSingular }}
        </p>
        <p class="card-middle-text" v-else>{{ textShowPlural }}</p>
      </div>
      <!-- Milieu carte pour threeinformations -->
      <div class="card-middle card-middle-three-informations" v-if="cardType.toUpperCase() === 'THREEINFORMATIONS'">
        <div class="three-informations">
          <p class="small-card-middle-threeinformations-number">
          {{ threeinformationsNumber1 }}</p>
          <p class="small-card-middle-threeinformations-text"> {{threeinformationsText1Singular }}</p>
        </div>
        <div class="three-informations">
          <p class="small-card-middle-threeinformations-number">{{ threeinformationsNumber2 }}</p>
          <p class="small-card-middle-threeinformations-text">  {{threeinformationsText2Singular }}</p>
        </div>
        <div class="three-informations">
          <p class="small-card-middle-threeinformations-number">{{ threeinformationsNumber3 }}</p>
          <p class="small-card-middle-threeinformations-text"> {{threeinformationsText3Singular }}</p>

        </div>
      </div>
      <!-- Bas de la carte -->
      <!-- REGULAR -->
      <div class="card-bottom" v-if="bottomText && cardType.toUpperCase() === 'REGULAR'">
        <!-- carte avec texte en bottom -->
        <div
          class="card-bottom-text"
        >
          <hr class="card-bottom-hr" />
          <p>{{ bottomText }}</p>
        </div>
        <!-- Progress bar -->
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

  /* ****************** */
  /* Milieu de la carte */
  /* ****************** */
  /* ThreeInformationsCard */
  @Prop() readonly threeinformationsNumber1!: number | undefined
  @Prop() readonly threeinformationsText1Singular!: string | undefined
  @Prop() readonly threeinformationsText1Plural!: string | undefined

  @Prop() readonly threeinformationsNumber2!: number | undefined
  @Prop() readonly threeinformationsText2Singular!: string | undefined
  @Prop() readonly threeinformationsText2Plural!: string | undefined

  @Prop() readonly threeinformationsNumber3!: number | undefined
  @Prop() readonly threeinformationsText3Singular!: string | undefined
  @Prop() readonly threeinformationsText3Plural!: string | undefined

  /* Affichage un seul chiffre */
  @Prop() readonly numberShow!: number | undefined
  /* Fraction type */
  @Prop() readonly fractionNumber1! : number | undefined
  @Prop() readonly fractionNumber2! : number | undefined

  /* ************ */
  /* Bottom carte */
  /* ************ */
  /* regular card */
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
$small-card-hr-color: #585F60;
 $small-card-title-height: 36px;

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
.small-card a:hover {
  color: $small-card-text-color;
  text-decoration: none;
}

/* title carte */
.card-title {
  position: absolute;
  width: 100%;
  margin: 0 !important;
  line-height: 1rem;
  min-height: $small-card-title-height;

  font-size: $font-size;
}
.card-title-line {
  width: 100%;
  margin: 0;
  min-height: 3px;
  color: $small-card-hr-color
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
/* milieu carte de type threeInformation */

.three-informations{
  width: 250px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  min-height: 40px;
  padding-left: 30px;
  padding-top: 40px;

  &:first-child{
    color: $progress-bar-color
  }
}

.small-card-middle-threeinformations-number{
  width: 30%;
  font-size: 25px;
  color:  $small-card-text-color;
  text-align: right;
  padding-right: 10px;
}
.small-card-middle-threeinformations-text{
  padding-left: 10px;
}

/* pied de la carte */
.card-bottom {
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

.card-bottom-hr {
  margin: 0;
}

/* progress bar */
/* Pied de carte progressBar */
.card-bottom-progress-bar {
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
  height: 30px;
  background-color: $progress-bar-color-background

}

.bar-fill {
  @include prefix(animation, bar-fill 1s);
  background-color: $progress-bar-color;
  display: block;
  height: 100%;

}

</style>
