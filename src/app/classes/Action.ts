// import { AmendmentAction, SearchAction } from '../../interfaces';
import { from } from 'rxjs';
import { AmendmentAction } from 'src/interfaces/AmendmentAction';
import { SearchAction } from 'src/interfaces/SearchAction';

export class Action {

      // list of Action-types, Particulars, and Profile
  public patent_ActionTypes:string[] = [
    'SearchAction',
    'RenewalAction',
    'RegistrationAction',
    'ProcurementOfCertificateAction',
    'CTCAction',
    'ChangeOfNameAction',
    'ChangeOfAddressAction',
    'AssignmentMergerAction',
    'AmendmentAction'
  ];
  public patent_particulars:string[] = ['PatentParticlars'];
  public trademark_ActionTypes:string[] = [
    'SearchAction',
    'RenewalAction',
    'RegistrationAction',
    'ReclassificationAction',
    'ChangeName_AddressAction',
    'CertificateProcurementAction',
    'AssignmentMergerAction',
    'AmendementAction'
  ];
  public trademark_profile:string[] = ['TrademarkProfile'];
  // dictionaries
  public patentActionUrlDict = {
    'SearchAction':'search-action',
    'RenewalAction':'renewal-action',
    'RegistrationAction':'registration',
    'PatentParticulars':'patent-particulars',
    'ProcurementOfCertificateAction':'procurement',
    'CTCAction':'ctc',
    'ChangeOfNameAction':'change-name',
    'ChangeOfAddressAction':'change-address',
    'AssignmentMergerAction':'assignment-merger-action',
    'AmendmentAction':"amendement-action"
  }
    constructor() {
    }
    // 
}