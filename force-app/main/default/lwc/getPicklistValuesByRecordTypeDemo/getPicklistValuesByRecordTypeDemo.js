import { LightningElement, wire } from 'lwc';
import { getPicklistValuesByRecordType, getObjectInfo} from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
export default class GetPicklistValuesByRecordTypeDemo extends LightningElement {

    @wire(getObjectInfo, {objectApiName: ACCOUNT_OBJECT})
    getObjectInfo

    @wire(getPicklistValuesByRecordType, {objectApiName:ACCOUNT_OBJECT, 
        recordTypeId: '$objectInfo.data.defaultRecordTypeId'})
        picklistHandler({data, error}){
            if(data){
                console.log(data)
            }
            if(error){
                console.log(error)
            }
        }
}