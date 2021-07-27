<template>
  <div class="big-card">
    <font-awesome-icon :icon="cardIcon" class="big-card-icon" />
    <div v-for="(eachCard, index) in allCards" :key="index">
      <small-card-duo v-if="eachCard.cardType.toUpperCase() === 'DUOCARD'"
       class="small-card-dashboard"
        :titleFirstCard="eachCard.titleFirstCard"
        :numberShowFirstCard="eachCard.numberShowFirstCard"
        :textShowSingularFirstCard="eachCard.textShowSingularFirstCard"
        :textShowPluralFirstCard="eachCard.textShowPluralFirstCard"
        :titleSecondCard="eachCard.titleSecondCard"
        :numberShowSecondCard="eachCard.numberShowSecondCard"
        :textShowSingularSecondCard="eachCard.textShowSingularSecondCard"
        :textShowPluralSecondCard="eachCard.textShowPluralSecondCard"
        :doneFirstCard="eachCard.doneFirstCard.doneText"
        :doneSecondCard="eachCard.doneSecondCard.doneText"
      >
      </small-card-duo>

      <small-card-progress-bar v-if="eachCard.cardType.toUpperCase() === 'PROGRESSBAR'"
       class="small-card-dashboard"
        :cardType="eachCard.cardType"
        :title="eachCard.title"
        :link="eachCard.link"
        :fractionNumber1="parseInt(eachCard.fractionNumber1)"
        :fractionNumber2="parseInt(eachCard.fractionNumber2)"
         :textShowSingular="eachCard.textShowSingular"
        :textShowPlural="eachCard.textShowPlural"
        :doneText="eachCard.done.doneText"
      > </small-card-progress-bar>

      <small-card-regular v-if="eachCard.cardType.toUpperCase() === 'REGULAR'"
       class="small-card-dashboard"
        :title="eachCard.title"
        :link="eachCard.link"
        :numberShow="parseInt(eachCard.numberShow)"
        :textShowSingular="eachCard.textShowSingular"
        :textShowPlural="eachCard.textShowPlural"
        :bottomText="eachCard.bottomText"
        :doneText="eachCard.done.doneText"
        :doneBottomText="eachCard.done.doneBottomText"
      > </small-card-regular>

      <small-card-three-informations v-if="eachCard.cardType.toUpperCase() === 'THREEINFORMATIONS'"
            class="small-card-dashboard"
        :cardType="eachCard.cardType"
        :title="eachCard.title"
        :link="eachCard.link"
        :threeinformationsNumber1="parseInt(eachCard.information1Number)"
        :threeinformationsText1Singular="eachCard.information1TextSingular"
        :threeinformationsText1Plural="eachCard.information1TextPlural"

        :threeinformationsNumber2="parseInt(eachCard.information2Number)"
        :threeinformationsText2Singular="eachCard.information2TextSingular"
        :threeinformationsText2Plural="eachCard.information2TextPlural"

        :threeinformationsNumber3="parseInt(eachCard.information3Number)"
        :threeinformationsText3Singular="eachCard.information3TextSingular"
        :threeinformationsText3Plural="eachCard.information3TextPlural"
      >
      </small-card-three-informations>

          <small-card-graph v-if="eachCard.cardType.toUpperCase() === 'GRAPHCARD'"
    class="small-card-dashboard"
    :title="eachCard.title"
        :link="eachCard.link"
        :numberShow="parseInt(eachCard.numberShow)"
        :textShowSingular="eachCard.textShowSingular"
        :textShowPlural="eachCard.textShowPlural"
        :bottomText="eachCard.bottomText"

        :doneText="eachCard.done.doneText"
        :graphNumber1="eachCard.done.graphNumber1"
        :graphNumber2="eachCard.done.graphNumber2"
        :graphText1="eachCard.done.graphText1"
        :graphText2="eachCard.done.graphText2"

    ></small-card-graph>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SmallCardDuo from '@/components/dashboardComp/SmallCardDuo.vue'
import SmallCardProgressBar from '@/components/dashboardComp/SmallCardProgressBar.vue'
import SmallCardRegular from '@/components/dashboardComp/SmallCardRegular.vue'
import SmallCardThreeInformations from '@/components/dashboardComp/SmallCardThreeInformations.vue'
import SmallCardGraph from '@/components/dashboardComp/SmallCardGraph.vue'
import {
  SmallCardThreeInformationsInterface,
  SmallCardProgressBarInterface,
  SmallCardRegularInterface,
  SmallCardDuoCardInterface
} from '@/types/dashboard'

@Component({
  components: {
    SmallCardDuo,
    SmallCardProgressBar,
    SmallCardRegular,
    SmallCardThreeInformations,
    SmallCardGraph
  }
})
export default class BigCard extends Vue {
  @Prop() cardIcon!: string;
  @Prop() allCards!: SmallCardThreeInformationsInterface | SmallCardProgressBarInterface | SmallCardRegularInterface | SmallCardDuoCardInterface;
}
</script>

<style lang="scss">
/* Variables */
$dashboard-margin-top: 5rem;
$dashboard-margin-left: 5rem;
$dashboard-margin-bottom: 20px;
$dashboard-margin-right: 20px;

.big-card-icon {
  z-index: 1;
  right: 10px;
  top: 20px;
  position: absolute;
  font-size: 200px;
  color: rgba(179, 175, 175, 0.13);
}

.big-card {
  position: relative;
  border-radius: 10px;
  padding-left: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 300px;
}
.small-card-dashboard {
  position: relative;
  z-index: 9999;
}
</style>
