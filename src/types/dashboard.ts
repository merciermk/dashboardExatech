
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

interface DashboardDoneInformations {
  type: string,
  doneText: string,
  doneTextPlural: string,
  doneBottomText?: string, // utilisable si regularCard
}

interface threeInformationsCard {
  cardType: string // threeInformations
  auth: string[]
  title: string
  link: string

  information1Number: number
  information1TextSingular: string
  information1TextPlural: string

  information2Number: number
  information2TextSingular: string
  information2TextPlural: string

  information3Number?: number
  information3TextSingular?: string
  information3TextPlural?: string
  done: DashboardDoneInformations
}

interface progressBarCard {
  cardType: string // progressBar
  auth: string[]
  title: string
  fractionNumber1: number
  fractionNumber2: number
  textShowSingular: string
  textShowPlural: string
  link: string
  done: DashboardDoneInformations
}

interface regularCard {
  cardType: string // regular
  auth: string[]

  title: string
  numberShow: number
  textShowSingular: string
  textShowPlural: string
  link: string
  bottomText?: string | undefined
  done: DashboardDoneInformations
}

interface duoCard{
  cardType: string // regular
  auth: string[]

  titleFirstCard: string
  numberShowFirstCard: number
  textShowSingularFirstCard: string
  textShowPluralFirstCard: string
  linkFirstCard: string
  doneFirstCard: DashboardDoneInformations

  titleSecondCard: string
  numberShowSecondCard: number
  textShowSingularSecondCard: string
  textShowPluralSecondCard: string
  linkSecondCard: string
  doneSecondCard: DashboardDoneInformations
}

interface recrutementAcademiques {
  cardIcon: string,
  auth: string[],
  allCards: [regularCard, threeInformationsCard, progressBarCard]
}

interface dossiersAdministratif {
  cardIcon: string,
  auth: string[],
  allCards: [threeInformationsCard, threeInformationsCard, duoCard]
}

const recrutementAcadémiques: recrutementAcademiques = {
  cardIcon: 'graduation-cap',
  auth: [RH_SPS_MANAGE],
  allCards: [
    {
      cardType: 'regular',
      auth: [RH_SPS_MANAGE],
      title: 'dossiers académiques',
      numberShow: 0,
      textShowSingular: 'Dossier Validé',
      textShowPlural: 'Dossiers Validés',
      link: '/dossiers_academiques',
      bottomText: 'coucou',
      done: {
        type: 'string',
        doneTextPlural: 'donePlural',
        doneText: 'doneSingular',
        doneBottomText: 'Coucou'
      }
    },
    {
      cardType: 'threeinformations',
      title: 'Sélection des intervenants',
      auth: [RH_SPS_MANAGE],
      information1Number: 888,
      information1TextSingular: 'Intervenant manquant',
      information1TextPlural: 'Intervenants manquants',

      information2Number: 25,
      information2TextSingular: 'Procès verbal à signer',
      information2TextPlural: 'Procès-verbaux à signer',
      link: 'hello',
      done: {
        type: 'string',
        doneTextPlural: 'donePlural',
        doneText: 'doneSingular'
      }
    },
    {
      cardType: 'progressbar',
      auth: [RH_SPS_MANAGE],
      title: 'Affectation des intervenants',
      fractionNumber1: 15,
      fractionNumber2: 15,
      textShowSingular: 'Intervenant manquant',
      textShowPlural: 'Intervenants manquants',
      link: '/dossiers_academiques',
      done: {
        type: 'string',
        doneTextPlural: 'donePlural',
        doneText: 'Toutes les affectations sont effectuées'
      }
    }
  ]
}

const dossiersAdministratifs: dossiersAdministratif = {
  cardIcon: 'folder-open',
  auth: [RH_SPS_MANAGE],
  allCards: [
    {
      cardType: 'threeinformations',
      title: 'dossiers académiques',
      auth: [RH_SPS_MANAGE],
      information1Number: 0,
      information1TextSingular: 'Dossier à vérifier',
      information1TextPlural: 'Dossiers à vérifier',

      information2Number: 25,
      information2TextSingular: 'en attente de remplissage',
      information2TextPlural: 'en attente de remplissage',

      information3Number: 25,
      information3TextSingular: 'Dossiers totaux',
      information3TextPlural: 'Dossier total',
      link: 'hello',
      done: {
        type: 'string',
        doneTextPlural: 'donePlural',
        doneText: 'doneSingular'
      }
    },
    {
      cardType: 'threeinformations',
      title: 'Contrats',
      auth: [RH_SPS_MANAGE],
      information1Number: 888,
      information1TextSingular: 'Contrat créé',
      information1TextPlural: 'Contrats créés',

      information2Number: 25,
      information2TextSingular: 'Information à valider',
      information2TextPlural: 'Informations à valider',
      link: 'hello',
      done: {
        type: 'string',
        doneTextPlural: 'donePlural',
        doneText: 'doneSingular'
      }
    },
    {
      cardType: 'duocard',
      auth: [RH_SPS_MANAGE],

      titleFirstCard: 'Demandes de remboursement',
      numberShowFirstCard: 1,
      textShowSingularFirstCard: 'Remboursement à traiter',
      textShowPluralFirstCard: 'Remboursements à traiter',
      linkFirstCard: '/coucou',
      doneFirstCard: {

        type: 'doneRegular',
        doneText: 'Pas de demandes à traiter',
        doneTextPlural: 'Done'

      },

      titleSecondCard: 'Ordres de mission',
      numberShowSecondCard: 1,
      textShowSingularSecondCard: 'Ordre de mission à traiter',
      textShowPluralSecondCard: 'Ordres de mission à traiter',
      linkSecondCard: '/coucou',
      doneSecondCard: {

        type: 'doneRegular',
        doneText: 'Pas de demandes à traiter',
        doneTextPlural: 'Done'

      }
    }
  ]
}

const signatureDeLaDirection = {
  cardIcon: 'pen',
  auth: [RH_SPS_MANAGE],
  allCards: [
    {
      cardType: 'regular', // regular
      auth: [RH_SPS_MANAGE],
      title: 'SIGNATURE DES DOCUMENTS',
      numberShow: 0,
      textShowSingular: 'Document à signer',
      textShowPlural: 'Documents à signer',
      link: 'coucou',
      bottomText: 'xx' + 'Documents au total',
      done: {
        type: 'coucou',
        doneText: 'Tous les documents sont signés',
        doneTextPlural: '',
        doneBottomText: 'information a afficher'
      }
    }
  ]
}

const functionsForDashboard = {
  dashboardElements: [
    recrutementAcadémiques,
    dossiersAdministratifs,
    signatureDeLaDirection
  ],

  // eslint-disable-next-line
  dashboardFilterFunction(dashboardElements: any[] | threeInformationsCard[] | progressBarCard[] | regularCard[]): any {
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
  dashboardFiltered(dashboardElements: any[]): any {
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

export { functionsForDashboard, regularCard, progressBarCard, threeInformationsCard, duoCard }
