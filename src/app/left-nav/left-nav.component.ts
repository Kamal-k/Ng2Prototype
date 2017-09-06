import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LeftNavService } from './left-nav.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.css'],
  providers: [LeftNavService]
})

export class LeftNavComponent implements OnInit {

  @Input() leftMenu:any
  @Output() navClickedOutput = new EventEmitter<any>();

  constructor(private leftnavSvc:LeftNavService) { 
    this.getMenus();
  }

  generalMenus:any
  liveMenus:any
  megaMenus:any
  bottomMenus:any
  branding:any
  firstLink:any
  
  
  getMenus(){
    this.leftnavSvc.getMenus()
    .subscribe(res=>{
      this.generalMenus=res.generalMenus;
      this.liveMenus=res.liveMenus;
      this.megaMenus=res.megaMenus;
      this.bottomMenus=res.bottomMenus;
      this.branding=res.branding;
    })
  }

    menuIcon:any
    toggleMenu(event){
        this.menuIcon = event;
        this.navClickedOutput.emit("clicked");
    }

    sideMenu(e){
      document.getElementById("testing").children[1], { display: 'block' }
      // v1.style.display='block';
    }

  ngOnInit() { }

}
