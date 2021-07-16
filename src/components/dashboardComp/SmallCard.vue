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
    <!-- Titre -->
      <div class="card-title">
        <p class="card-title-text">{{ titre.toUpperCase() }}</p>
      </div>
       <hr class="card-title-line" />
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
          <p class="small-card-middle-threeinformations-text"> <span class="small-card-middle-threeinformations-number">
          {{ threeinformationsNumber1 }}</span> {{threeinformationsText1Singular }}</p>
        </div>
        <div class="three-informations">
          <p class="small-card-middle-threeinformations-text"> <span class="small-card-middle-threeinformations-number">{{ threeinformationsNumber2 }}</span> {{threeinformationsText2Singular }}</p>
        </div>
        <div class="three-informations">
          <p class="small-card-middle-threeinformations-text"> <span class="small-card-middle-threeinformations-number">{{ threeinformationsNumber3 }}</span> {{threeinformationsText3Singular }}</p>

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
      <div class="card-bottom-progress-bar">
        <div
          class="card-bottom-progress-bar"
          v-if="cardType.toUpperCase() === 'PROGRESSBAR'"
        >
         <div class="bar-wrap">
           <span class="bar-fill"  :style="'width:' + progressBar + '%;'"></span>
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
  @Prop() readonly titre!: string;
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

/* Titre carte */
.card-title {
  margin: 0 !important;
  display:flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 1rem;
  min-height: 35px;
  max-height: 35px;
  font-size: $font-size;
  text-align: center;
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
  padding: 0 5px 0 5px;
}

/* Milieu de la carte */
.card-middle {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  min-height: 170px;
  max-height: 170px;
  overflow: hidden;
}
.card-middle-number {
  margin: 0;
  font-size: $middle-number-size;
}
/* milieu carte de type threeInformation */
.three-informations{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  height: 40px;
  &:first-child{
    color: $progress-bar-color
  }
}
.card-middle-three-informations{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.small-card-middle-threeinformations-number{
  text-align: right;
  width: 80px;
  font-size: 25px;
  color:  $small-card-text-color;
  padding-right: 10px;
  margin: 0 0 0 0
}
.small-card-middle-threeinformations-text{
  padding-top: 30px;
  padding-left: 25px;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}

/* pied de la carte */
.card-bottom {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

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
