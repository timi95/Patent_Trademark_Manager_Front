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
    'AmendementAction',
    'AssignmentMergerAction',
    'CertificateProcurementAction',
    'ChangeName_AddressAction',
    'ReclassificationAction',
    'RegistrationAction',
    'RenewalAction',
    'SearchAction',
  ];
  public trademark_profile:string[] = ['TrademarkProfile'];
  // dictionaries
  public patentActionUrlDict = {
    'AmendmentAction':"amendement-action",
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
    '':''
  }

    constructor() {
    }
    // 
}