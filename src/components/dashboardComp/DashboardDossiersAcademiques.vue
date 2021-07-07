<template>

     <div class="big-card">
      <font-awesome-icon icon="hand-holding-usd" class="big-card-icon" />
      <small-card :smallCardValues="smallCardValues">
      </small-card>
    </div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import SmallCard from '@/components/dashboardComp/SmallCard.vue'
import SmallCardPercentage from '@/components/dashboardComp/SmallCardPercentage.vue'
@Component({
  components: {
    SmallCard,
    SmallCardPercentage
  }
})

export default class DashboardDossierAcademiques extends Vue {
  smallCardValues = {
    titre: 'gestion des dossiers académiques'.toUpperCase(),
    cardIcon: 'hand-holding-usd',
    link: '/coucou',
    informations: [
      {
        textSingular: 'Contrat'.toUpperCase(),
        textPlural: 'Contrats'.toUpperCase(),
        numberToShow: 1,
        color: 'blue'
      },
      {
        textSingular: 'Intervenant manquant'.toUpperCase(),
        textPlural: 'intervenants manquants'.toUpperCase(),
        numberToShow: 2,
        color: 'rgba(127, 105, 224, 0.534)'
      },
      {
        textSingular: 'Intervenant manquant'.toUpperCase(),
        textPlural: 'intervenants manquants'.toUpperCase(),
        numberToShow: 2,
        color: 'red'
      }
    ]
  }

   smallCardValues2 = {
     titre: 'Lorem'.toUpperCase(),
     cardIcon: 'hand-holding-usd',
     link: '/coucou',
     informations: [
       {
         textSingular: 'ipsums'.toUpperCase(),
         textPlural: 'ipsum'.toUpperCase(),
         numberToShow: 17,
         color: 'orange'
       },
       {
         textSingular: 'Intervenant manquant'.toUpperCase(),
         textPlural: 'intervenants manquants'.toUpperCase(),
         numberToShow: 2,
         color: 'pink'
       },
       {
         textSingular: 'Intervenant manquant'.toUpperCase(),
         textPlural: 'intervenants manquants'.toUpperCase(),
         numberToShow: 2,
         color: 'orange'
       }
     ]
   }
}
</script>

<style lang="scss">

/* Variables */
$dashboard-margin-top: 5rem;
$dashboard-margin-left: 5rem;
$dashboard-margin-bottom: 20px;
$dashboard-margin-right: 20px;

.big-card-icon{
  z-index: 1;
  left: 10px;
  top: 20px;
  position: absolute;
  font-size: 200px;
  color: rgba(179, 175, 175, 0.13);
}

.big-card{
  border-radius: 10px;
  position: relative;
  padding-left: 5%;
  margin: 0 0px 20px auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: -5px 5px 15px rgba(173, 173, 173, 0.411);
  width: 100%;
  min-height: 350px;
}

</style>
