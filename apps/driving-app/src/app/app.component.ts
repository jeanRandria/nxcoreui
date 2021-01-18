import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@the-driving-schoolv1/api-interfaces';
import { Router } from '@angular/router';
import {navItems} from './_nav';

@Component({
  selector: 'the-driving-schoolv1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  public sidebarMinimized = false;
  public navItems = navItems;

  
  constructor(
    private router: Router,
    private http:HttpClient
    ) {
      // iconSet singleton
      
    }
    
    ngOnInit() {}
    
    toggleMinimize(e) {
      this.sidebarMinimized = e;
    }
}
