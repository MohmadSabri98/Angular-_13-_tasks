import { Component, OnInit,EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


 @Output() serverCreated = new EventEmitter<{servername:any,servercontent:any}>() ;
 @Output() blueprintCreated=new EventEmitter<{servername:any,servercontent:any}>() ;
 @ViewChild('servercontent')
  servercontent_loc_ref!: ElementRef;
//newservername:any;
//newservercontent:any;
  constructor() { }

  ngOnInit(): void {
  }
  onAddserver(nameinput:HTMLInputElement){
 this.serverCreated.emit({servername:nameinput.value,servercontent:this.servercontent_loc_ref.nativeElement.value});
console.log("clicked done");
  }
  onAddBlueprint(nameinput:HTMLInputElement){
    this.blueprintCreated.emit({servername:nameinput.value,servercontent:this.servercontent_loc_ref.nativeElement.value});
  }

}
