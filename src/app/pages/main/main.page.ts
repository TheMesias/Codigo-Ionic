import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  router = inject(Router); 

  //definimos hacia donde estoy navegando
  currentPath: string = ''; 

  pages = [
    { title: 'Inicio', url: "/main/home", icon: 'home-outline'},
    { title: 'Perfil', url: "/main/profile", icon: 'person-outline'}
  ]

  ngOnInit() {
    //aplicar un evento para navegar entre rutas
    this.router.events.subscribe((event: any) => {
        if(event?.url) this.currentPath = event.url
    })
  }

}
