<template>
  <div class="big-card">
    <font-awesome-icon icon="hand-holding-usd" class="big-card-icon" />
    <small-card :smallCardValues="gestionDesDossiersAcademiques"></small-card>
    <small-card :smallCardValues="selectionDesIntervenants"></small-card>
    <small-card :smallCardValues="selectionDesIntervenants2"></small-card>
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
  gestionDesDossiersAcademiques = {
    titre: 'gestion des dossiers académiques'.toUpperCase(),
    cardIcon: 'hand-holding-usd',
    link: '/dossiers_academiques',
    typeOfCard: 'regular',
    informations: [
      {
        textSingular: 'Dossier publié'.toUpperCase(),
        textPlural: 'Dossiers publiés'.toUpperCase(),
        numberToShow: 1,
        color: 'blue'
      },
      {
        textSingular: 'dossier déposé'.toUpperCase(),
        textPlural: 'dossiers déposés'.toUpperCase(),
        numberToShow: 2,
        color: 'rgba(127, 105, 224, 0.534)'
      },
      {
        textSingular: 'dossier validé'.toUpperCase(),
        textPlural: 'dossiers validés'.toUpperCase(),
        numberToShow: 2,
        color: 'red'
      }
    ]
  }

  selectionDesIntervenants = {
    titre: 'sélection des intervenants',
    cardIcon: 'hand-holding-usd',
    link: '',
    typeOfCard: 'percentage',
    percentageToShow: 14,
    informations: [
      {
        textSingular: 'Matière compléte',
        textPlural: 'Matières complétes',
        numberToShow: 5 + '/' + 6,
        color: 'blue'
      },
      {
        textSingular: 'Intervenant Manquant',
        textPlural: 'intervenants manquants',
        numberToShow: 12,
        color: 'grey'
      },
      {
        textSingular: 'Procés-verbal signé',
        textPlural: 'Procés-verbaux signés',
        numberToShow: 2 + '/' + 14,
        color: 'grey'
      }
    ]
  }

    selectionDesIntervenants2 = {
      titre: 'sélection des intervenants',
      cardIcon: 'hand-holding-usd',
      link: '',
      typeOfCard: 'percentage',
      percentageToShow: 58,
      informations: [
        {
          textSingular: 'Matière compléte',
          textPlural: 'Matières complétes',
          numberToShow: 5 + '/' + 6,
          color: 'blue'
        },
        {
          textSingular: 'Intervenant Manquant',
          textPlural: 'intervenants manquants',
          numberToShow: 12,
          color: 'grey'
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

.big-card-icon {
  z-index: 1;
  left: 10px;
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
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 350px;
}

.big-card-separator{
  width: 100%
}

</style>
