<template>
  <div class="small-card">
    <!-- Regular and progress bar -->
    <router-link
      :to="link"
      class="small-card-regular"
      v-if="
        cardType.toUpperCase() === 'REGULAR'
      "
    >
    <!-- title -->
      <div class="card-title">
        <p class="card-title-text">{{ title.toUpperCase() }}</p>
       <hr class="card-title-line" />
      </div>
      <!-- Milieu de carte  -->
      <!-- Milieu carte pour regular -->
      <div class="card-middle" v-if="numberShow">
        <p class="card-middle-number">{{ numberShow }}</p>
        <p class="card-middle-text" v-if="numberShow === 1">
          {{ textShowSingular }}
        </p>
        <p class="card-middle-text" v-else>{{ textShowPlural }}</p>
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
      </div>
    </router-link>

  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class SmallCardRegular extends Vue {
  /* Communes a toutes les cartes */
  @Prop() readonly cardType!: string; // type de carte
  @Prop() readonly title!: string;
  @Prop() readonly textShowSingular!: string | undefined;
  @Prop() readonly textShowPlural!: string | undefined;
  @Prop() readonly link!: string;
  @Prop() readonly numberShow!: number | undefined

  @Prop() readonly bottomText!: string | undefined;
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
  background-color: $progress-bar-color;
}

</style>
