<template>
    <!-- Regular progress bar -->
    <div class="small-card" v-if="cardType.toUpperCase() === 'THREEINFORMATIONS'">
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
.small-card,
.small-card-dual-card a,
.small-card-dual-card a:visited,
.small-card-dual-card {
  color: $small-card-text-color;
  text-decoration: none;
}

.small-card:hover,
.duo-card-one:hover,
.duo-card-two:hover {
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
/* milieu carte de type threeInformation */

.three-informations{
  width: $card-width;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  height: 20px;

  &:first-child{
    color: $progress-bar-color
  }
}

.small-card-middle-threeinformations-number{
  width: 30%;
  font-size: $font-size-number-duo-threeinfos;
  color:  $small-card-text-color;
  text-align: right;
  padding-right: 10px;
}
.small-card-middle-threeinformations-text{
  width: 70%;
}

.card-bottom-hr {
  margin: 0;
  background-color: $progress-bar-color;
}

</style>
