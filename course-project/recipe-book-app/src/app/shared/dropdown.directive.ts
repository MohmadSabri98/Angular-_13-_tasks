import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[appdropdown]',
     exportAs: "appdropdown"
})
export class DropDownDirective {
  //  isopen!: boolean;    
//@HostBinding('style.open') toogle !:boolean;
//constructor(private elemref:ElementRef,private renderer:Renderer2){}
//ngOnInit(): void {
  //  this.isopen=false;
    //this.toogle=this.isopen
//}
//@HostListener('click') onclick(data:Event){
//this.renderer.setStyle(this.elemref,'open',true);
//this.toogle=!this.toogle;
//}

///////////////////////////////////////////


@HostBinding('class.open') isOpen = false;

@HostListener('click') toggleopen() {
  this.isOpen = !this.isOpen;
}


}