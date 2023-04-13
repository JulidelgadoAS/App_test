import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //Define el estilo --> el estilo del componente Padre se copia al componente Hijo pero no viceversa
})
export class AppComponent {
  title = 'app_test';
}
