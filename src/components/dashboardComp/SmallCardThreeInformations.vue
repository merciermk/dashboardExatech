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
          <div v-if="threeinformationsNumber3 || threeinformationsNumber3 === 0" class="three-informations">
            <p class="small-card-middle-threeinformations-number">{{ threeinformationsNumber3 }}</p>
                   <p v-if="threeinformationsNumber3 <= 1" class="small-card-middle-threeinformations-text">  {{ threeinformationsText3Singular }}</p>
             <p v-else class="small-card-middle-threeinformations-text">  {{ threeinformationsText3Plural }}</p>
          </div>
        </div>
        <div class='nothing'></div>
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
@import './dashboardGlobalStyle.scss';

@font-face {
    font-family: 'Product Sans';
    src:url("../../fonts/ProductSans-Regular.ttf");
}
.small-card{
  font-style: 'Product Sans';
}

// Utilisé pour rendre la fin de la card cliquable
.nothing{
  height: 50px;
  width: 100%
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
