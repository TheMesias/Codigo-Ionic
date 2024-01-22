import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  //para recibir datos 
  @Input() title!: string; 
  @Input() showMenu!: boolean; 
 
  constructor() { }

  ngOnInit() {}

}
