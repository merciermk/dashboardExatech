<template>
    <!-- Duo card -->
     <div class="small-card-dual-card"
    >
    <router-link :to="linkFirstCard" class="duo-card duo-card-one"
     :class="numberShowFirstCard === 0 ? 'doneMode' : ''"
    >
      <div class="card-title">
      <p class="card-title-text">{{ titleFirstCard.toUpperCase() }}</p>
      <hr class="card-title-line" />
      </div>

       <div class="duo-card-middle" v-if="numberShowFirstCard">
          <p class="duo-card-middle-number">{{ numberShowFirstCard }}</p>
          <p class="duo-card-middle-text" v-if="numberShowFirstCard <= 1">
            {{ textShowSingularFirstCard}}
          </p>
          <p class="duo-card-middle-text" v-else>{{ textShowPluralFirstCard }}</p>
        </div>
         <div class="duo-card-middle duo-card-done" v-else>
            <font-awesome-icon icon="check" class="card-duo-middle-done-icon" />
        <div>
           <p class="card-middle-done-text">{{ doneFirstCard }}</p>
        </div>
        </div>
    </router-link>
    <!-- title -->
      <router-link :to="linkSecondCard" class="duo-card duo-card-two"
      :class="numberShowSecondCard === 0 ? 'doneMode' : ''"
      >
        <div class="card-title">
          <p class="card-title-text">{{ titleSecondCard.toUpperCase() }}</p>
         <hr class="card-title-line" />
        </div>
        <div class="duo-card-middle" v-if="numberShowSecondCard" >
          <p class="duo-card-middle-number">{{ numberShowSecondCard }}</p>
          <p class="duo-card-middle-text" v-if="numberShowSecondCard <= 1">
            {{ textShowSingularSecondCard }}
          </p>
          <p class="duo-card-middle-text" v-else> {{ textShowPluralSecondCard }}</p>
        </div>
        <div class="duo-card-middle duo-card-done" v-else>
            <font-awesome-icon icon="check" class="card-duo-middle-done-icon" />
        <div>
           <p class="card-middle-done-text">{{ doneSecondCard }}</p>
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
export default class SmallCardDuo extends Vue {
  /* DUO CARD */
@Prop() readonly titleFirstCard! : string | undefined
@Prop() readonly numberShowFirstCard! : number | undefined
@Prop() readonly textShowSingularFirstCard!: string | undefined
@Prop() readonly textShowPluralFirstCard!: string | undefined
@Prop() readonly linkFirstCard! : string

@Prop() readonly titleSecondCard! : string | undefined
@Prop() readonly numberShowSecondCard! : number | undefined
@Prop() readonly textShowSingularSecondCard!: string | undefined
@Prop() readonly textShowPluralSecondCard!: string | undefined
@Prop() readonly linkSecondCard! : string

@Prop() readonly doneFirstCard!: string | undefined
@Prop() readonly doneSecondCard!: string | undefined
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
/* Duo card */
.small-card-dual-card{
  width: $card-width;
  min-height: $card-height;
  max-height: $card-height;
  margin: 10px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
}
.duo-card{
  border-radius: 10px;
  height: 120px;
}

.duo-card-one{
  background-color: $small-card-background-color;
  box-shadow: 0px 0px 15px 3px rgba(128, 128, 128, 0.445);
}
.duo-card-two{
  background-color:$small-card-background-color;
  box-shadow: 0px 0px 15px 3px rgba(128, 128, 128, 0.445);
}

.duo-card-middle{
  width: $card-width;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.duo-card-middle-number{
  font-size: $font-size-number-duo-threeinfos;
  margin: 0;
}

</style>
