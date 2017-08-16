import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  
  // $MENU_TOGGLE.on('click', function() {
  //       if ($BODY.hasClass('leftNav-md')) {
  //           $SIDEBAR_MENU.find('li.active ul').hide();
  //           $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
  //       } else {
  //           $SIDEBAR_MENU.find('li.active-sm ul').show();
  //           $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
  //       }

  //       $BODY.toggleClass('nav-md nav-sm');

  //       setContentHeight();
  //   });


// $MENU_TOGGLE.on('click', function() {
  //       if ($BODY.hasClass('nav-md')) {
  //           $SIDEBAR_MENU.find('li.active ul').hide();
  //           $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
  //       } else {
  //           $SIDEBAR_MENU.find('li.active-sm ul').show();
  //           $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
  //       }

  //       $BODY.toggleClass('nav-md nav-sm');

  //       setContentHeight();
  //   });


    // @Output() updateOffer = new EventEmitter<any>();

    // selectedOffer:any
    // toggleMenu(offer){
    //     this.selectedOffer = offer;
    //     console.log(this.selectedOffer);
    //     this.updateOffer.emit(this.selectedOffer);
    // }


  ngOnInit() {
  }

}
