import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Main', url: '/dashboard/' },
        { titulo: 'Gráficas', url: '/dashboard/grafica1' },
        { titulo: 'Rxjs', url: '/dashboard/rxjs' },
        { titulo: 'Promesas', url: '/dashboard/promesas' },
        { titulo: 'ProgressBar', url: '/dashboard/progress' },
      ],
    },
  ];

  constructor() {}
}
