import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@the-driving-schoolv1/api-interfaces';

import { IconSetService } from '@coreui/icons-angular';
import { freeSet } from '@coreui/icons';
import { NavigationEnd, Router } from '@angular/router';

/* the-driving-schoolv1-root */
@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [IconSetService],

})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  
  constructor(
    private router: Router,
    public iconSet: IconSetService,
    private http:HttpClient
    ) {
      // iconSet singleton
      iconSet.icons = { ...freeSet };
    }
    
    ngOnInit() {
      this.router.events.subscribe((evt) => {
        if (!(evt instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
    }
    
}
