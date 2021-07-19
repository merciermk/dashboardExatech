
/* eslint-disable no-unused-vars */
import { Ability } from '@/types/Ability'
import store from '@/store/index'

/* Droits des utilisateurs */
// eslint-disable-next-line
const RH_SPS_DOSSIER_OWN_MANAGE = Ability.RH_SPS_DOSSIER_OWN_MANAGE
// eslint-disable-next-line
const RH_SPS_MANAGE = Ability.RH_SPS_MANAGE
// eslint-disable-next-line
const ADM_INI_MANAGE = Ability.ADM_INI_MANAGE
// eslint-disable-next-line
const RH_ADM_MANAGE = Ability.RH_ADM_MANAGE
// eslint-disable-next-line
const ADM_PAR_MANAGE = Ability.ADM_PAR_MANAGE
// eslint-disable-next-line
const RH_SIGNATURE = Ability.RH_SIGNATURE

interface threeInformationsCard{
  cardType: string // threeInformations
  auth: string[]
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
 auth: string[]
  title: string
  fractionNumber1: number
  fractionNumber2: number
  textShowSingular: string
  textShowPlural: string
  link: string
}

interface regularCard{
cardType: string // regular
auth: string[]

  title: string
  numberShow: number
  textShowSingular: string
  textShowPlural: string
  link: string
  bottomText: string | undefined
}

interface bigCardForDashboard{
  cardIcon: string,
  auth: string[],
  allCards: threeInformationsCard[] | progressBarCard[] | regularCard[] | threeInformationsCard | progressBarCard | regularCard
}

const dossiersAcadémiques = {
  cardIcon: 'graduation-cap',
  auth: [RH_SPS_MANAGE],
  allCards: [
    {
      cardType: 'regular',
      auth: [RH_SPS_MANAGE],
      title: 'dossiers académiques',
      numberShow: 69,
      textShowSingular: 'Dossier Validé',
      textShowPlural: 'Dossiers Validés',
      link: '/dossiers_academiques'
    },
    {
      cardType: 'regular',
      auth: [RH_SPS_MANAGE],
      title: 'sélection des intervenants',
      numberShow: 69,
      textShowSingular: 'Intervenant manquant',
      textShowPlural: 'Intervenants manquants',
      link: '/selections'
    },
    {
      cardType: 'PROGRESSBAR',
      auth: ['adm.ini-manage'],
      title: 'AFFECTATION DES intervenants',
      fractionNumber1: 2,
      fractionNumber2: 5,
      textShowSingular: 'Matière complète',
      textShowPlural: 'Matières complètes',
      link: '/affectations'
    }
  ]
}

const functionsForDashboard = {
  dashboardElements: [
    dossiersAcadémiques
  ],

  // eslint-disable-next-line
  dashboardFilterFunction (dashboardElements: bigCardForDashboard[] | threeInformationsCard[] | progressBarCard[] | regularCard[]):any {
    const dashboardElementsFilter = []
    for (const element of dashboardElements) {
      for (const ua of element.auth) {
        if (store.getters['auth/can'](ua)) {
          dashboardElementsFilter.push(element)
        }
      }
    }
    return dashboardElementsFilter
  },

  /**
   * Fonction utilisant userAuth et theFilterFunction. Controle le menu et les sous-menu, renvois le tableau final pret pour SideBarLeft. Utilise theFilterFunction
    */
  // eslint-disable-next-line
  dashboardFiltered (dashboardElements: any[]): any {
    const dashboardFiltered = this.dashboardFilterFunction(dashboardElements)
    console.log('filtered')
    console.log(dashboardFiltered)
    for (const element of dashboardElements) {
      if (element.allCards) {
        element.allCards = this.dashboardFilterFunction(element.allCards)
      }
    }
    console.log(dashboardFiltered)
    return dashboardFiltered
  }
}

export { functionsForDashboard, regularCard, progressBarCard, threeInformationsCard, bigCardForDashboard }
