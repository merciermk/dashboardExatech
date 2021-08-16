<template>
    <!-- Regular progress bar -->
    <div class="double-card"
    :class="numberShow === 0 ? 'doneMode' : ''"
    >
      <router-link
        :to="link"
        class="double-card-regular"
      >
      <!-- title -->
        <div class="card-title">
          <p class="card-title-text">{{ title.toUpperCase() }}</p>
         <hr class="card-title-line" />
        </div>
        <!-- Milieu de carte  -->
        <div class="card-middle">
        </div>
      </router-link>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class DoubleCardGraph extends Vue {
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
.double-card,
.doneMode{
  font-style: 'Product Sans';
}

.double-card:hover,
.duo-card-one:hover,
.duo-card-two:hover {
  box-shadow: 0px 0px 15px 3px rgba(128, 128, 128, 0.74);
}

</style>
