'use babel'

const {filter} = require('fuzzaldrin')
const fs = require('fs')

let candidates = [
  {
    'type': 'Include File Summary',
    'line': [
      25
    ],
    'column': [
      0
    ],
    'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
  },
  {
    'type': 'Display',
    'entries': [
      {
        'name': 'Fleckvieh_f',
        'line': 141,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Fleckvieh_f_dim1',
        'line': 146,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Fleckvieh_f_dim2',
        'line': 151,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Fleckvieh_f_bought',
        'line': 156,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Fleckvieh_f_sold',
        'line': 161,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_heifsAttr',
        'line': 166,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Fleckvieh_m',
        'line': 176,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Fleckvieh_m_dim1',
        'line': 181,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Fleckvieh_m_dim2',
        'line': 186,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Fleckvieh_m_bought',
        'line': 191,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Fleckvieh_m_sold',
        'line': 196,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_bullsAttr',
        'line': 201,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'tCur',
        'line': 209,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_reqsPhaseLength',
        'line': 214,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_reqsPhaseStart',
        'line': 225,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_reqsPhase',
        'line': 236,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_prodLength',
        'line': 319,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_nut2inManNoLoss',
        'line': 377,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_nut2inMan',
        'line': 392,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_LabLostFirst',
        'line': 401,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'Model Statistics    SOLVE m_ent Using NLP From line 14853',
    'line': [
      404
    ],
    'column': [
      0
    ],
    'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
  },
  {
    'type': 'Solution Report     SOLVE m_ent Using NLP From line 14853',
    'line': [
      422
    ],
    'column': [
      0
    ],
    'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
  },
  {
    'type': 'SolEQU',
    'entries': [
      {
        'name': 'e_ent',
        'line': 462,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'e_daysBetweenBirths',
        'line': 466,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'e_sumUnity',
        'line': 474,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'SolVAR',
    'entries': [
      {
        'name': 'v_ent',
        'line': 484,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_prob',
        'line': 488,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'Display',
    'entries': [
      {
        'name': 'possHerds',
        'line': 518,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_prodLength',
        'line': 525,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'actHerds',
        'line': 583,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'bought_to_herds',
        'line': 642,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'balHerds',
        'line': 652,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herds_from_herds',
        'line': 661,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sold_from_herds',
        'line': 681,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'Equation Listing    SOLVE m_farm Using RMIP From line 16047',
    'line': [
      695
    ],
    'column': [
      0
    ],
    'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst',
    'entries': [
      {
        'name': 'obje_',
        'line': 698,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'objeMean_',
        'line': 703,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'objeN_',
        'line': 708,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'incomeTaxTot_',
        'line': 715,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'incomeTax_',
        'line': 720,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'netWithDraw_',
        'line': 725,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'profit_',
        'line': 730,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'intGain_',
        'line': 735,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'intPaid_',
        'line': 740,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'depr_',
        'line': 745,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'liquidation_',
        'line': 750,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'netCashFlow_',
        'line': 755,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'opCashFlow_',
        'line': 760,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'finCashFlow_',
        'line': 845,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'invCashFlow_',
        'line': 850,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'salRev_',
        'line': 855,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'salRevProds_',
        'line': 860,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sfPrem_',
        'line': 875,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buy_',
        'line': 880,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buyCost_',
        'line': 1171,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCost_',
        'line': 1202,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostActs_',
        'line': 1249,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostMach_',
        'line': 1380,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostMan_',
        'line': 1389,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prods_',
        'line': 3650,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'saleQuant_',
        'line': 3739,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'plotLand_',
        'line': 3760,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'croppedLand_',
        'line': 3767,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'totPlotLand_',
        'line': 3780,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'croppedPlotLand_',
        'line': 3787,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumCrop_',
        'line': 3800,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'cropLandActive_',
        'line': 3821,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'catchConst_',
        'line': 3830,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'cropRot_',
        'line': 3835,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Labtot_',
        'line': 3840,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LeisureTot_',
        'line': 3847,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabtotSM_',
        'line': 3854,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labCropSM_',
        'line': 3881,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabCrop_',
        'line': 4308,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabHerd_',
        'line': 4315,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convLab_',
        'line': 4322,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convLabB_',
        'line': 4327,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labOnFarm_',
        'line': 4332,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labManag_',
        'line': 4341,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'offFarmWorkTot_',
        'line': 4346,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'offFarmHoursPerYearFixed_',
        'line': 4351,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'liquid_',
        'line': 4356,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'invSum_',
        'line': 4361,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'credSum_',
        'line': 4408,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machines_',
        'line': 4419,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'fieldWorkHours_',
        'line': 5010,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'tracRestrFieldWorkHours_',
        'line': 5285,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'tracDistribution_',
        'line': 5344,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labRestrFieldWorkHours_',
        'line': 5375,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyFlex_',
        'line': 5434,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInv_',
        'line': 5469,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuy_',
        'line': 5506,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyBranch_',
        'line': 5511,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyFlexBranch_',
        'line': 5526,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInvT_',
        'line': 5561,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingInv_',
        'line': 5574,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingBuyB_',
        'line': 5589,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingNeed_',
        'line': 5616,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingNeedDef_',
        'line': 5623,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingBuy_',
        'line': 5630,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarmAndOrBinWork_',
        'line': 5637,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarm_',
        'line': 5642,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasBranch_',
        'line': 5649,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarmOrder_',
        'line': 5656,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'branchSize_',
        'line': 5661,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloInv_',
        'line': 5680,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloCoverInv_',
        'line': 5743,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'SiloManStorCap_',
        'line': 5774,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'storageDistr_',
        'line': 5785,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloCoverManStore_',
        'line': 5932,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'TotalManStorCap_',
        'line': 6281,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCapNeed_',
        'line': 6290,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCap_',
        'line': 6295,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCapMonth_',
        'line': 6304,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'volInStorage_',
        'line': 6379,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutPoolInStorage_',
        'line': 6454,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2ManApplied_',
        'line': 6815,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'volManApplied_',
        'line': 13372,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutOrganicOverNeed_',
        'line': 15539,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labHerdM_',
        'line': 15594,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'luland_',
        'line': 15957,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stables_',
        'line': 16070,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableInv_',
        'line': 16265,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableUsed_',
        'line': 16348,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableInvOrder_',
        'line': 16431,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInvStable_',
        'line': 16522,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyStable_',
        'line': 16581,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableCostLo_',
        'line': 16604,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableCostUp_',
        'line': 16687,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convStables_',
        'line': 16750,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsBal_',
        'line': 16755,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdSize_',
        'line': 17064,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machNeedHerds_',
        'line': 17629,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'SubManStorCap_',
        'line': 17690,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuant_',
        'line': 17721,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuantM_',
        'line': 17742,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuantT_',
        'line': 17817,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manureT_',
        'line': 17928,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manureM_',
        'line': 18315,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manure_',
        'line': 18520,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumGV_',
        'line': 18577,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsByFeedRegime_',
        'line': 18678,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsreqsPhase_',
        'line': 18873,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'reqsPhase_',
        'line': 19182,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'reqs_',
        'line': 19699,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumReqs_',
        'line': 20704,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumReqsBought_',
        'line': 20721,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUse_',
        'line': 20734,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUseHerds_',
        'line': 22117,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUseM_',
        'line': 23668,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerds_',
        'line': 23673,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerdsY_',
        'line': 23982,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerdsY1_',
        'line': 24025,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsLast_',
        'line': 24046,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsLast1_',
        'line': 24051,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'newCalves_',
        'line': 24056,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'maleFemaleRel_',
        'line': 24179,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'avgLactations_',
        'line': 24230,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsBefore_',
        'line': 24247,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsStartBefore_',
        'line': 24252,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'maxoilsfats_',
        'line': 24257,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prodsM_',
        'line': 25792,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prodsMY_',
        'line': 25809,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutExcrPast_',
        'line': 25826,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2ManurePast_',
        'line': 25925,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasHerdOrderDairy_',
        'line': 26000,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'NutBalCrop_',
        'line': 26005,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'NutBalCrop1_',
        'line': 30658,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nMinMin_',
        'line': 30713,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_obje',
        'line': 30726,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_objeMean',
        'line': 30733,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_objeN',
        'line': 30741,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_profit',
        'line': 30749,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_netCashFlow',
        'line': 30756,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_opCashFlow',
        'line': 30764,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_finCashFlow',
        'line': 30773,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_invCashFlow',
        'line': 30781,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_liquidation',
        'line': 30789,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_withDraw',
        'line': 30796,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_netWithDraw',
        'line': 30804,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_incomeTaxTot',
        'line': 30812,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_salRev',
        'line': 30820,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_salRevProds',
        'line': 30828,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_intGain',
        'line': 30855,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_intPaid',
        'line': 30863,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_depr',
        'line': 30871,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCost',
        'line': 30879,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostActs',
        'line': 30887,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostMach',
        'line': 30895,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostMan',
        'line': 30903,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_liquid',
        'line': 30911,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumInv',
        'line': 30924,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_credits',
        'line': 30933,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumCredits',
        'line': 30952,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sfPrem',
        'line': 30979,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyCost',
        'line': 30987,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buy',
        'line': 31060,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_branchSize',
        'line': 31150,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_cropHa',
        'line': 31165,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumCrop',
        'line': 31529,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croplandActive',
        'line': 31560,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croppedLand',
        'line': 31567,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croppedPlotLand',
        'line': 31580,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_totPlotLand',
        'line': 31593,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_saleQuant',
        'line': 31608,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_prods',
        'line': 31648,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_prodsIntr',
        'line': 31728,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machInv',
        'line': 31766,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machNeed',
        'line': 31885,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_tracDist',
        'line': 32025,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyMachFlex',
        'line': 32168,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buildingNeed',
        'line': 32283,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labOffTot',
        'line': 32291,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_leisureTot',
        'line': 32298,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labOnFarm',
        'line': 32305,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labManag',
        'line': 32312,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labCropSM',
        'line': 32332,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_leisure',
        'line': 32419,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labCrop',
        'line': 32494,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labHerd',
        'line': 32501,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labTot',
        'line': 32508,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_fieldWorkHours',
        'line': 32571,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutOrganicOverNeed',
        'line': 32742,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_syntDist',
        'line': 32901,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_BuildingsInv',
        'line': 33675,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_hasFarm',
        'line': 33708,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_hasBranch',
        'line': 33717,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyBuildings',
        'line': 33773,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyMach',
        'line': 33818,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdSize',
        'line': 33861,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdStart',
        'line': 35453,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableUsed',
        'line': 37089,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableShareCost',
        'line': 37612,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labHerdM',
        'line': 38480,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machNeedHerds',
        'line': 38567,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SubManStorCap',
        'line': 38575,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuant',
        'line': 38629,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuantM',
        'line': 38644,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuantT',
        'line': 38863,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manureM',
        'line': 38998,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manureT',
        'line': 39602,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manure',
        'line': 40001,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumGV',
        'line': 40040,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableInv',
        'line': 40047,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyStables',
        'line': 40775,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiloInv',
        'line': 40978,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volInStorageType',
        'line': 41035,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiloManStorCap',
        'line': 41739,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_ManStorCapNeed',
        'line': 41757,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_TotalManStorCap',
        'line': 41772,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volInStorage',
        'line': 41826,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutPoolInStorage',
        'line': 42081,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manDist',
        'line': 42585,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volManApplied',
        'line': 43589,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2ManApplied',
        'line': 43772,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buySilos',
        'line': 44276,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiCovComb',
        'line': 44429,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumReqs',
        'line': 44882,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumReqsBought',
        'line': 44897,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feedUse',
        'line': 44912,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feedUseHerds',
        'line': 44998,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feeding',
        'line': 45369,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumherd',
        'line': 46265,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdsReqsPhase',
        'line': 46304,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutExcrPast',
        'line': 47108,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2ManurePast',
        'line': 47339,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'Model Statistics    SOLVE m_farm Using RMIP From line 16047',
    'line': [
      47703
    ],
    'column': [
      0
    ],
    'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
  },
  {
    'type': 'Solution Report     SOLVE m_farm Using RMIP From line 16047',
    'line': [
      47716
    ],
    'column': [
      0
    ],
    'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
  },
  {
    'type': 'SolEQU',
    'entries': [
      {
        'name': 'obje_',
        'line': 47756,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'objeMean_',
        'line': 47757,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'objeN_',
        'line': 47762,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'incomeTaxTot_',
        'line': 47768,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'incomeTax_',
        'line': 47774,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'netWithDraw_',
        'line': 47779,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'profit_',
        'line': 47785,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'intGain_',
        'line': 47791,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'intPaid_',
        'line': 47797,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'depr_',
        'line': 47803,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'liquidation_',
        'line': 47809,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'netCashFlow_',
        'line': 47815,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'opCashFlow_',
        'line': 47821,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'finCashFlow_',
        'line': 47827,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'invCashFlow_',
        'line': 47833,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'salRev_',
        'line': 47839,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'salRevProds_',
        'line': 47845,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sfPrem_',
        'line': 47856,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buy_',
        'line': 47862,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buyCost_',
        'line': 47885,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCost_',
        'line': 47904,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostActs_',
        'line': 47910,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostMach_',
        'line': 47916,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostMan_',
        'line': 47922,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prods_',
        'line': 47928,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'saleQuant_',
        'line': 47942,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'plotLand_',
        'line': 47956,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'croppedLand_',
        'line': 47963,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'totPlotLand_',
        'line': 47970,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'croppedPlotLand_',
        'line': 47977,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumCrop_',
        'line': 47984,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'cropLandActive_',
        'line': 47996,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'catchConst_',
        'line': 48002,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'cropRot_',
        'line': 48007,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Labtot_',
        'line': 48012,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LeisureTot_',
        'line': 48018,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabtotSM_',
        'line': 48024,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labCropSM_',
        'line': 48041,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabCrop_',
        'line': 48058,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabHerd_',
        'line': 48064,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convLab_',
        'line': 48070,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convLabB_',
        'line': 48075,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labOnFarm_',
        'line': 48080,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labManag_',
        'line': 48086,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'offFarmWorkTot_',
        'line': 48092,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'offFarmHoursPerYearFixed_',
        'line': 48098,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'liquid_',
        'line': 48103,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'invSum_',
        'line': 48109,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'credSum_',
        'line': 48115,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machines_',
        'line': 48124,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'fieldWorkHours_',
        'line': 48151,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'tracRestrFieldWorkHours_',
        'line': 48184,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'tracDistribution_',
        'line': 48217,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labRestrFieldWorkHours_',
        'line': 48236,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyFlex_',
        'line': 48269,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInv_',
        'line': 48290,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuy_',
        'line': 48312,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyBranch_',
        'line': 48318,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyFlexBranch_',
        'line': 48329,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInvT_',
        'line': 48350,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingInv_',
        'line': 48360,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingBuyB_',
        'line': 48371,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingNeed_',
        'line': 48382,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingNeedDef_',
        'line': 48388,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingBuy_',
        'line': 48394,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarmAndOrBinWork_',
        'line': 48400,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarm_',
        'line': 48405,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasBranch_',
        'line': 48412,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarmOrder_',
        'line': 48419,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'branchSize_',
        'line': 48424,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloInv_',
        'line': 48431,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloCoverInv_',
        'line': 48466,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'SiloManStorCap_',
        'line': 48480,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'storageDistr_',
        'line': 48488,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloCoverManStore_',
        'line': 48529,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'TotalManStorCap_',
        'line': 48678,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCapNeed_',
        'line': 48686,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCap_',
        'line': 48691,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCapMonth_',
        'line': 48699,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'volInStorage_',
        'line': 48740,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutPoolInStorage_',
        'line': 48781,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2ManApplied_',
        'line': 48894,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'volManApplied_',
        'line': 49007,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutOrganicOverNeed_',
        'line': 49048,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labHerdM_',
        'line': 49079,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'luland_',
        'line': 49096,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stables_',
        'line': 49102,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableInv_',
        'line': 49143,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableUsed_',
        'line': 49188,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableInvOrder_',
        'line': 49233,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInvStable_',
        'line': 49282,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyStable_',
        'line': 49315,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableCostLo_',
        'line': 49323,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableCostUp_',
        'line': 49368,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convStables_',
        'line': 49403,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsBal_',
        'line': 49408,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdSize_',
        'line': 49545,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machNeedHerds_',
        'line': 49730,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'SubManStorCap_',
        'line': 49736,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuant_',
        'line': 49744,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuantM_',
        'line': 49752,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuantT_',
        'line': 49793,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manureT_',
        'line': 49822,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manureM_',
        'line': 49899,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manure_',
        'line': 50012,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumGV_',
        'line': 50026,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsByFeedRegime_',
        'line': 50032,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsreqsPhase_',
        'line': 50085,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'reqsPhase_',
        'line': 50258,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'reqs_',
        'line': 50767,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumReqs_',
        'line': 50988,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumReqsBought_',
        'line': 50996,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUse_',
        'line': 51004,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUseHerds_',
        'line': 51019,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUseM_',
        'line': 51116,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerds_',
        'line': 51121,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerdsY_',
        'line': 51234,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerdsY1_',
        'line': 51245,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsLast_',
        'line': 51253,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsLast1_',
        'line': 51258,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'newCalves_',
        'line': 51263,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'maleFemaleRel_',
        'line': 51280,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'avgLactations_',
        'line': 51297,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsBefore_',
        'line': 51303,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsStartBefore_',
        'line': 51308,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'maxoilsfats_',
        'line': 51313,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prodsM_',
        'line': 51328,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prodsMY_',
        'line': 51340,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutExcrPast_',
        'line': 51352,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2ManurePast_',
        'line': 51405,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasHerdOrderDairy_',
        'line': 51446,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'NutBalCrop_',
        'line': 51451,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'NutBalCrop1_',
        'line': 51482,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nMinMin_',
        'line': 51513,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'SolVAR',
    'entries': [
      {
        'name': 'v_obje',
        'line': 51521,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_objeMean',
        'line': 51522,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_objeN',
        'line': 51527,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_profit',
        'line': 51533,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_netCashFlow',
        'line': 51539,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_opCashFlow',
        'line': 51545,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_finCashFlow',
        'line': 51551,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_invCashFlow',
        'line': 51557,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_liquidation',
        'line': 51563,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_withDraw',
        'line': 51569,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_netWithDraw',
        'line': 51575,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_incomeTaxTot',
        'line': 51581,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_salRev',
        'line': 51587,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_salRevProds',
        'line': 51593,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_intGain',
        'line': 51604,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_intPaid',
        'line': 51610,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_depr',
        'line': 51616,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCost',
        'line': 51622,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostActs',
        'line': 51628,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostMach',
        'line': 51634,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostMan',
        'line': 51640,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_liquid',
        'line': 51646,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumInv',
        'line': 51653,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_credits',
        'line': 51659,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumCredits',
        'line': 51668,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sfPrem',
        'line': 51677,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyCost',
        'line': 51683,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buy',
        'line': 51702,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_branchSize',
        'line': 51721,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_cropHa',
        'line': 51728,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumCrop',
        'line': 51746,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croplandActive',
        'line': 51758,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croppedLand',
        'line': 51764,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croppedPlotLand',
        'line': 51771,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_totPlotLand',
        'line': 51778,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_saleQuant',
        'line': 51785,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_prods',
        'line': 51796,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_prodsIntr',
        'line': 51810,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machInv',
        'line': 51822,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machNeed',
        'line': 51849,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_tracDist',
        'line': 51876,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyMachFlex',
        'line': 51909,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buildingNeed',
        'line': 51930,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labOffTot',
        'line': 51936,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_leisureTot',
        'line': 51942,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labOnFarm',
        'line': 51948,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labManag',
        'line': 51954,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labCropSM',
        'line': 51960,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_leisure',
        'line': 51977,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labCrop',
        'line': 51994,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labHerd',
        'line': 52000,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labTot',
        'line': 52006,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_fieldWorkHours',
        'line': 52023,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutOrganicOverNeed',
        'line': 52056,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_syntDist',
        'line': 52087,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_BuildingsInv',
        'line': 52470,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_hasFarm',
        'line': 52481,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_hasBranch',
        'line': 52487,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyBuildings',
        'line': 52494,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyMach',
        'line': 52505,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdSize',
        'line': 52516,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdStart',
        'line': 52797,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableUsed',
        'line': 52982,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableShareCost',
        'line': 53017,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labHerdM',
        'line': 53075,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machNeedHerds',
        'line': 53092,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SubManStorCap',
        'line': 53098,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuant',
        'line': 53106,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuantM',
        'line': 53114,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuantT',
        'line': 53155,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manureM',
        'line': 53184,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manureT',
        'line': 53297,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manure',
        'line': 53374,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumGV',
        'line': 53388,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableInv',
        'line': 53394,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyStables',
        'line': 53496,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiloInv',
        'line': 53541,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volInStorageType',
        'line': 53555,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiloManStorCap',
        'line': 53704,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_ManStorCapNeed',
        'line': 53712,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_TotalManStorCap',
        'line': 53720,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volInStorage',
        'line': 53728,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutPoolInStorage',
        'line': 53769,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manDist',
        'line': 53882,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volManApplied',
        'line': 56039,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2ManApplied',
        'line': 56080,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buySilos',
        'line': 56193,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiCovComb',
        'line': 56228,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumReqs',
        'line': 56260,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumReqsBought',
        'line': 56268,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feedUse',
        'line': 56276,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feedUseHerds',
        'line': 56291,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feeding',
        'line': 56388,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumherd',
        'line': 58385,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdsReqsPhase',
        'line': 58399,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutExcrPast',
        'line': 58572,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2ManurePast',
        'line': 58625,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'Equation Listing    SOLVE m_farm Using MIP From line 16327',
    'line': [
      58709
    ],
    'column': [
      0
    ],
    'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst',
    'entries': [
      {
        'name': 'obje_',
        'line': 58712,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'objeMean_',
        'line': 58717,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'objeN_',
        'line': 58722,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'incomeTaxTot_',
        'line': 58729,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'incomeTax_',
        'line': 58734,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'netWithDraw_',
        'line': 58739,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'profit_',
        'line': 58744,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'intGain_',
        'line': 58749,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'intPaid_',
        'line': 58754,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'depr_',
        'line': 58759,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'liquidation_',
        'line': 58764,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'netCashFlow_',
        'line': 58769,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'opCashFlow_',
        'line': 58774,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'finCashFlow_',
        'line': 58859,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'invCashFlow_',
        'line': 58864,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'salRev_',
        'line': 58869,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'salRevProds_',
        'line': 58874,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sfPrem_',
        'line': 58889,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buy_',
        'line': 58894,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buyCost_',
        'line': 59185,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCost_',
        'line': 59216,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostActs_',
        'line': 59265,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostMach_',
        'line': 59396,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostMan_',
        'line': 59405,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prods_',
        'line': 61668,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'saleQuant_',
        'line': 61757,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'plotLand_',
        'line': 61778,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'croppedLand_',
        'line': 61785,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'totPlotLand_',
        'line': 61798,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'croppedPlotLand_',
        'line': 61805,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumCrop_',
        'line': 61818,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'cropLandActive_',
        'line': 61839,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'catchConst_',
        'line': 61848,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'cropRot_',
        'line': 61853,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Labtot_',
        'line': 61858,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LeisureTot_',
        'line': 61865,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabtotSM_',
        'line': 61872,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labCropSM_',
        'line': 61899,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabCrop_',
        'line': 62326,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabHerd_',
        'line': 62333,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convLab_',
        'line': 62340,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convLabB_',
        'line': 62345,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labOnFarm_',
        'line': 62350,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labManag_',
        'line': 62359,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'offFarmWorkTot_',
        'line': 62364,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'offFarmHoursPerYearFixed_',
        'line': 62369,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'liquid_',
        'line': 62374,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'invSum_',
        'line': 62379,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'credSum_',
        'line': 62426,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machines_',
        'line': 62437,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'fieldWorkHours_',
        'line': 63028,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'tracRestrFieldWorkHours_',
        'line': 63303,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'tracDistribution_',
        'line': 63362,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labRestrFieldWorkHours_',
        'line': 63393,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyFlex_',
        'line': 63452,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInv_',
        'line': 63487,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuy_',
        'line': 63524,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyBranch_',
        'line': 63529,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyFlexBranch_',
        'line': 63544,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInvT_',
        'line': 63579,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingInv_',
        'line': 63592,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingBuyB_',
        'line': 63607,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingNeed_',
        'line': 63634,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingNeedDef_',
        'line': 63641,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingBuy_',
        'line': 63648,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarmAndOrBinWork_',
        'line': 63655,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarm_',
        'line': 63660,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasBranch_',
        'line': 63667,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarmOrder_',
        'line': 63674,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'branchSize_',
        'line': 63679,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloInv_',
        'line': 63700,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloCoverInv_',
        'line': 63763,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'SiloManStorCap_',
        'line': 63794,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'storageDistr_',
        'line': 63805,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloCoverManStore_',
        'line': 63952,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'TotalManStorCap_',
        'line': 64301,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCapNeed_',
        'line': 64310,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCap_',
        'line': 64315,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCapMonth_',
        'line': 64324,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'volInStorage_',
        'line': 64399,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutPoolInStorage_',
        'line': 64474,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2ManApplied_',
        'line': 64835,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'volManApplied_',
        'line': 71392,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutOrganicOverNeed_',
        'line': 73559,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labHerdM_',
        'line': 73614,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'luland_',
        'line': 73985,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stables_',
        'line': 74098,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableInv_',
        'line': 74293,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableUsed_',
        'line': 74376,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableInvOrder_',
        'line': 74459,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInvStable_',
        'line': 74550,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyStable_',
        'line': 74609,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableCostLo_',
        'line': 74632,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableCostUp_',
        'line': 74715,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convStables_',
        'line': 74778,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsBal_',
        'line': 74783,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdSize_',
        'line': 75092,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machNeedHerds_',
        'line': 75657,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'SubManStorCap_',
        'line': 75718,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuant_',
        'line': 75749,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuantM_',
        'line': 75770,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuantT_',
        'line': 75845,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manureT_',
        'line': 75956,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manureM_',
        'line': 76343,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manure_',
        'line': 76548,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumGV_',
        'line': 76605,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsByFeedRegime_',
        'line': 76706,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsreqsPhase_',
        'line': 76901,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'reqsPhase_',
        'line': 77210,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'reqs_',
        'line': 77765,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumReqs_',
        'line': 78770,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumReqsBought_',
        'line': 78787,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUse_',
        'line': 78800,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUseHerds_',
        'line': 80183,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUseM_',
        'line': 81734,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerds_',
        'line': 81739,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerdsY_',
        'line': 82040,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerdsY1_',
        'line': 82083,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsLast_',
        'line': 82104,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsLast1_',
        'line': 82109,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'newCalves_',
        'line': 82114,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'maleFemaleRel_',
        'line': 82237,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'avgLactations_',
        'line': 82288,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsBefore_',
        'line': 82305,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsStartBefore_',
        'line': 82310,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'maxoilsfats_',
        'line': 82315,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prodsM_',
        'line': 83850,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prodsMY_',
        'line': 83867,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutExcrPast_',
        'line': 83884,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2ManurePast_',
        'line': 83983,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasHerdOrderDairy_',
        'line': 84058,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'NutBalCrop_',
        'line': 84063,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'NutBalCrop1_',
        'line': 88720,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nMinMin_',
        'line': 88775,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_obje',
        'line': 88788,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_objeMean',
        'line': 88795,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_objeN',
        'line': 88803,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_profit',
        'line': 88811,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_netCashFlow',
        'line': 88818,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_opCashFlow',
        'line': 88826,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_finCashFlow',
        'line': 88835,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_invCashFlow',
        'line': 88843,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_liquidation',
        'line': 88851,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_withDraw',
        'line': 88858,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_netWithDraw',
        'line': 88866,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_incomeTaxTot',
        'line': 88874,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_salRev',
        'line': 88882,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_salRevProds',
        'line': 88890,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_intGain',
        'line': 88917,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_intPaid',
        'line': 88925,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_depr',
        'line': 88933,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCost',
        'line': 88941,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostActs',
        'line': 88949,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostMach',
        'line': 88957,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostMan',
        'line': 88965,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_liquid',
        'line': 88973,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumInv',
        'line': 88986,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_credits',
        'line': 88995,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumCredits',
        'line': 89014,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sfPrem',
        'line': 89041,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyCost',
        'line': 89049,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buy',
        'line': 89122,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_branchSize',
        'line': 89212,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_cropHa',
        'line': 89227,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumCrop',
        'line': 89591,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croplandActive',
        'line': 89622,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croppedLand',
        'line': 89629,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croppedPlotLand',
        'line': 89642,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_totPlotLand',
        'line': 89655,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_saleQuant',
        'line': 89670,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_prods',
        'line': 89710,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_prodsIntr',
        'line': 89790,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machInv',
        'line': 89828,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machNeed',
        'line': 89947,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_tracDist',
        'line': 90087,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyMachFlex',
        'line': 90230,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buildingNeed',
        'line': 90345,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labOffTot',
        'line': 90353,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_leisureTot',
        'line': 90360,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labOnFarm',
        'line': 90367,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labManag',
        'line': 90374,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labCropSM',
        'line': 90394,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_leisure',
        'line': 90481,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labCrop',
        'line': 90556,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labHerd',
        'line': 90563,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labTot',
        'line': 90570,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_fieldWorkHours',
        'line': 90633,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutOrganicOverNeed',
        'line': 90804,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_syntDist',
        'line': 90963,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_BuildingsInv',
        'line': 91737,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_hasFarm',
        'line': 91770,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_hasBranch',
        'line': 91779,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyBuildings',
        'line': 91835,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyMach',
        'line': 91880,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdSize',
        'line': 91923,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdStart',
        'line': 93515,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableUsed',
        'line': 95151,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableShareCost',
        'line': 95674,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labHerdM',
        'line': 96542,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machNeedHerds',
        'line': 96629,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SubManStorCap',
        'line': 96637,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuant',
        'line': 96691,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuantM',
        'line': 96706,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuantT',
        'line': 96925,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manureM',
        'line': 97060,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manureT',
        'line': 97664,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manure',
        'line': 98063,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumGV',
        'line': 98102,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableInv',
        'line': 98109,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyStables',
        'line': 98837,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiloInv',
        'line': 99040,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volInStorageType',
        'line': 99097,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiloManStorCap',
        'line': 99801,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_ManStorCapNeed',
        'line': 99819,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_TotalManStorCap',
        'line': 99834,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volInStorage',
        'line': 99888,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutPoolInStorage',
        'line': 100143,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manDist',
        'line': 100647,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volManApplied',
        'line': 101651,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2ManApplied',
        'line': 101834,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buySilos',
        'line': 102338,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiCovComb',
        'line': 102491,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumReqs',
        'line': 102944,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumReqsBought',
        'line': 102959,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feedUse',
        'line': 102974,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feedUseHerds',
        'line': 103060,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feeding',
        'line': 103431,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumherd',
        'line': 104327,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdsReqsPhase',
        'line': 104366,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutExcrPast',
        'line': 105170,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2ManurePast',
        'line': 105401,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'Model Statistics    SOLVE m_farm Using MIP From line 16327',
    'line': [
      105765
    ],
    'column': [
      0
    ],
    'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
  },
  {
    'type': 'Solution Report     SOLVE m_farm Using MIP From line 16327',
    'line': [
      105778
    ],
    'column': [
      0
    ],
    'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
  },
  {
    'type': 'SolEQU',
    'entries': [
      {
        'name': 'obje_',
        'line': 105838,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'objeMean_',
        'line': 105839,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'objeN_',
        'line': 105844,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'incomeTaxTot_',
        'line': 105850,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'incomeTax_',
        'line': 105856,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'netWithDraw_',
        'line': 105861,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'profit_',
        'line': 105867,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'intGain_',
        'line': 105873,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'intPaid_',
        'line': 105879,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'depr_',
        'line': 105885,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'liquidation_',
        'line': 105891,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'netCashFlow_',
        'line': 105897,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'opCashFlow_',
        'line': 105903,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'finCashFlow_',
        'line': 105909,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'invCashFlow_',
        'line': 105915,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'salRev_',
        'line': 105921,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'salRevProds_',
        'line': 105927,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sfPrem_',
        'line': 105938,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buy_',
        'line': 105944,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buyCost_',
        'line': 105967,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCost_',
        'line': 105986,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostActs_',
        'line': 105992,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostMach_',
        'line': 105998,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'varCostMan_',
        'line': 106004,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prods_',
        'line': 106010,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'saleQuant_',
        'line': 106024,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'plotLand_',
        'line': 106038,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'croppedLand_',
        'line': 106045,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'totPlotLand_',
        'line': 106052,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'croppedPlotLand_',
        'line': 106059,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumCrop_',
        'line': 106066,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'cropLandActive_',
        'line': 106078,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'catchConst_',
        'line': 106084,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'cropRot_',
        'line': 106089,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'Labtot_',
        'line': 106094,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LeisureTot_',
        'line': 106100,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabtotSM_',
        'line': 106106,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labCropSM_',
        'line': 106123,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabCrop_',
        'line': 106140,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'LabHerd_',
        'line': 106146,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convLab_',
        'line': 106152,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convLabB_',
        'line': 106157,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labOnFarm_',
        'line': 106162,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labManag_',
        'line': 106168,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'offFarmWorkTot_',
        'line': 106174,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'offFarmHoursPerYearFixed_',
        'line': 106180,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'liquid_',
        'line': 106185,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'invSum_',
        'line': 106191,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'credSum_',
        'line': 106197,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machines_',
        'line': 106206,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'fieldWorkHours_',
        'line': 106233,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'tracRestrFieldWorkHours_',
        'line': 106266,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'tracDistribution_',
        'line': 106299,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labRestrFieldWorkHours_',
        'line': 106318,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyFlex_',
        'line': 106351,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInv_',
        'line': 106372,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuy_',
        'line': 106394,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyBranch_',
        'line': 106400,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyFlexBranch_',
        'line': 106411,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInvT_',
        'line': 106432,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingInv_',
        'line': 106442,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingBuyB_',
        'line': 106453,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingNeed_',
        'line': 106464,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingNeedDef_',
        'line': 106470,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'buildingBuy_',
        'line': 106476,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarmAndOrBinWork_',
        'line': 106482,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarm_',
        'line': 106487,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasBranch_',
        'line': 106494,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasFarmOrder_',
        'line': 106501,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'branchSize_',
        'line': 106506,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloInv_',
        'line': 106513,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloCoverInv_',
        'line': 106548,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'SiloManStorCap_',
        'line': 106562,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'storageDistr_',
        'line': 106570,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'siloCoverManStore_',
        'line': 106611,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'TotalManStorCap_',
        'line': 106760,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCapNeed_',
        'line': 106768,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCap_',
        'line': 106773,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manStorCapMonth_',
        'line': 106781,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'volInStorage_',
        'line': 106822,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutPoolInStorage_',
        'line': 106863,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2ManApplied_',
        'line': 106976,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'volManApplied_',
        'line': 107089,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutOrganicOverNeed_',
        'line': 107130,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'labHerdM_',
        'line': 107161,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'luland_',
        'line': 107178,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stables_',
        'line': 107184,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableInv_',
        'line': 107225,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableUsed_',
        'line': 107270,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableInvOrder_',
        'line': 107315,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machInvStable_',
        'line': 107364,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machBuyStable_',
        'line': 107397,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableCostLo_',
        'line': 107405,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'stableCostUp_',
        'line': 107450,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'convStables_',
        'line': 107485,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsBal_',
        'line': 107490,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdSize_',
        'line': 107627,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'machNeedHerds_',
        'line': 107812,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'SubManStorCap_',
        'line': 107818,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuant_',
        'line': 107826,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuantM_',
        'line': 107834,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'manQuantT_',
        'line': 107875,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manureT_',
        'line': 107904,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manureM_',
        'line': 107981,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2manure_',
        'line': 108094,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumGV_',
        'line': 108108,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsByFeedRegime_',
        'line': 108114,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsreqsPhase_',
        'line': 108167,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'reqsPhase_',
        'line': 108340,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'reqs_',
        'line': 108849,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumReqs_',
        'line': 109070,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumReqsBought_',
        'line': 109078,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUse_',
        'line': 109086,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUseHerds_',
        'line': 109101,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'feedUseM_',
        'line': 109198,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerds_',
        'line': 109203,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerdsY_',
        'line': 109316,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'sumHerdsY1_',
        'line': 109327,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsLast_',
        'line': 109335,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsLast1_',
        'line': 109340,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'newCalves_',
        'line': 109345,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'maleFemaleRel_',
        'line': 109362,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'avgLactations_',
        'line': 109379,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsBefore_',
        'line': 109385,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'herdsStartBefore_',
        'line': 109390,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'maxoilsfats_',
        'line': 109395,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prodsM_',
        'line': 109410,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'prodsMY_',
        'line': 109422,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nutExcrPast_',
        'line': 109434,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nut2ManurePast_',
        'line': 109487,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'hasHerdOrderDairy_',
        'line': 109528,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'NutBalCrop_',
        'line': 109533,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'NutBalCrop1_',
        'line': 109564,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'nMinMin_',
        'line': 109595,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'SolVAR',
    'entries': [
      {
        'name': 'v_obje',
        'line': 109603,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_objeMean',
        'line': 109604,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_objeN',
        'line': 109609,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_profit',
        'line': 109615,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_netCashFlow',
        'line': 109621,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_opCashFlow',
        'line': 109627,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_finCashFlow',
        'line': 109633,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_invCashFlow',
        'line': 109639,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_liquidation',
        'line': 109645,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_withDraw',
        'line': 109651,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_netWithDraw',
        'line': 109657,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_incomeTaxTot',
        'line': 109663,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_salRev',
        'line': 109669,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_salRevProds',
        'line': 109675,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_intGain',
        'line': 109686,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_intPaid',
        'line': 109692,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_depr',
        'line': 109698,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCost',
        'line': 109704,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostActs',
        'line': 109710,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostMach',
        'line': 109716,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_varCostMan',
        'line': 109722,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_liquid',
        'line': 109728,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumInv',
        'line': 109735,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_credits',
        'line': 109741,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumCredits',
        'line': 109750,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sfPrem',
        'line': 109759,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyCost',
        'line': 109765,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buy',
        'line': 109784,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_branchSize',
        'line': 109803,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_cropHa',
        'line': 109810,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumCrop',
        'line': 109828,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croplandActive',
        'line': 109840,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croppedLand',
        'line': 109846,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_croppedPlotLand',
        'line': 109853,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_totPlotLand',
        'line': 109860,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_saleQuant',
        'line': 109867,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_prods',
        'line': 109878,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_prodsIntr',
        'line': 109892,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machInv',
        'line': 109904,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machNeed',
        'line': 109931,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_tracDist',
        'line': 109958,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyMachFlex',
        'line': 109991,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buildingNeed',
        'line': 110012,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labOffTot',
        'line': 110018,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_leisureTot',
        'line': 110024,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labOnFarm',
        'line': 110030,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labManag',
        'line': 110036,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labCropSM',
        'line': 110042,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_leisure',
        'line': 110059,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labCrop',
        'line': 110076,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labHerd',
        'line': 110082,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labTot',
        'line': 110088,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_fieldWorkHours',
        'line': 110105,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutOrganicOverNeed',
        'line': 110138,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_syntDist',
        'line': 110169,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_BuildingsInv',
        'line': 110552,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_hasFarm',
        'line': 110563,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_hasBranch',
        'line': 110569,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyBuildings',
        'line': 110576,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyMach',
        'line': 110587,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdSize',
        'line': 110598,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdStart',
        'line': 110879,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableUsed',
        'line': 111064,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableShareCost',
        'line': 111099,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_labHerdM',
        'line': 111157,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_machNeedHerds',
        'line': 111174,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SubManStorCap',
        'line': 111180,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuant',
        'line': 111188,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuantM',
        'line': 111196,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manQuantT',
        'line': 111237,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manureM',
        'line': 111266,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manureT',
        'line': 111379,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2manure',
        'line': 111456,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumGV',
        'line': 111470,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_stableInv',
        'line': 111476,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buyStables',
        'line': 111578,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiloInv',
        'line': 111623,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volInStorageType',
        'line': 111637,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiloManStorCap',
        'line': 111786,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_ManStorCapNeed',
        'line': 111794,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_TotalManStorCap',
        'line': 111802,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volInStorage',
        'line': 111810,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutPoolInStorage',
        'line': 111851,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_manDist',
        'line': 111964,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_volManApplied',
        'line': 114121,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2ManApplied',
        'line': 114162,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_buySilos',
        'line': 114275,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_SiCovComb',
        'line': 114310,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumReqs',
        'line': 114342,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumReqsBought',
        'line': 114350,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feedUse',
        'line': 114358,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feedUseHerds',
        'line': 114373,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_feeding',
        'line': 114470,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_sumherd',
        'line': 116467,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_herdsReqsPhase',
        'line': 116481,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nutExcrPast',
        'line': 116654,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'v_nut2ManurePast',
        'line': 116707,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  },
  {
    'type': 'Display',
    'entries': [
      {
        'name': 'p_res',
        'line': 116794,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_sumRes',
        'line': 117944,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      },
      {
        'name': 'p_maxRotShare',
        'line': 117950,
        'column': 1,
        'file': 'N:\\agpo\\work1\\FarmDyn_Pah\\FarmD\\gams\\exp_starter.lst'
      }
    ],
    'open': false
  }
]

candidates = candidates.filter(entry => entry.entries && entry.entries.length > 0)

let test = candidates.map(entry => {
  entry.entries = filter(entry.entries, 'maxRot', {
    key: 'name'
  })
  return entry
})

//console.log(test);
test = test.filter(entry => entry.entries.length > 0)
/*
candidates.forEach((entry, index, object) => {
  entry.entries = filter(entry.entries, 'maxRot', {
    key: 'name'
  })
  if (entry.entries.length === 0) {
    candidates.splice(index, 1)
  } else if (entry.entries.length < 10) {
    entry.open = true
  }
})
*/
fs.writeFile('test.json', JSON.stringify(test, null, 4))
