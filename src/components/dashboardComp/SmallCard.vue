<template>
  <router-link
        :to="link">
    <!-- Regular progress bar -->
    <div class="small-card" v-if="
          cardType.toUpperCase() === 'REGULAR' ||
          cardType.toUpperCase() === 'PROGRESSBAR' ||
          cardType.toUpperCase() === 'THREEINFORMATIONS'
        ">
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
        <div class="card-middle" v-if="fractionNumber1 || numberShow">
          <p class="card-middle-number">{{ numberShow }}</p>
          <p class="card-middle-number" v-if="fractionNumber1 && !numberShow">{{ fractionNumber1 }}/{{ fractionNumber2 }}</p>
          <p class="card-middle-text" v-if="numberShow === 1 || fractionNumber1 === 1">
            {{ textShowSingular }}
          </p>
          <p class="card-middle-text" v-else>{{ textShowPlural }}</p>
        </div>
        <!-- Milieu carte pour threeinformations -->
        <div class="card-middle" v-if="cardType.toUpperCase() === 'THREEINFORMATIONS'">
          <div class="three-informations">
            <p class="small-card-middle-threeinformations-number">
            {{ threeinformationsNumber1 }}</p>
                   <p v-if="threeinformationsNumber1 <= 1" class="small-card-middle-threeinformations-text">  {{ threeinformationsText1Singular }}</p>
             <p v-else class="small-card-middle-threeinformations-text">  {{ threeinformationsText1Plural }}</p>
          </div>
          <div class="three-informations">
            <p class="small-card-middle-threeinformations-number">{{ threeinformationsNumber2 }}</p>
            <p v-if="threeinformationsNumber2 <= 1" class="small-card-middle-threeinformations-text">  {{ threeinformationsText2Singular }}</p>
             <p v-else class="small-card-middle-threeinformations-text">  {{ threeinformationsText2Plural }}</p>
          </div>
          <div v-if="threeinformationsNumber3" class="three-informations">
            <p class="small-card-middle-threeinformations-number">{{ threeinformationsNumber3 }}</p>
                   <p v-if="threeinformationsNumber3 <= 1" class="small-card-middle-threeinformations-text">  {{ threeinformationsText3Singular }}</p>
             <p v-else class="small-card-middle-threeinformations-text">  {{ threeinformationsText3Plural }}</p>
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

    <!-- Duo card -->
     <div class="small-card-dual-card"
      v-if="
        cardType.toUpperCase() === 'DUOCARD'
      "
    >
    <router-link to="" class="duo-card duo-card-one">
      <div class="card-title">
      <p class="card-title-text">{{ titleFirstCard.toUpperCase() }}</p>
      <hr class="card-title-line" />
      </div>

       <div class="duo-card-middle" >
          <p class="duo-card-middle-number">{{ numberShowFirstCard }}</p>
          <p class="duo-card-middle-text" v-if="numberShow <= 1 || fractionNumber1 <= 1">
            {{ textShowSingularFirstCard}}
          </p>
          <p class="duo-card-middle-text" v-else>{{ textShowPluralFirstCard }}</p>
        </div>
    </router-link>
    <!-- title -->
      <router-link to="" class="duo-card duo-card-two">
        <div class="card-title">
          <p class="card-title-text">{{ titleSecondCard.toUpperCase() }}</p>
         <hr class="card-title-line" />
        </div>
        <div class="duo-card-middle" >
          <p class="duo-card-middle-number">{{ numberShowSecondCard }}</p>
          <p class="duo-card-middle-text" v-if="numberShowSecondCard <= 1">
            {{ textShowSingularSecondCard }}
          </p>
          <p class="duo-card-middle-text" v-else> {{ textShowPluralSecondCard }}</p>
        </div>
      </router-link>
    </div>

  </router-link>
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

  /* DUO CARD */
@Prop() readonly titleFirstCard! : string | undefined
@Prop() readonly numberShowFirstCard! : number | undefined
@Prop() readonly textShowSingularFirstCard!: string | undefined
@Prop() readonly textShowPluralFirstCard!: string | undefined

@Prop() readonly titleSecondCard! : string | undefined
@Prop() readonly numberShowSecondCard! : number | undefined
@Prop() readonly textShowSingularSecondCard!: string | undefined
@Prop() readonly textShowPluralSecondCard!: string | undefined
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
</style>
