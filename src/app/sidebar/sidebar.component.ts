import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}

export const ROUTES: RouteInfo[] = [
	{ path: '/caixa-de-entrada', title: 'Caixa de Entrada', icon: 'nc-email-85', class: '' },
	{ path: '/servicos', title: 'Serviços', icon: 'nc-settings', class: '' },
];

@Component({
	selector: 'sidebar-cmp',
	templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {

	public items: any[];

	ngOnInit() {
		this.items = ROUTES;
	}
}
