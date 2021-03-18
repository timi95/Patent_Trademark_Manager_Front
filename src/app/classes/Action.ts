// import { AmendmentAction, SearchAction } from '../../interfaces';
import { from } from 'rxjs';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { SearchAction } from 'src/interfaces/SearchAction';

export class Action {

  // list of Action-types, Particulars, and Profile
  public patent_ActionTypes:string[] = [
    'AmendmentAction',
    'AssignmentMergerAction',
    'ChangeOfAddressAction',
    'ChangeOfNameAction',
    'CTCAction',
    'ProcurementOfCertificateAction',
    'RegistrationAction',
    'RenewalAction',
    'SearchAction',
  ];
  public patent_particulars:string[] = ['PatentParticlars'];
  public trademark_ActionTypes:string[] = [
    'AmendmentAction',
    'AssignmentMergerAction',
    'CertificateProcurementAction',
    'ChangeName_AddressAction',
    'TrademarkProfile',
    'ReclassificationAction',
    'RegistrationAction',
    'RenewalAction',
    'SearchAction',
  ];

  public patent_actionList =[
    'amendment-action',
    'assignment-merger-action',
    'change-address',
    'change-name',
    'ctc',
    'procurement',
    'patent-particulars',
    'registration',
    'renewal-action',
    'search-action',
  ]

  public trademark_profile:string[] = ['TrademarkProfile'];
  // dictionaries
  public patentActionUrlDict = {
    'AmendmentAction':"amendment-action",
    'AssignmentMergerAction':'assignment-merger-action',
    'ChangeOfAddressAction':'change-address',
    'ChangeOfNameAction':'change-name',
    'CTCAction':'ctc',
    'ProcurementOfCertificateAction':'procurement',
    'PatentParticulars':'patent-particulars',
    'RegistrationAction':'registration',
    'RenewalAction':'renewal-action',
    'SearchAction':'search-action',
  }
  public trademarkActionUrlDict = {
    'AmendmentAction':'amendment-action',
    'AssignmentMergerAction':'assignment-merger-action',
    'CertificateProcurementAction':'certificate-procurement-action',
    'ChangeName_AddressAction':'change-name-address-action',
    'TrademarkProfile':'profile',
    'ReclassificationAction':'reclassification-action',
    'RegistrationAction':'registration-action',
    'RenewalAction':'renewal-action',
    'SearchAction':'search-action',
  }

    constructor() {
    }
    // 
}