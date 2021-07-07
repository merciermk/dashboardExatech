<template>
  <div class="dashboard">
     <div class="big-card">
      <font-awesome-icon icon="hand-holding-usd" class="big-card-icon" />
      <small-card :smallCardValues="smallCardValues3">
      </small-card>
      <small-card :smallCardValues="smallCardValues2">
      </small-card>
      <small-card :smallCardValues="smallCardValues">
      </small-card>
    </div>
     <div class="big-card">
      <font-awesome-icon icon="hand-holding-usd" class="big-card-icon" />
      <small-card :smallCardValues="smallCardValues">
      </small-card>
      <small-card :smallCardValues="smallCardValues2">
      </small-card>
    </div>
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

export default class Dashboard extends Vue {
  smallCardValues = {
    titre: 'gestion des dossiers académiques'.toUpperCase(),
    cardIcon: 'hand-holding-usd',
    link: '/coucou',
    informations: [
      {
        textSingular: 'Intervenant manquant'.toUpperCase(),
        textPlural: 'intervenants manquants'.toUpperCase(),
        numberToShow: 17,
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

   smallCardValues3 = {
     titre: 'Lorem'.toUpperCase(),
     cardIcon: 'hand-holding-usd',
     link: '/coucou',
     informations: [
       {
         textSingular: 'Intervenant manquant'.toUpperCase(),
         textPlural: 'intervenants manquants'.toUpperCase(),
         numberToShow: 2,
         color: 'pink'
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
.dashboard{
  position: absolute;
  width: 95%;
  font-size: 14px;
  min-height: calc(100vh - 50px - 50px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin:$dashboard-margin-top  $dashboard-margin-right $dashboard-margin-bottom $dashboard-margin-left;
}

.big-card{
  border-radius: 10px;
  position: relative;
  padding-left: 10%;
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
