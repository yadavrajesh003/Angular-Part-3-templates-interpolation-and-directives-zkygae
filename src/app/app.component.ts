import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl:'app.component.html' //3
 /* template: `
    <div><h1>{{pageTitle}}</h1>
      <pm-products></pm-products> 
    </div>
    ` */
})
export class AppComponent {
  pageTitle: string = 'Product Management';
}
