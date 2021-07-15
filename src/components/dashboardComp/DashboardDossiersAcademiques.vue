<template>
  <div class="big-card">
    <font-awesome-icon icon="hand-holding-usd" class="big-card-icon" />
    <small-card
    cardType="regular"
    titre="regular"
    :numberShow=number
    textShowSingular="Dossier Validé"
    textShowPlural="Dossiers Validés"
    link="hello"
    bottomText="25% des taches faites"
     ></small-card>

         <small-card
    cardType="progressbar"
    titre="ProgressBar"
    :numberShow=number
    textShowSingular="Dossier Validé"
    textShowPlural="Dossiers Validés"
    link="hello"
    :progressBar= parseInt(numberForProgressBar)
     ></small-card>

    <small-card
    cardType="progressbar"
    titre="ProgressBar"
    fractionNumber1= 142
    fractionNumber2= 752
    textShowSingular="Dossier Validé"
    textShowPlural="Dossiers Validés"
    link="hello"
    :progressBar= parseInt(numberForProgressBar)
     ></small-card>

     <small-card
    cardType="threeinformations"
    titre="ThreeInformationsCard"
    link="hello"
    threeinformationsNumber1="25"
    threeinformationsText1="Ceci est un chiffre"
        threeinformationsNumber2="25"
    threeinformationsText2="Ceci est un chiffre"
        threeinformationsNumber3="25"
    threeinformationsText3="Ceci est un chiffre"
     ></small-card>
    <hr class="big-card-separator">
  </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import SmallCard from '@/components/dashboardComp/SmallCard.vue'

@Component({
  components: {
    SmallCard
  }
})

export default class DashboardDossierAcademiques extends Vue {
  number = 1
  numberForProgressBar = '50%'
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
  border-radius: 10px;
  position: relative;
  padding-left: 5%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 350px;
}

</style>
