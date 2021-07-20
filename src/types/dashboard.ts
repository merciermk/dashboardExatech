
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
  doneTextSingular: string,
  doneTextPlural: string,
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

interface recrutementAcademiques {
  cardIcon: string,
  auth: string[],
  allCards: [regularCard, threeInformationsCard, progressBarCard]
}

interface dossiersAdministratif {
  cardIcon: string,
  auth: string[],
  allCards: [threeInformationsCard, threeInformationsCard, regularCard, regularCard]
}

const recrutementAcadémiques: recrutementAcademiques = {
  cardIcon: 'graduation-cap',
  auth: [RH_SPS_MANAGE],
  allCards: [
    {
      cardType: 'regular',
      auth: [RH_SPS_MANAGE],
      title: 'dossiers académiques',
      numberShow: 1,
      textShowSingular: 'Dossier Validé',
      textShowPlural: 'Dossiers Validés',
      link: '/dossiers_academiques',
      done: {
        type: 'string',
        doneTextPlural: 'donePlural',
        doneTextSingular: 'doneSingular'
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
        doneTextSingular: 'doneSingular'
      }
    },
    {
      cardType: 'progressbar',
      auth: [RH_SPS_MANAGE],
      title: 'Affectation des intervenants',
      fractionNumber1: 2,
      fractionNumber2: 15,
      textShowSingular: 'Intervenant manquant',
      textShowPlural: 'Intervenants manquants',
      link: '/dossiers_academiques',
      done: {
        type: 'string',
        doneTextPlural: 'donePlural',
        doneTextSingular: 'doneSingular'
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
      information1Number: 888,
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
        doneTextSingular: 'doneSingular'
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
        doneTextSingular: 'doneSingular'
      }
    },
    {
      cardType: 'regular', // regular
      auth: [RH_SPS_MANAGE],
      title: 'demandes de remboursement',
      numberShow: 0,
      textShowSingular: 'Demande de remboursement',
      textShowPlural: 'Demandes de remboursements',
      link: 'coucou',
      done: {
        type: 'coucou',
        doneTextSingular: 'coucou',
        doneTextPlural: 'coucou'
      }
    },
    {
      cardType: 'regular', // regular
      auth: [RH_SPS_MANAGE],
      title: 'Ordres de mission',
      numberShow: 666,
      textShowSingular: 'Ordre de mission à traiter',
      textShowPlural: 'Ordres de mission à traiter',
      link: 'coucou',
      done: {
        type: 'coucou',
        doneTextSingular: 'coucou',
        doneTextPlural: 'coucou'
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
      numberShow: 666,
      textShowSingular: 'Document à signer',
      textShowPlural: 'Documents à signer',
      link: 'coucou',
      bottomText: 'xx' + 'Documents au total',
      done: {
        type: 'coucou',
        doneTextSingular: 'coucou',
        doneTextPlural: 'coucou'
      }
    }
  ]
}

const test = {
  cardIcon: 'pen',
  auth: [RH_SPS_MANAGE],
  allCards: [
    {
      cardType: 'duo', // regular
      auth: [RH_SPS_MANAGE],
      title: 'duo',
      numberShow: 666,
      textShowSingular: 'Document à signer',
      textShowPlural: 'Documents à signer',
      link: 'coucou',
      bottomText: 'xx' + 'Documents au total',
      done: {
        type: 'coucou',
        doneTextSingular: 'coucou',
        doneTextPlural: 'coucou'
      }
    }
  ]
}

const functionsForDashboard = {
  dashboardElements: [
    recrutementAcadémiques,
    dossiersAdministratifs,
    signatureDeLaDirection,
    test
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

export { functionsForDashboard, regularCard, progressBarCard, threeInformationsCard }
