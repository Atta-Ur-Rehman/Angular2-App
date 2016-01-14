
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
    
    <div class="four wide column center aligned votes">
        <div class="ui statistic">
            <div class="value">
                {{vote}}
            </div>
            <div class="label">
                Points
            </div>
        </div>
    </div>
    <div class="twelve wide column">
        <a class="ui large header" href="{{ link }}">
            {{title}}
        </a>
        <ul class="ui big horizontal list voters">
            <li class="item">
                <span (click)="voteUp()">
                    <i class="arrow up icon" ></i>
                    upvote
                </span>    
            </li>
            <li class="item">
                <span (click)="voteDown()">
                    <i class="arrow down icon" ></i>
                    downvote
                </span>
            </li>
        </ul>
    </div>
    `
})


export class check{ 
    
    vote : number =0;
    title : string = "Angular 2";
    link : string = "angular.com";
    //name : Array<string> ;
    constructor(){
      //  this.name = ["Pakistan","Lahore","Karachi"];
    }
    addArticle(a:HTMLInputElement,b:HTMLInputElement):void{
           //var userTitle:string = ${a:value} ;
           //alert(userTitle);
           //alert(a:${a.value});
           alert(`a:${a.value}`)
           a.value = "";
    }
    voteUp(){
        //debugger;
        this.vote +=1;
//        alert(this.vote)
    }
    voteDown(){
              //  debugger;
        this.vote -=1;
  //      alert(this.vote);
    }
}
