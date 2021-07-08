<template>
  <div class="small-card">
    <router-link to="">
      <div class="small-card-header">
        <font-awesome-icon
          :icon="smallCardValues.cardIcon"
          class="small-card-icon-one"
        />
        <h3 class="small-card-title">
          {{ smallCardValues.titre.toUpperCase() }}
        </h3>
      </div>
      <div class="small-card-middle">
        <!-- Logique regular card -->
          <div class="small-card-bottom"
       v-if="smallCardValues.typeOfCard.toUpperCase() === 'REGULAR'"
      >

        <div v-for="(info, index) in smallCardValues.informations" :key="index"
        class= "information">
          <hr class="small-card-hr" />
          <!-- Logique regular -->
               <div
              class="small-card-bottom-decoration"
              :style="'background-color:' + info.color"
            ></div>
          <div
            class="small-card-bottom-text-container"
            :style="'color:' + info.color"
          >
            <p class="small-card-button-text" v-if="info.numberToShow <= 1">
              {{ info.textSingular }}
            </p>
            <p class="small-card-button-text" v-else>{{ info.textPlural }}</p>
            <p class="small-card-button-number">{{ info.numberToShow }}</p>
          </div>
        </div>
      </div>
           <!-- Logique percentage card -->
      <div class="small-card-bottom-percentage"
      v-if="smallCardValues.typeOfCard === 'percentage'"
      >
       <hr class="small-card-hr" />
      <div class="small-card-percentage-container">
        <div
          class="small-card-percentage"
        >
        <h4>{{smallCardValues.percentageToShow}} %</h4>
          <div class="meter">
            <span :style="percentage"><span class="progress"></span></span>
          </div>
        </div>
      </div>

        <div v-for="(info, index) in smallCardValues.informations" :key="index">
          <div
            class="information"
            :style="'color:' + info.color"
          >
            <p class="small-card-button-text" v-if="info.numberToShow <= 1">
              {{ info.textSingular.toUpperCase() }}
            </p>
            <p class="small-card-button-text" v-else>{{ info.textPlural.toUpperCase() }}</p>
            <p class="small-card-button-number">{{ info.numberToShow }}</p>
          </div>
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
  link: string,
  typeOfCard: string, // regular, percentage
  percentageToShow?: number
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
  percentage = 'width:' + this.smallCardValues.percentageToShow + '%'
}
</script>

<style lang="scss">
$small-card-color: rgba(156, 156, 158, 0.534);
$small-card-icon-size: 50px;
$small-card-width: 450px;
$small-card-height: 300px;
$small-card-number-size: 30px;

.small-card a,
.small-card a:hover,
.small-card:visited,
.small-card {
  color: $small-card-color;
  text-decoration: none;
}

.small-card:hover {
  box-shadow: -10px 10px 20px rgba(173, 173, 173, 0.411);
}

.small-card {
  z-index: 150;
  background-color: white;
  box-shadow: -5px 5px 15px rgba(173, 173, 173, 0.411);
  border-radius: 10px;
  margin: 10px;
  width: $small-card-width;
  height: $small-card-height;
  overflow: hidden;
}

.small-card-header {
  min-height: 33%;
  max-height: 33%;
}

.small-card-icon-one {
  color: #EEF0F4;
  position: absolute;
  margin: 15px;
  font-size: $small-card-icon-size;
}

.small-card-title {
  display: block;
  position: relative;
  color: #909090;
  text-align: center;
    font-size: 18px;
  font-style: bold;
  padding-top: 40px;
}

.small-card-bottom {
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow: hidden;

}

.small-card-bottom-decoration {
  width: 30px;
  height: 10px;
  margin: 0 auto 5px auto;
}

.information {
  margin-top: 40px;
  min-width: 130px;
  max-width: 130px;
  display: flex;
  flex-direction: column;
}

.small-card-button-number {
  min-height: 45px;
  font-size: $small-card-number-size;
  text-align: center;
}

.small-card-button-text {
  margin-bottom: 0px;
  min-height: 45px;
  text-align: center;
  width: 100%;
  font-size: 12px;

}

/* Progress Bar */
.meter {
  height: 15px;
  position: relative;
  background: #d8d6d6cc;
  overflow: hidden;
}

.meter span {
  display: block;
  height: 100%;
}

@keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

@-moz-keyframes progressBar {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.small-card-percentage-container{
    width: 100%;
  height: 15px;
    display: flex;
  justify-content: center;

}

.small-card-percentage {
  width: 80%;
  height: 25px;
  h4{
    text-align: center;
  }
}

.progress {
  background: #3f9eec !important;
  animation: progressBar 3s ease-in-out;
  -webkit-animation: progressBar 3s ease-in-out;
  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;
  -moz-animation: progressBar 3s ease-in-out;
  -moz-animation-fill-mode: both;
}
.small-card-bottom-percentage{
  margin-bottom: 0;
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  height: 200px;
}

</style>
