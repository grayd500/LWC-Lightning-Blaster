import { LightningElement } from 'lwc';
import{NavigationMixin} from 'lightning/navigation'
export default class NavigateToVfPage extends NavigationMixin(LightningElement) {
    navigateToVfPage(){
        this[NavigationMixin.Navigate]({
            type:"standard__webpage",
            attributes:{
                url:"/apex/navigateVfpage"
            }
        }).then(generatedUrl=>{
            console.log(generatedUrl)
            window.open(generatedUrl)
        })

    }
}