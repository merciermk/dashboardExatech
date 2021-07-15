<template>
  <div class="small-card">
    <router-link :to="link">
      <div class="card-title">
        <p class="card-title-text">{{ titre.toUpperCase() }}</p>
        <hr class="card-title-line">
      </div>
      <div class="card-middle">
          <p class="card-middle-number">{{ numberShow }}</p>
          <p class="card-middle-text">{{ textShow }}</p>
      </div>
      <div class="card-bottom">
        <p class="card-bottom-text" v-if="bottomText">
          {{ bottomText }}
        </p>
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
@Prop(String) readonly titre!: string
@Prop(Number) readonly numberShow!: number
@Prop() readonly textShow!: string
@Prop() readonly link!: string
}
</script>

<style lang="scss">
$card-width: 200px;
$card-height: 200px;
$middle-number-size: 50px;

.small-card{
  width: $card-width;
  min-height: $card-height;
  max-height: $card-height;
  box-shadow: 0px 0px 15px rgba(128, 128, 128, 0.445);
  margin: 10px 10px 10px 10px;
  border-radius: 15px;
  overflow: hidden
}
.small-card a,
.small-card a:visited,
.small-card a:hover{
  color: grey;
  text-decoration: none;
}

/* Titre carte */
.card-title{
  padding: 2px 5px 0px 5px;
  height: 32px;
  max-height: 32px;
  font-size: 14px;
  text-align: center;
}
.card-title-line{
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.card-title-text{
  margin: 0;
}

/* Milieu de la carte */
.card-middle{
  text-align: center;
  min-height: 124px;
  max-height: 124px;
  overflow: hidden;
}
.card-middle-number{
  font-size: $middle-number-size;
}

/* pied de la carte */
.card-bottom{
  background-color: indigo;
  height: 44px
}
</style>
