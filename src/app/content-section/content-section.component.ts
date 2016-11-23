import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'content-section',
  templateUrl: 'content-section.component.html',
  styleUrls: ['content-section.component.css']
})
export class ContentSectionComponent implements OnInit {
  private heading:string;
  constructor() {
    this.heading = "Luxury hotels at amazing prices";
   }

  ngOnInit() {
  }

}
