
import {Component , View} from 'angular2/core'
@Component({
    selector : 'atta'
})
@View({
    template :`
    <div style="padding:20px;">
        <form class="ui large form segment" style="width:600px;height:300px;background:#ECFFFB;">
            <h3 class="ui header">Add a Link</h3>
                <div class="field">
                    <label for="title">Title:</label>
                    <input name="title" #newtitle>
                </div>
                <div class="field">
                    <label for="link">Link:</label>
                    <input name="link" #newlink>
                </div>
                <button (click)="addArticle(newtitle ,newlink)" class="ui positive left floated button">
                    Submit link
                </button>
        </form>
    </div>
    `
})

export class check{ 
    //name : Array<string> ;
    constructor(){
      //  this.name = ["Pakistan","Lahore","Karachi"];
    }
    addArticle(a:HTMLInputElement,b:HTMLInputElement):void{
           //var userTitle:string = ${a:value} ;
           //alert(userTitle);
           //alert(a:${a.value});
           alert(`a:${a.value}`)
           a.value = " "; 
    }
}
