<template>
  <div class="small-card">
    <router-link to="">
      <div class="small-card-header">
        <font-awesome-icon
          :icon="smallCardValues.cardIcon"
          class="small-card-icon-one"
        />
        <h4 class="small-card-title">
          {{ smallCardValues.titre.toUpperCase() }}
        </h4>
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
            class=""
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
        <h4>{{smallCardValues.percentageT}}</h4>
          <div class="meter">
            <span style="width:50%;"><span class="progress"></span></span>
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
interface SmallCardPercentageInterface {
  titre: string,
  cardIcon: string,
  link: string,
  percentageToShow?: number
  informations: [
     info1 : {
    textSingular: string
    textPlural: string
    numberToShow : number | string
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
  progressBarLoaded = 'width:50%'
  created () {
    if (this.smallCardValues.percentageToShow) {
      this.progressBarLoaded = 'width:' + this.smallCardValues.percentageToShow + '%'
    }
  }
}
</script>

<style lang="scss">
$small-card-color: rgba(156, 156, 158, 0.534);
$small-card-icon-size: 30px;
$small-card-width: 400px;
$small-card-height: 230px;
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
  font-size: 12px;
  z-index: 2;
  background-color: white;
  box-shadow: -5px 5px 15px rgba(173, 173, 173, 0.411);
  border-radius: 10px;
  margin: 10px;
  width: $small-card-width;
  height: $small-card-height;
  overflow: hidden;
}

.small-card-header {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  min-height: 33%;
  max-height: 33%;
}

.small-card-icon-one {
  margin: 15px;
  font-size: $small-card-icon-size;
}

.small-card-title {
  color: grey;
  font-size: 16px;
  flex: 1;
  text-align: center;
}

.small-card-bottom {
  display: flex;
  flex-direction: row;
  overflow: hidden;

}

.small-card-bottom-decoration {
  width: 30px;
  height: 10px;
  margin: 0 auto 5px auto;
}

.information {
  min-width: 130px;
  max-width: 130px;
  display: flex;
  flex-direction: column;
}

.small-card-button-number {
  font-size: $small-card-number-size;
  text-align: center;
}

.small-card-button-text {
  text-align: center;
  width: 100%;

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
  height: 5px;
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
}
</style>
