import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElments = [{name:'serverssss',type:'Testserver',content:'just test'}];
  onserverAdded(serverdata:{servername:any,servercontent:any}){
     this.serverElments.push({
      type:'server',
       name:serverdata.servername,
       content:serverdata.servercontent
    })
 
   }
 
    onBlueprintAdded( blueprintdata:{servername:any,servercontent:any}){
    this.serverElments.push({
     type:'blueprint',
      name:blueprintdata.servername,
      content:blueprintdata.servercontent
    })
  }

}
