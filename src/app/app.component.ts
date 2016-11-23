import { Component } from '@angular/core';

import { HeaderNavComponent } from './header-nav/header-nav.component';
import { ContentSectionComponent } from './content-section/content-section.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app works!';
}
