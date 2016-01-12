
import {Component , View} from 'angular2/core'
@Component({
    selector : 'atta'
})
@View({
    template : '<ul><li *ngFor="#a of name">{{a}}</li></ul>'
})

export class check{ 
    name : Array<string> ;
    constructor(){
        this.name = ["Pakistan","Lahore","Karachi"];
    }
}
