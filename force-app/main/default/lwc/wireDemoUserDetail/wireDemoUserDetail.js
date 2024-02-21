import { LightningElement, wire } from 'lwc';
import {getRecord} from 'lightning/uiRecordApi'
import Id from '@salesforce/user/Id'
export default class WireDemoUserDetail extends LightningElement {
    userId = Id



    @wire(getRecord, {recordId: '005ao000000bKSnAAM', fields:['User.Name', 'User.Email']})
    userDetailHandler({data, error}){
        if(data){
            this.userDetail = data.fields
        }
        if(error){
            console.error(error)
        }
    }
    @wire(getRecord, {recordId: '005ao000000bKSnAAM', fields:['User.Name', 'User.Email']})
    userDetailProperty
}

    // uncheck lightning web security to troubleshoot issues