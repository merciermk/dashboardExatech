<template>
  <div class="big-card">
    <font-awesome-icon :icon="cardIcon" class="big-card-icon" />

<!--     <small-card
      cardType="regular"
      title="regular regular regular regular"
      :numberShow="number"
      textShowSingular="Dossier Validé"
      textShowPlural="Dossiers Validés"
      link="hello"
      bottomText="25% des taches faites"
    ></small-card> -->

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
import { Vue, Component } from 'vue-property-decorator'
import SmallCard from '@/components/dashboardComp/SmallCard.vue'

 interface threeInformationCard{
      cardType: string // threeInformation
      title: string
      link: string

      information1Number: number
      information1TextSingular:string
      information1TextPlural: string

      information2Number: number
      information2TextSingular: string
      information2TextPlural: string

      information3Number: number
      information3TextSingular: string
      information3TextPlural: string
 }

 interface progressBarCard{
     cardType: string // progressBar
      title: string
      fractionNumber1: number
      fractionNumber2: number
      textShowSingular: string
      textShowPlural: string
      link: string
 }

 interface regularCard{
   cardType: string //
      title: string
      numberShow: number
      textShowSingular: string
      textShowPlural: string
      link: string
      bottomText: string | undefined
 }

@Component({
  components: {
    SmallCard
  }
})
export default class DashboardDossierAcademiques extends Vue {
  number = 1;
  numberForProgressBar = '10%';
  cardIcon = 'hand-holding-usd'
  allCards = [
    {
      cardType: 'threeInformations', // threeInformation
      title: 'title',
      link: 'coucou',

      information1Number: 1,
      information1TextSingular: 'texte num 1',
      information1TextPlural: 'texte pluriel',

      information2Number: 856,
      information2TextSingular: 'test de interface',
      information2TextPlural: 'test de interface',

      information3Number: 1542,
      information3TextSingular: 'info',
      information3TextPlural: 'infos'
    },
    {
      cardType: 'PROGRESSBAR',
      title: 'progressBar',
      fractionNumber1: 2,
      fractionNumber2: 5,
      textShowSingular: 'coucou',
      textShowPlural: 'coucous',
      link: '/coucou'
    },
    {
      cardType: 'regular',
      title: 'regular',
      numberShow: 15,
      textShowSingular: 'Dossier Validé',
      textShowPlural: 'Dossiers Validés',
      link: 'hello'
    },
    {
      cardType: 'regular',
      title: 'regular with bottom text and long title',
      numberShow: 15,
      textShowSingular: 'Dossier Validé',
      textShowPlural: 'Dossiers Validés',
      link: 'hello',
      bottomText: '25% des taches faites'
    }
  ]
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
