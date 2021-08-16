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
@import './dashboardGlobalStyle.scss';

@font-face {
    font-family: 'Product Sans';
    src:url("../../fonts/ProductSans-Regular.ttf");
}
.small-card{
  font-style: 'Product Sans';
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
