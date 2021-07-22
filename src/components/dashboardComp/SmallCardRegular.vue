<template>
    <!-- Regular progress bar -->
    <div class="small-card"
    :class="numberShow === 0 ? 'doneMode' : ''"
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
        <div class="card-middle" v-if="numberShow">
          <p class="card-middle-number">{{ numberShow }}</p>
          <p class="card-middle-text" v-if="numberShow <= 1">
            {{ textShowSingular }}
          </p>
          <p class="card-middle-text" v-else>{{ textShowPlural }}</p>
        </div>

        <!-- Activation de la carte doneCard -->
        <div class="card-middle" v-else>
           <font-awesome-icon icon="check" class="card-middle-done-icon" />
        <div>
           <p class="card-middle-done-text">{{ doneText }}</p>
        </div>
        </div>
        <!-- Bas de la carte -->
        <div class="card-bottom" v-if="bottomText">
          <!-- carte avec texte en bottom -->
          <div
            class="card-bottom-text"
          >
            <hr class="card-bottom-hr" />
            <p v-if="bottomText && numberShow">{{ bottomText }}</p>
            <p v-if="doneBottomText && numberShow === 0">{{ doneBottomText }}</p>
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
  @Prop() readonly textShowSingular!: string
  @Prop() readonly textShowPlural!: string | undefined;
  @Prop() readonly link!: string;
  @Prop() readonly doneText!: string;
  @Prop() readonly doneBottomText!: string | undefined

  /* ****************** */
  /* Milieu de la carte */
  /* ****************** */
  /* Affichage un seul chiffre */
  @Prop() readonly numberShow!: number | undefined

  /* ************ */
  /* Bottom carte */
  /* ************ */
  /* regular card */
  @Prop() readonly bottomText!: string | undefined;
}
</script>

<style lang="scss">
@import './dashboardGlobalStyle.scss';
@font-face {
    font-family: 'Product Sans';
    src:url("../../fonts/ProductSans-Regular.ttf");
}
.small-card,
.doneMode{
  font-style: 'Product Sans';
}

.small-card:hover,
.duo-card-one:hover,
.duo-card-two:hover {
  box-shadow: 0px 0px 15px 3px rgba(128, 128, 128, 0.74);
}

/* title carte */

</style>
