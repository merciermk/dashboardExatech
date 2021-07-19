<template>
  <div class="big-card">
    <font-awesome-icon :icon="cardIcon" class="big-card-icon" />
    <small-card
    v-for="(eachCard, index) in allCards" :key="index"
    class="small-card"
      :cardType="eachCard.cardType"
      :title="eachCard.title"
      :link="eachCard.link"

      :numberShow="eachCard.numberShow"
      :textShowSingular="eachCard.textShowSingular"
      :textShowPlural="eachCard.textShowPlural"
      :bottomText="eachCard.bottomText"
      :fractionNumber1="parseInt(eachCard.fractionNumber1)"
      :fractionNumber2="parseInt(eachCard.fractionNumber2)"

      :progressBar="parseInt(eachCard.numberForProgressBar)"

      :threeinformationsNumber1="parseInt(eachCard.information1Number)"
      :threeinformationsText1Singular="eachCard.information1TextSingular"
      :threeinformationsText1Plural="eachCard.information1TextPlural"

      :threeinformationsNumber2="parseInt(eachCard.information2Number)"
      :threeinformationsText2Singular="eachCard.information2TextSingular"
      :threeinformationsText2Plural="eachCard.information2TextPlural"

      :threeinformationsNumber3="parseInt(eachCard.information3Number)"
      :threeinformationsText3Singular="eachCard.information3TextSingular"
      :threeinformationsText3Plural="eachCard.information3TextPlural"
    ></small-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import SmallCard from '@/components/dashboardComp/SmallCard.vue'
import { threeInformationsCard, progressBarCard, regularCard } from '@/types/dashboard'
@Component({
  components: {
    SmallCard
  }
})
export default class BigCard extends Vue {
  @Prop() cardIcon!: string
  @Prop() allCards! : threeInformationsCard | progressBarCard | regularCard
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
.small-card{
  position: relative;
  z-index: 9999;
}
</style>
