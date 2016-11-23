import { Component, OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'header-nav',
  templateUrl: 'header-nav.component.html',
  styleUrls: ['header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
