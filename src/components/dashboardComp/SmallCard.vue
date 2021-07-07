<template>
  <div class="small-card">
    <router-link to="">
        <div class="small-card-header">
        <font-awesome-icon :icon="smallCardValues.cardIcon" class="small-card-icon-one" />
        <h4 class="small-card-title">{{ smallCardValues.titre }}</h4>
      </div>
      <hr class="small-card-hr" />
      <div class="small-card-bottom">
        <div v-for="info,index in smallCardValues.informations" :key="index">
          <div class="information" :style="'color:' + info.color">
            <div class="small-card-bottom-decoration" :style="'background-color:' + info.color"></div>
            <p class="small-card-button-text" v-if="info.numberToShow <= 1"> {{ info.textSingular }}</p>
            <p class="small-card-button-text" v-else> {{ info.textPlural }}</p>
            <p class="small-card-button-number"> {{ info.numberToShow }}</p>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

interface SmallCard1 {
  titre: string,
  cardIcon: string,
  link: string
  informations: [
     info1 : {
    textSingular: string
    textPlural: string
    numberToShow : number
    color: string
  },
  info2? : {
    textSingular: string
    textPlural: string
    numberToShow : number
    color: string
  },
  info3?: {
    textSingular: string
    textPlural: string
    numberToShow : number
    color: string
  }
  ]

}

@Component({
  components: {}
})
export default class SmallCard extends Vue {
  @Prop() smallCardValues!: SmallCard1
}
</script>

<style lang="scss">
$small-card-color: rgba(156, 156, 158, 0.534);
$small-card-icon-size: 30px;
$small-card-width: 400px;
$small-card-height: 230px;

.small-card a,
.small-card a:hover,
.small-card:visited,
.small-card{
  color: $small-card-color;
  text-decoration: none;
}

.small-card:hover{
  box-shadow: -10px 10px 20px rgba(173, 173, 173, 0.411);
}

.small-card {
  z-index: 2;
  background-color: white;
  box-shadow: -5px 5px 15px rgba(173, 173, 173, 0.411);
  border-radius: 10px;
  margin: 10px;
  width: $small-card-width;
  height: $small-card-height;
}

.small-card-header{
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 35%;
}

.small-card-icon-one{
  margin: 15px;
  font-size: $small-card-icon-size;
}

.small-card-title{
  color: grey;
  font-size: 16px;
  flex: 1;
  text-align: center;
}

.small-card-hr{
  margin:20px auto 0 auto
}
.small-card-bottom{
  display: flex;
  flex-direction: row;
  justify-content: space-around
}

.small-card-bottom-decoration{
  width: 30px;
  height: 10px;
  margin: 0 auto 5px auto;
}

.information{
  min-width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.small-card-button-number{
  font-size: 30px;
  text-align: center;
}

.small-card-button-text{
   display: flex;
    height: 40px;
    width: 140px;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>
