import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOpen: boolean = false;
  selectedColor: string;

  colors = [
    {color: '#F44336', name: 'red'},
    {color: '#E91E63', name: 'pink'},
    {color: '#9C27B0', name: 'purple'},
    {color: '#3F51B5', name: 'blue'},
    {color: '#009688', name: 'green'},
    {color: '#FFEB3B', name: 'yellow'},
    {color: '#FF9800', name: 'orange'},
    {color: '#795548', name: 'brown'}
  ];
}
