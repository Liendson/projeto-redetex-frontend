import { Routes } from '@angular/router';
import { CaixaDeEntradaComponent } from './pages/caixa-de-entrada/caixa-de-entrada.component';
import { ServicosComponent } from './pages/servicos/servicos.component';

export const AppRoutes: Routes = [
  { path: '', redirectTo: 'caixa-de-entrada', pathMatch: 'full' },
  { path: 'caixa-de-entrada', component: CaixaDeEntradaComponent },
  { path: 'servicos', component: ServicosComponent },
  { path: '**', redirectTo: 'caixa-de-entrada' }
]
