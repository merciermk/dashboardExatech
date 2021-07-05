/* eslint-disable @typescript-eslint/no-unused-vars */
import { Ability } from '@/types/Ability'
import { Dashboard } from '@/types/DashboardEl/dashboardInterfaces'

/* Droits des utilisateurs */
const RH_SPS_DOSSIER_OWN_MANAGE = Ability.RH_SPS_DOSSIER_OWN_MANAGE
const RH_SPS_MANAGE = Ability.RH_SPS_MANAGE
const ADM_INI_MANAGE = Ability.ADM_INI_MANAGE
const RH_ADM_MANAGE = Ability.RH_ADM_MANAGE
const ADM_PAR_MANAGE = Ability.ADM_PAR_MANAGE
const RH_SIGNATURE = Ability.RH_SIGNATURE

const unfilteredDashboardElements: Dashboard[] = [
  {
    name: 'Gestion des dossiers académiques',
    id: 'dashboarddossiersAcademiques',
    auth: [RH_SPS_MANAGE],
    path: ['/dossiers_administratifs'],
    typeOfCard: ''
  },
  {
    name: 'Sélection des intervenants',
    id: 'dashboardselection-des-intervenants',
    auth: [RH_SPS_MANAGE],
    path: ['/selections'],
    typeOfCard: ''
  },
  {
    name: 'Dossiers administratifs',
    id: 'dashboardDossiersAdministratifs',
    auth: [RH_ADM_MANAGE],
    path: ['/dossiers_administratifs'],
    typeOfCard: ''
  },
  {
    name: 'Types de contrat', // a verifier si c'est le bon
    auth: [RH_ADM_MANAGE],
    path: ['/contrats_types']
  },
  {
    name: 'DOSSIERS ACADÉMIQUES',
    id: 'dashboarddossiersAcademiques',
    auth: [RH_SPS_MANAGE],
    path: ['/dossiers_administratifs'],
    typeOfCard: ''
  },
  {
    name: 'Ordres de mission / Remboursements',
    auth: [RH_ADM_MANAGE],
    path: ['/dossiers_administratifs/ordres_mission', '/dossiers_administratifs/demandes_remboursement'],
    typeOfCard: ''
  },
  {
    name: 'SIGNATURE DES DOCUMENTS',
    id: 'dashboardsignatureDoc',
    auth: [RH_SIGNATURE],
    path: ['/signature_documents']
  }
]

export { unfilteredDashboardElements }
